import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { PillBadge, TagBadge, Badge, RatingBadge } from './Badge';

export default {
  title: 'Frames/Badges',
  component: Badge,
  argTypes: {
    color: { control: 'text', description: '배경 색상 클래스 이름' },
    textColor: { control: 'text', description: '텍스트 색상 클래스 이름' },
    text: { control: 'text', description: '뱃지 텍스트' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/Badge</b> \n\n하위 컴포넌트: PillBadge, TagBadge, RatingBadge, Badge\n\npillBadge는 알약모양, tagBadge는 상단모서리 고정, RatingBadge는 별점용, 일반 Badge는 커스텀용."
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const PillTemplate: ComponentStory<typeof PillBadge> = (args) => <PillBadge {...args} />;
export const Pill = PillTemplate.bind({});
Pill.args = {
  text: 'Pill Badge',
  color: 'bg-gray-200',
  textColor: 'text-gray-800',
};

const TagTemplate: ComponentStory<typeof TagBadge> = (args) => <TagBadge {...args} />;
export const Tag = TagTemplate.bind({});
Tag.args = {
  text: 'Tag Badge',
  color: 'bg-red',
  textColor: 'text-white',
};

const BadgeTemplate: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const DefaultBadge = BadgeTemplate.bind({});
DefaultBadge.args = {
  text: 'Default Badge',
  color: 'bg-green',
  textColor: 'text-black',
};

const RatingTemplate: ComponentStory<typeof RatingBadge> = (args) => <RatingBadge {...args} />;
export const Rating = RatingTemplate.bind({});
Rating.args = {
  rating: 4.5,
  starSize: 20,
  textSize: 'body1',
};
Rating.argTypes = {
  rating: { control: 'number', description: '평점 값' },
  starSize: { control: 'number', description: '스타 아이콘 크기' },
  textSize: { control: 'select', options: ['body1', 'body2', 'label', 'header5'], description: '텍스트 크기' },
};
