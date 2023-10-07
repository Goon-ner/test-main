import React from 'react'
import SEO from '../common/seo'
import CourseDetails from '../components/single-course'
import WrapperFour from '../layout/wrapper-4'

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={'Course Details'} />
      <CourseDetails />
    </WrapperFour>
  )
}

export default index