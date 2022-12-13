import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Home from '../pages'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

export default {
  /**
   * Fix Storybook issue with PostCSS@8
   * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
   */
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home {...args} />

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.decorators = [
  Story => (
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
      <Story />
    </Provider>
  )
]

Light.decorators = [
  Story => (
    <Provider
      store={configureStore({
        reducer: {
          theme: createSlice({
            name: 'theme',
            initialState: {
              theme: 'light'
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
      <Story />
    </Provider>
  )
]