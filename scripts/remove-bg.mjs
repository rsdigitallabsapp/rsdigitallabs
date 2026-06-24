import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, "../public/logo.png");
const output = join(__dirname, "../public/logo-transparent.png");

const image = sharp(input);
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data.buffer);

// Flood-fill from corners to catch all contiguous near-white background pixels.
// Any pixel reachable from a corner that is near-white becomes transparent.
const WHITE = 230; // threshold — below this is "content"
const visited = new Uint8Array(width * height);
const queue = [];

function idx(x, y) { return (y * width + x) * channels; }
function isWhite(i) {
  return pixels[i] >= WHITE && pixels[i + 1] >= WHITE && pixels[i + 2] >= WHITE;
}

// Seed from all four edges
for (let x = 0; x < width; x++) {
  [[x, 0], [x, height - 1]].forEach(([cx, cy]) => {
    const i = cy * width + cx;
    if (!visited[i] && isWhite(idx(cx, cy))) { visited[i] = 1; queue.push([cx, cy]); }
  });
}
for (let y = 0; y < height; y++) {
  [[0, y], [width - 1, y]].forEach(([cx, cy]) => {
    const i = cy * width + cx;
    if (!visited[i] && isWhite(idx(cx, cy))) { visited[i] = 1; queue.push([cx, cy]); }
  });
}

// BFS flood fill
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head++];
  pixels[idx(x, y) + 3] = 0; // transparent
  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const ni = ny * width + nx;
    if (!visited[ni] && isWhite(idx(nx, ny))) {
      visited[ni] = 1;
      queue.push([nx, ny]);
    }
  }
}

// Also soften remaining near-white edge pixels (anti-aliasing fringe)
for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i], g = pixels[i+1], b = pixels[i+2];
  if (pixels[i+3] > 0 && r > 200 && g > 200 && b > 200) {
    const brightness = (r + g + b) / 3;
    // Scale alpha so near-white fringes become semi-transparent
    pixels[i + 3] = Math.round(((255 - brightness) / 55) * 255);
  }
}

await sharp(Buffer.from(pixels.buffer), { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log(`✓ Saved to ${output}  (${width}×${height})`);
