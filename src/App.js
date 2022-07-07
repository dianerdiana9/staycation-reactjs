import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/scss/style.scss'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
