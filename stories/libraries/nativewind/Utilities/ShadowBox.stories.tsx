// ShadowBox.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ShadowBox, ShadowStyle } from './ShadowBox';
import StylizedText from './StylizedText';

export default {
  title: 'Utilities/ShadowBox',
  component: ShadowBox,
  argTypes: {
    style: { control: 'object', description: '커스텀 스타일 설정' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/ShadowBox</b> \n\nShadowBox보다는 여기에 상수로 선언된 ShadowStyle을 다른 컴포넌트에서 가져다 쓰도록 해놨음. (기존의 버튼-그림자 분리 이슈로 인해 수정한 것)\n\n내부적으로 쓰이는 요소라 직접 가져다 쓸 일은 없음."
      },
    },
  },
} as ComponentMeta<typeof ShadowBox>;

const Template: ComponentStory<typeof ShadowBox> = (args) => <ShadowBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <StylizedText type="header1" styleClass="text-black">기본 ShadowBox</StylizedText>,
  style: {
    ...ShadowStyle,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
};

export const LargeShadow = Template.bind({});
LargeShadow.args = {
  children: <StylizedText type="header1" styleClass="text-black">Large ShadowBox</StylizedText>,
  style: {
    ...ShadowStyle,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowRadius: 16, // 더 큰 그림자 반경
    elevation: 10,
  },
};

export const ColoredShadow = Template.bind({});
ColoredShadow.args = {
  children: <StylizedText type="header1" styleClass="text-white">Colored ShadowBox</StylizedText>,
  style: {
    ...ShadowStyle,
    padding: 20,
    backgroundColor: '#3498db', // 파란색 배경
    borderRadius: 12,
  },
};

export const CustomShadowColor = Template.bind({});
CustomShadowColor.args = {
  children: <StylizedText type="header1" styleClass="text-black">Custom Shadow Color</StylizedText>,
  style: {
    ...ShadowStyle,
    shadowColor: '#ff6347', // 다른 색상의 그림자
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
};
