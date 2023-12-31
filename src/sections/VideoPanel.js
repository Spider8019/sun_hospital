import React, { useState } from 'react'
import Video from '../components/cards/Video'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const VideoPanel = ({ arrayList, viewAllLink }) => {
  const [isIframeVisible, setIsIframeVisible] = useState(false)
  const [link, setLink] = useState('')

  const handleCardClick = (link) => {
    setIsIframeVisible(true)
    setLink(link)
  }

  const { t } = useTranslation()

  return (
    <div className="">
      <div className="flex justify-between mb-8 items-center">
        <p className="text-xl font-semibold">{t('home.our_videos.heading')}</p>
        <Link
          to={viewAllLink}
          target="_blank"
          className="text-baseColor no-underline text-sm hover:underline"
        >
          {t('home.our_videos.view_all')}
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {arrayList.map((item, index) => {
          return (
            <Video handleCardClick={handleCardClick} key={index} {...item} />
          )
        })}
      </div>
      {isIframeVisible && (
        <div className="z-100 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg">
            <i
              className="absolute top-2 right-2 text-white hover:text-gray-900 pi pi-times"
              onClick={() => setIsIframeVisible(false)}
            ></i>
            <iframe
              // width="w-[800px]"
              className="w-[80vw] z-20"
              height="500"
              src={link}
              title={link}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPanel
