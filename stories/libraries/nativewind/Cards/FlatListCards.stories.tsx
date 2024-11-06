// .storybook/stories/Cards.stories.tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { RewardCard, WalkDetailsCard, VeterinaryCard, RegistrationCard, ProductPurchaseCard, ReviewCard } from './FlatListCards';
import AvatarPlaceholder from '../image/placeholder/dog.jpg'; // 기본 이미지

export default {
  title: 'Cards/FlatListCards',
  component: RewardCard,
  argTypes: {
    onPress: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: '<b>파일 위치: @components/FlatListCards</b> \n\n\n하위컴포넌트: RewardCard, WalkDetailsCard, VeterinaryCard, RegistrationCard, ProductPurchaseCard, ReviewCard'
      },
    },
  },
} as ComponentMeta<typeof RewardCard>;

const RewardTemplate: ComponentStory<typeof RewardCard> = (args) => <RewardCard {...args} />;
const WalkDetailsTemplate: ComponentStory<typeof WalkDetailsCard> = (args) => <WalkDetailsCard {...args} />;
const VeterinaryTemplate: ComponentStory<typeof VeterinaryCard> = (args) => <VeterinaryCard {...args} />;
const RegistrationTemplate: ComponentStory<typeof RegistrationCard> = (args) => <RegistrationCard {...args} />;
const ProductPurchaseTemplate: ComponentStory<typeof ProductPurchaseCard> = (args) => <ProductPurchaseCard {...args} />;
const ReviewTemplate: ComponentStory<typeof ReviewCard> = (args) => <ReviewCard {...args} />;

export const RewardCardExample = RewardTemplate.bind({});
RewardCardExample.args = {
  avatarSource: AvatarPlaceholder, // 예시 이미지
  title: '리워드 타이틀',
  content: '리워드 설명이 들어갑니다.',
  completed: true,
};

export const WalkDetailsCardExample = WalkDetailsTemplate.bind({});
WalkDetailsCardExample.args = {
  title: '산책 기록',
  details: [
    { label: '거리', value: '2.5km' },
    { label: '시간', value: '30분' },
  ],
};

export const VeterinaryCardExample = VeterinaryTemplate.bind({});
VeterinaryCardExample.args = {
  title: '동물병원 이름',
  contact: '010-1234-5678',
  address: '서울시 강남구',
};

export const RegistrationCardExample = RegistrationTemplate.bind({});
RegistrationCardExample.args = {
  title: '비문 등록',
  content: '비문 등록이 완료되었습니다.',
  iconName: 'account-check',
};

export const ProductPurchaseCardExample = ProductPurchaseTemplate.bind({});
ProductPurchaseCardExample.args = {
  title: '상품 구매',
  content: '상품 구매 설명입니다.',
  reverse: true,
};

export const ReviewCardExample = ReviewTemplate.bind({});
ReviewCardExample.args = {
  reviewer: '홍길동',
  rating: 4.5,
  comment: '동물병원이 매우 친절하고 깨끗했습니다.',
};
