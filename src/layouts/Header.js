import React from 'react'
import { useTranslation } from 'react-i18next'
import NavigationBar from '../components/navigators/NavigationBar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <div className=" my-0 flex justify-between sm:flex items-center px-8 sm:px-20">
        <div className="no-underline">
          <NavLink to="/">
            <p className="text-center sm:text-left text-2xl font-semibold text-black no-underline">
              {t('hospital_name')}
            </p>
          </NavLink>
        </div>
        <NavigationBar />
      </div>
    </div>
  )
}

export default Header
