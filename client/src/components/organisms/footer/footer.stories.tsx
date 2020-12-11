import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Footer,
  FooterProps,
} from "components/organisms/footer/footer.component";

export default {
  title: "Design System/Organisms/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const landing = Template.bind({});
landing.args = {
  variant: "landing",
};

export const signin = Template.bind({});
signin.args = {
  variant: "signin",
};

export const find = Template.bind({});
find.args = {
  variant: "find",
};
