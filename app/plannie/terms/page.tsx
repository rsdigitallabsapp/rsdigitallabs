import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Plannie by RS Digital Labs",
  description:
    "Plannie Terms of Service. Understand your rights and responsibilities when using Plannie, the date discovery app by RS Digital Labs.",
};

const LAST_UPDATED = "June 24, 2026";
const EFFECTIVE_DATE = "June 24, 2026";
const APP = "Plannie";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";

export default function PlannieTermsPage() {
  return (
    <LegalPage
      badge="Terms of Service"
      badgeColor="#22D3EE"
      title="Plannie Terms"
      titleAccent="of Service."
      subtitle={`These Terms of Service ("Terms") govern your use of ${APP}, a date discovery application developed by ${COMPANY} ("we," "us," or "our"). By downloading, installing, or using ${APP}, you agree to be bound by these Terms.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      appName={APP}
      backHref="/plannie"
      backLabel="Plannie"
      sections={[
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of Terms",
          content: (
            <>
              <p>
                By accessing or using {APP}, you confirm that you are at least 13 years of age (or the
                minimum age required in your jurisdiction), that you have read and understood these Terms,
                and that you agree to be bound by them.
              </p>
              <p className="mt-3">
                If you are using {APP} on behalf of an organization, you represent that you have the
                authority to bind that organization to these Terms. If you do not agree to these Terms,
                do not use {APP}.
              </p>
            </>
          ),
        },
        {
          id: "description",
          number: "02",
          title: "Description of Service",
          content: (
            <>
              <p>
                {APP} is a date discovery application that helps couples find restaurants, coffee shops,
                brunch spots, activities, movies, and spontaneous date ideas based on their selected
                location. {APP} provides curated recommendations from third-party place databases and
                does not own, operate, or endorse any of the businesses or venues it surfaces.
              </p>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue any part of {APP} at any time,
                with or without notice. We will not be liable to you or any third party for any such
                modification, suspension, or discontinuance.
              </p>
            </>
          ),
        },
        {
          id: "user-responsibilities",
          number: "03",
          title: "User Responsibilities",
          content: (
            <>
              <p>You agree to:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Keep your account credentials secure and not share them with others</li>
                <li>Notify us immediately at{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>{" "}
                  if you suspect unauthorized access to your account
                </li>
                <li>Use {APP} only for lawful purposes and in accordance with these Terms</li>
                <li>Not use {APP} in any way that could damage, disable, or impair our servers or networks</li>
                <li>Not attempt to gain unauthorized access to any part of {APP} or its related systems</li>
              </ul>
              <p className="mt-4">
                You are responsible for all activity that occurs under your account.
              </p>
            </>
          ),
        },
        {
          id: "acceptable-use",
          number: "04",
          title: "Acceptable Use",
          content: (
            <>
              <p>You may not use {APP} to:</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Violate any applicable local, state, national, or international law or regulation</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any portion of {APP}</li>
                <li>
                  Scrape, crawl, or extract data from {APP} using automated tools without our prior
                  written consent
                </li>
                <li>Impersonate any person or entity, or falsely claim affiliation with any person or entity</li>
                <li>Interfere with or disrupt the integrity or performance of {APP}</li>
                <li>Engage in any conduct that restricts or inhibits any other user's enjoyment of {APP}</li>
              </ul>
            </>
          ),
        },
        {
          id: "subscriptions",
          number: "05",
          title: "Subscription Terms",
          content: (
            <>
              <p className="font-semibold text-slate-200">Plannie Premium</p>
              <p className="mt-2">
                {APP} offers a premium subscription ("Plannie Premium") that unlocks additional features
                including more date plans, unlimited exploration, the Surprise Date Generator, plan
                sharing, and future premium features.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Billing</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  Subscriptions are billed through the Apple App Store or Google Play Store, depending on
                  your device. Billing terms are set by the respective platform.
                </li>
                <li>
                  Subscription fees are charged to your account on a recurring basis (weekly, monthly, or
                  annually, as selected) until cancelled.
                </li>
                <li>
                  You will be charged for renewal within 24 hours prior to the end of each billing period.
                </li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Cancellation</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>
                  You may cancel your subscription at any time through your App Store or Google Play
                  account settings.
                </li>
                <li>
                  Cancellation takes effect at the end of the current billing period. You will continue
                  to have access to Premium features until that date.
                </li>
                <li>
                  We do not provide refunds for unused portions of a subscription period, except as
                  required by applicable law or as required by the platform's refund policy.
                </li>
              </ul>

              <p className="font-semibold text-slate-200 mt-5">Free Trials</p>
              <p className="mt-2">
                We may offer free trials for Plannie Premium. If you do not cancel before the trial ends,
                you will be automatically charged for the subscription at the applicable rate.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Price Changes</p>
              <p className="mt-2">
                We reserve the right to change subscription prices at any time. We will provide you with
                reasonable advance notice of any price changes. Your continued subscription after the
                price change takes effect constitutes your acceptance of the new price.
              </p>
            </>
          ),
        },
        {
          id: "recommendations-disclaimer",
          number: "06",
          title: "Disclaimer of Recommendations",
          content: (
            <>
              <p>
                {APP} provides place recommendations sourced from third-party databases and APIs.{" "}
                <strong className="text-slate-300">
                  {COMPANY} does not own, operate, endorse, or guarantee any restaurant, activity venue,
                  business, or service recommended by {APP}.
                </strong>
              </p>
              <p className="mt-3">
                Recommendations are provided for informational and entertainment purposes only.
                Availability, hours, quality, pricing, and other attributes of recommended places may
                change at any time. We strongly recommend that you:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-2">
                <li>Verify opening hours and availability directly with the venue before visiting</li>
                <li>Make reservations where applicable</li>
                <li>Review current ratings and feedback from other sources</li>
              </ul>
              <p className="mt-3">
                {COMPANY} is not responsible for any experience you have at a recommended venue,
                including but not limited to issues with quality, service, safety, or availability.
              </p>
            </>
          ),
        },
        {
          id: "intellectual-property",
          number: "07",
          title: "Intellectual Property",
          content: (
            <>
              <p>
                {APP} and all content, features, and functionality within it — including but not limited
                to the software, design, text, graphics, logos, and icons — are owned by {COMPANY} and
                are protected by applicable intellectual property laws.
              </p>
              <p className="mt-3">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use {APP}
                for your personal, non-commercial use in accordance with these Terms.
              </p>
              <p className="mt-3">
                You may not copy, modify, distribute, sell, or lease any part of {APP} or its content,
                nor may you reverse engineer or attempt to extract the source code of {APP}, unless laws
                prohibit these restrictions or you have our written permission.
              </p>
            </>
          ),
        },
        {
          id: "limitation-of-liability",
          number: "08",
          title: "Limitation of Liability",
          content: (
            <>
              <p>
                To the fullest extent permitted by applicable law, {COMPANY} and its officers, directors,
                employees, and agents shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Loss of profits, revenue, or data</li>
                <li>Personal injury or property damage arising from your use of {APP}</li>
                <li>Experiences at venues or businesses recommended by {APP}</li>
                <li>Unauthorized access to or alteration of your account or data</li>
                <li>Interruption or cessation of the {APP} service</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted via {APP}</li>
              </ul>
              <p className="mt-4">
                In no event shall our total liability to you for all claims arising from or related to
                these Terms or your use of {APP} exceed the greater of (a) the amount you paid to us in
                the twelve months preceding the claim, or (b) $50 USD.
              </p>
              <p className="mt-3">
                Some jurisdictions do not allow the exclusion or limitation of liability for certain
                damages. In such jurisdictions, our liability is limited to the maximum extent permitted
                by law.
              </p>
            </>
          ),
        },
        {
          id: "disclaimer-of-warranties",
          number: "09",
          title: "Disclaimer of Warranties",
          content: (
            <>
              <p>
                {APP} is provided on an "as is" and "as available" basis without warranties of any kind,
                either express or implied, including but not limited to warranties of merchantability,
                fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p className="mt-3">
                {COMPANY} does not warrant that: (a) {APP} will function uninterrupted, securely, or be
                available at any particular time or location; (b) any errors or defects will be corrected;
                (c) {APP} is free of viruses or other harmful components; or (d) the results of using{" "}
                {APP} will meet your requirements.
              </p>
            </>
          ),
        },
        {
          id: "account-termination",
          number: "10",
          title: "Account Termination",
          content: (
            <>
              <p className="font-semibold text-slate-200">Termination by You</p>
              <p className="mt-2">
                You may delete your account at any time from within {APP}'s settings. Upon deletion, your
                account and associated data will be permanently removed within 30 days.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Termination by Us</p>
              <p className="mt-2">
                We reserve the right to suspend or terminate your account at our sole discretion, with or
                without notice, if we believe you have violated these Terms or if we are required to do so
                by law.
              </p>

              <p className="font-semibold text-slate-200 mt-5">Effect of Termination</p>
              <p className="mt-2">
                Upon termination, your right to use {APP} ceases immediately. Sections of these Terms
                that by their nature should survive termination (including Sections 7, 8, 9, 11, and 12)
                will remain in effect.
              </p>
            </>
          ),
        },
        {
          id: "governing-law",
          number: "11",
          title: "Governing Law & Disputes",
          content: (
            <>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United
                States, without regard to its conflict of law provisions.
              </p>
              <p className="mt-3">
                Any dispute arising from or relating to these Terms or your use of {APP} shall first be
                resolved through good-faith negotiation. If the dispute cannot be resolved informally, it
                shall be submitted to binding arbitration in accordance with the rules of the American
                Arbitration Association.
              </p>
              <p className="mt-3">
                You agree to resolve disputes with {COMPANY} on an individual basis. You waive any right
                to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          number: "12",
          title: "Changes to These Terms",
          content: (
            <>
              <p>
                We reserve the right to modify these Terms at any time. When we make material changes,
                we will notify you by updating the "Last Updated" date at the top of this page and, where
                appropriate, providing notice within {APP} or via email.
              </p>
              <p className="mt-3">
                Your continued use of {APP} after the effective date of the revised Terms constitutes
                your acceptance of the changes. If you do not agree to the new Terms, you must stop using{" "}
                {APP}.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          number: "13",
          title: "Contact Us",
          content: (
            <>
              <p>If you have questions about these Terms of Service:</p>
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
                We will respond to all inquiries within 30 days.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
