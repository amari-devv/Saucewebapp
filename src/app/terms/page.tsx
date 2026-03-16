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
        <p className="text-secondary mb-12">Last updated: March 15, 2026</p>

        <div className="space-y-10 text-primary/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the Sauce app, you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Use of the Service
            </h2>
            <p>
              Sauce provides tools to import, organize, and follow recipes from
              various online sources. You agree to use the service only for
              lawful purposes and in accordance with these terms. You are
              responsible for ensuring that recipe content you import does not
              violate any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of the Sauce app —
              including but not limited to design, text, graphics, logos, and
              software — are the property of Sauce and are protected by
              intellectual property laws. Recipe content imported by users
              remains the property of its original creators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              User Content
            </h2>
            <p>
              When you submit recipe links or other content through the app, you
              grant Sauce a limited license to process that content for the
              purpose of extracting and organizing cooking information. We do not
              claim ownership of the recipes you import.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Limitation of Liability
            </h2>
            <p>
              Sauce is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. We make no warranties, expressed or
              implied, regarding the accuracy of recipe information, nutritional
              data, or cooking instructions extracted from third-party sources.
              To the fullest extent permitted by law, Sauce shall not be liable
              for any indirect, incidental, special, or consequential damages
              arising from your use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this page. By
              continuing to use the app after changes are posted, you agree to
              the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-3">
              Contact Information
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <p className="mt-2 font-medium">support@sauceapp.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
