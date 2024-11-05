import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Spinner, ProgressDots } from './Loading';

export default {
  title: 'Sections/Loading',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/Loading</b> \n\nSpinner와 ProgressDots의 두 종류. ProgressDots는 분석서비스에서 사진 제출 후 결과기다리는 데에 쓰임.\n\nProgressDots가 모바일 에뮬레이터에서는 보이는데, 웹버전에서는 안 보이는 듯함."
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const SpinnerTemplate: ComponentStory<typeof Spinner> = () => <Spinner />;
const ProgressDotsTemplate: ComponentStory<typeof ProgressDots> = () => <ProgressDots />;

export const SpinnerLoading = SpinnerTemplate.bind({});
SpinnerLoading.storyName = 'Spinner';
SpinnerLoading.args = {};

export const ProgressDotsLoading = ProgressDotsTemplate.bind({});
ProgressDotsLoading.storyName = 'ProgressDots';
ProgressDotsLoading.args = {};
