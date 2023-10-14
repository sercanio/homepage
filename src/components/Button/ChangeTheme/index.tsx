import { useEffect, useState } from 'react'
import { Theme } from 'types'

const ChangeThemeButton = () => {
  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme) {
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      setTheme(storedTheme as Theme)
    } else {
      // If there's no theme stored, use the default theme
      const defaultTheme = 'dark' // Replace with your default theme
      localStorage.setItem('theme', defaultTheme)
      document.documentElement.classList.add('dark')
      setTheme(defaultTheme)
    }
  }, [theme])

  const iconSize = 1.5
  const lightThemeIconColor = '#c9fe55ca'
  const darkThemeIconColor = '#004162'

  const LightThemeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${iconSize}rem`}
        height={`${iconSize}rem`}
        fill={lightThemeIconColor}
        viewBox="0 0 512 512"
        className="icon"
        version="1.1"
      >
        <g>
          <rect y="239.908" className="st0" width="68.958" height="32.185" />
          <rect
            x="443.059"
            y="239.908"
            className="st0"
            width="68.941"
            height="32.185"
          />
          <polygon
            className="st0"
            points="26.248,370.057 42.341,397.943 102.053,363.464 85.961,335.586  "
          />
          <polygon
            className="st0"
            points="485.752,141.934 469.658,114.057 409.947,148.536 426.039,176.413  "
          />
          <polygon
            className="st0"
            points="114.065,469.658 141.943,485.752 176.422,426.039 148.544,409.947  "
          />
          <polygon
            className="st0"
            points="397.952,42.341 370.057,26.248 335.596,85.961 363.473,102.053  "
          />
          <rect
            x="239.916"
            y="443.051"
            className="st0"
            width="32.185"
            height="68.949"
          />
          <rect x="239.916" className="st0" width="32.185" height="68.949" />
          <polygon
            className="st0"
            points="335.596,426.039 370.057,485.752 397.952,469.658 363.473,409.947  "
          />
          <polygon
            className="st0"
            points="176.422,85.961 141.943,26.248 114.065,42.341 148.544,102.053  "
          />
          <polygon
            className="st0"
            points="409.947,363.464 469.658,397.943 485.752,370.057 426.039,335.586  "
          />
          <polygon
            className="st0"
            points="102.053,148.536 42.341,114.057 26.248,141.934 85.961,176.413  "
          />
          <path
            className="st0"
            d="M256.009,99.926c-86.207,0-156.074,69.877-156.074,156.074c0,86.197,69.868,156.074,156.074,156.074   c86.188,0,156.074-69.878,156.074-156.074C412.083,169.802,342.197,99.926,256.009,99.926z"
          />
        </g>
      </svg>
    )
  }

  const DarkThemeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${iconSize}rem`}
        height={`${iconSize}rem`}
        fill={darkThemeIconColor}
        viewBox="0 0 24 24"
        id="Night"
        version="1.1"
      >
        <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" />
      </svg>
    )
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="mr-4 xl:mr-[265px] pt-5">
      <button onClick={toggleTheme} aria-label="Theme">
        {theme === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}
      </button>
    </div>
  )
}

export default ChangeThemeButton
