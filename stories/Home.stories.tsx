import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Home from '../pages'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home {...args} />

export const HomePage = Template.bind({})

HomePage.argTypes = {
  Theme: {
    options: ['dark', 'light'],
    control: { type: 'radio', defaultValue: 'dark' }
  }
}
