"use client";
import { useState } from "react";

const PROJECT_TYPES = ["New website", "Redesign"] as const;

type FormState = {
  projectType: (typeof PROJECT_TYPES)[number] | "";
  currentUrl: string;
  business: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  projectType: "",
  currentUrl: "",
  business: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 bg-white/[0.03] border border-white/10 outline-none transition-colors duration-200 focus:border-violet-500/60";

const labelClass = "block text-xs font-mono tracking-widest uppercase text-slate-400 mb-2";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.business.trim()) next.business = "Tell us the business name.";
    if (!form.name.trim()) next.name = "Tell us your name.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Got it — thank you.</h3>
        <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
          We read every inquiry ourselves. Expect a reply within one business
          day at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 text-left" noValidate>
      <div>
        <label className={labelClass}>New website or redesign?</label>
        <div className="flex gap-3">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm((f) => ({ ...f, projectType: type }))}
              className="px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 border"
              style={
                form.projectType === type
                  ? { background: "rgba(168,85,247,0.15)", borderColor: "rgba(168,85,247,0.5)", color: "#fff" }
                  : { background: "transparent", borderColor: "rgba(255,255,255,0.1)", color: "#94A3B8" }
              }
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {form.projectType === "Redesign" && (
        <div className="mt-5">
          <label className={labelClass} htmlFor="currentUrl">Current website URL</label>
          <input
            id="currentUrl"
            type="text"
            value={form.currentUrl}
            onChange={update("currentUrl")}
            className={inputClass}
            placeholder="yourbusiness.com"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div>
          <label className={labelClass} htmlFor="business">Business name</label>
          <input
            id="business"
            type="text"
            value={form.business}
            onChange={update("business")}
            className={inputClass}
            placeholder="Your business"
          />
          {errors.business && <p className="text-xs text-rose-400 mt-1.5">{errors.business}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="name">Contact name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
            placeholder="Optional"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">Message</label>
          <textarea
            id="message"
            value={form.message}
            onChange={update("message")}
            className={`${inputClass} min-h-[90px] resize-none`}
            placeholder="Optional — anything else we should know?"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-rose-400 mt-5">
          {endpoint
            ? "Something went wrong sending that — try again, or email us directly below."
            : "Form submission is being finalized — email us directly below in the meantime."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
          boxShadow: "0 0 40px rgba(168,85,247,0.4)",
        }}
      >
        {status === "submitting" ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}
