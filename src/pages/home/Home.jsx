import React from 'react'
import Hero from './Hero'
import BookNow from '../../components/BookNow'
// import PopularCourse from '../../components/PopularCourse'
import PopularCourses from '../../components/PopularCourses'
import Achievement from '../../components/Achievement'
import SuccessStory from '../../components/SuccessStory'
import CreativeItApp from '../../components/CreativeItApp'
import ExclusiveSolution from '../../components/ExclusiveSolution'
import AllCourse from '../../components/AllCourse'
import FreeSeminer from '../../components/FreeSeminer'
import OurSpeciality from '../../components/OurSpeciality'
import ShapingExpert from '../../components/ShapingExpert'
import ConnectedCompany from '../../components/ConnectedCompany'

const Home = () => {
  return (
    <>
     <Hero/>
     <BookNow/>
     <PopularCourses/>
     <Achievement/>
     <SuccessStory/>
     <CreativeItApp/>
     <ExclusiveSolution/>
     <AllCourse/>
     <FreeSeminer/>
     <OurSpeciality/>
     <ShapingExpert/>
     <ConnectedCompany/>
    </>
  )
}

export default Home