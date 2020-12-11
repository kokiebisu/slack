import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

/** context */
import { ToggleProvider } from "context/toggle-context";

/** global */
import { main } from "../../../global/colors";

/** components */
import { Header, HeaderProps } from "./header.component";
import { ApolloProvider } from "react-apollo";
import { client } from "index";

export default {
  title: "Design System/Organisms/Header",
  component: Header,
  decorators: [
    (Story) => (
      <ApolloProvider client={client}>
        <MemoryRouter>
          <ToggleProvider>
            <ThemeProvider theme={main}>
              <Story />
            </ThemeProvider>
          </ToggleProvider>
        </MemoryRouter>
      </ApolloProvider>
    ),
  ],
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = Template.bind({});
landing.args = {
  variant: "landing",
};

export const create = Template.bind({});
create.args = {
  variant: "create",
};

export const signin = Template.bind({});
signin.args = {
  variant: "signin",
};

export const workspace = Template.bind({});
workspace.args = {
  variant: "workspace",
};

export const find = Template.bind({});
find.args = {
  variant: "find",
};
