import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from 'primereact/sidebar'
import { useCartContext } from '../../context/cartContext'

const NavigationBar = () => {
  const [visible, setVisible] = useState(false)
  const { totalItem } = useCartContext()
  return (
    <>
      <MobileView>
        <FaBars onClick={() => setVisible(true)} />
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          className="w-3/4"
        >
          <div className="flex flex-col justify-center gap-4">
            {[
              { url: '/', mssgs: 'Home' },
              { url: '/others', mssgs: 'Contact & Privacy Policy' },
              { url: '/cart', mssgs: `Cart(${totalItem})` },
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
        </Sidebar>
      </MobileView>
      <BrowserView>
        <div className="flex justify-center pb-4 sm:pb-0 gap-8">
          {[
            { url: '/', mssgs: 'Home' },
            { url: '/others', mssgs: 'Contact & Privacy Policy' },
            { url: '/cart', mssgs: `Cart(${totalItem})` },
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
      </BrowserView>
    </>
  )
}

export default NavigationBar
