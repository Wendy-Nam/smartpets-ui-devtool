import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { RoundedCircleButton } from './RoundedButton';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Inputs/CircleButton',
  component: RoundedCircleButton,
  argTypes: {
    color: { control: 'select', options: ['bg-transparent', 'bg-secondary', 'bg-primary', 'bg-white', 'bg-black', 'bg-skyblue'] },
    shadow: { control: 'boolean' },
    size: { control: 'number' },
    onPress: { action: 'pressed' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RoundedButton</b> \n\n원형 버튼이며, 내부에 아이콘이나 작은 기호텍스트 등을 넣는 데 쓰임."
      },
    },
  },
} as ComponentMeta<typeof RoundedCircleButton>;

const Template: ComponentStory<typeof RoundedCircleButton> = (args) => (
  <RoundedCircleButton {...args}>
    <StylizedText type="body2" styleClass="text-white">+</StylizedText>
  </RoundedCircleButton>
);

export const Default = Template.bind({});
Default.args = {
  color: 'bg-primary',
  shadow: true,
  size: 50,
};
