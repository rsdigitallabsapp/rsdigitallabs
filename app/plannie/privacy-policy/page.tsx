import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Plannie by RS Digital Labs",
  description:
    "Plannie Privacy Policy. Learn how Plannie collects, uses, and protects your task data, account information, and usage information.",
};

const LAST_UPDATED = "June 23, 2026";
const EFFECTIVE_DATE = "June 23, 2026";
const APP = "Plannie";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";

export default function PlanniePrivacyPolicyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      badgeColor="#22D3EE"
      title={`${APP} Privacy`}
      titleAccent="Policy."
      subtitle={`This Privacy Policy describes how ${COMPANY} ("we," "us," or "our") collects, uses, and shares information about you when you use ${APP}, a planning and productivity application. By using ${APP}, you agree to the collection and use of information in accordance with this policy.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/"
      backLabel="RS Digital Labs"
      sections={[
        {
          id: "overview",
          number: "01",
          title: "Overview",
          content: (
            <>
              <p>
                {APP} is a productivity and task planning application developed by {COMPANY}. We are committed
                to protecting your personal information and being transparent about what data we collect and
                why.
              </p>
              <p className="mt-3">
                This policy applies to the {APP} mobile application (available on Google Play and the Apple
                App Store) and any related services. It is intended to comply with applicable privacy laws
                and the requirements of the Google Play Store and Apple App Store.
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
              <p className="mt-2">
                When you create a {APP} account, we collect:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Full name or display name</li>
                <li>Email address</li>
                <li>Password (stored in hashed form — we never store your plain-text password)</li>
                <li>Profile picture (optional)</li>
                <li>Account creation date and last login date</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Task and Planning Data</p>
              <p className="mt-2">
                The core content you create within {APP}, including:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Tasks, to-do items, and subtasks you create</li>
                <li>Project names, descriptions, and structures</li>
                <li>Due dates, reminders, and scheduling information</li>
                <li>Priority levels and labels you assign</li>
                <li>Notes and descriptions attached to tasks</li>
                <li>Task completion history and timestamps</li>
                <li>Recurring task configurations</li>
              </ul>
              <p className="mt-3">
                This data is stored on our secure servers and synced across your devices when you are signed
                in to {APP}.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Preferences and Settings</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>App theme and display preferences</li>
                <li>Notification settings and schedules</li>
                <li>Default task view and sorting preferences</li>
                <li>Integration settings (e.g., calendar connections)</li>
                <li>Language and regional settings</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Analytics and Usage Data</p>
              <p className="mt-2">
                We collect anonymized and aggregated data to improve {APP}, including:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Features accessed and frequency of use</li>
                <li>Session duration and session counts</li>
                <li>Navigation patterns within the app</li>
                <li>Error reports and crash logs</li>
                <li>Performance metrics (app load time, sync speed)</li>
                <li>Device model, operating system version, and app version</li>
                <li>General geographic region (country-level, not precise location)</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Technical Information</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Device type and model</li>
                <li>Operating system and version</li>
                <li>Unique device identifier</li>
                <li>IP address (used for security and fraud prevention, not stored long-term)</li>
                <li>App version number</li>
                <li>Push notification token (for delivering reminders)</li>
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
                  <strong className="text-slate-300">Providing the Service:</strong> Storing, syncing, and
                  displaying your tasks and projects across your devices.
                </li>
                <li>
                  <strong className="text-slate-300">Reminders and Notifications:</strong> Sending push
                  notifications and reminders for tasks you have scheduled.
                </li>
                <li>
                  <strong className="text-slate-300">Account Management:</strong> Creating and managing your
                  account, authenticating your identity, and handling subscription management.
                </li>
                <li>
                  <strong className="text-slate-300">Improving the App:</strong> Analyzing anonymized usage
                  patterns to identify feature improvements, fix bugs, and optimize performance.
                </li>
                <li>
                  <strong className="text-slate-300">Customer Support:</strong> Diagnosing and resolving
                  technical issues you report to us.
                </li>
                <li>
                  <strong className="text-slate-300">Security:</strong> Detecting and preventing fraud,
                  abuse, and unauthorized access to accounts.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Compliance:</strong> Meeting our obligations under
                  applicable laws and regulations.
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-300">We do not:</strong> sell your task data or personal
                information to third parties, use your task content for advertising targeting, or share your
                individual data with other users without your explicit action.
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
                  <strong className="text-slate-300">Service Providers:</strong> We use trusted third-party
                  providers for cloud hosting, payment processing, push notifications, and crash analytics.
                  These providers are contractually obligated to keep your data confidential and use it only
                  for the services they provide to us.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Obligations:</strong> We may disclose information
                  when required by law, court order, or governmental authority.
                </li>
                <li>
                  <strong className="text-slate-300">Business Transfer:</strong> In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred. We will notify you before
                  your data is transferred and becomes subject to a different privacy policy.
                </li>
                <li>
                  <strong className="text-slate-300">Safety:</strong> If we believe disclosure is necessary
                  to protect the safety, rights, or property of {COMPANY}, our users, or the public.
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
              <p>{APP} uses the following categories of third-party services:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Cloud Storage (Firebase / Google Cloud):</strong> Your
                  task data is securely stored and synced using Firebase Firestore or equivalent cloud
                  services provided by Google. Subject to Google's privacy policy.
                </li>
                <li>
                  <strong className="text-slate-300">Authentication (Firebase Auth):</strong> Account
                  creation and sign-in are powered by Firebase Authentication. We support email/password and
                  optionally Google Sign-In.
                </li>
                <li>
                  <strong className="text-slate-300">Analytics (Firebase Analytics / Google Analytics):</strong>{" "}
                  We use Firebase Analytics to track aggregated, anonymized usage patterns. Analytics data is
                  collected in compliance with Google's data policies.
                </li>
                <li>
                  <strong className="text-slate-300">Crash Reporting (Firebase Crashlytics):</strong>{" "}
                  Automatic crash reports are sent to Firebase Crashlytics to help us identify and fix bugs.
                  These reports do not include your task content.
                </li>
                <li>
                  <strong className="text-slate-300">
                    Push Notifications (Firebase Cloud Messaging):
                  </strong>{" "}
                  Task reminders are delivered via Firebase Cloud Messaging (FCM). FCM only delivers messages
                  using your device's push notification token; we do not share your content with Google
                  beyond the notification payload.
                </li>
                <li>
                  <strong className="text-slate-300">Payments (Google Play / Apple App Store):</strong>{" "}
                  In-app purchases and subscriptions are processed by Google Play or the Apple App Store.
                  Payment details are handled entirely by these platforms; we do not receive or store your
                  full payment card information.
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
                  <strong className="text-slate-300">Active Account Data:</strong> Your account information
                  and task data are retained for as long as your account is active.
                </li>
                <li>
                  <strong className="text-slate-300">After Account Deletion:</strong> When you delete your
                  account, your task data and personal information are queued for permanent deletion within
                  30 days. Anonymized, aggregated statistics derived from your usage may be retained.
                </li>
                <li>
                  <strong className="text-slate-300">Transaction Records:</strong> Records of subscription
                  purchases are retained for 7 years for accounting and tax compliance purposes.
                </li>
                <li>
                  <strong className="text-slate-300">Crash and Error Logs:</strong> Retained for up to 90
                  days and then automatically deleted.
                </li>
                <li>
                  <strong className="text-slate-300">Analytics:</strong> Aggregated and anonymized analytics
                  data does not expire as it cannot be linked back to individual users.
                </li>
              </ul>
              <p className="mt-4">
                You may request immediate deletion of your account and associated data at any time by
                emailing{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>{" "}
                or by using the "Delete Account" option within the app settings.
              </p>
            </>
          ),
        },
        {
          id: "security",
          number: "07",
          title: "Security",
          content: (
            <>
              <p>We take the security of your task data seriously. Our measures include:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>All data is encrypted in transit using TLS 1.2 or higher</li>
                <li>Task data stored in the cloud is encrypted at rest</li>
                <li>Passwords are stored using industry-standard one-way hashing</li>
                <li>
                  Firebase Security Rules restrict access to your data so only authenticated requests from
                  your account can read or write your tasks
                </li>
                <li>Regular security audits and dependency vulnerability scanning</li>
                <li>
                  Administrative access to production data is limited to authorized personnel only, with
                  multi-factor authentication required
                </li>
              </ul>
              <p className="mt-4">
                Despite our efforts, no method of transmission over the internet or electronic storage is 100%
                secure. If you discover a security vulnerability, please report it responsibly to{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          number: "08",
          title: "Children's Privacy",
          content: (
            <>
              <p>
                {APP} is not intended for children under the age of 13. We do not knowingly collect personal
                information from anyone under 13. If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>{" "}
                and we will delete the information promptly.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "09",
          title: "Your Rights and Choices",
          content: (
            <>
              <p>You have the following rights regarding your data:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Access &amp; Export:</strong> You can view all your
                  tasks and account information within the app at any time. To request a full export of your
                  data, contact us at{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-slate-300">Correction:</strong> You can update your account
                  information and task content at any time within the app.
                </li>
                <li>
                  <strong className="text-slate-300">Deletion:</strong> You can delete individual tasks,
                  projects, or your entire account from within the app's settings. Account deletion results
                  in permanent removal of all associated data.
                </li>
                <li>
                  <strong className="text-slate-300">Notification Control:</strong> You can manage push
                  notification preferences from within the app or your device's system settings.
                </li>
                <li>
                  <strong className="text-slate-300">Analytics Opt-Out:</strong> You may opt out of
                  analytics collection by contacting us. Note that some essential crash reporting may still
                  occur to maintain service quality.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "google-play",
          number: "10",
          title: "Google Play Compliance",
          content: (
            <>
              <p>
                In accordance with Google Play Store policies, we disclose the following data safety
                information:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Data Shared with Third Parties:</strong> Anonymized
                  crash data and analytics are shared with Google (Firebase) for service improvement.
                  Payment data is shared with Google Play for subscription processing.
                </li>
                <li>
                  <strong className="text-slate-300">Data Collected:</strong> Email address, name, task
                  content, usage data, crash logs, and device identifiers as described in this policy.
                </li>
                <li>
                  <strong className="text-slate-300">Security Practices:</strong> Data is encrypted in
                  transit. You can request deletion of your data. Sensitive data such as passwords are not
                  stored in plain text.
                </li>
                <li>
                  <strong className="text-slate-300">No Sale of Data:</strong> We do not sell your personal
                  information to any third party.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "changes",
          number: "11",
          title: "Changes to This Policy",
          content: (
            <>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes
                by updating the "Last Updated" date, posting a notice within the app, and/or sending an
                email to your registered email address. Continued use of {APP} after changes take effect
                constitutes your acceptance of the updated policy.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          number: "12",
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
