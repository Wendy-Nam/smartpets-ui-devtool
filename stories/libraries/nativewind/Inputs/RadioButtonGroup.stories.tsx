import React, { useRef } from 'react';
import { Alert, Platform } from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from './RadioButton';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Inputs/RadioButton/Group',
  component: RadioButtonGroup,
  argTypes: {
    maxChoice: { control: 'number', description: '최대 선택 가능한 버튼 수' },
    containerStyle: { control: 'text', description: '그룹 컨테이너 스타일' },
    inactiveOutlineStyle: { control: 'select', options: ['dashed', 'solid'], description: '비활성화 테두리 스타일' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RadioButtonGroup</b> \n\nRadioButton을 감싸는 부모컴포넌트이며, 최대로 선택가능한 버튼갯수 지정 가능함. (버튼들을 묶어서 관리)\n\n컨테이너스타일에 테일윈드 속성 넣어 내부정렬 조정 가능함. 선택항목을 제출하는 법은 추가 예제들을 참고."
      },
    },
  },
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const ref = useRef<any>();
  return (
    <RadioButtonGroup ref={ref} {...args} containerStyle="flex-row flex-wrap justify-center space-x-8 mb-4">
      <RadioButton variant="box" boxsize="sm">
        <StylizedText type="label3">Option 1</StylizedText>
      </RadioButton>
      <RadioButton variant="box" boxsize="sm">
        <StylizedText type="label3">Option 2</StylizedText>
      </RadioButton>
      <RadioButton variant="box" boxsize="sm">
        <StylizedText type="label3">Option 3</StylizedText>
      </RadioButton>
    </RadioButtonGroup>
  );
};

export const SingleChoiceGroup = Template.bind({});
SingleChoiceGroup.args = {
  maxChoice: 1,
  inactiveOutlineStyle: 'dashed',
};

export const MultiChoiceGroup = Template.bind({});
MultiChoiceGroup.args = {
  maxChoice: 2,
  inactiveOutlineStyle: 'solid',
};
