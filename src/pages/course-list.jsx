import React from 'react'
import SEO from '../common/seo'
import WrapperFour from '../layout/wrapper-4'
import CourseList from '../components/course-list'

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={'Course List'} />
      <CourseList />
    </WrapperFour>
  )
}

export default index
