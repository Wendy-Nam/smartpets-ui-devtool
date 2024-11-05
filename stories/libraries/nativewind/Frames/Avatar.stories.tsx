import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Avatar from './Avatar';

const dogImage = require('../image/placeholder/dog.jpg'); // 기본 이미지로 사용할 파일

export default {
  title: 'Frames/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'range', min: 40, max: 200, step: 10 },
      description: 'Avatar 크기를 설정합니다.',
    },
    source: {
      control: { type: 'file', accept: '.jpg, .png' },
      description: 'Avatar에 표시할 이미지를 설정합니다.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/Avatar</b> \n\nsource에는 require('이미지파일명') 또는 이미지 자체를 import한 것을 넣어준다."
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 80,
  source: dogImage,
};

export const Large = Template.bind({});
Large.args = {
  size: 150,
  source: dogImage,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  source: dogImage,
};
