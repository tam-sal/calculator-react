import React from 'react'
import '../stylesheets/Button.css'

function Button(props) {
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }
  return (
    <div
      className={`btn-container ${isOperator(props.children) ? 'operator' : 'number'}`}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button