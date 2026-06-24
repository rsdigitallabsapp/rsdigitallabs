import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — RS Digital Labs",
  description:
    "RS Digital Labs Terms of Service. Read our terms and conditions for using our products and services.",
};

const LAST_UPDATED = "June 23, 2026";
const EFFECTIVE_DATE = "June 23, 2026";
const COMPANY = "RS Digital Labs";
const WEBSITE = "https://rsdigitallabs.com";
const SUPPORT = "support@rsdigitallabs.com";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      badge="Terms of Service"
      badgeColor="#22D3EE"
      title="Terms of"
      titleAccent="Service."
      subtitle={`These Terms of Service ("Terms") govern your access to and use of the products, services, and websites (collectively, the "Services") provided by ${COMPANY} ("we," "us," or "our"). Please read these Terms carefully before using our Services.`}
      lastUpdated={LAST_UPDATED}
      effectiveDate={EFFECTIVE_DATE}
      sections={[
        {
          id: "acceptance",
          number: "01",
          title: "Acceptance of Terms",
          content: (
            <>
              <p>
                By accessing or using any of our Services, you agree to be bound by these Terms. If you do not
                agree to these Terms, you may not access or use our Services.
              </p>
              <p className="mt-3">
                If you are accepting these Terms on behalf of an organization, you represent and warrant that
                you have the authority to bind that organization to these Terms. In that case, "you" and
                "your" will refer to that organization.
              </p>
              <p className="mt-3">
                You must be at least 13 years of age to use our Services. By agreeing to these Terms, you
                represent and warrant that you are at least 13 years old. Some of our Services may have higher
                age requirements, which will be stated in the applicable product terms.
              </p>
            </>
          ),
        },
        {
          id: "description",
          number: "02",
          title: "Description of Services",
          content: (
            <>
              <p>
                {COMPANY} develops and operates a portfolio of software applications and digital products
                designed to improve everyday life. Our current Services include:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">CHIQ:</strong> A social connection and dating application
                  designed to help people meet and build meaningful relationships.
                </li>
                <li>
                  <strong className="text-slate-300">Plannie:</strong> A productivity and task planning
                  application designed to help users organize and execute their goals.
                </li>
                <li>
                  <strong className="text-slate-300">OLIVIA:</strong> A personal memory and life assistant
                  application designed to help users capture and manage important life information.
                </li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time,
                with or without notice. We will not be liable to you or any third party for any such
                modification, suspension, or discontinuation.
              </p>
            </>
          ),
        },
        {
          id: "accounts",
          number: "03",
          title: "User Accounts",
          content: (
            <>
              <p>
                To access certain features of our Services, you may be required to create an account. When
                creating an account, you agree to:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain and promptly update your account information to keep it accurate</li>
                <li>
                  Maintain the confidentiality of your account credentials and be fully responsible for all
                  activities that occur under your account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account or any other breach of
                  security at{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>
                </li>
                <li>Not share your account credentials with any third party</li>
                <li>Not create multiple accounts for abusive purposes</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate your account if any information provided is
                inaccurate, false, or no longer current, or if you violate any provision of these Terms.
              </p>
            </>
          ),
        },
        {
          id: "conduct",
          number: "04",
          title: "User Conduct and Acceptable Use",
          content: (
            <>
              <p>
                You agree to use our Services only for lawful purposes and in a manner that does not infringe
                the rights of, or restrict or inhibit, anyone else's use and enjoyment of the Services. You
                must not:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Use our Services in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Impersonate any person or entity, or falsely claim an affiliation with any person or entity</li>
                <li>Engage in any form of harassment, bullying, or intimidation of other users</li>
                <li>
                  Collect or store personal data about other users without their express consent in violation
                  of applicable privacy laws
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of our Services, or any other systems or
                  networks connected to our Services
                </li>
                <li>
                  Use automated means (bots, scrapers, crawlers) to access or interact with our Services
                  without our express written permission
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of
                  our Services
                </li>
                <li>
                  Transmit any advertising or promotional material without our prior written consent, including
                  spam
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of our Services, servers, or networks
                </li>
                <li>
                  Upload, post, or transmit any content that infringes any patent, trademark, trade secret,
                  copyright, or other proprietary rights
                </li>
              </ul>
              <p className="mt-4">
                We reserve the right, but are not obligated, to monitor your use of the Services and to
                remove or disable access to any content that violates these Terms or that we consider
                objectionable for any reason, at our sole discretion.
              </p>
            </>
          ),
        },
        {
          id: "content",
          number: "05",
          title: "User Content",
          content: (
            <>
              <p>
                Our Services may allow you to submit, upload, post, or otherwise make available content,
                including text, photographs, audio, video, or other material ("User Content"). You retain all
                rights in your User Content.
              </p>
              <p className="mt-3">
                By submitting User Content to our Services, you grant {COMPANY} a worldwide, non-exclusive,
                royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare
                derivative works of, display, and perform the User Content in connection with the Services and
                our business operations, including for promoting and redistributing part or all of the Services.
              </p>
              <p className="mt-3">
                You represent and warrant that: (i) you own or control all rights in and to the User Content;
                (ii) your User Content does not violate the rights of any third party; and (iii) your User
                Content complies with these Terms and all applicable laws.
              </p>
              <p className="mt-3">
                We are not responsible or liable for any User Content posted by you or any other user of the
                Services. We reserve the right to remove any User Content at any time without notice if we
                determine, in our sole discretion, that it violates these Terms or is otherwise objectionable.
              </p>
            </>
          ),
        },
        {
          id: "subscriptions",
          number: "06",
          title: "Subscriptions and Payments",
          content: (
            <>
              <p>
                Some features of our Services require payment. By subscribing to a paid plan or making an
                in-app purchase, you agree to the following:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>
                  <strong className="text-slate-300">Billing:</strong> You authorize us (or our payment
                  processor) to charge the payment method you provide for the applicable subscription fees or
                  purchase price, plus any applicable taxes.
                </li>
                <li>
                  <strong className="text-slate-300">Auto-Renewal:</strong> Subscriptions automatically renew
                  at the end of each billing period unless you cancel before the renewal date. You can manage
                  and cancel subscriptions through your device's app store settings (Google Play or Apple App
                  Store).
                </li>
                <li>
                  <strong className="text-slate-300">Price Changes:</strong> We may change subscription
                  prices at any time. We will notify you of price changes with reasonable advance notice.
                  Continued use after the effective date constitutes acceptance of the new price.
                </li>
                <li>
                  <strong className="text-slate-300">Refunds:</strong> All purchases are generally
                  non-refundable except where required by applicable law or as provided in the applicable app
                  store's refund policies. To request a refund, please contact your app store directly or
                  reach us at{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-slate-300">Free Trials:</strong> If you begin a free trial, you
                  will not be charged until the trial period ends. You may cancel before the trial ends to
                  avoid being charged.
                </li>
              </ul>
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
                The Services and all content, features, and functionality thereof — including but not limited
                to text, graphics, logos, icons, images, audio clips, video clips, software, and the
                compilation thereof — are and shall remain the exclusive property of {COMPANY} and its
                licensors and are protected by copyright, trademark, trade dress, patent, and other
                intellectual property laws.
              </p>
              <p className="mt-3">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
                non-sublicensable, revocable license to access and use our Services for your personal,
                non-commercial purposes.
              </p>
              <p className="mt-3">
                You may not: (i) reproduce, modify, publish, transmit, create derivative works of, display,
                or in any way exploit our Services or any content therein; (ii) use our trademarks, service
                marks, trade names, or other proprietary designations without our prior written consent; or
                (iii) remove any copyright, trademark, or other proprietary notices contained in or on the
                Services.
              </p>
            </>
          ),
        },
        {
          id: "disclaimers",
          number: "08",
          title: "Disclaimer of Warranties",
          content: (
            <>
              <p className="uppercase font-semibold text-slate-300 text-xs tracking-wider">
                Important — please read carefully
              </p>
              <p className="mt-3">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTY OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF DEALING. {COMPANY.toUpperCase()} DOES
                NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES
                OR OTHER HARMFUL COMPONENTS.
              </p>
              <p className="mt-3">
                We do not warrant or guarantee the accuracy, completeness, or usefulness of any content
                available through our Services, and we disclaim all liability arising from reliance on such
                content by you or any third party.
              </p>
            </>
          ),
        },
        {
          id: "liability",
          number: "09",
          title: "Limitation of Liability",
          content: (
            <>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {COMPANY.toUpperCase()},
                ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Your access to, use of, or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your content or transmissions</li>
              </ul>
              <p className="mt-4">
                In no event shall our total liability to you for all claims arising out of or relating to
                these Terms or the use of the Services exceed the greater of (i) the amount you paid to us in
                the twelve (12) months prior to the claim or (ii) one hundred U.S. dollars ($100).
              </p>
              <p className="mt-3">
                The limitations of liability above shall apply regardless of the form of the claim, whether
                in contract, tort, strict liability, or otherwise, and even if {COMPANY} has been advised of
                the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation
                of certain damages, so some of the above limitations may not apply to you.
              </p>
            </>
          ),
        },
        {
          id: "indemnification",
          number: "10",
          title: "Indemnification",
          content: (
            <>
              <p>
                You agree to indemnify, defend, and hold harmless {COMPANY}, its affiliates, officers,
                directors, employees, agents, licensors, and service providers from and against any and all
                claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including
                reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 mt-3">
                <li>Your violation of these Terms</li>
                <li>Your User Content</li>
                <li>Your use of the Services</li>
                <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
                <li>Your violation of any applicable law or regulation</li>
              </ul>
            </>
          ),
        },
        {
          id: "termination",
          number: "11",
          title: "Termination",
          content: (
            <>
              <p>
                We may terminate or suspend your access to all or part of the Services, with or without
                notice, for any reason, including if we reasonably believe you have violated these Terms.
              </p>
              <p className="mt-3">
                You may terminate your account at any time by following the instructions within the app or by
                contacting us at{" "}
                <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                  {SUPPORT}
                </a>
                .
              </p>
              <p className="mt-3">
                Upon termination, your right to use the Services will immediately cease. All provisions of
                these Terms that by their nature should survive termination shall survive, including ownership
                provisions, warranty disclaimers, and limitations of liability.
              </p>
            </>
          ),
        },
        {
          id: "governing-law",
          number: "12",
          title: "Governing Law and Dispute Resolution",
          content: (
            <>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United
                States and the State of Florida, without regard to its conflict of law provisions.
              </p>
              <p className="mt-3">
                Any dispute arising out of or relating to these Terms or the Services that cannot be resolved
                informally shall be submitted to binding arbitration. The arbitration shall be conducted under
                the rules of the American Arbitration Association. The arbitration will take place in Florida,
                and the language of arbitration shall be English.
              </p>
              <p className="mt-3">
                <strong className="text-slate-300">Class Action Waiver:</strong> You agree that any dispute
                resolution proceedings will be conducted only on an individual basis and not in a class,
                consolidated, or representative action. If for any reason a claim proceeds in court rather
                than in arbitration, both you and {COMPANY} waive any right to a jury trial.
              </p>
              <p className="mt-3">
                Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in
                any court of competent jurisdiction to prevent the actual or threatened infringement of a
                party's intellectual property rights.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          number: "13",
          title: "Changes to These Terms",
          content: (
            <>
              <p>
                We reserve the right to modify these Terms at any time. When we make material changes, we
                will provide notice through the Services, by email, or by other means. The updated Terms will
                be indicated by the revised "Last Updated" date at the top.
              </p>
              <p className="mt-3">
                Your continued use of the Services after the effective date of the revised Terms constitutes
                your acceptance of the changes. If you do not agree to the revised Terms, you must stop
                accessing and using the Services.
              </p>
            </>
          ),
        },
        {
          id: "general",
          number: "14",
          title: "General Provisions",
          content: (
            <>
              <ul className="list-disc list-outside pl-5 space-y-3">
                <li>
                  <strong className="text-slate-300">Entire Agreement:</strong> These Terms, together with
                  our Privacy Policy and any other terms incorporated by reference, constitute the entire
                  agreement between you and {COMPANY} regarding the Services.
                </li>
                <li>
                  <strong className="text-slate-300">Severability:</strong> If any provision of these Terms
                  is found to be unenforceable or invalid, that provision will be limited or eliminated to the
                  minimum extent necessary, and the remaining provisions will remain in full force.
                </li>
                <li>
                  <strong className="text-slate-300">Waiver:</strong> Our failure to enforce any right or
                  provision of these Terms will not constitute a waiver of such right or provision.
                </li>
                <li>
                  <strong className="text-slate-300">Assignment:</strong> You may not assign or transfer
                  these Terms without our prior written consent. We may assign our rights and obligations
                  under these Terms without restriction.
                </li>
                <li>
                  <strong className="text-slate-300">Contact:</strong> For questions about these Terms,
                  please contact us at{" "}
                  <a href={`mailto:${SUPPORT}`} className="text-cyan-400 hover:text-cyan-300">
                    {SUPPORT}
                  </a>{" "}
                  or visit our website at{" "}
                  <a href={WEBSITE} className="text-cyan-400 hover:text-cyan-300">
                    {WEBSITE}
                  </a>
                  .
                </li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}
