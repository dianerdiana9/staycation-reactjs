import React from 'react'

// ** Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'

// ** Import fake data (json)
import landingPage from '../json/landingPage.json'

export default function LandingPage(props) {
  const refMostPick = React.createRef()
  return (
    <>
      <Header {...props} />
      <Hero data={landingPage.hero} refMostPicked={refMostPick} />
      <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPick} />
    </>
  )
}
