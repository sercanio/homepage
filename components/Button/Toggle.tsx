import { Dispatch, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../lib/store/themeSlice'
import { ToggleTypes } from '../../types'

export default function Toggle(props: ToggleTypes) {
  const [enabled, setEnabled] = useState(props.enabled ?? false)
  const dispatch: Dispatch<any> = useDispatch()

  const toggleHandler = () => {
    dispatch(setTheme())
    setEnabled(!enabled)
  }

  return (
    <Switch
      checked={enabled}
      onChange={toggleHandler}
      className={`${
        enabled ? 'bg-skin-secondary' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
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
