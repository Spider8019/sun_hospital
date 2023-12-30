import React from 'react'
import lngs from '../../constants/languages'
import { useTranslation } from 'react-i18next'
import { Button } from 'primereact/button'

const Switcher = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <p className="uppercase font-bold">{t('heading.change_language')}</p>
      <div className="flex gap-2">
        {Object.keys(lngs).map((lng) => (
          <Button
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            outlined={i18n.resolvedLanguage !== lng ? true : false}
            label={lngs[lng].nativeName}
          ></Button>
        ))}{' '}
      </div>
    </div>
  )
}

export default Switcher
