import React from 'react';

import { Page } from 'gangnam-style';
import * as HeaderStories from '../molecules/Header.stories';

export default {
  title: 'Organism/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
