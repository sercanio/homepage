import React from 'react'
import { InputProps } from '../../../types'

const Input = (props: InputProps) => {
  const [cursorBlink, setcursorBlink] = React.useState(true)

  const { inputRef, placeholder, type, user = 'guest', onKeyDown } = props
  return (
    <label className="flex flex-nowrap gap-1 items-center w-full h-6">
      <span className="font-mono text-skin-primary">
        <span className="font-mono text-skin-primary">{user}</span>
        @sercan.io{':'}
        <span className="font-mono text-skin-tilde">~</span>
        {'$'}
        &nbsp;
      </span>
      {cursorBlink ? (
        <span className="relative font-mono animate-cursorBlink text-skin-caret">
          |
        </span>
      ) : (
        <span className="font-mono text-transparent">|</span>
      )}
      <input
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        className="w-full bg-inherit placeholder:opacity-60 font-mono focus:outline-none caret-skin-base -ml-2"
        onFocus={() => setcursorBlink(false)}
        onBlur={() => setcursorBlink(true)}
        onKeyDown={onKeyDown}
        autoFocus
      />
      <div role="button" className="text-skin-tilde flex">
        <span className="text-sm">Enter</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className="text-skin-primary"
          height="1.2rem"
          width="1.2rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
    </label>
  )
}

export default Input
