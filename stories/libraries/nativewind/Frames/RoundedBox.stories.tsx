import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RoundedBox, { DesignPreset, OutlinePreset } from './RoundedBox';

export default {
  title: 'Frames/RoundedBox',
  component: RoundedBox,
  argTypes: {
    preset: {
      control: 'select',
      options: ['A', 'B', 'C', 'D', 'modalC', 'modalB', 'greycard', 'dashedcard', 'squarecard', 'opaque-panel', 'flatcard', 'flatcard-fit'],
      description: '디자인 프리셋 옵션',
    },
    shadow: {
      control: 'boolean',
      description: '그림자 적용 여부',
    },
    outline: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted', 'active-solid', 'inactive-solid', 'inactive-dashed', undefined],
      description: '테두리 스타일 옵션',
    },
    children: {
      control: 'text',
      description: 'RoundedBox 내부의 콘텐츠',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/RoundedBox</b> \n\n베이스로 쓰이는 컴포넌트라 직접 쓸 일은 없음 (새로운 컴포넌트를 커스텀하는 게 아니라면).\n\n 커스텀도 @common/BoxStyles에 프리셋스타일 추가하는 것만으로도 충분함."
      },
    },
  },
} as ComponentMeta<typeof RoundedBox>;

const Template: ComponentStory<typeof RoundedBox> = (args) => <RoundedBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  preset: 'A',
  shadow: true,
  outline: 'solid',
  children: 'This is a RoundedBox with default settings.',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  preset: 'B',
  shadow: true,
  outline: 'dashed',
  children: 'RoundedBox with shadow and dashed outline.',
};

export const WithoutShadow = Template.bind({});
WithoutShadow.args = {
  preset: 'flatcard',
  shadow: false,
  outline: 'dotted',
  children: 'RoundedBox without shadow and with dotted outline.',
};

export const CenteredModalStyle = Template.bind({});
CenteredModalStyle.args = {
  preset: 'modalC',
  shadow: true,
  outline: 'active-solid',
  children: 'Centered Modal Styled RoundedBox.',
};

export const BottomModalStyle = Template.bind({});
BottomModalStyle.args = {
  preset: 'modalB',
  shadow: true,
  outline: 'solid',
  children: 'Bottom-aligned Modal Styled RoundedBox.',
};

export const GreyCard = Template.bind({});
GreyCard.args = {
  preset: 'greycard',
  shadow: false,
  outline: 'inactive-solid',
  children: 'Grey Card Styled RoundedBox.',
};

export const DashedCard = Template.bind({});
DashedCard.args = {
  preset: 'dashedcard',
  shadow: false,
  outline: 'dashed',
  children: 'Dashed Card Styled RoundedBox.',
};

export const SquareCard = Template.bind({});
SquareCard.args = {
  preset: 'squarecard',
  shadow: false,
  outline: 'solid',
  children: 'Square Card Styled RoundedBox.',
};

export const OpaquePanel = Template.bind({});
OpaquePanel.args = {
  preset: 'opaque-panel',
  shadow: false,
  outline: 'solid',
  children: 'Opaque Panel Styled RoundedBox.',
};

export const FlatCard = Template.bind({});
FlatCard.args = {
  preset: 'flatcard',
  shadow: true,
  outline: 'solid',
  children: 'Flat Card Styled RoundedBox.',
};

export const FlatCardFit = Template.bind({});
FlatCardFit.args = {
  preset: 'flatcard-fit',
  shadow: true,
  outline: 'solid',
  children: 'Flat Card Fit Styled RoundedBox.',
};

export const FlatCard2 = Template.bind({});
FlatCard2.args = {
  preset: 'flatcard2',
  shadow: false,
  outline: 'inactive-solid',
  children: 'Flat Card Fit Styled RoundedBox.',
};

export const YellowCard2 = Template.bind({});
YellowCard2.args = {
  preset: 'A-yellow-20',
  shadow: false,
  children: 'Flat Card Fit Styled RoundedBox.',
};
