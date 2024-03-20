import React from 'react'
import { Carousel } from 'primereact/carousel'

export default function ResponsiveDemo() {
  const reviews = [
    {
      by:'Aman Pratap Singh 1',
      content:'Discovering Anilom has been a profound experience for me. The spiritual journey they offer is both enlightening and empowering. Their dedication to spreading positivity and compassion is truly inspiring. I highly recommend [Charitism Website] to anyone seeking spiritual growth and a deeper connection to themselves and the world around them.'
    },
    {
      by:'Aman Pratap Singh 1',
      content:'Discovering Anilom has been a profound experience for me. The spiritual journey they offer is both enlightening and empowering. Their dedication to spreading positivity and compassion is truly inspiring. I highly recommend [Charitism Website] to anyone seeking spiritual growth and a deeper connection to themselves and the world around them.'
    }
  ]
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ]


  const reviewTemplate = (review) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <p className='text-default'>{review.content}</p>
        <p className='text-gray-800 my-2'>{review.by}</p>
      </div>
    )
  }

  return (
    <div>
      <Carousel
        numScroll={1}
        value={reviews}
        numVisible={1 }
        responsiveOptions={responsiveOptions}
        itemTemplate={reviewTemplate}
      />
    </div>
  )
}
