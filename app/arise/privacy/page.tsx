import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — ARISE by RS Digital Labs",
  description:
    "ARISE Privacy Policy. We collect very little and protect what we do. Read how we handle your information.",
};

const LAST_UPDATED = "June 2026";
const EFFECTIVE_DATE = "June 2026";
const APP = "ARISE";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const PRIVACY_EMAIL = "support@rsdigitallabs.com";
const SAGE = "#8AAF8E";

export default function ArisePrivacyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      badgeColor={SAGE}
      title="ARISE Privacy"
      titleAccent="Policy."
      subtitle={`The short version: ${APP} keeps your data on your device. We don't sell it, share it, or build profiles with it. We collect only what we need to run the app, and we're specific about what that is below.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/arise"
      backLabel="ARISE"
      sections={[
        {
          id: "who-we-are",
          number: "01",
          title: "Who we are",
          content: (
            <p>
              {APP} is developed and operated by {COMPANY} ("we," "us," or
              "our"), an independent mobile software studio. You can contact
              us at{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                {PRIVACY_EMAIL}
              </a>
              .
            </p>
          ),
        },
        {
          id: "what-we-collect",
          number: "02",
          title: "What we collect — and what we don't",
          content: (
            <>
              <p>{APP} is designed to work primarily on-device. Here is exactly what we collect.</p>
              <p className="font-semibold text-slate-200 mt-5">What we do not collect</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Your name, email address, or any account information</li>
                <li>Your location data</li>
                <li>Your contacts, photos, or media</li>
                <li>Your voice recordings — speech recognition is processed locally on your device and never stored or transmitted</li>
                <li>Any behavioral data used for advertising or profiling</li>
              </ul>
              <p className="font-semibold text-slate-200 mt-5">What we do collect</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  <strong className="text-slate-300">Subscription status:</strong> If you subscribe to
                  ARISE Premium, your subscription status is managed and verified through RevenueCat (our
                  payment processor) and Apple / Google. We receive a confirmation of active entitlement,
                  but we do not receive or store your payment card information.
                </li>
                <li>
                  <strong className="text-slate-300">Anonymous crash reports:</strong> If the app crashes,
                  basic technical information (device type, OS version, app version, crash location in
                  code) may be submitted automatically to help us fix the issue. This data contains no
                  personal identifiers.
                </li>
                <li>
                  <strong className="text-slate-300">App preferences and affirmations:</strong> Your
                  selected categories, custom affirmations, streak count, and wake-time preference are
                  stored locally on your device using secure on-device storage. This data does not leave
                  your device.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "microphone",
          number: "03",
          title: "Microphone and speech recognition",
          content: (
            <>
              <p>
                {APP} asks for microphone access so you can speak your affirmation aloud. Speech
                recognition is performed by the on-device speech recognition framework provided by Apple
                (iOS) or Android. We do not capture, store, transmit, or process any audio or transcription
                data. Your words stay on your phone.
              </p>
              <p className="mt-3">
                You can revoke microphone permission at any time in your phone's Settings app. The app will
                still function — you can tap to count your repetitions manually.
              </p>
            </>
          ),
        },
        {
          id: "notifications",
          number: "04",
          title: "Notifications",
          content: (
            <p>
              {APP} may send you a local morning reminder notification. These notifications are scheduled
              entirely on-device using your operating system's local notification system. We do not
              operate a push notification server, and we do not know when you receive or dismiss a
              notification. You can manage or disable notifications in your phone's Settings app at any
              time.
            </p>
          ),
        },
        {
          id: "revenuecat",
          number: "05",
          title: "RevenueCat (subscription management)",
          content: (
            <>
              <p>
                Premium subscriptions are processed through Apple's App Store or Google Play. We use
                RevenueCat as our subscription management layer. RevenueCat may collect anonymous analytics
                about subscription events (purchase, renewal, cancellation). RevenueCat does not receive
                your payment information — all payment is handled directly by Apple or Google.
              </p>
              <p className="mt-3">
                RevenueCat's privacy policy is available at{" "}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  revenuecat.com/privacy
                </a>
                . Apple's privacy policy is at{" "}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  apple.com/legal/privacy
                </a>
                . Google's privacy policy is at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  policies.google.com/privacy
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          number: "06",
          title: "Children's privacy",
          content: (
            <p>
              {APP} is not directed at children under 13. We do not knowingly collect personal information
              from children under 13. If you believe a child has provided us with personal information,
              contact us at{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                {PRIVACY_EMAIL}
              </a>{" "}
              and we will delete it promptly.
            </p>
          ),
        },
        {
          id: "retention",
          number: "07",
          title: "Data retention and deletion",
          content: (
            <>
              <p>
                Because nearly all your data is stored locally on your device, you can delete it at any
                time by uninstalling the app. Uninstalling {APP} removes all locally stored data, including
                your affirmations, streak, and preferences.
              </p>
              <p className="mt-3">
                If you have an active Premium subscription, your subscription status is managed by Apple or
                Google. Uninstalling the app does not cancel your subscription — you must cancel through
                your App Store or Google Play account settings.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "08",
          title: "Your rights",
          content: (
            <>
              <p>
                Depending on where you live, you may have the right to access, correct, or delete personal
                data we hold about you. Because we hold very little personal data (and most of it is on
                your own device), these rights are largely satisfied by your control over the app itself.
              </p>
              <p className="mt-3">
                For any questions or requests, contact us at{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                  {PRIVACY_EMAIL}
                </a>
                . We will respond within 30 days.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          number: "09",
          title: "Changes to this policy",
          content: (
            <p>
              If we make material changes to this Privacy Policy, we will update the "Last Updated" date
              above and, where appropriate, notify you through the app. Continued use of {APP} after
              changes take effect constitutes acceptance of the updated policy.
            </p>
          ),
        },
        {
          id: "contact",
          number: "10",
          title: "Contact Us",
          content: (
            <>
              <p>For questions or requests related to this Privacy Policy:</p>
              <div className="mt-4 glass rounded-xl p-5 space-y-2">
                <p className="text-slate-200 font-semibold">{COMPANY}</p>
                <p>App: {APP}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${PRIVACY_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                    {PRIVACY_EMAIL}
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
