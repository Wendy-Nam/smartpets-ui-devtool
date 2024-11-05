import React from 'react';
import {View} from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ModalType1, ModalType2, ModalType3, ModalType4, ModalType5 } from './ModalExample';

export default {
  title: 'Modal/Example',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
    controls: { expanded: true },
    default: null,
  },
  parameters: {
    docs: {
      description: {
        component: "ModalLayout 관련 추가예제 (피그마대로)"
      },
    },
  },
} as ComponentMeta<typeof ModalType1>;

// ModalType1 Example
export const ModalType1Example: ComponentStory<typeof ModalType1> = (args) => (
  <ModalType1 visible={true} setVisible={() => {}} />
);
ModalType1Example.parameters = {
  docs: {
    source: {
      code: `
import React from 'react';
import ModalLayout from '@components/ModalLayout';
import StylizedText from '@common/StylizedText';
import { RoundedTextButton } from '@common/RoundedButton';

// ModalType1: 두 줄로 버튼 배치
const ModalType1: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {
  const GalleryButton = (
    <RoundedTextButton
      content="갤러리에서 가져오기"
      widthOption="lg"
      color="bg-primary"
      onPress={handleButtonPress(() => console.log('갤러리에서 가져오기'), setVisible)}
    />
  );

  const CameraButton = (
    <RoundedTextButton
      content="촬영하기"
      widthOption="lg"
      color="bg-primary"
      onPress={handleButtonPress(() => console.log('촬영하기'), setVisible)}
    />
  );

  return (
    <ModalLayout
      visible={visible}
      setVisible={setVisible}
      rows={[{ content: [GalleryButton, CameraButton], layout: 'col' }]}
    />
  );
};
      `,
    },
  },
};

// ModalType2 Example
export const ModalType2Example: ComponentStory<typeof ModalType2> = (args) => (
  <ModalType2 visible={true} setVisible={() => {}} />
);
ModalType2Example.parameters = {
  docs: {
    source: {
      code: `
// ModalType2: 제목과 나란히 있는 두 개의 버튼
const ModalType2: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {
  const CancelButton = (
    <RoundedTextButton
      content="취소"
      color="bg-secondary"
      widthOption="sm"
      onPress={handleButtonPress(() => console.log('취소'), setVisible)}
    />
  );

  const FinishButton = (
    <RoundedTextButton
      content="종료"
      color="bg-primary"
      widthOption="sm"
      onPress={handleButtonPress(() => console.log('종료'), setVisible)}
    />
  );

  return (
    <ModalLayout
      visible={visible}
      setVisible={setVisible}
      title="산책을 종료하시겠어요?"
      rows={[{ content: [CancelButton, FinishButton], layout: 'row' }]}
    />
  );
};
      `,
    },
  },
};

// ModalType3 Example
export const ModalType3Example: ComponentStory<typeof ModalType3> = (args) => (
  <ModalType3 visible={true} setVisible={() => {}} />
);
ModalType3Example.parameters = {
  docs: {
    source: {
      code: `
// ModalType3: 제목과 단일 버튼
const ModalType3: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {
  const CancelButton = (
    <RoundedTextButton
      content="취소"
      color="bg-primary"
      widthOption="sm"
      onPress={handleButtonPress(() => console.log('취소'), setVisible)}
    />
  );

  return (
    <ModalLayout
      visible={visible}
      setVisible={setVisible}
      title="오늘도 함께 산책해줘서 고마워요!"
      rows={[{ content: [CancelButton], layout: 'col' }]}
    />
  );
};
      `,
    },
  },
};

// ModalType4 Example
export const ModalType4Example: ComponentStory<typeof ModalType4> = (args) => (
  <ModalType4 visible={true} setVisible={() => {}} />
  );
  ModalType4Example.parameters = {
    docs: {
      source: {
        code: `
// ModalType4: 하단모달 + 설명 텍스트와 버튼 그룹 포함
const ModalType4: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {
  const CancelButton = (
    <RoundedTextButton
      content="취소"
      color="bg-secondary"
      widthOption="sm"
      onPress={handleButtonPress(() => console.log('취소'), setVisible)}
    />
  );

  const ConfirmButton = (
    <RoundedTextButton
      content="확인"
      color="bg-primary"
      widthOption="sm"
      onPress={handleButtonPress(() => console.log('확인 클릭됨'), setVisible)}
    />
  );

  const DescriptionText = (
    <StylizedText key="description" type="body2" styleClass="text-black">
      여기에 설명 텍스트가 표시됩니다.
    </StylizedText>
  );

  return (
    <ModalLayout
      visible={visible}
      setVisible={setVisible}
      position='bottom'
      title="여기에 설명 텍스트가 표시됩니다."
      titleAlign='left'
      rows={[
        {
          content: [DescriptionText, <Avatar/>]
        },
        {
          content: [CancelButton, ConfirmButton], layout: 'row',
        },
      ]}
    />
  );
};
        `,
      },
    },
  };

  // ModalType5 Example
export const ModalType5Example: ComponentStory<typeof ModalType5> = (args) => (
    <ModalType5 visible={true} setVisible={() => {}} />
  );
  ModalType5Example.parameters = {
    docs: {
      source: {
        code: `
// ModalType5 : 하단 모달 + 투명한 배경
const ModalType5: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {
  const ExampleButton = (
    <RoundedTextButton
      content="취소"
      color="bg-secondary"
      widthOption="lg"
      onPress={handleButtonPress(() => console.log('투명모달 버튼눌림'), setVisible)}
    />
  );

  return (
    <ModalLayout
      visible={visible}
      setVisible={setVisible}
      position='bottom'
      transparent // 배경 투명화 옵션
      title="이건 배경이 투명한 모달임!"
      titleAlign='left'
      rows={[
        {
          content: [ExampleButton, <Avatar/>]
        },
      ]}
    />
  );
};
        `,
      },
    },
  };
