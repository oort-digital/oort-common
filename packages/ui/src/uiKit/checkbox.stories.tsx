import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeLoader } from "../internalHelpers";

import { Checkbox } from 'antd';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {

  const [checked, setChecked] = useState(true)

  const internal = {
    checked: checked,
    onChange: () => setChecked(!checked)
  }

  const mergedArgs = { ...args, ...internal }

  return <>
    <ThemeLoader />
    <div>
      <Checkbox {...mergedArgs} >Checkbox</Checkbox>
    </div>
  </>

}


export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {

  };