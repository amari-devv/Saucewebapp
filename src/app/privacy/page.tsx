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
        <p className="text-secondary mb-12">Last updated: March 15, 2026</p>

        <div className="space-y-10 text-primary/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Information We Collect
            </h2>
            <p>
              Sauce collects minimal data to provide you with the best cooking
              experience. When you use the app, we may collect:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>Recipe links you submit for processing</li>
              <li>Basic device information for app compatibility</li>
              <li>Anonymous usage analytics to improve the product</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              How We Use Information
            </h2>
            <p>
              The information we collect is used solely to operate and improve
              the Sauce app. Specifically:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-secondary">
              <li>
                Recipe links are processed to extract cooking information such as
                ingredients, steps, and nutrition data
              </li>
              <li>
                Usage analytics help us understand how users interact with the
                app so we can improve features
              </li>
              <li>
                Device information ensures the app runs smoothly on your device
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Third Party Services
            </h2>
            <p>
              We may use third-party services for analytics and infrastructure
              purposes. These services are bound by their own privacy policies
              and are selected to meet high standards for data protection. We do
              not sell your personal data to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, alteration, or destruction. While no method of
              electronic storage is 100% secure, we strive to use commercially
              acceptable means to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Contact Information
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to request
              removal of your data, please contact us at:
            </p>
            <p className="mt-2 font-medium">support@sauceapp.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
