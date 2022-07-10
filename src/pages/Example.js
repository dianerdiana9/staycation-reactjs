import React, { useState } from 'react'

import InputNumber from '../@core/components/Form/inputNumber'

export default function Example() {
  const [state, setState] = useState({ value: '1 ' })
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="col">
          <InputNumber
            name="value"
            suffix=" night"
            isSuffixPlural
            max={30}
            onChange={handleChange}
            value={state.value}
          />
        </div>
      </div>
    </div>
  )
}
