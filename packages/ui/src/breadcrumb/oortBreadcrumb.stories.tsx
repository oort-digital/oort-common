import "../styles/antOverride.less";
import "../styles/fonts.css";
import {BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useTheme } from "../effects";
import { IBreadcrumbItem, OortBreadcrumb } from ".";
import DarkTheme from "../styles/theme/darkTheme";
import LightTheme from "../styles/theme/lightTheme";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/breadcrumb',
  component: OortBreadcrumb,
} as ComponentMeta<typeof OortBreadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OortBreadcrumb> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Router>
      <OortBreadcrumb {...args} />
    </Router>
  </>
}


const bcItems: IBreadcrumbItem[] = [
  {
    name: 'Game Hub',
    path: '/'
  },
  {
    name: 'Games',
    path: '/games'
  },
  {
    name: 'Oort heroes',
    path: '/games/heroes'
  }
]

export const main = Template.bind({});
main.args = {
  items: bcItems
};
