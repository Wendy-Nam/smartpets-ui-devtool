import React, { useRef } from 'react';
import { View } from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from './RadioButton';
import StylizedText from '../Utilities/StylizedText';
import { RoundedTextButton } from './RoundedButton';
import Avatar from '../Frames/Avatar';

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
        component: "<b>파일 위치: @common/RadioButtonGroup</b> \n\nRadioButton을 감싸는 부모컴포넌트이며, 최대로 선택가능한 버튼갯수 지정 가능함. (버튼들을 묶어서 관리)\n\n컨테이너스타일에 테일윈드 속성 넣어 내부정렬 조정 가능함. 선택항목을 제출하는 법은 하단의 예제들을 참고."
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
// RadioButtonExampleDashed
export const RadioButtonExampleDashed: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => Alert.alert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="dashed"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Dashed)" color="bg-secondary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};

// RadioButtonExampleSolid
export const RadioButtonExampleSolid: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => Alert.alert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="solid"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Solid)" color="bg-primary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};

// RadioButtonExampleText
export const RadioButtonExampleText: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => Alert.alert('Selected options:', JSON.stringify(selectedIds))}
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Text)" color="bg-black" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};