import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="flex justify-center pb-4 sm:pb-0 gap-8">
      {[
        { url: '/', mssgs: 'Home' },
        { url: '/others', mssgs: 'Contact & Privacy Policy' },
      ].map((link, key) => {
        return (
          <NavLink
            key={key}
            to={link.url}
            className={({ isActive, isPending }) =>
              isPending
                ? 'navbarLinkPending'
                : isActive
                ? 'navbarLinkActive'
                : 'navbarLinkPending'
            }
          >
            {link.mssgs}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavigationBar
