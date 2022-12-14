import { Dispatch, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../lib/store/themeSlice'
import { ToggleTypes } from '../../types'
import { RootState } from '../../lib/store/store'
import useLocalStorage from '../../hooks/use-localstorage'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

export default function Toggle(props: ToggleTypes) {
  const [enabled, setEnabled] = useState(props.enabled ?? true)
  const [lsItem, setLsItem] = useLocalStorage('theme', 'light')
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch: Dispatch<any> = useDispatch()

  const toggleHandler = () => {
    dispatch(setTheme(enabled ? 'dark' : 'light'))
    setLsItem(enabled ? 'dark' : 'light')
    setEnabled(!enabled)
  }

  useEffect(() => {
    ;(async () => {
      const theme = await JSON.parse(localStorage.getItem('theme')!)
      if (theme === 'dark') {
        dispatch(setTheme(theme))
        setEnabled(false)
      } else {
        dispatch(setTheme('light'))
        setEnabled(true)
      }
    })()
  }, [dispatch])

  return (
    <Switch checked={enabled} onChange={toggleHandler}>
      {({ checked }) =>
        checked ? (
          <div
            role="button"
            className="bg-skin-base
            relative flex h-8 items-center rounded-md sm:rounded-full"
          >
            <span className="sr-only">Enable notifications</span>
            <FiSun className="bg-transparent text-skin-base" />
          </div>
        ) : (
          <div
            role="button"
            className="bg-skin-base
             relative flex items-center rounded-md sm:rounded-full"
          >
            <span className="sr-only">Enable notifications</span>
            <FaMoon className="bg-transparent text-skin-base" />
          </div>
        )
      }
    </Switch>
  )
}
