import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { RoundedSquareButton } from './RoundedButton';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Inputs/SquareButton',
  component: RoundedSquareButton,
  argTypes: {
    backgroundColor: { control: 'select', options: ['bg-transparent', 'bg-lightgrey', 'bg-primary'] },
    shadow: { control: 'boolean' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    outline: { control: 'select', options: ['solid', 'dotted', 'none'] },
    rounded: { control: 'select', options: ['lg', 'xl', '2xl', '3xl'] },
    onPress: { action: 'pressed' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RoundedButton</b> \n\nRoundedBox 사용. 정사각형의 크기와 모서리각 등을 조절 가능하며, 내부요소들을 중앙에 배치함"
      },
    },
  },
} as ComponentMeta<typeof RoundedSquareButton>;

const Template: ComponentStory<typeof RoundedSquareButton> = (args) => (
  <RoundedSquareButton {...args}>
    <StylizedText type="body2" styleClass="text-black">S</StylizedText>
  </RoundedSquareButton>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'bg-lightgrey',
  shadow: true,
  size: 'md',
  outline: 'solid',
  rounded: 'xl',
};
