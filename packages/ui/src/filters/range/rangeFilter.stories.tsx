
import "../../stories.less";
import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeFilter } from ".";
import { ThemeLoader } from "../../internalHelpers";
import { RangeValue } from "./rangeFilterContent";
import { Button } from "antd";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/range',
  component: RangeFilter,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RangeFilter>;

const Template: ComponentStory<typeof RangeFilter> = (args) => {

  const [values, setValues] = useState<[RangeValue, RangeValue]>([1, 10])

  const props = {
    values,
    onChange: setValues
  }

  const mergedProps = { ...args, ...props }

  return <>
    <ThemeLoader />
    <div>{values[0]}-{values[1]}</div>
    <div>
      <RangeFilter {...mergedProps} />
    </div>
  </>
}

const NoTriggerButtonTemplate: ComponentStory<typeof RangeFilter> = (args) => {

  const [values, setValues] = useState<[RangeValue, RangeValue]>([1, 10])

  const [open, setOpen] = useState(false)

  const onChange = (newVals: [RangeValue, RangeValue]) => {
    setValues(newVals)
  }

  const props = {
    values,
    onChange,
    showTriggerButton: false,
    open,
    onVisibleChange: setOpen,
  }

  const mergedProps = { ...args, ...props }

  return <>
    <ThemeLoader />
    <div>{values[0]}-{values[1]}</div>
    <div>
      <Button style={{marginLeft: '300px'}} onClick={() => setOpen(true)}>Open</Button>
      <RangeFilter {...mergedProps} />
    </div>
  </>
}

const CustomTriggerButtonTemplate: ComponentStory<typeof RangeFilter> = (args) => {

  const [values, setValues] = useState<[RangeValue, RangeValue]>([1, 10])

  const onChange = (newVals: [RangeValue, RangeValue]) => {
    setValues(newVals)
  }

  const triggerElement = <span style={{cursor: 'pointer'}}>click to open!</span>

  const props = {
    values,
    onChange,
    triggerElement
  }

  const mergedProps = { ...args, ...props }

  return <>
    <ThemeLoader />
    <div>{values[0]}-{values[1]}</div>
    <div>
      <RangeFilter {...mergedProps} />
    </div>
  </>
}


export const Main = Template.bind({});
Main.args = {
  title: 'Range filter',
  popoverTitle: 'Enter values',
  values: [1, 10],
  min: 1,
  max: 10
};

export const NoTriggerButton = NoTriggerButtonTemplate.bind({});
Main.args = {
  title: 'Range filter',
  popoverTitle: 'Enter values',
  values: [1, 10],
  min: 1,
  max: 10
};

export const CustomTriggerButton = CustomTriggerButtonTemplate.bind({});
Main.args = {
  title: 'Range filter',
  popoverTitle: 'Enter values',
  values: [1, 10],
  min: 1,
  max: 10
};


