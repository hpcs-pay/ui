import React from 'react';

import { ComponentMeta } from '@storybook/react';
import { Tab } from './Tab';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    active: {
      type: {
        name: 'boolean',
        required: true,
      },
    },
  },
} as ComponentMeta<typeof Tab>;

export const Icon = function Icon(args) {
  return <Tab {...args} />;
};
Icon.args = {
  label: 'Credit/Debit Card',
};
