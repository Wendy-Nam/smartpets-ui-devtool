import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { RoundedTextButton } from './RoundedButton';

export default {
  title: 'Inputs/TextButton',
  component: RoundedTextButton,
  argTypes: {
    color: { control: 'select', options: ['bg-transparent', 'bg-secondary', 'bg-primary', 'bg-white', 'bg-black', 'bg-skyblue'] },
    textColor: { control: 'text' },
    textType: { control: 'text' },
    content: { control: 'text' },
    borderRadius: { control: 'select', options: ['rounded-xl', 'rounded-2xl', 'rounded-3xl'] },
    shadow: { control: 'boolean' },
    widthOption: { control: 'select', options: ['full', 'xs', 'sm', 'md', 'lg', 'xl'] },
    extraStyleClass: { control: 'text' },
    onPress: { action: 'pressed' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RoundedButton</b> \n\n일반적인 버튼. 크기나 색상 등 다양하게 조절 가능하며, 앞쪽에 아이콘을 추가하는 옵션도 있음"
      },
    },
  },
} as ComponentMeta<typeof RoundedTextButton>;

const Template: ComponentStory<typeof RoundedTextButton> = (args) => <RoundedTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '텍스트 버튼',
  color: 'bg-primary',
  textColor: 'text-white',
  textType: 'body2',
  borderRadius: 'rounded-3xl',
  shadow: true,
  widthOption: 'md',
};
