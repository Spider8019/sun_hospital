import React from 'react'

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 sm:gap-0 sm:grid-cols-4 ">
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          3000+
        </p>
        <span>diya donations</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          100+
        </p>
        <span>live impacted</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          200+
        </p>
        <span>unique donors</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          15K+
        </p>
        <span>worth donations</span>
      </div>
      {/* <div className="text-center">
        <p className="text-4xl font-semibold" style={{ lineHeight: 0 }}>
          20+
        </p>
        <span>staff for 24x7</span>
      </div> */}
    </div>
  )
}

export default AboutUs
