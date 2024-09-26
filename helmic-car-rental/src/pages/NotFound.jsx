import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const NotFound = () => {
  return (
    <Helmet title="Other Services">
      <CommonSection title="Other Services" />
    <div className='notfound'>
      <h1 className="mb-5 text-center ">Coming Soon</h1>
    </div>
    </Helmet>
  )
}

export default NotFound
