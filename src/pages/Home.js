import React from 'react'
import { useTranslation } from 'react-i18next'
import youtubeVideos from '../constants/youtubeVideos'
import VideoPanel from '../sections/VideoPanel'
import WhyUs from '../sections/WhyUs'
import YourDoctors from '../sections/YourDoctors'
import PatientStories from '../sections/PatientStories'
import Services from '../sections/Services'
import AboutUs from '../sections/AboutUs'
import HappyMoments from '../sections/HappyMoments'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div
        className="p-8 sm:p-20 bg-center bg-cover backdrop-blur-3xl grid place-items-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/8c/7e/9d/8c7e9d2e3ca8794be10076a5d1086c06.png')",
        }}
      >
        <div className="bg-[#ffffffbc] text-center p-12 rounded-xl">
          <p className="text-4xl font-bold">{t('home.banner_heading')}</p>
        </div>
      </div>
      <div className="p-8 sm:p-20 sm:pt-20">
        <Services />
      </div>
      <div className="p-8 sm:p-20">
        <AboutUs />
      </div>
      <div className="p-8 sm:p-20">
        <WhyUs />
      </div>
      <div className="p-8 sm:p-20">
        <VideoPanel
          arrayList={youtubeVideos}
          heading="Our Videos"
          viewAllLink={
            'https://www.youtube.com/channel/UCk0RmIo1EN3ybw_BGxqbqIQ'
          }
        />
      </div>

      <div className="p-8 sm:p-20">
        <PatientStories />
      </div>
      <div className="p-8 sm:p-20">
        <YourDoctors />
      </div>
      <div className="p-8 sm:px-20 sm:mb-40">
        <HappyMoments />
      </div>
    </div>
  )
}

export default Home
