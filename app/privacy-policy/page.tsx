import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — RS Digital Labs",
  description:
    "RS Digital Labs Privacy Policy. Learn how we collect, use, and protect your personal information across all our products.",
};

const LAST_UPDATED = "June 23, 2026";
const EFFECTIVE_DATE = "June 23, 2026";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";
const CONTACT = "support@rsdigitallabs.com";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Your privacy,"
      titleAccent="protected."
      subtitle={`This Privacy Policy describes how ${COMPANY} ("we," "us," or "our") collects, uses, and shares information about you when you use our websites, mobile applications, and other products and services (collectively, the "Services").`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      sections={[
        {
          id: "information-collected",
          number: "01",
          title: "Information We Collect",
          content: (
            <>
              <p>
                We collect information you provide directly to us, information we collect automatically when
                you use our Services, and information from third-party sources.
              </p>
              <p className="font-semibold text-slate-200 mt-4">Information You Provide</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5">
                <li>
                  <strong className="text-slate-300">Account Information:</strong> When you register for an
                  account, we collect your name, email address, username, and password.
                </li>
                <li>
                  <strong className="text-slate-300">Profile Data:</strong> Any additional information you
                  choose to add to your profile, such as a profile picture or bio.
                </li>
                <li>
                  <strong className="text-slate-300">Communications:</strong> If you contact us for support or
                  other inquiries, we collect the content of those communications.
                </li>
                <li>
                  <strong className="text-slate-300">Payment Information:</strong> If you purchase a
                  subscription or in-app purchase, payment details are processed by our third-party payment
                  processors. We do not store your full payment card information.
                </li>
              </ul>
              <p className="font-semibold text-slate-200 mt-4">Information We Collect Automatically</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5">
                <li>
                  <strong className="text-slate-300">Usage Data:</strong> Pages or features accessed,
                  actions taken within the app, time spent, and other usage statistics.
                </li>
                <li>
                  <strong className="text-slate-300">Device Information:</strong> Device type, operating
                  system version, unique device identifiers, IP address, browser type, and mobile network
                  information.
                </li>
                <li>
                  <strong className="text-slate-300">Log Data:</strong> Server logs including the date and
                  time of requests, the features accessed, and any error reports.
                </li>
                <li>
                  <strong className="text-slate-300">Cookies and Similar Technologies:</strong> We use
                  cookies and similar tracking technologies to operate and improve our Services and remember
                  your preferences. You may control cookies through your browser settings.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use",
          number: "02",
          title: "How We Use Your Information",
          content: (
            <>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5">
                <li>Provide, maintain, and improve our Services</li>
                <li>Create and manage your account</li>
                <li>Process transactions and send related information, including purchase confirmations and invoices</li>
                <li>Send technical notices, security alerts, and support messages</li>
                <li>Respond to comments, questions, and requests and provide customer service</li>
                <li>Monitor and analyze usage patterns to improve user experience</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
                <li>Send promotional communications, where you have opted in to receive them</li>
                <li>Personalize your experience within our Services</li>
              </ul>
              <p className="mt-4">
                We process your personal data on the following legal bases: performance of a contract (to
                deliver the Services you signed up for), our legitimate business interests (to improve and
                secure our Services), compliance with legal obligations, and with your consent where required.
              </p>
            </>
          ),
        },
        {
          id: "sharing",
          number: "03",
          title: "Sharing of Information",
          content: (
            <>
              <p>
                We do not sell your personal information. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5">
                <li>
                  <strong className="text-slate-300">Service Providers:</strong> We share information with
                  third-party vendors and service providers who perform services on our behalf, such as cloud
                  hosting, payment processing, analytics, and customer support. These parties are contractually
                  bound to use your data only to perform services for us.
                </li>
                <li>
                  <strong className="text-slate-300">Legal Requirements:</strong> We may disclose your
                  information if required to do so by law, in response to a subpoena or court order, or if we
                  believe disclosure is necessary to protect our rights, protect your safety or the safety of
                  others, or investigate fraud.
                </li>
                <li>
                  <strong className="text-slate-300">Business Transfers:</strong> In connection with any
                  merger, sale of company assets, or acquisition, your personal information may be transferred
                  as a business asset.
                </li>
                <li>
                  <strong className="text-slate-300">With Your Consent:</strong> We may share your information
                  in other ways with your consent.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "third-party",
          number: "04",
          title: "Third-Party Services",
          content: (
            <>
              <p>
                Our Services may integrate with or rely on the following categories of third-party services.
                Each has its own privacy policy governing its use of your data:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5">
                <li>
                  <strong className="text-slate-300">Cloud Infrastructure:</strong> We use cloud providers
                  (such as Google Cloud Platform or Amazon Web Services) to host our Services and store data
                  securely.
                </li>
                <li>
                  <strong className="text-slate-300">Analytics:</strong> We use analytics services (such as
                  Google Analytics or Firebase Analytics) to understand how users interact with our Services.
                  These services may set cookies or collect device identifiers.
                </li>
                <li>
                  <strong className="text-slate-300">Payment Processing:</strong> Payments are processed by
                  third-party payment processors (such as Stripe or Apple/Google In-App Purchase systems).
                  Your payment information is subject to their privacy policies.
                </li>
                <li>
                  <strong className="text-slate-300">Push Notifications:</strong> We use push notification
                  services (such as Firebase Cloud Messaging) to send you in-app notifications.
                </li>
                <li>
                  <strong className="text-slate-300">Crash Reporting:</strong> We use crash reporting tools
                  (such as Firebase Crashlytics) to identify and fix technical issues.
                </li>
              </ul>
              <p className="mt-4">
                Our Services may also contain links to third-party websites. We are not responsible for the
                privacy practices of those sites and encourage you to review their privacy policies.
              </p>
            </>
          ),
        },
        {
          id: "data-retention",
          number: "05",
          title: "Data Retention",
          content: (
            <>
              <p>
                We retain your personal information for as long as necessary to provide our Services and
                fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is
                required or permitted by law.
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Account Data:</strong> Retained for the duration of your
                  account and for up to 30 days after account deletion to allow for account recovery, then
                  permanently deleted or anonymized.
                </li>
                <li>
                  <strong className="text-slate-300">Transaction Records:</strong> Retained for 7 years as
                  required by financial and tax regulations.
                </li>
                <li>
                  <strong className="text-slate-300">Aggregated Analytics:</strong> Anonymized usage
                  statistics may be retained indefinitely as they cannot be linked to any individual.
                </li>
                <li>
                  <strong className="text-slate-300">Support Communications:</strong> Retained for up to 2
                  years from the date of your last inquiry.
                </li>
                <li>
                  <strong className="text-slate-300">Log Data:</strong> Typically retained for 90 days for
                  security and debugging purposes.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "security",
          number: "06",
          title: "Security",
          content: (
            <>
              <p>
                We implement and maintain commercially reasonable technical and organizational security
                measures designed to protect your information from unauthorized access, disclosure, alteration,
                and destruction. These measures include:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Encryption of data in transit using TLS/HTTPS</li>
                <li>Encryption of sensitive data at rest using industry-standard encryption algorithms</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls limiting employee access to personal data on a need-to-know basis</li>
                <li>Multi-factor authentication for administrative access</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your personal information, no security system is impenetrable. We
                cannot guarantee the absolute security of your information. In the event of a data breach that
                affects your rights and freedoms, we will notify affected users and relevant authorities as
                required by applicable law.
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          number: "07",
          title: "Children's Privacy",
          content: (
            <>
              <p>
                Our Services are not directed to or intended for individuals under the age of 13 (or the
                applicable minimum age in your jurisdiction). We do not knowingly collect personal information
                from children under 13. If we learn that we have collected personal information from a child
                under 13 without verification of parental consent, we will take steps to delete that
                information promptly.
              </p>
              <p className="mt-3">
                If you believe we have inadvertently collected information from a child under 13, please
                contact us immediately at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                  {SUPPORT}
                </a>
                . Parents or legal guardians who believe their child has provided personal information may
                also contact us to request deletion.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "08",
          title: "Your Rights",
          content: (
            <>
              <p>
                Depending on your location, you may have certain rights with respect to your personal
                information:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Access:</strong> Request a copy of the personal
                  information we hold about you.
                </li>
                <li>
                  <strong className="text-slate-300">Correction:</strong> Request that we correct inaccurate
                  or incomplete personal information.
                </li>
                <li>
                  <strong className="text-slate-300">Deletion:</strong> Request that we delete your personal
                  information, subject to certain exceptions.
                </li>
                <li>
                  <strong className="text-slate-300">Portability:</strong> Request that we provide your
                  personal information in a structured, commonly used, and machine-readable format.
                </li>
                <li>
                  <strong className="text-slate-300">Objection:</strong> Object to processing of your personal
                  information where we rely on our legitimate interests as the legal basis.
                </li>
                <li>
                  <strong className="text-slate-300">Restriction:</strong> Request that we restrict the
                  processing of your personal information in certain circumstances.
                </li>
                <li>
                  <strong className="text-slate-300">Withdraw Consent:</strong> Where processing is based on
                  your consent, you may withdraw that consent at any time without affecting the lawfulness of
                  processing prior to withdrawal.
                </li>
                <li>
                  <strong className="text-slate-300">Opt-Out of Marketing:</strong> Unsubscribe from marketing
                  emails at any time by clicking the "unsubscribe" link in any email or contacting us directly.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                  {SUPPORT}
                </a>
                . We will respond to your request within 30 days. We may need to verify your identity before
                fulfilling your request. Please note that certain information may be exempt from such requests
                in some circumstances.
              </p>
              <p className="mt-3">
                If you are a California resident, you may have additional rights under the California Consumer
                Privacy Act (CCPA). If you are in the European Economic Area, you may have rights under the
                General Data Protection Regulation (GDPR). Please contact us to learn more.
              </p>
            </>
          ),
        },
        {
          id: "international-transfers",
          number: "09",
          title: "International Data Transfers",
          content: (
            <>
              <p>
                {COMPANY} is based in the United States. If you access our Services from outside the United
                States, please be aware that your information may be transferred to, stored, and processed in
                the United States where our servers are located and our central database operates.
              </p>
              <p className="mt-3">
                If you are located in the European Economic Area, United Kingdom, or Switzerland, we take
                steps to ensure that your personal information receives the same level of protection as if it
                remained in your home jurisdiction. We may transfer personal data to countries that have been
                determined to offer adequate protection, or implement appropriate safeguards such as standard
                contractual clauses.
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
                We may update this Privacy Policy from time to time. When we make material changes, we will
                notify you by:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Posting the updated policy to our website and updating the "Last Updated" date at the top</li>
                <li>Sending an email to the email address associated with your account</li>
                <li>Displaying a prominent notice within our apps</li>
              </ul>
              <p className="mt-4">
                Your continued use of the Services after such notification constitutes your acceptance of the
                updated Privacy Policy. We encourage you to review this policy periodically.
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
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy
                practices, please contact us at:
              </p>
              <div className="mt-4 glass rounded-xl p-5 space-y-2">
                <p className="text-slate-200 font-semibold">{COMPANY}</p>
                <p>
                  Website:{" "}
                  <a href={WEBSITE} className="text-violet-400 hover:text-violet-300">
                    {WEBSITE}
                  </a>
                </p>
                <p>
                  Privacy Inquiries:{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-violet-400 hover:text-violet-300">
                    {SUPPORT}
                  </a>
                </p>
                <p>
                  General Contact:{" "}
                  <a href={`mailto:${CONTACT}`} className="text-violet-400 hover:text-violet-300">
                    {CONTACT}
                  </a>
                </p>
              </div>
              <p className="mt-4">
                We take all privacy concerns seriously and will respond to your inquiry within 30 days.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
