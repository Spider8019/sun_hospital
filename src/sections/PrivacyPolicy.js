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
          arayana Hrudayalaya Ltd. ("NH") is committed to respecting the privacy
          of every person who shares information with NH. Your privacy is
          important to us and we strive to take reasonable care and protection
          of the information we receive from you, the User. In this regard, we
          adhere to the applicable governing laws in India. This Privacy Policy
          (“Privacy Policy”) applies to the collection, storage, processing,
          disclosure and transfer of your Personal Information (defined below)
          as per the above mentioned laws, particularly when you use the website
          of https://www.narayanahealth.org/ (“Website”) operated by NH for any
          information or services (“Services”). The terms ‘You’ or ‘Your’ refer
          to you as the User (registered or unregistered) of the Website and/or
          Services and the terms ‘We’, ‘Us” and ‘Our’ refer to NH. ACCESS We
          collect Your Personal Information directly from You, from
          third-parties and automatically through the Our Website. This Personal
          Information, for instance, would relate to the type of device You are
          using, the time that You have logged on to Our Website, Your IP
          address and other Personal Information as listed in Clause 4 below.
          You may access the Personal Information shared by You with Us, in the
          manner given below. You can further choose to share additional
          Personal Information with Us, by writing to Us on Our below mentioned
          email id. We keep in mind that the Personal Information shared by You
          is accessible to You. You can write to Us on the below mentioned email
          id in Clause 15.1. CONSENT By choosing the Opt-In option on the
          Website and thereafter, by providing Us Your personal information or
          availing services of NH or by making use of the facilities provided by
          the Website, it is agreed by You that You have, freely consented to
          the collection, storage, processing, disclosure and transfer of Your
          Personal Information in accordance with the provisions of this Privacy
          Policy and any amendments thereof. You acknowledge that You have
          provided Your Personal Information out of your free will and after
          understanding how it will be used. You also consent that the
          collection, storage, processing, disclosure and transfer of any
          Personal Information shall not cause any wrongful loss to You, if it
          is done in accordance with the provisions of this Privacy Policy.
          However, we shall not be liable for any loss that may happen to you
          owing to the provision of wrongful Personal Information by You.
          CONTROL OVER YOUR PERSONAL INFORMATION You have the right to withdraw
          Your consent at any point, provided such withdrawal of the consent is
          intimated to us in writing through an email at
          digital@narayanahealth.org requesting the same. If You wish to rectify
          the Personal Information that we may have collected to offer You
          personalized services and offers, as per Clause 12 of this Policy, you
          may write to the Grievance Officer, as mentioned under Clause 15.1 of
          this Policy, citing the reason for such rectification of Personal
          Information. Once You withdraw Your Consent to share the Personal
          Information collected by Us, We shall have the option not to fulfill
          the purposes for which the said Personal Information was sought and We
          may restrict you from using our Services or the Website.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
