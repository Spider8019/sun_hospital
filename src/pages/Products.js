import React from 'react'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'
import { useProductContext } from '../context/productContext'

const Products = () => {
  const { products } = useProductContext()
  return (
    <div className="grid grid-cols-1 sm:px-40 sm:py-8 sm:pb-20">
      <div></div>
      <div className="">
        <div>
          <p className="text-4xl">Our Products</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {products.map((item, idx) => {
            return (
              <NavLink
                to={`/singleproduct/${item.id}`}
                className="no-underline"
              >
                <Card
                  className="overflow-hidden no-underline"
                  title={item.name + item.id}
                  subTitle={'Rs. ' + item.mrp}
                  header={
                    <img
                      alt="Card"
                      className="h-60 object-cover"
                      src={item.mediaLinks[0]}
                    />
                  }
                >
                  <p className="m-0">{item.description.slice(0, 100)}</p>
                </Card>
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
