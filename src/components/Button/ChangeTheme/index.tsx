import { useEffect, useState } from 'react'
import { Theme } from 'types'

const ChangeThemeButton = () => {
  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (
      storedTheme == 'dark' &&
      !document.documentElement.classList.contains('dark')
    ) {
      document.documentElement.classList.add('dark')
    } else if (
      storedTheme == 'light' &&
      document.documentElement.classList.contains('dark')
    ) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setTheme((storedTheme as Theme) || 'dark')
  }, [theme])

  const iconSize = 1.5
  const lightThemeIconColor = '#ffffff'
  const darkThemeIconColor = '#000000'

  const LightThemeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={lightThemeIconColor}
        width={`${iconSize}rem`}
        height={`${iconSize}rem`}
        viewBox="0 0 400 400"
        id="Light"
        version="1.1"
      >
        <g id="XMLID_41_">
          <polygon
            id="XMLID_43_"
            points="213.3,26.7 213.3,0 186.7,0 186.7,26.7 186.7,53.3 213.3,53.3  "
          />

          <rect height="26.7" id="XMLID_67_" width="26.7" x="53.3" y="53.3" />

          <rect height="26.7" id="XMLID_68_" width="26.7" x="320" y="53.3" />

          <rect height="26.7" id="XMLID_69_" width="26.7" x="80" y="80" />

          <polygon
            id="XMLID_70_"
            points="213.3,106.7 240,106.7 240,80 213.3,80 186.7,80 160,80 160,106.7 186.7,106.7  "
          />

          <rect height="26.7" id="XMLID_71_" width="26.7" x="293.3" y="80" />

          <rect height="26.7" id="XMLID_72_" width="26.7" x="133.3" y="106.7" />

          <rect height="26.7" id="XMLID_73_" width="26.7" x="240" y="106.7" />

          <rect height="26.7" id="XMLID_74_" width="26.7" x="106.7" y="133.3" />

          <rect height="26.7" id="XMLID_75_" width="26.7" x="266.7" y="133.3" />

          <polygon
            id="XMLID_76_"
            points="53.3,186.7 26.7,186.7 0,186.7 0,213.3 26.7,213.3 53.3,213.3  "
          />

          <polygon
            id="XMLID_77_"
            points="106.7,186.7 106.7,160 80,160 80,186.7 80,213.3 80,240 106.7,240 106.7,213.3  "
          />

          <polygon
            id="XMLID_78_"
            points="293.3,213.3 293.3,240 320,240 320,213.3 320,186.7 320,160 293.3,160 293.3,186.7  "
          />

          <polygon
            id="XMLID_79_"
            points="373.3,186.7 346.7,186.7 346.7,213.3 373.3,213.3 400,213.3 400,186.7  "
          />

          <rect height="26.7" id="XMLID_80_" width="26.7" x="106.7" y="240" />

          <rect height="26.7" id="XMLID_81_" width="26.7" x="266.7" y="240" />

          <rect height="26.7" id="XMLID_82_" width="26.7" x="133.3" y="266.7" />

          <rect height="26.7" id="XMLID_83_" width="26.7" x="240" y="266.7" />

          <rect height="26.7" id="XMLID_84_" width="26.7" x="80" y="293.3" />

          <polygon
            id="XMLID_85_"
            points="186.7,293.3 160,293.3 160,320 186.7,320 213.3,320 240,320 240,293.3 213.3,293.3  "
          />

          <rect height="26.7" id="XMLID_86_" width="26.7" x="293.3" y="293.3" />

          <rect height="26.7" id="XMLID_87_" width="26.7" x="53.3" y="320" />

          <rect height="26.7" id="XMLID_88_" width="26.7" x="320" y="320" />

          <polygon
            id="XMLID_89_"
            points="186.7,373.3 186.7,400 213.3,400 213.3,373.3 213.3,346.7 186.7,346.7  "
          />
        </g>
      </svg>
    )
  }

  const DarkThemeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={darkThemeIconColor}
        width={`${iconSize * 0.85}rem`}
        height={`${iconSize * 0.85}rem`}
        viewBox="0 0 400 400"
        id="Night"
        version="1.1"
      >
        <g id="XMLID_42_">
          <polygon
            id="XMLID_44_"
            points="133.3,53.3 133.3,26.7 106.7,26.7 80,26.7 80,53.3 106.7,53.3  "
          />

          <polygon
            id="XMLID_64_"
            points="160,53.3 186.7,53.3 186.7,26.7 213.3,26.7 213.3,0 186.7,0 160,0 133.3,0 133.3,26.7 160,26.7     "
          />

          <rect height="26.7" id="XMLID_65_" width="26.7" x="53.3" y="53.3" />

          <rect height="26.7" id="XMLID_66_" width="26.7" x="133.3" y="53.3" />

          <polygon
            id="XMLID_90_"
            points="106.7,106.7 106.7,133.3 106.7,160 106.7,186.7 106.7,213.3 133.3,213.3 133.3,186.7 133.3,160    133.3,133.3 133.3,106.7 133.3,80 106.7,80  "
          />

          <polygon
            id="XMLID_91_"
            points="53.3,106.7 53.3,80 26.7,80 26.7,106.7 26.7,133.3 53.3,133.3  "
          />

          <polygon
            id="XMLID_92_"
            points="373.3,186.7 373.3,213.3 346.7,213.3 346.7,240 373.3,240 373.3,266.7 400,266.7 400,240    400,213.3 400,186.7  "
          />

          <polygon
            id="XMLID_93_"
            points="26.7,213.3 26.7,186.7 26.7,160 26.7,133.3 0,133.3 0,160 0,186.7 0,213.3 0,240 0,266.7    26.7,266.7 26.7,240  "
          />

          <rect height="26.7" id="XMLID_94_" width="26.7" x="133.3" y="213.3" />

          <rect height="26.7" id="XMLID_95_" width="26.7" x="160" y="240" />

          <rect height="26.7" id="XMLID_96_" width="26.7" x="320" y="240" />

          <polygon
            id="XMLID_97_"
            points="53.3,266.7 26.7,266.7 26.7,293.3 26.7,320 53.3,320 53.3,293.3  "
          />

          <polygon
            id="XMLID_98_"
            points="213.3,293.3 240,293.3 266.7,293.3 293.3,293.3 320,293.3 320,266.7 293.3,266.7 266.7,266.7    240,266.7 213.3,266.7 186.7,266.7 186.7,293.3  "
          />

          <polygon
            id="XMLID_99_"
            points="346.7,293.3 346.7,320 373.3,320 373.3,293.3 373.3,266.7 346.7,266.7  "
          />

          <rect height="26.7" id="XMLID_100_" width="26.7" x="53.3" y="320" />

          <rect height="26.7" id="XMLID_101_" width="26.7" x="320" y="320" />

          <polygon
            id="XMLID_102_"
            points="106.7,346.7 80,346.7 80,373.3 106.7,373.3 133.3,373.3 133.3,346.7  "
          />

          <polygon
            id="XMLID_103_"
            points="266.7,346.7 266.7,373.3 293.3,373.3 320,373.3 320,346.7 293.3,346.7  "
          />

          <polygon
            id="XMLID_104_"
            points="213.3,373.3 186.7,373.3 160,373.3 133.3,373.3 133.3,400 160,400 186.7,400 213.3,400 240,400    266.7,400 266.7,373.3 240,373.3  "
          />
        </g>
      </svg>
    )
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="mr-4 md:mr-6 lg:mr-8 pt-5">
      <button onClick={toggleTheme} aria-label="Theme">
        {theme === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}
      </button>
    </div>
  )
}

export default ChangeThemeButton
