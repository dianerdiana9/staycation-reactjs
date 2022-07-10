import React, { useState } from 'react'

import propTypes from 'prop-types'

import './index.scss'

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props

  // state
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`)

  const onChange = (e) => {
    let value = String(e.target.value)
    if (prefix) value = value.replace(prefix)
    if (suffix) value = value.replace(suffix)

    const patternNumberic = new RegExp('[0-9]*')
    const isNumberic = patternNumberic.test(value)

    if (isNumberic && +value <= max && value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value
        }
      })
      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`
      )
    }
  }

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1
        }
      })
  }

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1
        }
      })
  }

  return (
    <div className={['input-number mb-1', props.outerClassName].join(' ')}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="0-9*"
          className="form-control"
          placeholder={placeholder ? placeholder : '0'}
          value={String(inputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  )
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: ''
}

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  isSuffixPlural: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string
}
