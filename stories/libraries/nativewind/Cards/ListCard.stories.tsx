import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import ListCard from './ListCard';
import { View, Text, Image } from 'react-native';
import StylizedText from '../Utilities/StylizedText';
import {PillBadge} from '../Frames/Badge';
import sampleAvatar from '../image/placeholder/dog.jpg'; // 기본 이미지

export default {
  title: 'Cards/Base',
  component: ListCard,
  argTypes: {
    layout: { control: 'select', options: ['simple', 'detailed', 'labelled', 'contentOnly'], description: '카드 레이아웃 타입' },
    reverse: { control: 'boolean', description: '좌우 반전 여부' },
    preset: { control: 'select', options: ['A', 'B', 'C', 'D', 'modalC', 'modalB', 'greycard', 'dashedcard', 'squarecard', 'opaque-panel', 'flatcard', 'flatcard-fit'], description: '디자인 프리셋' },
    avatar: { control: 'text', description: '아바타 이미지 소스' },
    label: { control: 'text', description: '아바타 하단에 표시되는 라벨 텍스트' },
    title: { control: 'text', description: '카드 상단의 타이틀' },
    content: { control: 'text', description: '카드 본문 내용' },
    badge: { control: 'text', description: '배지' },
  },
  parameters: {
    docs: {
      description: {
        component: '<b>파일 위치: @common/ListCard</b> \n\n\nFlatListCards의 베이스로 만든 것이라, 새로운 컴포넌트를 커스텀하려고 쓰지 않는 이상 굳이 직접 쓸일은 없음.\n\n다양한 레이아웃 옵션 존재함.'
      },
    },
  },
} as ComponentMeta<typeof ListCard>;

const Template: ComponentStory<typeof ListCard> = (args) => <ListCard {...args} />;

export const SimpleLayout = Template.bind({});
SimpleLayout.args = {
  layout: 'simple',
  avatar: sampleAvatar,
  label: 'User',
  title: <StylizedText type="header3">Simple Layout</StylizedText>,
  content: <StylizedText type="body2">This is a simple layout for the ListCard.</StylizedText>,
};

export const DetailedLayout = Template.bind({});
DetailedLayout.args = {
  layout: 'detailed',
  avatar: sampleAvatar,
  label: 'Admin',
  title: <StylizedText type="header3">Detailed Layout</StylizedText>,
  content: <StylizedText type="body2">This layout contains additional detailed information.</StylizedText>,
  badge: <PillBadge text="Badge" />,
};

export const LabelledLayout = Template.bind({});
LabelledLayout.args = {
  layout: 'labelled',
  avatar: sampleAvatar,
  label: 'Labelled',
  title: <StylizedText type="header3">Labelled Layout</StylizedText>,
  content: <StylizedText type="body2">Content in labelled layout with avatar label.</StylizedText>,
};

export const ContentOnlyLayout = Template.bind({});
ContentOnlyLayout.args = {
  layout: 'contentOnly',
  title: <StylizedText type="header3">Content Only Layout</StylizedText>,
  content: <StylizedText type="body2">This is a content-only layout without avatar.</StylizedText>,
};

export const ReversedCard = Template.bind({});
ReversedCard.args = {
  layout: 'detailed',
  reverse: true,
  avatar: sampleAvatar,
  label: 'Reversed',
  title: <StylizedText type="header2">Reversed Layout</StylizedText>,
  content: <StylizedText type="body2" styleClass='mr-auto'>The layout is reversed.</StylizedText>,
};
