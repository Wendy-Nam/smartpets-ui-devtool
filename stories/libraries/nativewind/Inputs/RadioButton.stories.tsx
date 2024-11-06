import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RadioButton from './RadioButton';
import RadioButtonGroup from './RadioButtonGroup';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Inputs/RadioButton/Button',
  component: RadioButton,
  argTypes: {
    isSelected: { control: 'boolean', description: '라디오 버튼 선택 상태' },
    variant: { control: 'select', options: ['box', 'text'], description: '라디오 버튼 스타일' },
    boxsize: { control: 'select', options: ['sm', 'md', 'lg'], description: '라디오 버튼 박스 크기' },
    inactiveOutlineStyle: { control: 'select', options: ['dashed', 'solid'], description: '비활성화 테두리 스타일' },
    label: { control: 'text', description: '텍스트형 라디오 버튼의 라벨' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RadioButton</b> \n\nRadioButtonGroup 태그로 감싸져 그 내부에 이 버튼 여럿이 들어가게 됨"
      },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const RadioButtonTemplate: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const BoxVariant = RadioButtonTemplate.bind({});
BoxVariant.args = {
  isSelected: false,
  variant: 'box',
  boxsize: 'md',
  children: <StylizedText type="label3">Box Content</StylizedText>,
};

export const TextVariant = RadioButtonTemplate.bind({});
TextVariant.args = {
  isSelected: false,
  variant: 'text',
  label: 'Text Label',
};

