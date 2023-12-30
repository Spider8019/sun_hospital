import React from 'react'
import socialmedias from '../../constants/socialmedias'
import { useTranslation } from 'react-i18next'
import { Button } from 'primereact/button'

const StayInTouch = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className="font-bold uppercase">{t('heading.stay_in_touch')}</p>
      <div className="flex gap-4">
        {Object.keys(socialmedias).map((socialmedia) => (
          <Button outlined className="rounded-xl" key={socialmedia}>
            <i className={`pi ${socialmedias[socialmedia].icon}`}></i>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default StayInTouch
