import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

function Template(args) {
  return <TextInput {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: 'Credit/Debit Card Number',
  placeholder: 'xxxx xxxx xxxx xxxx',
};
