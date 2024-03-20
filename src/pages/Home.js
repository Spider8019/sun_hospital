import React from 'react'
import { useTranslation } from 'react-i18next'
import youtubeVideos from '../constants/youtubeVideos'
import VideoPanel from '../sections/VideoPanel'
import WhyUs from '../sections/WhyUs'
import YourDoctors from '../sections/FeaturedProjects'
import PatientStories from '../sections/PatientStories'
import Services from '../sections/Services'
import AboutUs from '../sections/AboutUs'
import HappyMoments from '../sections/HappyMoments'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div
        className="p-4 sm:p-20 bg-center bg-cover backdrop-blur-3xl grid place-items-center"
        style={{
          backgroundAttachment:"fixed",
          backgroundImage:
            "url('https://i.pinimg.com/736x/1a/3a/98/1a3a9893533e79009eeb61ef855a2b2c.jpg')",
        }}
      >
        <div className="bg-[#ffffffbc] text-center p-12 rounded-xl">
          <p className="text-4xl font-bold">{t('home.banner_heading')}</p>
        </div>
      </div>
      <div className="p-8 sm:p-20 sm:pb-0 sm:pt-20">
        <YourDoctors />
      </div>
      <div className="p-8 sm:pb-0 sm:p-20">
        <Services />
      </div>
      <div className="p-8 sm:pb-0 sm:p-20">
        <AboutUs />
      </div>
      <div className="p-8 sm:pb-0 sm:p-20">
        <WhyUs />
      </div>
      <div className="p-8 sm:pb-0 sm:p-20">
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
 
      {/* <div className="p-8 sm:px-20 sm:mb-40">
        <HappyMoments />
      </div> */}
    </div>
  )
}

export default Home
