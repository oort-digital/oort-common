import "../../.storybook/stories.less";
import { BrowserRouter as Router } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IBreadcrumbItem, OortBreadcrumb } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "oort/breadcrumb",
  component: OortBreadcrumb,
} as ComponentMeta<typeof OortBreadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OortBreadcrumb> = (args) => {
  return (
    <Router>
      <OortBreadcrumb {...args} />
    </Router>
  );
};

const bcItems: IBreadcrumbItem[] = [
  {
    name: "NFT Play",
    path: "/",
  },
  {
    name: "Games",
    path: "/games",
  },
  {
    name: "Oort heroes",
    // path: '/games/heroes'
  },
];

export const main = Template.bind({});
main.args = {
  items: bcItems,
};
