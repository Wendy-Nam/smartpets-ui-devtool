import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RecordSection from './RecordSection';
import StylizedText from '../Utilities/StylizedText';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default {
  title: 'Sections/RecordBase',
  component: RecordSection,
  argTypes: {
    title: { control: 'text', description: '섹션 제목' },
    titleIcon: { control: 'object', description: '타이틀 아이콘' },
    fields: { control: 'object', description: '라벨과 값이 포함된 필드' },
    badge: { control: 'object', description: '타이틀 옆에 표시할 배지' },
    footerText: { control: 'text', description: '섹션 하단에 표시할 푸터 텍스트' },
    preset: { control: 'select', options: ['default', 'walkRecord', 'iconLabel', 'caution'], description: '스타일 프리셋' },
    rowFlex: { control: 'boolean', description: '레이아웃을 flex-row 또는 flex-col로 설정' },
    labelWidth: { control: 'text', description: '라벨 너비 클래스' },
    valueWidth: { control: 'text', description: '값 너비 클래스' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RecordSection</b> \n\nRecords에 사용되는 베이스. 관련 컴포넌트를 새로 추가하거나 더 커스텀하지 않는 이상 직접 쓸 일 없음.\n\n내부에 프리셋 속성 만들어두었으니, 해당 부분을 간단하게 수정하면 됨."
      },
    },
  },
} as ComponentMeta<typeof RecordSection>;

const Template: ComponentStory<typeof RecordSection> = (args) => <RecordSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '기본 섹션',
  fields: [
    { label: 'Label 1', value: 'Value 1' },
    { label: 'Label 2', value: 'Value 2' },
  ],
  footerText: '이것은 푸터 텍스트입니다.',
};

export const WalkRecord = Template.bind({});
WalkRecord.args = {
  title: '운동 기록',
  titleIcon: <Icon name="directions-walk" size={20} color="#000" />,
  fields: [
    { label: '걸음 수', value: '10000' },
    { label: '칼로리 소모', value: '500 kcal' },
  ],
  preset: 'walkRecord',
};

export const IconLabel = Template.bind({});
IconLabel.args = {
  title: '아이콘 라벨 섹션',
  fields: [
    { label: <Icon name="local-hospital" size={16} color="#000" />, value: '응급처치' },
    { label: <Icon name="home" size={16} color="#000" />, value: '집에서 진행' },
  ],
  preset: 'iconLabel',
};

export const Caution = Template.bind({});
Caution.args = {
  title: '주의 사항',
  fields: [
    { label: '경고', value: '이 작업은 위험할 수 있습니다.' },
    { label: '주의', value: '사전 준비가 필요합니다.' },
  ],
  preset: 'caution',
};
