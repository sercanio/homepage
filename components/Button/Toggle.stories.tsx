import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import Toggle from './Toggle'

export default {
  title: 'Components/Buttons/Toggle',
  component: Toggle,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => (
  <Provider
    store={configureStore({
      reducer: {
        theme: createSlice({
          name: 'theme',
          initialState: {
            theme: 'dark'
          },
          reducers: {
            setTheme: (state, action) => {
              state.theme = state.theme === 'light' ? 'dark' : 'light'
            }
          }
        }).reducer
      }
    })}
  >
    <Toggle {...args} />
  </Provider>
)

export const Enabled = Template.bind({})
export const Disabled = Template.bind({})

Enabled.argTypes = {
  enabled: {
    control: {
      type: 'boolean'
    },
    defaultValue: true
  }
}

Disabled.argTypes = {
  enabled: {
    control: {
      type: 'boolean'
    },
    defaultValue: false
  }
}
