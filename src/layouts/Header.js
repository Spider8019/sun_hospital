import React from 'react'
import { useTranslation } from 'react-i18next'
import NavigationBar from '../components/navigators/NavigationBar'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <div className=" my-0 grid grid-cols-1 sm:flex justify-between items-center px-8 sm:px-20">
        <div className="">
          <p className="text-center sm:text-left text-2xl font-semibold">{t('hospital_name')}</p>
        </div>
        <NavigationBar />
      </div>
    </div>
  )
}

export default Header
