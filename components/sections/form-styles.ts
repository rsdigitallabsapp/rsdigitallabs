export const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 bg-white/[0.03] border border-white/10 outline-none transition-colors duration-200 focus:border-violet-500/60";

export const labelClass = "block text-xs font-mono tracking-widest uppercase text-slate-400 mb-2";

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
