// .storybook/stories/WalkingRecordPanel.stories.tsx

import React from 'react';
import {View} from 'react-native';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import WalkingRecordPanel from './WalkingRecordPanel';

export default {
  title: 'Frames/WalkingRecordPanel',
  component: WalkingRecordPanel,
  argTypes: {
    distanceInMeters: { control: 'number', description: '이동한 거리 (미터 단위)' },
    timeInSeconds: { control: 'number', description: '경과 시간 (초 단위)' },
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @components/WalkingRecordPanel</b> \n\n이동한 거리와 경과 시간을 표시하는 패널 컴포넌트.",
      },
    },
  },
} as ComponentMeta<typeof WalkingRecordPanel>;

const Template: ComponentStory<typeof WalkingRecordPanel> = (args) => (<WalkingRecordPanel {...args} />);
export const Default = Template.bind({});
Default.args = {
  distanceInMeters: 1500, // 예시 거리: 1.5 km
  timeInSeconds: 3600, // 예시 시간: 1시간
};
