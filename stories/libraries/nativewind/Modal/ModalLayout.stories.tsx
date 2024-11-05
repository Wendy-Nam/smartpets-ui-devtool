import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import ModalLayout from './ModalLayout';
import StylizedText from '../Utilities/StylizedText';
import { Button, View } from 'react-native';

export default {
  title: 'Modal/ModalLayout',
  component: ModalLayout,
  argTypes: {
    title: { control: 'text', description: 'Modal title text' },
    titleType: { control: 'select', options: ['header1', 'header2', 'header3'], description: 'Type of title styling' },
    titleAlign: { control: 'select', options: ['center', 'left'], description: 'Title alignment' },
    position: { control: 'select', options: ['center', 'bottom'], description: 'Position of the modal' },
    transparent: { control: 'boolean', description: 'Background transparency' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @components/ModalLayout</b> \n\nModal 내부에 버튼이나 제목추가 등을 간단하게 할 수 있음.\n\n아래 컨트롤패널과 함께, modal 추가예제란(Example)도 참고할 것."
      },
    },
  },
} as ComponentMeta<typeof ModalLayout>;

const Template: ComponentStory<typeof ModalLayout> = (args) => <ModalLayout {...args} />;

export const CenteredModal = Template.bind({});
CenteredModal.args = {
  visible: true,
  setVisible: () => alert('Close modal'),
  title: 'Centered Modal',
  titleType: 'header2',
  titleAlign: 'center',
  rows: [
    {
      content: [
        <StylizedText type="body1" styleClass="text-black">This is a sample content row.</StylizedText>,
        <Button title="Close" onPress={() => alert('Close modal')} />,
      ],
      layout: 'col',
    },
  ],
  position: 'center',
  transparent: false,
};

export const BottomModal = Template.bind({});
BottomModal.args = {
  visible: true,
  setVisible: () => alert('Close modal'),
  title: 'Bottom Aligned Modal',
  titleType: 'header2',
  titleAlign: 'left',
  rows: [
    {
      content: [
        <StylizedText type="body2" styleClass="text-secondary">Additional content for the bottom modal.</StylizedText>,
        <Button title="Close" onPress={() => alert('Close modal')} />,
      ],
      layout: 'row',
    },
  ],
  position: 'bottom',
  transparent: false,
};
