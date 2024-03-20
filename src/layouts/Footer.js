import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import StayInTouch from '../components/socialmedia/StayInTouch'
import { Link } from 'react-router-dom'
import Switcher from '../components/languages/Switcher'

const Footer = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="p-8 sm:p-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-[auto,auto,1fr] gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] gap-8">
          <iframe
            title="Hospital Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5796682425625!2d82.12836761026082!3d26.7577863766428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a09235ba71737%3A0xf34ed8cc072a1421!2sSun%20hospital!5e0!3m2!1sen!2sin!4v1703857523499!5m2!1sen!2sin"
            width="w-2/4 sm:w-[400px]"
            height="200"
            className="border-l-2 border-baseColor"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="sm:text-left text-center">
            <p className="text-4xl font-bold">{t('hospital_name')}</p>
            <p className="text-default sm:w-80 text-gray-600">
              {t('hospital_address')}
            </p>
          </div>
        </div>
        <div>
          <form method="POST" action="https://formspree.io/f/mrgnakjg" className='flex flex-col gap-4 '>
            <input type="email" placeholder="Email" />
            <textarea
              type="text"
              placeholder="Enter your message"
              cols="40"
              rows="10"
              onChange={(e) => setEmail(e)}
              name="Message"
              autoComplete="off"
              required
            />
            <input type="submit" value="Submit" className='bg-baseColor p-2 border-none rounded-sm text-white shadow-sm'/>
          </form>
        </div>
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <StayInTouch />
          <Switcher />
        </div>
      </div>
      <div className="text-xs sm:text-sm mt-12 sm:mt-20 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-wrap gap-2 items-center">
          <Link to="/others#contact">
            {t('navigator.contact_us_p1')} {t('navigator.contact_us_p2')}
          </Link>
          <p>|</p>
          <Link to="/others#privacyPolicy">
            {t('navigator.privacy_p1')} {t('navigator.privacy_p2')}
          </Link>
          <p>|</p>
          <Link to="https://www.instagram.com/spydar8019/">
            {t('developers')}
          </Link>
        </div>
        <p className="text-center sm:text-right">
          {t('heading.all_rights_reserved')}
        </p>
      </div>
    </div>
  )
}

export default Footer
