import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — ARISE by RS Digital Labs",
  description:
    "ARISE Terms of Service. Read the terms that govern your use of the ARISE app and Premium subscription.",
};

const LAST_UPDATED = "June 2026";
const EFFECTIVE_DATE = "June 2026";
const APP = "ARISE";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const LEGAL_EMAIL = "support@rsdigitallabs.com";
const SAGE = "#8AAF8E";

export default function AriseTermsPage() {
  return (
    <LegalPage
      badge="Terms of Service"
      badgeColor={SAGE}
      title="ARISE Terms"
      titleAccent="of Service."
      subtitle={`Plain English summary: download ${APP}, use it as intended, don't misuse it. If you subscribe to Premium, your subscription auto-renews until you cancel. Cancel anytime in your App Store or Google Play settings. These Terms are governed by the laws of the Philippines.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/arise"
      backLabel="ARISE"
      sections={[
        {
          id: "agreement",
          number: "01",
          title: "Agreement to terms",
          content: (
            <>
              <p>
                By downloading, installing, or using {APP} ("the app"), you agree to these Terms of
                Service ("Terms"). If you do not agree, do not use the app. These Terms form a legal
                agreement between you and {COMPANY} ("we," "us," "our").
              </p>
              <p className="mt-3">
                These Terms apply to the {APP} mobile application available on iOS and Android, and to any
                related services, websites, or content we provide in connection with the app.
              </p>
            </>
          ),
        },
        {
          id: "license",
          number: "02",
          title: "The app and your license to use it",
          content: (
            <>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
                license to download and use the app for your personal, non-commercial purposes.
              </p>
              <p className="mt-3">You may not:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Copy, modify, or distribute the app or its content</li>
                <li>Reverse engineer, decompile, or disassemble any part of the app</li>
                <li>Use the app for any commercial purpose without our written consent</li>
                <li>Use the app in any way that violates applicable law</li>
                <li>Attempt to gain unauthorized access to any part of the app or our systems</li>
              </ul>
            </>
          ),
        },
        {
          id: "subscriptions",
          number: "03",
          title: "ARISE Premium — Subscription terms",
          content: (
            <>
              <p>{APP} offers an optional paid subscription ("Premium") with the following plans:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li><strong className="text-slate-300">Monthly:</strong> $4.99 per month</li>
                <li><strong className="text-slate-300">3-Month:</strong> $11.99 every 3 months</li>
                <li><strong className="text-slate-300">Annual:</strong> $34.99 per year</li>
              </ul>
              <p className="mt-3">
                Prices are in USD. Equivalent local pricing may apply depending on your country and the App
                Store or Google Play pricing rules in effect at the time of purchase.
              </p>
              <div className="mt-5 rounded-xl p-5" style={{ background: `${SAGE}0d`, border: `1px solid ${SAGE}30` }}>
                <p className="text-slate-300">
                  <strong className="text-slate-100">Auto-renewal disclosure (required by Apple and Google):</strong>{" "}
                  {APP} Premium is a subscription that automatically renews at the end of each billing
                  period unless you cancel at least 24 hours before the renewal date. Payment is charged to
                  your Apple ID or Google Play account at confirmation of purchase. You can manage and
                  cancel your subscription at any time in your App Store account settings (iOS) or Google
                  Play account settings (Android). Cancellation takes effect at the end of the current paid
                  period — you will retain Premium access until then. No refunds are provided for partial
                  periods.
                </p>
              </div>
              <p className="mt-4">
                A free version of {APP} is available with no subscription required. Premium unlocks
                additional features including custom affirmations, all affirmation categories, Streak
                Shield, and future premium features.
              </p>
            </>
          ),
        },
        {
          id: "refunds",
          number: "04",
          title: "Refunds",
          content: (
            <>
              <p>
                All purchases are processed through Apple's App Store or Google Play. Refund requests are
                subject to Apple's or Google's refund policies respectively. We do not control the refund
                process.
              </p>
              <p className="mt-3">
                To request a refund from Apple: visit{" "}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  reportaproblem.apple.com
                </a>
                . To request a refund from Google: visit your Google Play order history.
              </p>
            </>
          ),
        },
        {
          id: "user-content",
          number: "05",
          title: "User-generated content",
          content: (
            <>
              <p>
                {APP} Premium allows you to write custom affirmations ("User Content"). You retain
                ownership of anything you write. By creating User Content in the app, you confirm that it
                does not violate any law or third-party rights, and you are solely responsible for it.
              </p>
              <p className="mt-3">
                User Content is stored locally on your device and is not shared with us or any third party
                unless you explicitly choose to share it.
              </p>
            </>
          ),
        },
        {
          id: "intellectual-property",
          number: "06",
          title: "Intellectual property",
          content: (
            <p>
              All content in {APP} that is not User Content — including the app's design, affirmations,
              illustrations, branding, and software — is owned by or licensed to {COMPANY} and protected by
              applicable intellectual property laws. Nothing in these Terms transfers ownership of our
              intellectual property to you.
            </p>
          ),
        },
        {
          id: "disclaimer",
          number: "07",
          title: "Disclaimer of warranties",
          content: (
            <p>
              {APP} is provided "as is" and "as available" without warranty of any kind. We do not warrant
              that the app will be uninterrupted, error-free, or free of bugs. We make no medical or
              therapeutic claims about the app's affirmations or any effect they may have on your
              wellbeing.
            </p>
          ),
        },
        {
          id: "limitation-of-liability",
          number: "08",
          title: "Limitation of liability",
          content: (
            <p>
              To the fullest extent permitted by law, {COMPANY} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the app. Our
              total liability to you for any claims arising from your use of {APP} shall not exceed the
              amount you paid us in the 12 months preceding the claim.
            </p>
          ),
        },
        {
          id: "changes",
          number: "09",
          title: "Changes to the app or these terms",
          content: (
            <>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by
                updating the "last updated" date above and, where appropriate, by notifying you through the
                app. Continued use of {APP} after changes take effect constitutes your acceptance of the
                updated Terms.
              </p>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue the app or any feature at any time,
                with or without notice.
              </p>
            </>
          ),
        },
        {
          id: "termination",
          number: "10",
          title: "Termination",
          content: (
            <p>
              We may terminate or suspend your access to {APP} at any time if you violate these Terms.
              Upon termination, your license to use the app ends immediately. Sections that by their nature
              should survive termination (limitation of liability, intellectual property, dispute
              resolution) will survive.
            </p>
          ),
        },
        {
          id: "governing-law",
          number: "11",
          title: "Governing law and disputes",
          content: (
            <p>
              These Terms are governed by the laws of the Republic of the Philippines. Any dispute arising
              from these Terms or your use of {APP} shall be resolved in the courts of the Philippines, and
              you consent to the personal jurisdiction of those courts.
            </p>
          ),
        },
        {
          id: "third-party",
          number: "12",
          title: "Third-party services",
          content: (
            <p>
              {APP} integrates with third-party services including RevenueCat (subscription management),
              Apple App Store, and Google Play Store. Your use of those services is governed by their
              respective terms and privacy policies.
            </p>
          ),
        },
        {
          id: "contact",
          number: "13",
          title: "Contact Us",
          content: (
            <>
              <p>Questions about these Terms? Contact us:</p>
              <div className="mt-4 glass rounded-xl p-5 space-y-2">
                <p className="text-slate-200 font-semibold">{COMPANY}</p>
                <p>App: {APP}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${LEGAL_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                    {LEGAL_EMAIL}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href={WEBSITE} className="text-cyan-400 hover:text-cyan-300">
                    {WEBSITE}
                  </a>
                </p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
