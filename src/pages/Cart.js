import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog'
import ConfettiExplosion from 'react-confetti-explosion'

const Cart = () => {
  // const [orderDone, setOrderDone] = useState(true)

  const [orderInfo, setOrderInfo] = useState({
    orderPlacedBy: '',
    orderContactNumber: '',
    orderDeliveryAddress: {
      street: '',
      city: '',
      pincode: '',
      state: '',
    },
  })
  const {
    cart,
    removeItem,
    clearCart,
    setIncrease,
    setDecrease,
    totalItem,
    totalAmount,
    makeOrder,
    orderPlaced,
    orderId,
    isOrderError,
  } = useCartContext()
  const [visible, setVisible] = useState(false)

  return (
    <div className="p-8 sm:pb-20 sm:px-40">
      {orderPlaced && (
        <Dialog
          header={`Order ID - ${orderId}`}
          visible={true}
          style={{ width: isMobile ? '90vw' : '50vw' }}
          // onHide={() => setOrderDone(false)}
        >
          <p className="m-0 text-5xl font-semibold">
            <span className="text-baseColor">Hurray</span>, Your Order Placed
            <ConfettiExplosion duration={3500} zIndex={9999} width={3000} />
          </p>
          <p>Refresh to close the dialog</p>
        </Dialog>
      )}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sm:w-2/4"
      >
        <h2>Enter details</h2>
        <InputText
          className="mb-4 w-full"
          value={orderInfo.orderPlacedBy}
          placeholder="Enter Person Name"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, orderPlacedBy: e.target.value })
          }
        />
        <InputText
          className="mb-4 w-full"
          value={orderInfo.orderContactNumber}
          placeholder="Phone Number"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, orderContactNumber: e.target.value })
          }
        />
        <div className="grid grid-cols-2 gap-x-4">
          <InputText
            className="mb-4 w-full"
            value={orderInfo.orderDeliveryAddress.street}
            placeholder="Street/Flat/Locality"
            onChange={(e) =>
              setOrderInfo({
                ...orderInfo,
                orderDeliveryAddress: {
                  ...orderInfo.orderDeliveryAddress,
                  street: e.target.value,
                },
              })
            }
          />
          <InputText
            className="mb-4 w-full"
            value={orderInfo.orderDeliveryAddress.city}
            placeholder="City"
            onChange={(e) =>
              setOrderInfo({
                ...orderInfo,
                orderDeliveryAddress: {
                  ...orderInfo.orderDeliveryAddress,
                  city: e.target.value,
                },
              })
            }
          />
          <InputText
            className="mb-4 w-full"
            value={orderInfo.orderDeliveryAddress.pincode}
            placeholder="Pincode"
            onChange={(e) =>
              setOrderInfo({
                ...orderInfo,
                orderDeliveryAddress: {
                  ...orderInfo.orderDeliveryAddress,
                  pincode: e.target.value,
                },
              })
            }
          />
          <InputText
            className="mb-4 w-full"
            value={orderInfo.orderDeliveryAddress.state}
            placeholder="State"
            onChange={(e) =>
              setOrderInfo({
                ...orderInfo,
                orderDeliveryAddress: {
                  ...orderInfo.orderDeliveryAddress,
                  state: e.target.value,
                },
              })
            }
          />
        </div>
        <Button
          disabled={cart.length === 0}
          onClick={() => {
            makeOrder({
              orderPlacedBy: orderInfo.orderPlacedBy,
              orderContactNumber: [orderInfo.orderContactNumber],
              orderDeliveryAddress: `${orderInfo.orderDeliveryAddress.street} ${orderInfo.orderDeliveryAddress.city} ${orderInfo.orderDeliveryAddress.pincode} ${orderInfo.orderDeliveryAddress.state}`,
              orderType: 'BUY',
              orderItems: [
                ...cart.map((item) => {
                  return {
                    productId: item.id,
                    productQuantity: item.amount,
                    productDR: item.dr,
                    productMRP: item.mrp,
                    productName: item.name,
                  }
                }),
              ],
            })
          }}
          label="Click to Place Order"
          className="w-full"
        />
        {isOrderError && (
          <p className="p-4 rounded-xl bg-red-200 text-red-600">
            There is Error while placing order
          </p>
        )}
      </Sidebar>
      <p className="text-xl sm:text-4xl ">Cart</p>

      <div>
        {cart.length === 0 ? (
          <div>
            <p className="text-2xl  my-8">There is no item in your cart.</p>
          </div>
        ) : (
          cart.map((item, idx) => {
            return (
              <div
                key={`${idx}`}
                className="bg-white sm:grid sm:grid-cols-[0.35fr,0.6fr] sm:gap-20 items-center p-4 rounded-xl my-4 justify-between"
              >
                <div className="flex justify-between w-full items-center gap-4">
                  <img
                    className="h-32 w-32 rounded-xl object-cover"
                    src={item.mediaLink}
                    alt={`${idx}`}
                  />
                  <div className="">
                    <p className="text-xl">{item.name}</p>
                    <p>
                      <span className="line-through text-gray-700 mr-4">
                        Rs.{item.mrp}
                      </span>
                      Rs.{item.dr}
                    </p>
                  </div>
                </div>
                <div className="mt-4 justify-between w-full  items-center flex gap-8">
                  <div className="flex gap-4 items-center">
                    <Button
                      icon="pi pi-minus"
                      rounded
                      outlined
                      onClick={() => setDecrease(item.id)}
                    />
                    <p>{item.amount}</p>
                    <Button
                      icon="pi pi-plus"
                      rounded
                      outlined
                      onClick={() => setIncrease(item.id)}
                    />
                  </div>
                  <div className="hidden sm:block">
                    Rs. {item.dr * item.amount}
                  </div>
                  <Button
                    icon="pi pi-trash"
                    outlined={isMobile}
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            )
          })
        )}
      </div>
      <div className="flex justify-center sm:justify-end text-center sm:text-right">
        <div>
          <p className="text-xl">Total Item - {totalItem}</p>
          <p className="text-xl">Subtotal - Rs. {totalAmount}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
        <div className="gap-4 flex sm:flex-row flex-col">
          <NavLink to="/products">
            <Button label="Continue Shopping" className="w-full " outlined />
          </NavLink>
          {/* <NavLink to="/products"> */}
          <Button label="Clear Cart" outlined onClick={() => clearCart()} />
          {/* </NavLink> */}
        </div>
        <div>
          <Button
            disabled={cart.length === 0}
            label="Place Order"
            onClick={() => setVisible(true)}
            className="w-full sm:w-wrap"
          />
        </div>
      </div>
    </div>
  )
}

export default Cart
