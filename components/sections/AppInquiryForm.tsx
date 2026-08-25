"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { inputClass, labelClass, isValidEmail } from "./form-styles";

const NEED_OPTIONS = ["Mobile app", "Web app", "Portal or marketplace", "Custom business tool"];
const STAGE_OPTIONS = [
  "Just an idea",
  "Have a plan, no design yet",
  "Have designs, need it built",
  "Have a product, need to improve it",
];
const BUDGET_OPTIONS = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Not sure yet"];
const TIMEFRAME_OPTIONS = ["ASAP", "1–3 months", "3–6 months", "No fixed date"];

type FormState = {
  name: string;
  email: string;
  company: string;
  need: string;
  stage: string;
  budget: string;
  timeframe: string;
  description: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  need: "",
  stage: "",
  budget: "",
  timeframe: "",
  description: "",
};

export function AppInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const pathname = usePathname();

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Tell us your name.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email.";
    if (!form.description.trim()) next.description = "A couple sentences is enough.";
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
        body: JSON.stringify({ ...form, inquiryType: "app", sourcePage: pathname }),
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
      <input type="hidden" name="inquiryType" value="app" />
      <input type="hidden" name="sourcePage" value={pathname} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="app-name">Name</label>
          <input
            id="app-name"
            type="text"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="app-email">Email</label>
          <input
            id="app-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="app-company">Company</label>
          <input
            id="app-company"
            type="text"
            value={form.company}
            onChange={update("company")}
            className={inputClass}
            placeholder="Optional"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="app-need">What do you need?</label>
          <select id="app-need" value={form.need} onChange={update("need")} className={inputClass}>
            <option value="">Select one</option>
            {NEED_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="app-stage">Current stage</label>
          <select id="app-stage" value={form.stage} onChange={update("stage")} className={inputClass}>
            <option value="">Select one</option>
            {STAGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="app-budget">Approximate budget</label>
          <select id="app-budget" value={form.budget} onChange={update("budget")} className={inputClass}>
            <option value="">Select one</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="app-timeframe">Desired timeframe</label>
          <select id="app-timeframe" value={form.timeframe} onChange={update("timeframe")} className={inputClass}>
            <option value="">Select one</option>
            {TIMEFRAME_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="app-description">What are you trying to build?</label>
          <textarea
            id="app-description"
            value={form.description}
            onChange={update("description")}
            className={`${inputClass} min-h-[110px] resize-none`}
            placeholder="A couple sentences on the project is plenty to start."
          />
          {errors.description && <p className="text-xs text-rose-400 mt-1.5">{errors.description}</p>}
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
