import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import Header from '../components/Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => (
  <Provider
    store={configureStore({
      reducer: {
        theme: createSlice({
          name: 'theme',
          initialState: 'light',
          reducers: {
            setTheme: (state, action) => action.payload
          }
        }).reducer
      }
    })}
  >
    <Header {...args} />
  </Provider>
)

export const Dark = Template.bind({})
Dark.argTypes = {
  theme: {
    control: {
      type: 'radio',
      options: ['dark', 'light']
    },
    defaultValue: 'dark'
  }
}

export const Light = Template.bind({})
Light.argTypes = {
  theme: {
    control: {
      type: 'radio',
      options: ['dark', 'light']
    },
    defaultValue: 'light'
  }
}
