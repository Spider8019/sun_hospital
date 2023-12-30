import React from 'react'
import { Card } from 'primereact/card'
import cardBg from '../../assets/images/DoctorCard.png'

const Doctor = ({ name, degree, speciality }) => {
  return (
    <Card
      className="doctorCard bg-white"
      style={{
        background: `url('${cardBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
      title={'Dr. ' + name}
      subTitle={degree}
    >
      <p className="">{speciality}</p>
    </Card>
  )
}

export default Doctor
