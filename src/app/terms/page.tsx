import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Sauce",
  description: "Terms of service for the Sauce recipe app.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">
          Terms of Service
        </h1>
        <p className="text-secondary mb-12">Last updated: March 17, 2026</p>

        <p className="text-primary/90 leading-relaxed mb-10">
          Welcome to Sauce (&ldquo;the App&rdquo;). By downloading, accessing,
          or using Sauce, you agree to be bound by these Terms of Service
          (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use
          the App.
        </p>

        <div className="space-y-10 text-primary/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              1. Description of Service
            </h2>
            <p>
              Sauce is a recipe management application that allows users to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                Import recipes from URLs, photos, and camera scans using
                AI-powered extraction
              </li>
              <li>Create and organize custom recipes into collections</li>
              <li>Manage grocery lists and pantry inventories</li>
              <li>
                Access step-by-step cooking mode with built-in timers
              </li>
              <li>Save and favorite recipes for easy access</li>
              <li>
                Share recipe links from other apps via the iOS Share Extension
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 13 years of age to use Sauce. By using the
              App, you represent and warrant that you meet this age requirement.
              If you are under 18, you represent that you have your parent or
              guardian&apos;s consent to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              3. Account Registration
            </h2>
            <p>
              You may create an account using Sign in with Apple or Google
              Sign-In. You are responsible for maintaining the confidentiality of
              your account credentials and for all activities that occur under
              your account. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              4. Subscriptions and Payments
            </h2>
            <p>
              Sauce offers premium features through auto-renewable subscriptions
              managed via Apple&apos;s App Store. By subscribing:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                Payment is charged to your Apple ID account at confirmation of
                purchase.
              </li>
              <li>
                Subscriptions automatically renew unless canceled at least 24
                hours before the end of the current billing period.
              </li>
              <li>
                Your account will be charged for renewal within 24 hours prior
                to the end of the current period at the rate of your selected
                plan.
              </li>
              <li>
                You can manage and cancel subscriptions in your Apple ID Account
                Settings.
              </li>
              <li>
                Any unused portion of a free trial period, if offered, will be
                forfeited when you purchase a subscription.
              </li>
              <li>
                All payments are processed by Apple. We do not directly collect
                or store payment information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              5. AI-Generated Content
            </h2>
            <p>
              Sauce uses artificial intelligence (including OpenAI&apos;s API) to
              extract and generate recipe content from URLs, photos, and text.
              While we strive for accuracy:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                AI-generated recipes, nutritional information (calories, protein,
                fat, carbs), cooking times, and ingredient lists are estimates
                only and may contain errors.
              </li>
              <li>
                You should always use your own judgment regarding food safety,
                allergens, dietary restrictions, and nutritional information.
              </li>
              <li>
                We are not responsible for any adverse outcomes resulting from
                reliance on AI-generated content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              6. User Content
            </h2>
            <p>
              You retain ownership of any content you create within the App
              (custom recipes, collections, profile information). By using the
              App, you grant us a limited license to store and process your
              content solely for the purpose of providing the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              7. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>Use the App for any unlawful purpose</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble the App
              </li>
              <li>
                Interfere with or disrupt the App&apos;s infrastructure
              </li>
              <li>
                Upload malicious content or attempt to exploit the App&apos;s AI
                services
              </li>
              <li>
                Scrape or bulk-extract content from third-party websites in
                violation of their terms
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              8. Intellectual Property
            </h2>
            <p>
              The App, including its design, code, AI models, branding, and all
              related intellectual property, is owned by us and protected by
              applicable laws. You are granted a limited, non-exclusive,
              non-transferable license to use the App for personal,
              non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              9. Third-Party Services
            </h2>
            <p>Sauce integrates with third-party services including:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                Apple (Sign in with Apple, App Store, Push Notifications)
              </li>
              <li>Google (Google Sign-In)</li>
              <li>
                Supabase (cloud data storage and authentication)
              </li>
              <li>OpenAI (AI recipe extraction and generation)</li>
              <li>RevenueCat (subscription management)</li>
              <li>Apify (web scraping for recipe import)</li>
            </ul>
            <p className="mt-3">
              Your use of these services is subject to their respective terms and
              privacy policies. We are not responsible for the practices of
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              10. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided &ldquo;AS IS&rdquo; and &ldquo;AS
              AVAILABLE&rdquo; without warranties of any kind, whether express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the App will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, we shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from your use of the
              App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              12. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the App
              at any time, with or without cause, and with or without notice.
              Upon termination, your right to use the App will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of material changes through the App or other
              reasonable means. Your continued use of the App after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              14. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              15. Contact
            </h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 font-medium">support@trysauce.app</p>
          </section>
        </div>
      </div>
    </div>
  );
}
