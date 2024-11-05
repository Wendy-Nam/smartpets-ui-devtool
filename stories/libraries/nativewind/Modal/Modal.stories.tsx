import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text, View } from 'react-native';
import { RoundedTextButton } from '../Inputs/RoundedButton';
import Modal from './Modal';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Modal/BaseModal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean', description: '모달의 가시성' },
    tapOutsideToClose: { control: 'boolean', description: '모달 외부 터치 시 닫기 가능 여부' },
    position: { control: 'select', options: ['center', 'bottom'], description: '모달 위치' },
    transparent: { control: 'boolean', description: '모달 배경 투명 여부' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/Modal</b> \n\nModal에 사용되는 베이스. 직접 사용할 일은 없음\n\n이걸 더 간편하게 쓰도록 ModalLayout을 만들어놨으니 그걸 사용하면 됨."
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [visible, setVisible] = useState(args.visible || false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <View className='w-screen h-[350px] flex-wrap'>
      <RoundedTextButton widthOption='lg' content="Show Modal" onPress={toggleModal} />
      <Modal {...args} visible={visible} hideModal={toggleModal}>
        <StylizedText type="header3" styleClass="text-center mb-2">모달 콘텐츠</StylizedText>
        <Text style={{ textAlign: 'center' }}>이곳에 모달의 내용을 입력하세요.</Text>
        <RoundedTextButton content="Close Modal" onPress={toggleModal} />
      </Modal>
    </View>
  );
};

export const CenteredModal = Template.bind({});
CenteredModal.args = {
  tapOutsideToClose: true,
  position: 'center',
  transparent: false,
};

export const BottomModal = Template.bind({});
BottomModal.args = {
  tapOutsideToClose: true,
  position: 'bottom',
  transparent: false,
};

export const TransparentModal = Template.bind({});
TransparentModal.args = {
  tapOutsideToClose: false,
  position: 'center',
  transparent: true,
};
