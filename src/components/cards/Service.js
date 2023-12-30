import React from 'react'
import { Card } from 'primereact/card'

const Service = ({link}) => {
  return (
    <Card
      style={{
        background: `url('${link}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-80 w-full overflow-hidden rounded-xl serviceCard"
    ></Card>
  )
}

export default Service
