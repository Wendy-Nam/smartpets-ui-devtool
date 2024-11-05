// .storybook/stories/SquareBox.stories.tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import SquareBox from './SquareBox';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Frames/SquareBox',
  component: SquareBox,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Square box의 크기 선택',
    },
    shadow: {
      control: 'boolean',
      description: '그림자 효과 여부',
    },
    outline: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted', 'active-solid', 'inactive-solid', 'inactive-dashed'],
      description: '테두리 스타일 선택',
    },
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: '모서리 둥글기 옵션',
    },
    backgroundColor: {
      control: 'select',
      options: ['bg-lightgrey', 'bg-white', 'bg-transparent', 'bg-primary'],
      description: '배경색 옵션',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/SquareBox</b> \n\n기존의 RoundedBox와 유사한 베이스 용도 (마찬가지로 BoxStyles 참조). 정사각형 모양과 크기조절을 위해 분리하여 만든 것.\n\nRadioButton 또는 RoundedButton의 SquareButton 내부에서 쓰임."
      },
    },
  },
} as ComponentMeta<typeof SquareBox>;

const Template: ComponentStory<typeof SquareBox> = (args) => (
  <SquareBox {...args}>
    <StylizedText type="body2" styleClass="text-black">컨텐츠</StylizedText>
  </SquareBox>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  shadow: true,
  outline: 'solid',
  rounded: 'xl',
  backgroundColor: 'bg-lightgrey',
  children: <StylizedText type="body2" styleClass="text-black">기본 SquareBox</StylizedText>,
};

export const OutlinedSquareBox = Template.bind({});
OutlinedSquareBox.args = {
  size: 'lg',
  shadow: true,
  outline: 'dashed',
  rounded: 'md',
  backgroundColor: 'bg-white',
  children: <StylizedText type="header1" styleClass="text-primary">Outlined</StylizedText>,
};

export const CustomSquareBox = Template.bind({});
CustomSquareBox.args = {
  size: 'sm',
  shadow: false,
  outline: 'dotted',
  rounded: '2xl',
  backgroundColor: 'bg-primary',
  children: <StylizedText type="header2" styleClass="text-white">Custom Box</StylizedText>,
};
