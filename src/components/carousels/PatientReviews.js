import React from 'react'
import { Carousel } from 'primereact/carousel'

export default function ResponsiveDemo() {
  const reviews = [
    {
      by:'Radhe Shyam Singh',
      content:'Piles provided relief with effective treatment. Quick results, reduced discomfort. A reliable solution for a common health concern. Recommended.'
    },
    {
      by: 'Bhaskar Raj',
      content:
        'Sun hspital services and hospitality is very good',
    },
    {
      by: 'seema pandey',
      content:
        'Good hospital ND all staff',
    },
    {
      by: 'Go Bright',
      content:
        'Perfect hospital for treatment',
    },
    {
      by: 'Manish Srivastava',
      content:
        'Best of Best',
    },
    {
      by: 'seema pandey',
      content:
        'Good hospital ND all staff',
    },
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
