import React, { useEffect } from 'react'
import { InputProps } from '../../types'
import Input from './Input'
const Contact = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [inputGroup, setInputGroup] = React.useState<InputProps[]>([
    { placeholder: 'Name', type: 'text', user: 'guest' }
  ])

  const [contactInfo, setContactInfo] = React.useState({})

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("You've submitted the form")
  }

  const newLine = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const user = inputRef.current?.value.split(' ')[0]
    if (inputGroup.length == 1) {
      setInputGroup(prev => [
        ...prev,
        {
          placeholder: 'E-mail',
          type: 'email',
          user: user?.toLowerCase()
        }
      ])
    }
    if (inputGroup.length == 2) {
      setInputGroup(prev => [
        ...prev,
        { placeholder: 'Your Message', type: 'text', user: user?.toLowerCase() }
      ])
    }
  }

  return (
    <section className="flex flex-col justify-center items-center gap-4 w-full px-2 mb-12 animate-slideFromBottom ">
      <div className="flex flex-col w-full sm:w-[913px] h-[400px] border-2 border-black rounded-lg">
        <div className="grid grid-cols-12 h-8 w-full px-2 bg-black">
          <div className="col-start-4 col-span-6">
            <h1 className="text-center text-lg text-skin-primary font-bold tracking-widest">
              Contact
            </h1>
          </div>
          <div className="col-span-3 flex items-center justify-end gap-2 [&>*]:console__title--buttons">
            <div className="bg-red-600"></div>
            <div className="bg-green-500"></div>
            <div className=" bg-yellow-500"></div>
          </div>
        </div>
        <div
          className="relative h-full w-full"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="absolute z-10 w-full p-2">
            <form>
              {inputGroup.map((input, index) => (
                <Input
                  key={index}
                  inputRef={inputRef}
                  placeholder={input.placeholder}
                  type={input.type}
                  user={input.user}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && inputGroup.length !== 3) {
                      newLine(e)
                    } else if (e.key === 'Enter' && inputGroup.length == 3)
                      submitHandler(e)
                  }}
                />
              ))}
            </form>
          </div>
          <div className=" opacity-30">
            <svg
              className="absolute opacity-50 bg-skin-console z-0"
              width="100%"
              height="100%"
            >
              <filter id="noisybg">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.80"
                  numOctaves="5"
                  stitchTiles="stitch"
                ></feTurbulence>
              </filter>
              <rect width="100%" height="100%" filter="url(#noisybg)"></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
