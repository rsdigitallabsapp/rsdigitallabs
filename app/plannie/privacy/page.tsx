import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Plannie by RS Digital Labs",
  description:
    "Plannie Privacy Policy. Learn how Plannie collects, uses, and protects your personal information, location data, and saved plans.",
};

const LAST_UPDATED = "June 24, 2026";
const EFFECTIVE_DATE = "June 24, 2026";
const APP = "Plannie";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";

export default function PlanniePrivacyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      badgeColor="#22D3EE"
      title="Plannie Privacy"
      titleAccent="Policy."
      subtitle={`This Privacy Policy describes how ${COMPANY} ("we," "us," or "our") collects, uses, and shares information about you when you use ${APP}, our date discovery application for couples. By using ${APP}, you agree to the collection and use of information in accordance with this policy.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/plannie"
      backLabel="Plannie"
      sections={[
        {
          id: "overview",
          number: "01",
          title: "Overview",
          content: (
            <>
              <p>
                {APP} is a date discovery application developed by {COMPANY} that helps couples find
                restaurants, coffee shops, activities, movies, and spontaneous date ideas based on their
                location. We are committed to protecting your personal information and being transparent
                about what data we collect and why.
              </p>
              <p className="mt-3">
                This policy applies to the {APP} mobile application (available on Google Play and the Apple
                App Store) and any related services. It is designed to comply with applicable privacy laws
                and the data safety requirements of the Google Play Store and Apple App Store.
              </p>
            </>
          ),
        },
        {
          id: "information-collected",
          number: "02",
          title: "Information We Collect",
          content: (
            <>
              <p className="font-semibold text-slate-200">Account Information</p>
              <p className="mt-2">When you create a {APP} account, we collect:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Full name or display name</li>
                <li>Email address</li>
                <li>Password (stored in hashed form — we never store your plain-text password)</li>
                <li>Profile picture (optional)</li>
                <li>Account creation date and last login date</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Google Sign-In</p>
              <p className="mt-2">
                If you choose to sign in with Google, we receive your name, email address, and profile
                picture from Google. We do not receive your Google password. Your use of Google Sign-In
                is also subject to{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Google's Privacy Policy
                </a>
                .
              </p>

              <p className="font-semibold text-slate-200 mt-5">Location Information</p>
              <p className="mt-2">
                {APP} uses your location to show you nearby date destinations. We collect location
                information in the following ways:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  <strong className="text-slate-300">Precise Location (optional):</strong> With your
                  permission, {APP} may access your device's GPS location to automatically detect your
                  current area. You can deny this permission and enter a location manually instead.
                </li>
                <li>
                  <strong className="text-slate-300">Manually Entered Location:</strong> A city,
                  neighborhood, or area name you type into {APP} to search for nearby places.
                </li>
              </ul>
              <p className="mt-3">
                We use location data only to generate local recommendations. We do not store a history
                of your precise GPS coordinates, and location is not shared with third parties beyond
                what is necessary to return place results.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Saved Plans & Preferences</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Date plans and places you save as favorites</li>
                <li>Categories and filters you use most frequently</li>
                <li>App theme and display preferences</li>
                <li>Notification settings</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Subscription Information</p>
              <p className="mt-2">
                If you subscribe to Plannie Premium, subscription status and entitlement information is
                managed through RevenueCat and the app store (Apple App Store or Google Play). We receive
                confirmation of your subscription status but do not receive or store your full payment
                card details.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Analytics & Usage Data</p>
              <p className="mt-2">
                We collect anonymized and aggregated data to improve {APP}, including:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Features accessed and frequency of use</li>
                <li>Session duration and session counts</li>
                <li>Category selections (Food, Activities, Choose For Me)</li>
                <li>Error reports and crash logs</li>
                <li>Device model, operating system version, and app version</li>
                <li>General geographic region (country-level)</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use",
          number: "03",
          title: "How We Use Your Information",
          content: (
            <>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Providing Recommendations:</strong> Using your
                  location to surface nearby restaurants, activities, and date ideas relevant to you.
                </li>
                <li>
                  <strong className="text-slate-300">Saving Plans:</strong> Storing your saved date
                  plans and favorites across your devices when signed in.
                </li>
                <li>
                  <strong className="text-slate-300">Account Management:</strong> Creating and managing
                  your account, authenticating your identity, and handling subscription entitlements.
                </li>
                <li>
                  <strong className="text-slate-300">Premium Features:</strong> Verifying your
                  subscription status to unlock Plannie Premium features.
                </li>
                <li>
                  <strong className="text-slate-300">Improving the App:</strong> Analyzing anonymized
                  usage patterns to identify improvements, fix bugs, and optimize performance.
                </li>
                <li>
                  <strong className="text-slate-300">Customer Support:</strong> Diagnosing and resolving
                  technical issues you report to us.
                </li>
                <li>
                  <strong className="text-slate-300">Security:</strong> Detecting and preventing fraud
                  and unauthorized access.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Compliance:</strong> Meeting our obligations
                  under applicable laws and regulations.
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-300">We do not:</strong> sell your personal information or
                location history to third parties, use your saved plans for advertising targeting, or
                share your individual data with other users without your explicit action.
              </p>
            </>
          ),
        },
        {
          id: "sharing",
          number: "04",
          title: "Sharing of Information",
          content: (
            <>
              <p>
                We do not sell your personal information. We share your information only in these limited
                circumstances:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Service Providers:</strong> We use trusted
                  third-party providers for cloud hosting, authentication, payment processing, push
                  notifications, and crash analytics. These providers are contractually obligated to keep
                  your data confidential.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Obligations:</strong> We may disclose
                  information when required by law, court order, or governmental authority.
                </li>
                <li>
                  <strong className="text-slate-300">Business Transfer:</strong> In the event of a
                  merger, acquisition, or sale of assets, your data may be transferred. We will notify
                  you before your data is subject to a different privacy policy.
                </li>
                <li>
                  <strong className="text-slate-300">Safety:</strong> If we believe disclosure is
                  necessary to protect the safety, rights, or property of {COMPANY}, our users, or the
                  public.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "third-party",
          number: "05",
          title: "Third-Party Services",
          content: (
            <>
              <p>{APP} uses the following third-party services:</p>
              <ul className="list-disc list-outside pl-5 space-y-3 mt-3">
                <li>
                  <strong className="text-slate-300">Firebase (Google):</strong> Cloud storage and
                  database (Firestore) for your saved plans and account data. Authentication
                  (Firebase Auth) for email/password and Google Sign-In. Firebase Analytics for
                  anonymized usage data. Firebase Crashlytics for crash reporting.
                </li>
                <li>
                  <strong className="text-slate-300">RevenueCat:</strong> Subscription management and
                  in-app purchase verification for Plannie Premium. RevenueCat processes subscription
                  entitlements and receipt validation. Subject to{" "}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    RevenueCat's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-slate-300">Apple App Store / Google Play:</strong> In-app
                  purchases and subscriptions are processed by the respective platform's payment system.
                  We do not receive or store your full payment card information.
                </li>
                <li>
                  <strong className="text-slate-300">Place Discovery API:</strong> Location-based place
                  data is retrieved via third-party mapping or place APIs. Search queries include your
                  selected location (city/area) but not your personal identity.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "data-retention",
          number: "06",
          title: "Data Retention",
          content: (
            <>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                  <strong className="text-slate-300">Active Account Data:</strong> Retained for as long
                  as your account is active.
                </li>
                <li>
                  <strong className="text-slate-300">After Account Deletion:</strong> Your account
                  information, saved plans, and preferences are queued for permanent deletion within 30
                  days. Anonymized, aggregated statistics may be retained.
                </li>
                <li>
                  <strong className="text-slate-300">Transaction Records:</strong> Records of
                  subscription purchases are retained for 7 years for accounting and tax compliance.
                </li>
                <li>
                  <strong className="text-slate-300">Crash and Error Logs:</strong> Retained for up to
                  90 days, then automatically deleted.
                </li>
              </ul>
              <p className="mt-4">
                You may request immediate deletion of your account and associated data at any time by
                using the "Delete Account" option within the app settings, or by emailing{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "security",
          number: "07",
          title: "Data Security",
          content: (
            <>
              <p>We take the security of your data seriously. Our measures include:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>All data is encrypted in transit using TLS 1.2 or higher</li>
                <li>Account data stored in the cloud is encrypted at rest</li>
                <li>Passwords are stored using industry-standard one-way hashing</li>
                <li>
                  Firebase Security Rules restrict access so only authenticated requests from your
                  account can read or write your data
                </li>
                <li>Administrative access is limited to authorized personnel with multi-factor authentication</li>
              </ul>
              <p className="mt-4">
                No method of transmission over the internet is 100% secure. If you discover a security
                vulnerability, please report it to{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "08",
          title: "Your Rights & Choices",
          content: (
            <>
              <p>You have the following rights regarding your data:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Access:</strong> View your account information and
                  saved plans within the app at any time. To request a full data export, contact{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-slate-300">Correction:</strong> Update your account
                  information and preferences at any time within the app.
                </li>
                <li>
                  <strong className="text-slate-300">Deletion:</strong> Delete individual saved plans or
                  your entire account from within the app's settings. Account deletion is permanent.
                </li>
                <li>
                  <strong className="text-slate-300">Location Permission:</strong> Revoke location
                  access at any time from your device's system settings. {APP} will continue to work
                  with manually entered locations.
                </li>
                <li>
                  <strong className="text-slate-300">Notification Control:</strong> Manage push
                  notification preferences from within the app or your device's system settings.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          number: "09",
          title: "Children's Privacy",
          content: (
            <>
              <p>
                {APP} is not intended for children under the age of 13. We do not knowingly collect
                personal information from anyone under 13. If you believe your child has provided us with
                personal information, please contact us at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>{" "}
                and we will delete the information promptly.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          number: "10",
          title: "Changes to This Policy",
          content: (
            <>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material
                changes by updating the "Last Updated" date, posting a notice within the app, and/or
                sending an email to your registered address. Continued use of {APP} after changes take
                effect constitutes your acceptance of the updated policy.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          number: "11",
          title: "Contact Us",
          content: (
            <>
              <p>For questions or requests related to this Privacy Policy:</p>
              <div className="mt-4 glass rounded-xl p-5 space-y-2">
                <p className="text-slate-200 font-semibold">{COMPANY}</p>
                <p>App: {APP}</p>
                <p>
                  Support:{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href={WEBSITE} className="text-cyan-400 hover:text-cyan-300">
                    {WEBSITE}
                  </a>
                </p>
              </div>
              <p className="mt-4">
                We will respond to all privacy requests within 30 days of receipt.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
