"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 3, suffix: "", label: "Apps in the Wild", desc: "Real products used by real people." },
  { value: 100, suffix: "%", label: "Founder-Built", desc: "Everything we ship, we built ourselves." },
  { value: 0, suffix: " BS", label: "Zero", desc: "No VC theatre. No vanity metrics. Just work." },
];

const principles = [
  {
    number: "01",
    title: "Ship real things.",
    body: "We don't build MVPs that disappear after the pitch deck. We build software people actually use daily.",
  },
  {
    number: "02",
    title: "Small team, full ownership.",
    body: "A lean team means fast decisions, tight feedback loops, and code written by the same people who show up to the calls — whether the project is ours or a client's.",
  },
  {
    number: "03",
    title: "Solve the boring problems.",
    body: "The most impactful software fixes the mundane — the repetitive, the friction-filled, the time-wasting.",
  },
  {
    number: "04",
    title: "Quality over quantity.",
    body: "We'd rather have three excellent apps than thirty mediocre ones. Every product we ship has to earn its place.",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase">
              About the Lab
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            A small team.{" "}
            <span className="gradient-text">A serious output.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-slate-400 text-lg max-w-2xl leading-relaxed"
          >
            RS Digital Labs is a focused product studio. We identify problems
            worth solving, design and build products that address them
            cleanly, and ship without waiting for permission — whether the
            product is ours or yours. No committee. No consensus theater.
            Just execution.
          </motion.p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-4xl font-bold text-white mb-1">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-violet-400 font-semibold mb-2 text-sm tracking-wide">{s.label}</div>
              <div className="text-slate-500 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <span className="text-xs font-mono text-violet-600 tracking-widest">{p.number}</span>
                <div className="mt-2 w-px h-12 bg-gradient-to-b from-violet-700/60 to-transparent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
