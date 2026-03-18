import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sauce",
  description: "Privacy policy for the Sauce recipe app.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-secondary mb-12">Last updated: March 17, 2026</p>

        <p className="text-primary/90 leading-relaxed mb-10">
          This Privacy Policy describes how Sauce (&ldquo;the App,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
          uses, and shares your information when you use our mobile application.
        </p>

        <div className="space-y-10 text-primary/90 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-primary mt-4 mb-2">
              Information You Provide
            </h3>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Account Information:</strong> When you sign in with Apple
                or Google, we receive your name, email address (if you choose to
                share it), and a unique user identifier. Apple&apos;s &ldquo;Hide
                My Email&rdquo; feature is fully supported.
              </li>
              <li>
                <strong>Profile Information:</strong> Display name and profile
                photo, if you choose to add them.
              </li>
              <li>
                <strong>Recipe Content:</strong> Recipes you create, import, or
                save, including titles, ingredients, steps, photos, source URLs,
                nutritional data, tags, and categories.
              </li>
              <li>
                <strong>Collections &amp; Favorites:</strong> Recipe organization
                data such as collection names and saved/favorited recipes.
              </li>
              <li>
                <strong>Grocery &amp; Pantry Data:</strong> Items you add to your
                grocery list and pantry inventory.
              </li>
              <li>
                <strong>Onboarding Preferences:</strong> Age range, dietary
                preferences, cooking frequency, goals, and how you heard about
                us — provided voluntarily during onboarding.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-4 mb-2">
              Information Collected Automatically
            </h3>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Device Information:</strong> Device type, operating
                system version, and app version for compatibility and debugging
                purposes.
              </li>
              <li>
                <strong>Usage Data:</strong> Interactions within the App to
                improve functionality and user experience.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-4 mb-2">
              Information from Third Parties
            </h3>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Recipe Data:</strong> When you import a recipe via URL or
                photo, we use third-party AI services (OpenAI, Apify) to extract
                recipe content from the provided source. We send the URL or image
                you provide to these services for processing.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                Provide, maintain, and improve the App&apos;s functionality
              </li>
              <li>Authenticate your identity and manage your account</li>
              <li>
                Sync your recipes, collections, grocery lists, and profile across
                devices via cloud storage
              </li>
              <li>
                Process recipe imports from URLs and photos using AI
              </li>
              <li>Manage your subscription status</li>
              <li>
                Send push notifications (if you opt in), such as reminders or
                updates
              </li>
              <li>
                Respond to your requests and provide customer support
              </li>
              <li>
                Analyze usage patterns to improve the App (in aggregate,
                non-identifying form)
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              3. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We share information only
              in the following circumstances:
            </p>

            <h3 className="text-lg font-medium text-primary mt-4 mb-2">
              Service Providers
            </h3>
            <p className="mb-2">
              We use third-party services to operate the App:
            </p>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Supabase</strong> — Cloud database and authentication
                (stores your account, recipes, and profile data)
              </li>
              <li>
                <strong>OpenAI</strong> — AI-powered recipe extraction (receives
                URLs or images you submit for import)
              </li>
              <li>
                <strong>Apify</strong> — Web scraping service (receives URLs you
                submit for recipe import)
              </li>
              <li>
                <strong>RevenueCat</strong> — Subscription management (receives
                anonymized purchase data from Apple)
              </li>
              <li>
                <strong>Google</strong> — Authentication (only if you use Google
                Sign-In)
              </li>
              <li>
                <strong>Apple</strong> — Authentication, payments, and push
                notifications
              </li>
            </ul>

            <p className="mt-3">
              <strong>Legal Requirements:</strong> We may disclose information if
              required by law, legal process, or government request.
            </p>
            <p className="mt-2">
              <strong>Safety:</strong> We may disclose information if we believe
              it&apos;s necessary to protect the safety of our users or the
              public.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              4. Data Storage and Security
            </h2>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                Your data is stored on Supabase&apos;s cloud infrastructure with
                encryption in transit and at rest.
              </li>
              <li>
                Local recipe data is stored on your device using Apple&apos;s
                SwiftData framework.
              </li>
              <li>
                We use industry-standard security measures to protect your
                information, but no method of electronic storage is 100% secure.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              5. Data Retention
            </h2>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                Your account data and recipes are retained as long as your
                account is active.
              </li>
              <li>
                If you delete your account, we will delete your data from our
                cloud servers within 30 days, except where retention is required
                by law.
              </li>
              <li>
                Local data on your device is removed when you uninstall the App.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              6. Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Access &amp; Export:</strong> You can view all your recipe
                data within the App at any time.
              </li>
              <li>
                <strong>Correction:</strong> You can edit your profile
                information and recipes at any time.
              </li>
              <li>
                <strong>Deletion:</strong> You can delete individual recipes,
                collections, or your entire account. To request full account
                deletion, contact us at support@trysauce.app.
              </li>
              <li>
                <strong>Sign-In Choice:</strong> You can choose Sign in with
                Apple (which offers email hiding) or Google Sign-In.
              </li>
              <li>
                <strong>Notifications:</strong> You can enable or disable push
                notifications in iOS Settings at any time.
              </li>
              <li>
                <strong>Subscription:</strong> You can manage or cancel your
                subscription through Apple&apos;s App Store settings.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Sauce is not directed to children under 13. We do not knowingly
              collect personal information from children under 13. If you believe
              a child under 13 has provided us with personal information, please
              contact us and we will take steps to delete such information.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              8. Camera and Photo Library Access
            </h2>
            <ul className="list-disc list-inside space-y-1 text-secondary">
              <li>
                <strong>Camera:</strong> The App requests camera access to
                scan/photograph recipes. Photos are processed locally or sent to
                AI services for recipe extraction. We do not store raw photos on
                our servers.
              </li>
              <li>
                <strong>Photo Library:</strong> The App requests photo library
                access to select images for recipe import or profile photos.
                Selected images may be uploaded to cloud storage (Supabase) for
                profile photos only.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              9. Share Extension
            </h2>
            <p>
              When you use the Sauce Share Extension from other apps, the shared
              URL is saved locally to your device via a secure App Group
              container. The URL is only processed when you open the App. No data
              is transmitted during the share action itself.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              10. International Users
            </h2>
            <p>
              Your data may be processed and stored on servers located in the
              United States or other countries where our service providers
              operate. By using the App, you consent to the transfer of your
              information to these locations.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes through the App or other reasonable means.
              The &ldquo;Last Updated&rdquo; date at the top reflects when the
              policy was last revised.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              12. California Privacy Rights (CCPA)
            </h2>
            <p>
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>Know what personal information we collect about you</li>
              <li>Request deletion of your personal information</li>
              <li>
                Opt out of the sale of personal information (we do not sell
                personal information)
              </li>
              <li>
                Not be discriminated against for exercising your privacy rights
              </li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              13. European Privacy Rights (GDPR)
            </h2>
            <p>
              If you are located in the European Economic Area, you have
              additional rights including the right to access, rectify, port, and
              erase your data, as well as the right to restrict and object to
              certain processing. Our legal basis for processing is your consent
              (provided at sign-up) and legitimate interest (to operate and
              improve the App).
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              14. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or your
              data, please contact us at:
            </p>
            <p className="mt-2 font-medium">support@trysauce.app</p>
          </section>
        </div>
      </div>
    </div>
  );
}
