import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Home from '../pages'

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

Dark.argTypes = {
  /**Theme options */
  Theme: {
    options: ['dark', 'light'],
    control: { type: 'radio' },
    defaultValue: 'dark'
  }
}

Light.argTypes = {
  Theme: {
    options: ['dark', 'light'],
    control: { type: 'radio' },
    defaultValue: 'light'
  }
}
