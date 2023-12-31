import React from 'react'

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 sm:gap-0 sm:grid-cols-5 ">
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          10+
        </p>
        <span>medical checkups</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          50+
        </p>
        <span>services</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          100+
        </p>
        <span>Treated ever</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          10+
        </p>
        <span>beds available</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          20+
        </p>
        <span>staff for 24x7</span>
      </div>
    </div>
  )
}

export default AboutUs
