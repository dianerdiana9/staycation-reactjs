import React, { useState, useRef, useEffect } from 'react'

import propTypes from 'prop-types'

import './index.scss'
import 'react-date-range/dist/style.css'
import 'react-date-range/dist/theme/default.css'

import formatDate from 'utils/formatDate'
import iconCalendar from 'assets/icons/ic_calendar.svg'

export default function InputDate(props) {
  return <div>InputDate</div>
}

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func
}
