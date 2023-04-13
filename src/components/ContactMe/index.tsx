import React from 'react'
import Button from '@/components/Button'

const ContactMe = (): JSX.Element => {
  const fnameRef = React.useRef<HTMLInputElement>(null)
  const lnameRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const messageRef = React.useRef<HTMLTextAreaElement>(null)

  const [name, setName] = React.useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      firstName: (event.target as HTMLFormElement).first.value,
      lastName: (event.target as HTMLFormElement).last.value,
      email: (event.target as HTMLFormElement).email.value,
      message: (event.target as HTMLFormElement).message.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/contactform'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    setName(result.data.firstName)
    fnameRef.current!.value = ''
    lnameRef.current!.value = ''
    emailRef.current!.value = ''
    messageRef.current!.value = ''
  }

  return (
    <section
      id="contact"
      className=" bg-gradient-to-br from-indigo-900 to-rose-900 flex justify-evenly items-center gap-4 w-full px-2 md:px-6 lg:px-8 pt-12 pb-24 max-w-[1920px] mx-auto"
    >
      <div className="relative w-full h-full hidden lg:flex items-center justify-center">
        <p className="absolute text-gradient-hero text-7xl text-center max-w-4xl tracking-wide leading-relaxed break-words">
          Feel free to send me an email for any purpose!
        </p>
        <span className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute bottom-24 left-16 opacity-20 z-0" />
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute bottom-64 right-32 opacity-20 z-0" />
        <span className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute top-20 left-32 opacity-10 z-0" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          fill="none"
          className="opacity-10 mx-auto"
        >
          <defs>
            <clipPath id="clip0_1_1423">
              <rect width="128" height="128" fill="white" />
            </clipPath>
            <filter
              id="filter0_f_1_1423"
              x="-50.6097"
              y="-27.6097"
              width="208.219"
              height="197.219"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="33.8049"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <filter
              id="filter9_biii_1_1423"
              x="28.7235"
              y="57.6564"
              width="21.5016"
              height="23.3263"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter1_bii_1_1423"
              x="50.9745"
              y="14.4863"
              width="62.6185"
              height="46.1294"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.32998" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.495812" />
              <feGaussianBlur stdDeviation="0.247906" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.21441" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter2_bi_1_1423"
              x="65.3029"
              y="13.7172"
              width="49.5074"
              height="64.4978"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.8258" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.21441" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter3_biiii_1_1423"
              x="36"
              y="36"
              width="56"
              height="56"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="22" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_innerShadow_1_1423"
                result="effect5_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter4_f_1_1423"
              x="71"
              y="46"
              width="13"
              height="13"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <filter
              id="filter5_biii_1_1423"
              x="71"
              y="44"
              width="13"
              height="13"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter6_f_1_1423"
              x="48"
              y="53"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <filter
              id="filter7_biii_1_1423"
              x="48"
              y="48"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter8_biii_1_1423"
              x="31.55"
              y="61.2057"
              width="13.3321"
              height="14.713"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter10_biii_1_1423"
              x="37.7097"
              y="61.0441"
              width="9.39459"
              height="9.55263"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter11_biii_1_1423"
              x="31.6058"
              y="63.2476"
              width="4.6335"
              height="4.6335"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter12_biii_1_1423"
              x="34.4503"
              y="61.7061"
              width="4.6335"
              height="4.6335"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter13_biii_1_1423"
              x="27.0846"
              y="67.5001"
              width="9.96524"
              height="9.33803"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.619053" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_1423"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_1423"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.309527" />
              <feGaussianBlur stdDeviation="0.619053" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1_1423"
                result="effect3_innerShadow_1_1423"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.309527" />
              <feGaussianBlur stdDeviation="0.154763" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1_1423"
                result="effect4_innerShadow_1_1423"
              />
            </filter>
            <filter
              id="filter14_f_1_1423"
              x="71.0959"
              y="46.6016"
              width="31.2822"
              height="32.6288"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3.18688"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <filter
              id="filter15_f_1_1423"
              x="75.6437"
              y="48.3146"
              width="28.7075"
              height="31.0018"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3.18688"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <filter
              id="filter16_f_1_1423"
              x="79.5664"
              y="51.7637"
              width="30"
              height="34"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_1423"
              x1="104.23"
              y1="62.0008"
              x2="79.6156"
              y2="76.6673"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0942" stopColor="#FFE5DC" />
              <stop offset="0.2307" stopColor="#FFFFE7" stopOpacity="0" />
            </linearGradient>
            <filter
              id="filter17_f_1_1423"
              x="73.6909"
              y="55.8699"
              width="30.1438"
              height="35.6981"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
            <linearGradient
              id="paint1_linear_1_1423"
              x1="98.2281"
              y1="69.3274"
              x2="78.6511"
              y2="66.0258"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFFFE6" />
              <stop offset="0.3608" stopColor="#D5FFFF" />
              <stop offset="0.9771" stopColor="#D5FFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_1423"
              x1="98.9664"
              y1="72.4707"
              x2="79.8075"
              y2="83.9985"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0153" stopColor="#D4FFE7" />
              <stop offset="0.3122" stopColor="#D5FFFF" stopOpacity="0" />
            </linearGradient>
            <filter
              id="filter18_f_1_1423"
              x="89.5582"
              y="62.14"
              width="10.4927"
              height="11.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.5"
                result="effect1_foregroundBlur_1_1423"
              />
            </filter>
          </defs>
          <g clipPath="url(#clip0_1_1423)">
            <circle
              cx="47.8361"
              cy="42.8361"
              r="7.66419"
              transform="rotate(7.45291 47.8361 42.8361)"
              strokeWidth="4"
              strokeDasharray="2.61 2.61"
            />
            <g filter="url(#filter0_f_1_1423)">
              <rect
                x="17"
                y="40"
                width="73"
                height="62"
                rx="30.0488"
                fill="#84B9FF"
              />
            </g>
            <g filter="url(#filter9_biii_1_1423)">
              <path
                d="M30.006 64.8761C29.7232 62.7024 30.8082 60.579 32.7355 59.5346C34.6627 58.4902 37.0341 58.7405 38.7008 60.1642L47.7582 67.9013C49.6285 69.499 49.3143 72.4758 47.1517 73.6478L36.6885 79.318C34.5259 80.4899 31.8604 79.1279 31.543 76.6887L30.006 64.8761Z"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter1_bii_1_1423)">
              <path
                d="M102.933 25.1463L75.024 49.9558C72.9283 45.4065 69.4835 41.5915 65.1444 39.0146L62.934 37.7019C60.8358 36.4558 61.3906 33.3145 63.7924 32.8423L102.933 25.1463Z"
                fill="#A9CFFF"
              />
            </g>
            <g filter="url(#filter2_bi_1_1423)">
              <path
                d="M103.159 25.3688L76.9545 53.1306C81.1206 54.3638 84.7385 56.957 87.2153 60.4851L90.6122 65.3238C92.0872 67.4248 95.3995 66.7235 95.871 64.2103L103.159 25.3688Z"
                fill="#2329D6"
              />
            </g>
            <g
              filter="url(#filter3_biiii_1_1423)"
              transform="matrix(1, 0, 0, 1, 0.147976, 0.147974)"
            >
              <rect x="40" y="40" width="48" height="48" rx="12" fill="white" />
            </g>
            <rect
              x="47"
              y="42"
              width="11.9489"
              height="11.9489"
              rx="5.97443"
              fill="#ED392D"
            />
            <g filter="url(#filter4_f_1_1423)">
              <circle cx="77.5" cy="52.5" r="2.5" fill="#A9CFFF" />
            </g>
            <g filter="url(#filter5_biii_1_1423)">
              <circle
                cx="77.5"
                cy="50.5"
                r="2.5"
                fill="white"
                fillOpacity="0.1"
              />
            </g>
            <g filter="url(#filter6_f_1_1423)">
              <circle cx="64" cy="69" r="12" fill="#A9CFFF" />
            </g>
            <g filter="url(#filter7_biii_1_1423)">
              <circle cx="64" cy="64" r="9.16913" strokeWidth="5.66173" />
            </g>
            <g filter="url(#filter8_biii_1_1423)">
              <path
                d="M32.8158 66.1711C32.6395 64.8166 33.3156 63.4935 34.5166 62.8427C35.7175 62.1919 37.1952 62.3478 38.2337 63.235L42.4153 66.807C44.2856 68.4046 43.9713 71.3815 41.8087 72.5535L38.6709 74.2539C36.5083 75.4259 33.8427 74.0638 33.5253 71.6246L32.8158 66.1711Z"
                fill="#E9E74C"
              />
            </g>
            <g filter="url(#filter10_biii_1_1423)">
              <path
                d="M42.754 62.6883C43.7698 61.7336 45.4402 62.5843 45.3267 63.9737C45.277 64.5821 45.2477 65.1163 45.2589 65.4517C45.3025 66.7556 46.4255 67.8981 45.5044 68.868C44.5719 69.8497 43.5777 69.1155 42.0392 68.7507C41.6525 68.659 41.1089 68.6032 40.5116 68.5709C39.1336 68.4966 38.4123 66.7692 39.4178 65.8241L42.754 62.6883Z"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter11_biii_1_1423)">
              <circle
                cx="33.9225"
                cy="65.5643"
                r="1.07844"
                transform="rotate(-28.4541 33.9225 65.5643)"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter12_biii_1_1423)">
              <circle
                cx="36.767"
                cy="64.0228"
                r="1.07844"
                transform="rotate(-28.4541 36.767 64.0228)"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter13_biii_1_1423)">
              <path
                d="M29.4303 69.9761C28.0838 70.3369 27.9274 72.205 29.1684 72.8401C29.7118 73.1182 30.1813 73.3746 30.4606 73.5607C31.5461 74.2844 31.926 75.8407 33.2356 75.5683C34.5612 75.2926 34.4606 74.0607 34.9606 72.5607C35.0862 72.1837 35.325 71.6921 35.6121 71.1674C36.2745 69.9568 35.1858 68.434 33.8529 68.7911L29.4303 69.9761Z"
                fill="white"
                fillOpacity="0.2"
              />
            </g>
            <g filter="url(#filter14_f_1_1423)">
              <path
                d="M79.6668 71.4683C77.0894 69.3375 76.7273 65.5208 78.8581 62.9434L85.2823 55.1725C87.4131 52.5951 91.2298 52.233 93.8072 54.3638C96.3846 56.4946 96.7467 60.3113 94.6159 62.8887L88.1917 70.6595C86.0609 73.2369 82.2442 73.599 79.6668 71.4683Z"
                fill="#FFE4DB"
              />
            </g>
            <g filter="url(#filter15_f_1_1423)">
              <path
                d="M82.9272 72.3677C81.86 71.4854 81.7101 69.9051 82.5923 68.8378L93.5377 55.5981C94.42 54.5309 96.0004 54.381 97.0676 55.2633C98.1348 56.1455 98.2848 57.7259 97.4025 58.7931L86.4571 72.0329C85.5748 73.1001 83.9944 73.25 82.9272 72.3677Z"
                fill="#FFFFE7"
              />
            </g>
            <path d="M93.258 85.6857C92.9394 85.6857 92.6207 85.5885 92.3408 85.3935L88.1506 82.4748C88.06 82.4116 87.9382 82.4116 87.8474 82.4748L83.6573 85.3935C83.0887 85.7896 82.3588 85.7824 81.7981 85.3753C81.2367 84.9677 81.0037 84.2753 81.2045 83.6111L82.6851 78.7121C82.7166 78.6076 82.6799 78.4927 82.5934 78.426L78.6262 75.3643C78.0742 74.9383 77.8634 74.2346 78.0894 73.5717C78.3149 72.9107 78.9097 72.4835 79.6051 72.4835H84.5567C84.6743 72.4835 84.7728 72.4172 84.8077 72.3148L86.4801 67.4003C86.7053 66.7393 87.3015 66.3125 87.9991 66.3125C88.6967 66.3125 89.2927 66.7393 89.5179 67.4L91.1905 72.3148C91.2253 72.4174 91.3238 72.4835 91.4415 72.4835H96.3954C97.0906 72.4835 97.6852 72.9106 97.9106 73.5714C98.1366 74.2343 97.9258 74.9377 97.3738 75.3636L93.4048 78.426C93.3183 78.4928 93.2815 78.6077 93.3131 78.7121L93.4431 79.1425C93.5679 79.5555 93.3343 79.9914 92.9213 80.1162C92.5085 80.2409 92.0724 80.0074 91.9476 79.5945L91.8176 79.1642C91.5997 78.4431 91.8539 77.6493 92.4504 77.1891L96.4195 74.1267C96.4372 74.1129 96.437 74.1096 96.4363 74.0966C96.4346 74.0717 96.4206 74.0513 96.4149 74.0479C96.4149 74.0479 96.4096 74.0458 96.3954 74.0458H91.4415C90.6566 74.0458 89.9614 73.5525 89.7114 72.8182L88.0391 67.9035C88.032 67.8832 88.0291 67.8747 87.9991 67.8747C87.9689 67.8747 87.966 67.8832 87.959 67.9038L86.2867 72.8181C86.0368 73.5525 85.3416 74.0458 84.5567 74.0458H79.6051C79.5907 74.0458 79.5854 74.0479 79.5854 74.0479C79.5797 74.0511 79.5657 74.0714 79.5639 74.0965C79.563 74.11 79.5627 74.1136 79.5807 74.1276L83.5478 77.1891C84.1443 77.6495 84.3985 78.4431 84.1806 79.1641L82.6999 84.063C82.6938 84.0835 82.6909 84.0928 82.7159 84.111C82.74 84.1285 82.7472 84.1235 82.7644 84.1114L86.9545 81.1929C87.5793 80.7577 88.4189 80.7577 89.0435 81.1929L93.2336 84.1116C93.2509 84.1235 93.258 84.1287 93.2821 84.111C93.3072 84.0928 93.3043 84.0835 93.2982 84.063L93.0807 83.3439C92.9559 82.9308 93.1895 82.4949 93.6026 82.3701C94.0153 82.2454 94.4514 82.4789 94.5762 82.8919L94.7935 83.6111C94.9943 84.2753 94.7613 84.9677 94.2 85.3753C93.9152 85.5821 93.5867 85.6857 93.258 85.6857Z" />
            <g filter="url(#filter16_f_1_1423)">
              <path
                d="M87.5664 66.7637C87.5664 62.8977 90.7004 59.7637 94.5664 59.7637C98.4324 59.7637 101.566 62.8977 101.566 66.7637V70.7637C101.566 74.6297 98.4324 77.7637 94.5664 77.7637C90.7004 77.7637 87.5664 74.6297 87.5664 70.7637V66.7637Z"
                fill="#FFFFE7"
              />
            </g>
            <path
              d="M90.2055 64.6887C91.5133 60.9946 95.5783 59.0313 99.2848 60.3035C102.991 61.5757 104.936 65.6016 103.628 69.2957L101.785 74.5003C101.417 75.5416 100.271 76.095 99.2261 75.7364L89.587 72.428C88.5422 72.0694 87.9941 70.9346 88.3628 69.8933L90.2055 64.6887Z"
              fill="url(#paint0_linear_1_1423)"
            />
            <g filter="url(#filter17_f_1_1423)">
              <path
                d="M81.8096 68.0696C82.8976 63.7209 87.3122 61.0475 91.67 62.0985C96.0278 63.1494 98.6786 67.5267 97.5906 71.8754L95.716 79.3683C94.6281 83.717 90.2134 86.3904 85.8556 85.3394C81.4978 84.2885 78.8471 79.9112 79.935 75.5625L81.8096 68.0696Z"
                fill="url(#paint1_linear_1_1423)"
              />
            </g>
            <g>
              <path
                d="M83.3178 66.6281C85.3717 62.6571 90.2802 61.0551 94.2812 63.0499C98.2822 65.0448 99.8606 69.8811 97.8067 73.8521L94.2079 80.8099C92.154 84.7809 87.2455 86.3829 83.2445 84.388C79.2435 82.3932 77.665 77.5569 79.719 73.5859L83.3178 66.6281Z"
                fill="url(#paint2_linear_1_1423)"
              />
            </g>
            <g filter="url(#filter18_f_1_1423)">
              <path
                d="M91.5443 63.7991C92.7184 62.8055 94.4757 62.9518 95.4693 64.1259L98.3924 67.5801C99.3851 68.7531 99.2389 70.5087 98.0658 71.5014C97.1442 72.2814 95.8247 72.3779 94.7993 71.7404L92 70L90.7653 66.9786C90.3089 65.8619 90.6234 64.5784 91.5443 63.7991Z"
                fill="white"
              />
            </g>
            <circle cx="64" cy="64" r="33.75" strokeLinecap="square" />
            <path d="M0 64H128" strokeLinecap="square" />
            <path d="M64 0V128" strokeLinecap="square" />
            <path d="M39.875 0V128" strokeLinecap="square" />
            <path d="M88.125 0V128" strokeLinecap="square" />
            <path d="M128 39.875H0" strokeLinecap="square" />
            <path d="M128 88.125H0" strokeLinecap="square" />
            <circle cx="64" cy="64" r="55.25" strokeLinecap="square" />
            <circle cx="64" cy="64" r="23.75" strokeLinecap="square" />
          </g>
        </svg>
      </div>
      <div className="relative w-full h-full">
        <h2 className="text-gradient-hero text-center text-4xl md:text-5xl w-full">
          Contact Me
        </h2>
        <span className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute bottom-24 left-16 opacity-20 z-0" />
        <span className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute top-12 left-2 opacity-10 z-0" />
        <span className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute top-24 right-36 opacity-10 z-0" />
        <form
          action="/api/contactform"
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-7 max-w-2xl px-4 py-6 md:p-8 lg:p-16 mx-auto text-xl text-blue-50 rounded-lg [&>div>*]:w-full [&>div>*]:outline-none [&>div]:mx-auto [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:justify-center [&>div]:gap-1 [&>div]:w-full [&>div>input]:border [&>div>input]:border-cyan-600 focus:[&>div>input]:border-blue-300 [&>div>input]:bg-inherit [&>div>input]:rounded-md [&>div>input]:px-2 [&>div>input]:py-1 [&>div>input] [&>div>label]:ml-1 [&>div>textarea]:border  [&>div>textarea]:rounded-lg [&>div>textarea]:border-cyan-600 [&>div>textarea]:bg-inherit [&>div>textarea]:p-2 focus:[&>div>textarea]:border-blue-300"
        >
          <div>
            <label htmlFor="first">First Name*</label>
            <input
              ref={fnameRef}
              type="text"
              id="first"
              name="first"
              required
            />
          </div>
          <div>
            <label htmlFor="last">Last Name*</label>
            <input ref={lnameRef} type="text" id="last" name="last" required />
          </div>
          <div>
            <label htmlFor="email">E-mail*</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message*</label>
            <textarea
              ref={messageRef}
              id="message"
              name="message"
              rows={4}
              cols={40}
              required
              minLength={10}
            />
          </div>
          <Button variant="" type="submit">
            Get in Touch
          </Button>
          {name && (
            <p className="text-gradient-hero">{`Thank you ${name}. Your message has sent to me.`}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactMe
