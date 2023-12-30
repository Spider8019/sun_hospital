import React from 'react'
import { Carousel } from 'primereact/carousel'

export default function ResponsiveDemo() {
  const reviews = [
    {
      by: 'Aman Pratap Singh',
      content:
        'Dr. Subhaprakash Sanyal is very nice, cooperative hematologist in Mumbai. Even at night time he do respond to our queries. He is very supportive, and helpful. Thank you so much sir and fortis hospital mulund.',
    },
    {
      by: 'Aman Pratap Singh',
      content:
        'Dr. Subhaprakash Sanyal is very nice, cooperative hematologist in Mumbai. Even at night time he do respond to our queries. He is very supportive, and helpful. Thank you so much sir and fortis hospital mulund.',
    },
    {
      by: 'Aman Pratap Singh',
      content:
        'Dr. Subhaprakash Sanyal is very nice, cooperative hematologist in Mumbai. Even at night time he do respond to our queries. He is very supportive, and helpful. Thank you so much sir and fortis hospital mulund.',
    },
    {
      by: 'Aman Pratap Singh',
      content:
        'Dr. Subhaprakash Sanyal is very nice, cooperative hematologist in Mumbai. Even at night time he do respond to our queries. He is very supportive, and helpful. Thank you so much sir and fortis hospital mulund.',
    },
    {
      by: 'Aman Pratap Singh',
      content:
        'Dr. Subhaprakash Sanyal is very nice, cooperative hematologist in Mumbai. Even at night time he do respond to our queries. He is very supportive, and helpful. Thank you so much sir and fortis hospital mulund.',
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
