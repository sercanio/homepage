import React, { ReactComponentElement } from 'react'
import { ButtonProps } from '@/types'

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className="px-5 py-3 rounded-2xl max-w-sm bg-gradient-to-br from-indigo-500  to-rose-400 text-white tracking-wide hover:bg-gradient-to-lr hover:scale-105 outline-none focus:outline-blue-600  hover:shadow-xs  hover:shadow-red-600"
    >
      {props.children}
    </button>
  )
}

export default Button
