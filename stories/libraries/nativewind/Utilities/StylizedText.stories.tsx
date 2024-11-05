// .storybook/stories/StylizedText.stories.tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import StylizedText, { HeaderText } from './StylizedText';

export default {
  title: 'Utilities/StylizedText',
  component: StylizedText,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'header1', 'header2', 'header3', 'header4', 'header5', 'header6', 'header7',
        'body1', 'body2', 'body3',
        'caption-title', 'caption-label',
        'label', 'label1', 'label2', 'label3', 'label4',
        'record1', 'record2',
      ],
      description: '텍스트 스타일 타입 선택',
    },
    color: {
      control: 'color',
      description: '텍스트 색상',
    },
    styleClass: {
      control: 'text',
      description: 'Tailwind 스타일 클래스',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/StylizedText</b> \n\n거의 모든 컴포넌트 내부에서 쓰이며, 직접 다른 화면을 구성할 때도 Text 대신 매번 가져다 써야함\n\nPretendard 폰트와 함께, 텍스트스타일 세트들을 지정해뒀음"
      },
    },
  },
} as ComponentMeta<typeof StylizedText>;

// StylizedText Template
const Template: ComponentStory<typeof StylizedText> = (args) => <StylizedText {...args} />;
export const DefaultText = Template.bind({});
DefaultText.args = {
  children: '이것은 기본 텍스트입니다.',
  type: 'body1',
  color: 'black',
  styleClass: 'text-black',
};

// HeaderText Template
const HeaderTemplate: ComponentStory<typeof HeaderText> = (args) => <HeaderText {...args} />;
export const HighlightedHeaderText = HeaderTemplate.bind({});
HighlightedHeaderText.args = {
  text: '여기에는 강조된 텍스트가 포함됩니다',
  highlight: '강조된',
};
