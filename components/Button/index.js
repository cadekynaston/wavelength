import React from 'react'

const Button = ({ onClick, disabled, children }) => {
  return (
    <button disabled={disabled} className={`${disabled ? 'bg-pureblack-40 cursor-not-allowed' : 'bg-coral-400'} py-3 px-5 rounded text-white mb-1`} onClick={onClick}>{children}</button>
  )
}

export default Button
