import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SubSection, SubSectionProps } from "./subsection.component";

export default {
  title: "Design System/Organisms/SubSection",
  component: SubSection,
} as Meta;

const Template: Story<SubSectionProps> = (args) => <SubSection {...args} />;

export const launch = Template.bind({});
launch.args = {
  variant: "launch",
};
