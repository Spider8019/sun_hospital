import React from 'react'
import { Card } from 'primereact/card'
import cardBg from '../../assets/images/DoctorCard.png'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ key, id, name, mrp, dr, mediaLinks, description }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className="no-underline">
      <Card
        className="overflow-hidden no-underline"
        title={name}
        subTitle={'Rs. ' + dr}
        header={
          <img alt="Card" className="h-60 object-cover" src={mediaLinks[0]} />
        }
      >
        <p className="m-0">{description.slice(0, 100)}</p>
      </Card>
    </NavLink>
  )
}

export default ProductCard
