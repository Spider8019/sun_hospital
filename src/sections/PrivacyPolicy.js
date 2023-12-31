import React from 'react'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>
        <p className="text-4xl font-semibold">
          {t('navigator.privacy_p1')}{' '}
          <span className="text-baseColor">{t('navigator.privacy_p2')}</span>{' '}
        </p>
      </div>
      <div>
        <p className="text-default">
          Sun Hospital Privacy Policy
          <br />
          Last Updated: 12/31/2023
          <br /><br/>
          1.{' '}
          <span className="text-baseColor font-semibold">Introduction</span>
          <br />
          Welcome to Sun Hospital ("we," "our," or "us"). This Privacy Policy is
          designed to inform you about the types of information we collect, how
          we use it, and with whom we share it. This Privacy Policy applies to
          the personal information we collect from patients, visitors,
          employees, and other individuals who interact with Sun Hospital.
          <br />
          2.{' '}
          <span className="text-baseColor font-semibold">
            Information We Collect
          </span>
          <br />
          We may collect various types of information, including:
          <br />
          - Personal Information: This includes but is not limited to your
          name, address, phone number, email address, date of birth, and medical
          history.
          <br />
          - Health Information: As a healthcare provider, we collect and
          maintain records of your medical condition, treatment, and other
          healthcare-related information.
          <br />
          - Payment Information: When you make payments for our services, we
          collect billing and payment information.
          <br />
          - Automatically Collected Information: We may collect information
          about your use of our website and other online services, including IP
          addresses, browser types, and browsing patterns.
          <br />
          3.{' '}
          <span className="text-baseColor font-semibold">
            How We Use Your Information
          </span>
          <br />
          We use the information we collect for the following purposes:
          <br />
          - Providing Healthcare Services: To diagnose and treat medical
          conditions and provide healthcare services to our patients.
          <br />
          - Billing and Payment: To process payments, issue invoices, and
          manage accounts.
          <br />
          - Communication: To communicate with you about appointments, test
          results, and other healthcare-related matters.
          <br />
          - Improving Services: To analyze trends, administer and improve
          our website, and enhance the quality of our services.
          <br />
          - Legal Compliance: To comply with legal obligations and respond
          to legal requests.
          <br />
          4.{' '}
          <span className="text-baseColor font-semibold">
            Sharing Your Information
          </span>
          <br />
          We may share your information with:
          <br />
          - Healthcare Providers: We may share your information with other
          healthcare providers involved in your treatment.
          <br />
          - Business Associates: We may share your information with
          third-party service providers who assist us in providing healthcare
          services, billing, and other business operations.
          <br />
          - Legal Requirements: We may disclose your information as required
          by law or in response to legal requests.
          <br />
          5.{' '}
          <span className="text-baseColor font-semibold">
            Security Measures
          </span>
          <br />
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, alteration, and destruction. These
          measures include physical, electronic, and procedural safeguards.
          <br />
          6. <span className="text-baseColor font-semibold">Your Rights</span>
          <br />
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact our Privacy
          Officer using the contact information provided below.
          <br />
          7.{' '}
          <span className="text-baseColor font-semibold">
            Changes to this Privacy Policy
          </span>
          <br />
          We may update this Privacy Policy periodically. The latest version
          will be posted on our website with the effective date.
          <br />
          8.{' '}
          <span className="text-baseColor font-semibold">
            Contact Information
          </span>
          <br />
          <br />
          If you have questions or concerns about this Privacy Policy, please
          contact our Privacy Officer at:
          <br />
          <br />
          Suneet Kumar Singh
          <br />
          {t('hospital_address')}
          <br />
          {t('hospital_contact')}
          <br />
          By using our services, you agree to the terms outlined in this Privacy
          Policy.
          <br />
          Sun Hospital
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
