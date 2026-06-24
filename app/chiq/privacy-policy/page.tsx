import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — CHIQ by RS Digital Labs",
  description:
    "CHIQ Privacy Policy. Learn how CHIQ collects, protects, and uses your profile, messages, and personal information in our social connection app.",
};

const LAST_UPDATED = "June 23, 2026";
const EFFECTIVE_DATE = "June 23, 2026";
const APP = "CHIQ";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";

export default function CHIQPrivacyPolicyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      badgeColor="#A855F7"
      title={`${APP} Privacy`}
      titleAccent="Policy."
      subtitle={`This Privacy Policy describes how ${COMPANY} ("we," "us," or "our") collects, uses, and shares information about you when you use ${APP}, a social connection and dating application. Because ${APP} involves personal and sensitive information, please read this policy carefully.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/"
      backLabel="RS Digital Labs"
      sections={[
        {
          id: "overview",
          number: "01",
          title: "Overview and Commitment to Privacy",
          content: (
            <>
              <p>
                {APP} is a social connection and dating application that helps people meet and build
                meaningful relationships. Because we handle personal, sensitive, and potentially intimate
                information, we hold ourselves to the highest standards of data protection.
              </p>
              <p className="mt-3">
                This Privacy Policy applies to the {APP} mobile application available on Google Play and
                the Apple App Store. By using {APP}, you consent to the data practices described herein.
                If you do not agree with any aspect of this policy, please do not use {APP}.
              </p>
              <p className="mt-3">
                We will never sell your personal information, your messages, or your photos to any third
                party for advertising or any other purpose.
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
              <p className="font-semibold text-slate-200">Profile Information</p>
              <p className="mt-2">
                When you create a {APP} account and build your profile, we collect:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Name (first name required; last name optional)</li>
                <li>Date of birth (used to calculate and display your age)</li>
                <li>Gender identity and the genders you are open to connecting with</li>
                <li>Profile photographs and any other images you upload</li>
                <li>Profile biography and self-description</li>
                <li>Interests, hobbies, and lifestyle preferences you share</li>
                <li>Height, relationship goals, and other optional profile attributes</li>
                <li>Sexual orientation (optional, shared only according to your privacy settings)</li>
              </ul>
              <p className="mt-3 text-xs text-amber-400/80 border border-amber-500/20 bg-amber-500/5 rounded-lg p-3">
                Certain categories of data you may provide — such as gender identity and sexual orientation — are
                considered sensitive personal information under applicable privacy laws. We handle this data
                with heightened care and do not share it beyond what is necessary to operate the matching
                and connection features you have enabled.
              </p>

              <p className="font-semibold text-slate-200 mt-6">Account Verification and Security</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Email address (required for account creation and recovery)</li>
                <li>Phone number (used for optional SMS verification)</li>
                <li>Government ID type and verification status (for optional identity verification features; we do not store ID images long-term)</li>
                <li>Selfie photos used for liveness/identity checks (processed by our verification partner; deleted after verification)</li>
                <li>Account creation date, last active status, and device sign-in history</li>
              </ul>

              <p className="font-semibold text-slate-200 mt-6">Messages and Interactions</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  Messages you exchange with other {APP} users through our in-app messaging system. These
                  messages are encrypted in transit and stored securely on our servers.
                </li>
                <li>Likes, matches, and connection requests you send or receive</li>
                <li>Users you have blocked or reported</li>
                <li>Timestamps of message delivery and read receipts (when enabled)</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500 italic">
                {APP} does not provide end-to-end encrypted (E2EE) messaging by default. Messages are
                accessible to our moderation team for safety enforcement purposes as described in our
                community guidelines. We do not sell or share message content with third parties for any
                commercial purpose.
              </p>

              <p className="font-semibold text-slate-200 mt-6">Photos and Media</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  Profile photos and any additional photos you upload to your profile or share in messages
                </li>
                <li>Video content, if applicable to features you use</li>
              </ul>
              <p className="mt-2 text-sm">
                Photos you upload are stored on our secure cloud infrastructure. Your profile photos are
                displayed to other users according to your privacy settings. You retain ownership of your
                photos; by uploading them you grant us a license to store and display them as described in
                our Terms of Service.
              </p>

              <p className="font-semibold text-slate-200 mt-6">Location Information</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  <strong className="text-slate-300">Approximate Location:</strong> With your permission, we
                  collect your approximate location (city/region level) to show you potential matches in your
                  area and to display an approximate distance between you and other users. We do not show
                  your exact address or precise GPS coordinates to other users.
                </li>
                <li>
                  <strong className="text-slate-300">IP-Based Location:</strong> We may infer a general
                  location from your IP address for fraud prevention and compliance purposes.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Location access is requested at app launch. You can revoke location permissions at any time
                through your device settings. Revoking location may limit your ability to see nearby matches.
              </p>

              <p className="font-semibold text-slate-200 mt-6">Subscription and Payment Information</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Your subscription tier and status (free or premium)</li>
                <li>Subscription start date, renewal date, and history</li>
                <li>
                  Payment transactions are processed by Google Play or Apple App Store. {COMPANY} does not
                  receive or store your full payment card number or CVV.
                </li>
              </ul>

              <p className="font-semibold text-slate-200 mt-6">Usage Data and Analytics</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Session duration and frequency of app usage</li>
                <li>Features and screens accessed within the app</li>
                <li>Swipe behavior and engagement patterns (aggregated and anonymized)</li>
                <li>App performance metrics, error reports, and crash logs</li>
                <li>Device type, operating system version, and app version</li>
                <li>Advertising identifier (e.g., Google Advertising ID) if applicable</li>
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
              <p>We use your information to:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Facilitate Connections:</strong> Display your profile
                  to potential matches, power our matching algorithm, and enable in-app messaging.
                </li>
                <li>
                  <strong className="text-slate-300">Location-Based Matching:</strong> Show you users in
                  your selected geographic area and display approximate distances.
                </li>
                <li>
                  <strong className="text-slate-300">Account Management:</strong> Create, authenticate, and
                  manage your account and subscription.
                </li>
                <li>
                  <strong className="text-slate-300">Safety and Moderation:</strong> Review reports, enforce
                  our community guidelines, detect fraud and abusive behavior, and maintain the safety of our
                  platform.
                </li>
                <li>
                  <strong className="text-slate-300">Verification:</strong> Verify account identity where you
                  opt in to verification features, to build trust between users.
                </li>
                <li>
                  <strong className="text-slate-300">Notifications:</strong> Send you push notifications
                  about new matches, messages, and app activity.
                </li>
                <li>
                  <strong className="text-slate-300">Service Improvement:</strong> Analyze anonymized usage
                  data to improve features, fix bugs, and enhance user experience.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Compliance:</strong> Comply with applicable laws,
                  respond to lawful requests, and protect the rights and safety of our users and the public.
                </li>
                <li>
                  <strong className="text-slate-300">Customer Support:</strong> Respond to your inquiries and
                  resolve technical or account issues.
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-300">Matching Algorithm:</strong> We use profile attributes,
                location, stated preferences, and interaction patterns to suggest potential connections. We do
                not make fully automated decisions that produce significant legal or similarly significant
                effects on users.
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
                Your privacy is fundamental to {APP}. We do not sell your personal information, your
                messages, or your photos.
              </p>
              <p className="font-semibold text-slate-200 mt-4">Profile Visibility</p>
              <p className="mt-2">
                Your profile information — including your name, age, photos, bio, and interests — is visible
                to other {APP} users in accordance with your privacy settings. You can control which users
                see your profile and hide your profile at any time from within the app settings.
              </p>
              <p className="font-semibold text-slate-200 mt-4">Third-Party Service Providers</p>
              <p className="mt-2">
                We share limited data with service providers who assist us in operating {APP}:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Cloud hosting and database providers (for data storage and sync)</li>
                <li>Identity verification services (only when you opt in to verification)</li>
                <li>Payment processors (Google Play / Apple App Store)</li>
                <li>Analytics and crash reporting services</li>
                <li>Push notification delivery services</li>
                <li>Fraud detection and security services</li>
              </ul>
              <p className="mt-3">
                All service providers are contractually bound to use your data solely to provide services on
                our behalf and to maintain appropriate security measures.
              </p>
              <p className="font-semibold text-slate-200 mt-4">Legal Requirements and Safety</p>
              <p className="mt-2">
                We may disclose your information when required by law, subpoena, or court order. We may also
                disclose information to law enforcement or relevant authorities if we have a good-faith belief
                that disclosure is necessary to protect the safety of any person, prevent illegal activity,
                or respond to emergencies.
              </p>
              <p className="font-semibold text-slate-200 mt-4">Business Transfers</p>
              <p className="mt-2">
                In the event of a merger, acquisition, or sale of assets, your data may be transferred to the
                acquiring entity. We will notify you in advance and provide an opportunity to delete your
                account before such transfer occurs.
              </p>
            </>
          ),
        },
        {
          id: "location",
          number: "05",
          title: "Location Data",
          content: (
            <>
              <p>
                Location is central to {APP}'s matching features. Here is exactly what we do with it:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">What we collect:</strong> Approximate location (city
                  or region), not your precise street-level address.
                </li>
                <li>
                  <strong className="text-slate-300">What we show other users:</strong> Only an approximate
                  distance (e.g., "3 miles away"), never your exact location.
                </li>
                <li>
                  <strong className="text-slate-300">Permission:</strong> We request "while using the app"
                  location access and do not access your location in the background.
                </li>
                <li>
                  <strong className="text-slate-300">Control:</strong> You can revoke location permission at
                  any time through your device settings. You can also manually set or hide your location
                  within the app.
                </li>
                <li>
                  <strong className="text-slate-300">Retention:</strong> Location data is updated each time
                  you open the app and is not stored historically beyond what is needed for current matching.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "photos",
          number: "06",
          title: "Photos and Media",
          content: (
            <>
              <p>
                Photos are an essential part of the {APP} experience. Here is how we handle them:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Storage:</strong> Photos you upload are stored on
                  encrypted cloud servers.
                </li>
                <li>
                  <strong className="text-slate-300">Display:</strong> Profile photos are displayed to other
                  users according to your privacy settings. Photos shared in messages are visible only to
                  the recipient.
                </li>
                <li>
                  <strong className="text-slate-300">Moderation:</strong> Our team and/or automated systems
                  may review photos to enforce our community guidelines and detect prohibited content such
                  as child sexual abuse material (CSAM), hate symbols, or graphic violence. We use hash
                  matching technology in compliance with applicable laws.
                </li>
                <li>
                  <strong className="text-slate-300">Deletion:</strong> When you delete a photo or your
                  account, your photos are removed from our servers within 30 days. Copies may persist in
                  backup storage for a short additional period before being purged.
                </li>
                <li>
                  <strong className="text-slate-300">No sale or distribution:</strong> We do not license,
                  sell, or otherwise distribute your photos to any third party for any commercial purpose.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "subscriptions",
          number: "07",
          title: "Subscriptions and Purchases",
          content: (
            <>
              <p>
                {APP} offers free and premium subscription tiers. Subscriptions are processed through the
                Google Play Store or Apple App Store.
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">What we receive:</strong> We receive a transaction
                  confirmation from the app store, your subscription status, and renewal information. We do
                  not receive your full payment card details.
                </li>
                <li>
                  <strong className="text-slate-300">Auto-Renewal:</strong> Subscriptions auto-renew at the
                  end of each billing period. You may cancel at any time through your Google Play or Apple
                  App Store subscription settings.
                </li>
                <li>
                  <strong className="text-slate-300">Refunds:</strong> Refund requests must be directed to
                  the app store through which you made your purchase. We will cooperate with any refund
                  investigation as required.
                </li>
                <li>
                  <strong className="text-slate-300">Premium Features:</strong> Your subscription status is
                  used only to unlock in-app features and is not shared with other users beyond any
                  "verified" or premium badge you choose to display.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "safety",
          number: "08",
          title: "Safety and Moderation",
          content: (
            <>
              <p>
                User safety is our highest priority. We implement the following safety measures:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Reporting:</strong> All users can report inappropriate
                  profiles, messages, or behavior. Reports are reviewed by our safety team.
                </li>
                <li>
                  <strong className="text-slate-300">Blocking:</strong> You can block any user at any time
                  to prevent them from viewing your profile or contacting you.
                </li>
                <li>
                  <strong className="text-slate-300">Profile Review:</strong> New profiles may be reviewed
                  before becoming publicly visible to detect fake or fraudulent accounts.
                </li>
                <li>
                  <strong className="text-slate-300">Message Monitoring:</strong> We use automated systems
                  to detect and remove prohibited content, including spam, scams, and CSAM. Our moderation
                  team may review flagged messages.
                </li>
                <li>
                  <strong className="text-slate-300">Identity Verification:</strong> We offer optional
                  photo-verification features that allow users to demonstrate they are genuine.
                </li>
              </ul>
              <p className="mt-4">
                While we work hard to maintain a safe platform, {APP} cannot guarantee the conduct of its
                users. Please exercise appropriate caution when interacting with new connections. Never share
                financial information with people you meet online.
              </p>
            </>
          ),
        },
        {
          id: "third-party",
          number: "09",
          title: "Third-Party Services",
          content: (
            <>
              <p>{APP} uses the following categories of third-party services:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Cloud Infrastructure (Firebase / Google Cloud):</strong>{" "}
                  Profile data, messages, and photos are stored on Google Cloud infrastructure using
                  Firebase services.
                </li>
                <li>
                  <strong className="text-slate-300">Authentication (Firebase Auth):</strong> We use Firebase
                  Authentication for email/password login, Google Sign-In, and phone number verification.
                </li>
                <li>
                  <strong className="text-slate-300">Analytics (Firebase Analytics):</strong> We collect
                  anonymized, aggregated usage data. Individual behavior is not linked to your identity for
                  advertising purposes.
                </li>
                <li>
                  <strong className="text-slate-300">Crash Reporting (Firebase Crashlytics):</strong>{" "}
                  Technical crash reports help us fix bugs. Crash reports do not include message content
                  or photos.
                </li>
                <li>
                  <strong className="text-slate-300">Push Notifications (Firebase Cloud Messaging):</strong>{" "}
                  Used to deliver match notifications and messages. Notification content is delivered
                  securely.
                </li>
                <li>
                  <strong className="text-slate-300">Payment Processing (Google Play / Apple App Store):</strong>{" "}
                  All financial transactions are handled by the relevant app store. We do not process
                  payments directly.
                </li>
                <li>
                  <strong className="text-slate-300">Identity Verification (Third-Party Provider):</strong>{" "}
                  If you opt into verification, a third-party service may process your verification selfie.
                  We will disclose the specific provider in the app at the time of verification.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "data-retention",
          number: "10",
          title: "Data Retention",
          content: (
            <>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                  <strong className="text-slate-300">Active Accounts:</strong> Your profile, messages, and
                  photos are retained while your account is active.
                </li>
                <li>
                  <strong className="text-slate-300">Account Deletion:</strong> Upon account deletion, your
                  profile and photos are removed from public view immediately. Data is permanently deleted
                  from our servers within 30 days, except as required by law.
                </li>
                <li>
                  <strong className="text-slate-300">Messages:</strong> Messages in active conversations are
                  retained until you or the other party deletes the conversation or deactivates their
                  account.
                </li>
                <li>
                  <strong className="text-slate-300">Reports and Safety Records:</strong> Records related to
                  reported content, bans, or safety incidents may be retained longer (up to 5 years) to
                  prevent re-registration and protect other users.
                </li>
                <li>
                  <strong className="text-slate-300">Payment Records:</strong> Transaction history is
                  retained for 7 years for legal and accounting compliance.
                </li>
                <li>
                  <strong className="text-slate-300">Verification Data:</strong> Identity verification
                  images are deleted immediately after the verification check is completed; only the
                  verification status is retained.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "security",
          number: "11",
          title: "Security",
          content: (
            <>
              <p>
                Given the sensitive nature of {APP}'s data, we implement strong security measures:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>All data is encrypted in transit using TLS 1.2 or higher</li>
                <li>Profile data, messages, and photos are encrypted at rest</li>
                <li>Passwords are stored using strong one-way hashing (bcrypt or equivalent)</li>
                <li>
                  Firebase Security Rules ensure that each user can only access their own data and the
                  profiles of matched or permitted users
                </li>
                <li>Access controls limit employee access to user data on a need-to-know basis</li>
                <li>Multi-factor authentication is required for all administrative access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Automated monitoring for unusual access patterns and potential breaches</li>
              </ul>
              <p className="mt-4">
                If you discover a security vulnerability in {APP}, please disclose it responsibly to{" "}
                <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                  {SUPPORT}
                </a>
                . We take all vulnerability reports seriously.
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          number: "12",
          title: "Children's Privacy",
          content: (
            <>
              <p>
                <strong className="text-slate-300">{APP} is strictly for users aged 18 and older.</strong> We
                do not knowingly collect information from or about minors. If you are under 18 years of age,
                you are not permitted to use {APP} and must not create an account or provide any personal
                information.
              </p>
              <p className="mt-3">
                We implement age gate mechanisms during registration to restrict access to minors. If we
                learn or have reason to believe that a user is under 18, we will immediately suspend their
                account and delete their data.
              </p>
              <p className="mt-3">
                If you believe a minor has created an account on {APP}, please contact us immediately at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                  {SUPPORT}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "13",
          title: "Your Rights and Choices",
          content: (
            <>
              <p>You have the following rights regarding your data in {APP}:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Access:</strong> View all information in your profile
                  within the app at any time. Request a full export of your data by contacting{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                    {SUPPORT}
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-slate-300">Correction:</strong> Update your profile information
                  at any time from within the app.
                </li>
                <li>
                  <strong className="text-slate-300">Deletion:</strong> Delete individual photos, messages,
                  or your entire account from within the app's settings.
                </li>
                <li>
                  <strong className="text-slate-300">Restrict Processing:</strong> Hide your profile to
                  pause participation in matching without deleting your account.
                </li>
                <li>
                  <strong className="text-slate-300">Location Revocation:</strong> Revoke location permission
                  at any time via your device settings.
                </li>
                <li>
                  <strong className="text-slate-300">Withdraw Consent:</strong> For processing activities
                  based on consent (such as optional verification or marketing communications), you may
                  withdraw consent at any time without affecting prior processing.
                </li>
                <li>
                  <strong className="text-slate-300">Data Portability:</strong> Request a machine-readable
                  copy of your data by contacting us.
                </li>
                <li>
                  <strong className="text-slate-300">Lodge a Complaint:</strong> If you believe we have
                  violated your privacy rights, you may lodge a complaint with your local data protection
                  authority.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "google-play",
          number: "14",
          title: "Google Play Compliance",
          content: (
            <>
              <p>
                In accordance with Google Play Store policies, we make the following disclosures for the
                Data Safety section:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Data Collected:</strong> Name, email, date of birth,
                  photos, gender, sexual orientation (optional), location (approximate), messages, usage data,
                  and device identifiers.
                </li>
                <li>
                  <strong className="text-slate-300">Data Shared with Third Parties:</strong> Anonymized
                  analytics shared with Firebase/Google. Payment data shared with Google Play. Verification
                  data shared with our identity verification partner only when you opt in.
                </li>
                <li>
                  <strong className="text-slate-300">Data Not Sold:</strong> We do not sell your personal
                  information, messages, or photos.
                </li>
                <li>
                  <strong className="text-slate-300">Security:</strong> Data encrypted in transit and at
                  rest. Users can request deletion. Account deletion removes data within 30 days.
                </li>
                <li>
                  <strong className="text-slate-300">Age:</strong> {APP} is for users 18+. We implement
                  age gates and actively remove underage accounts.
                </li>
                <li>
                  <strong className="text-slate-300">Sensitive Data:</strong> Gender identity and sexual
                  orientation are optional fields handled with heightened protection. This data is not
                  processed for advertising.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "changes",
          number: "15",
          title: "Changes to This Policy",
          content: (
            <>
              <p>
                We may update this Privacy Policy from time to time. For material changes, we will notify
                you by posting a notice within the {APP} app, sending an email to your registered address,
                and updating the "Last Updated" date in this document.
              </p>
              <p className="mt-3">
                If changes are significant, we may require you to affirmatively acknowledge the updated
                policy before continuing to use {APP}. Your continued use of {APP} after the effective date
                of any change constitutes your acceptance.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          number: "16",
          title: "Contact Us",
          content: (
            <>
              <p>
                For all privacy-related questions, data requests, or safety concerns regarding {APP}:
              </p>
              <div className="mt-4 glass rounded-xl p-5 space-y-2">
                <p className="text-slate-200 font-semibold">{COMPANY}</p>
                <p>App: {APP}</p>
                <p>
                  Privacy &amp; Safety:{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                    {SUPPORT}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href={WEBSITE} className="text-violet-400 hover:text-violet-300">
                    {WEBSITE}
                  </a>
                </p>
              </div>
              <p className="mt-4">
                We take all privacy and safety reports seriously and will respond within 30 days.
                For urgent safety issues (e.g., reports of criminal activity, CSAM), we will respond
                within 24 hours.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
