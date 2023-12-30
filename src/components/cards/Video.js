import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

const Video = ({ link, title, thumbnail, handleCardClick }) => {
  const header = (
    <div className="relative">
      <img src={thumbnail} alt={title} />
      <Button
        icon="pi pi-play"
        rounded
        disabled
        style={{ transform: 'translate(-50%,-50%)' }}
        className="absolute top-1/2 left-1/2"
      ></Button>
    </div>
  )

  return (
    <Card
      onClick={() => handleCardClick(link)}
      className="rounded overflow-hidden cursor-pointer"
      header={header}
    >
      <p className="m-0 line-clamp-3 text-default">{title}</p>
    </Card>
  )
}

export default Video
