import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { HospitalRecord, WalkingRecord, WarningRecord } from './Records';
import dog1 from '../image/placeholder/dog.jpg';

export default {
  title: 'Sections/Records',
  component: HospitalRecord,
  argTypes: {
    name: { control: 'text', description: 'Hospital name' },
    address: { control: 'text', description: 'Hospital address' },
    telephone: { control: 'text', description: 'Hospital telephone' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @components/Records</b> \n\n하위 컴포넌트 : HospitalRecord, WalkingRecord, WarningRecord \n\n열이나 행 등이 정렬된 특정 텍스트배치 형식들을 모아둠. RecordSection을 내부에서 베이스로 사용함."
      },
    },
  },
} as ComponentMeta<typeof HospitalRecord>;

const HospitalRecordTemplate: ComponentStory<typeof HospitalRecord> = (args) => <HospitalRecord {...args} />;
const WalkingRecordTemplate: ComponentStory<typeof WalkingRecord> = (args) => <WalkingRecord {...args} />;
const WarningRecordTemplate: ComponentStory<typeof WarningRecord> = (args) => <WarningRecord {...args} />;

export const DefaultHospitalRecord = HospitalRecordTemplate.bind({});
DefaultHospitalRecord.args = {
  name: '서울 중앙 병원',
  address: '서울특별시 중구 중앙로 123',
  telephone: '02-1234-5678',
};

export const DefaultWalkingRecord = WalkingRecordTemplate.bind({});
DefaultWalkingRecord.args = {
  avatarSource: dog1,
  walkDate: '2024-11-04',
  walkTime: '45분',
  distance: '3.2 km',
  calories: '250 kcal',
  steps: '4,500 걸음',
};

export const DefaultWarningRecord = WarningRecordTemplate.bind({});
DefaultWarningRecord.args = {
  message: '높은 기온에 장시간 외출은 건강에 위험할 수 있습니다. 충분한 휴식을 취하세요!',
};
