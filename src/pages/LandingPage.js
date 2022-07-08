import React from 'react'

// ** Import components
import Header from '../components/Header'
import Hero from '../components/Hero'

// ** Import fake data (json)
import landingPage from '../json/landingPage.json'

export default function LandingPage(props) {
  return (
    <>
      <Header {...props} />
      <Hero data={landingPage.hero} />
    </>
  )
}
