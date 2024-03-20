import React from 'react'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>
        <p className="text-4xl font-semibold">
          {t('navigator.contact_us_p1')}{' '}
          <span className="text-baseColor">{t('navigator.contact_us_p2')}</span>
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <iframe
          title="Hospital Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5796682425625!2d82.12836761026082!3d26.7577863766428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a09235ba71737%3A0xf34ed8cc072a1421!2sSun%20hospital!5e0!3m2!1sen!2sin!4v1703857523499!5m2!1sen!2sin"
          width={isMobile ? '300' : '500'}
          height="300"
          className="border-l-2 border-baseColor hidden sm:block"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="">
          <p className="text-2xl font-bold">{t('hospital_name')}</p>
          <p className="text-default w-80 text-gray-600">
            {t('hospital_address')}
          </p>
          <p className="sm:text-5xl text-3xl font-semibold">
            <span className="text-baseColor ">+91 </span>
            {t('hospital_contact')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
