import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import CustomTextInput from './CustomTextInput';

export default {
  title: 'Inputs/TextInput',
  component: CustomTextInput,
  argTypes: {
    label: { control: 'text', description: '텍스트 입력 필드의 라벨' },
    value: { control: 'text', description: '입력된 텍스트 값' },
    placeholder: { control: 'text', description: '입력 필드의 자리 표시 텍스트' },
    isEditableInitially: { control: 'boolean', description: '초기 수정 가능 여부' },
    type: {
      control: 'select',
      options: ['readOnly', 'editableWithButton', 'freeText', 'iconField', 'passwordField'],
      description: '텍스트 필드의 타입',
    },
    iconLibrary: { control: 'select', options: ['Ionicons', 'Feather'], description: '아이콘 라이브러리' },
    iconName: { control: 'text', description: '아이콘 이름' },
    iconSize: { control: 'number', description: '아이콘 크기' },
    keyboardType: {
      control: 'select',
      options: [
        'default', 'email-address', 'numeric', 'phone-pad', 'decimal-pad', 'number-pad', 'url', 'web-search', 'visible-password'
      ],
      description: '키보드 타입',
    },
    returnKeyType: {
      control: 'select',
      options: ['done', 'go', 'next', 'search', 'send', 'none', 'previous'],
      description: '리턴 키 타입',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/CustomTextInput</b> \n\n다양한 타입으로 쓸 수 있음 - 비밀번호, 수정버튼있는 고정텍스트, 번호키보드, 이메일, 입력형식 검사 기능"
      },
    },
  },
} as ComponentMeta<typeof CustomTextInput>;

const Template: ComponentStory<typeof CustomTextInput> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <CustomTextInput {...args} value={value} onChangeText={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default TextInput',
  placeholder: 'Enter text',
  type: 'freeText',
};

export const EditableWithButton = Template.bind({});
EditableWithButton.args = {
  label: 'Editable With Button',
  placeholder: 'Tap to edit',
  type: 'editableWithButton',
  isEditableInitially: false,
};

export const IconField = Template.bind({});
IconField.args = {
  label: 'Icon Field',
  placeholder: 'Enter text with icon',
  type: 'iconField',
  iconLibrary: 'Ionicons',
  iconName: 'md-checkmark-circle',
  iconSize: 24,
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  type: 'passwordField',
  iconLibrary: 'Ionicons',
  iconName: 'lock-closed',
  iconSize: 24,
};

export const EmailValidation = Template.bind({});
EmailValidation.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  type: 'freeText',
  keyboardType: 'email-address',
};

export const PhoneValidation = Template.bind({});
PhoneValidation.args = {
  label: 'Phone Number',
  placeholder: 'Enter your phone number',
  type: 'freeText',
  keyboardType: 'phone-pad',
};
