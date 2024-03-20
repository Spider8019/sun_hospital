import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../context/productContext'
import { Button } from 'primereact/button'
import Stars from '../components/cards/Stars'
import { useCartContext } from '../context/cartContext'

const SingleProduct = () => {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [amount, setAmount] = useState(1)
  const { addToCart } = useCartContext()

  const setIncrease = () => {
    setAmount(amount + 1)
  }
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
  } = useProductContext()

  const API = 'https://anilom-b.vercel.app/product/'

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  if (isSingleLoading) {
    return <p>Loading</p>
  }

  console.log(singleProduct)
  const { name, mrp, dr, mediaLinks, description, review } = singleProduct
  console.log(mediaLinks)
  return (
    <div className="p-8 sm:px-40 sm:pb-20 grid place-items-center">
      <p className="text-xl sm:text-4xl text-left w-full">Checkout</p>
      <div className="grid sm:grid-cols-2 gap-0 sm:gap-8 items-top">
        <div className="flex-col flex justify-center">
          <img
            className="rounded-xl h-60 sm:h-80 object-cover"
            src={mediaLinks[activeImage]}
            alt="Product Media Link"
          />
          <div className="flex gap-4 justify-center my-4 overflow-x-auto">
            {mediaLinks.map((item, idx) => {
              return (
                <img
                  onClick={() => setActiveImage(idx)}
                  className="h-16 w-16 sm:w-24 sm:h-24 rounded-xl cursor-pointer hover:shadow-xl"
                  src={item}
                  alt="alsf"
                  key={idx}
                />
              )
            })}
          </div>
        </div>
        <div className="">
          <p className="text-3xl">{name}</p>
          <Stars stars={review} />
          <div className="flex gap-4 items-center ">
            <p className="line-through text-gray-700 leading-3">Rs. {dr}</p>
            <p className="text-2xl leading-3">Rs. {mrp}</p>
          </div>
          <p className="sm:w-3/4 limit5">{description}</p>

          <div className="flex gap-4 items-center">
            <Button
              icon="pi pi-minus"
              rounded
              outlined
              onClick={() => setDecrease()}
            />
            <p>{amount}</p>
            <Button
              icon="pi pi-plus"
              rounded
              outlined
              onClick={() => setIncrease()}
            />
          </div>
          <div className="flex gap-4 mt-8 ">
            <NavLink
              to="/cart"
              onClick={() =>
                addToCart(id, amount, name, mediaLinks, mrp, dr, review)
              }
            >
              <Button label={'Add To Cart '} />
            </NavLink>
            <Button label="Donate" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
