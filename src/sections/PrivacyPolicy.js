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
          Anilom Privacy Policy
          <br />
          Last Updated: 12/31/2023
          <br />
          <br />
          1.{' '}
          <span className="text-baseColor font-semibold">Privacy Policy</span>
          <br />
          For us privacy for our valued customer is very important. We strongly
          believe that the personal information of our customers should not be
          shared with the third party without the prior consent or request from
          the customer. Privacy is the right of an individual and at Alms
          Ecommerce Private Limited the information of the customer such as
          contact no., email, addresses etc is used only for the internal
          purpose and not for sale. Your contact information is stored in our
          database and is only used by Anilom & our NGO partners to contact
          you with regards to the updates of the campaign, upcoming campaigns,
          announcements & news . We at Alms Ecommerce Private Limited condemn
          the unauthorized reach and misuse and/or disclosure of the personal
          information of the customer and we have strict guidelines and high
          security features to prevent the same. Any changes in our ‘Privacy
          Policy’ will be posted here on the website.
          <br />
          <br />
          2.{' '}
          <span className="text-baseColor font-semibold">
            Secure Online Payments
          </span>
          <br />
          The visitor on our website please take a note that your name, email
          address and other personal information submitted on our website may be
          stored with us and may also appear on the website. Like other
          platforms our server log files also receives general information such
          as IP address of the visitor , cookie etc. For the financial
          transactions by credit card Alms Ecommerce Private Limited uses a 3rd
          party secure payment gateway provided by “Instamojo” and the credit
          card details are ‘not stored’ with Alms Ecommerce Private Limited,
          instead the information is securely stored and encrypted with
          Visa/MasterCard
          <br />
          <br />
          3. <span className="text-baseColor font-semibold">Smart Cookies</span>
          <br />
          We use 'Cookies' to keep track of your current shopping session to
          personalize your experience and so that you may retrieve your shopping
          cart at any time. 'Cookies' are tiny text files which our Website
          places on your computer's hard drive to store information about your
          shopping session and to identify your comput
          <br /><br/>
          4.{' '}
          <span className="text-baseColor font-semibold">
            Shipping Policy
          </span>
          <br />
          We usually ship the product once the campaign gets completed and try and deliver them within a week.Products can be returned within 24 hours from the day of delivery to the partner organization.
          
          <br />
          <br />
          If you have questions or concerns about this Privacy Policy, please
          contact our Privacy Officer at:
          <br />
          <br />
          Himanshu Khurana
          <br />
          {t('hospital_address')}
          <br />
          {t('hospital_contact')}
          <br />
          By using our services, you agree to the terms outlined in this Privacy
          Policy.
          <br />
          Anilom
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
