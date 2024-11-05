import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import BannerSection from './BannerSection';
import sampleImage from '../image/placeholder/dog.jpg';

export default {
  title: 'Sections/Banner',
  component: BannerSection,
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/BannerSection</b> \n\n단색배경의 solid와 이미지배경의 overlay라는 두가지 옵션 존재. (현재 overlay는 피그마에 없으나 추후를 고려해 넣어둠)"
      },
    },
  },
} as ComponentMeta<typeof BannerSection>;

const Template: ComponentStory<typeof BannerSection> = (args) => <BannerSection {...args} />;

export const SolidBanner = Template.bind({});
SolidBanner.args = {
  row1: 'First Row',
  row2: 'Second Row',
  background: 'blue',
  type: 'solid',
};

export const OverlayBanner = Template.bind({});
OverlayBanner.args = {
  row1: 'Overlay Row 1',
  row2: 'Overlay Row 2',
  background: sampleImage,
  type: 'overlay',
};
