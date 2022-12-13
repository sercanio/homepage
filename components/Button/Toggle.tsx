import { Dispatch, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../lib/store/themeSlice'
import { ToggleTypes } from '../../types'
import { RootState } from '../../lib/store/store'
import useLocalStorage from '../../hooks/use-localstorage'

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
    <Switch
      checked={enabled}
      onChange={toggleHandler}
      className={`${
        enabled ? 'bg-skin-secondary' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full mt-px`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-skin-base transition`}
      />
    </Switch>
  )
}
