import React from 'react';
import {View} from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import BalloonBox from './BalloonBox';
import StylizedText from '../Utilities/StylizedText';

export default {
  title: 'Frames/BalloonBox',
  component: BalloonBox,
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/BalloonBox</b> \n\n말풍선모양 프레임. 내용으로 텍스트2개를 그냥 넣으면 간격이 벌어지니, 그 세트를 각각의 View로 감싸길 권장함 (하단 코드 참조)"
      },
    },
  },
} as ComponentMeta<typeof BalloonBox>;

const Template: ComponentStory<typeof BalloonBox> = (args) => (
  <BalloonBox {...args}>
    <View>
      <StylizedText type="header4" styleClass="text-black mb-2">댕댕이란?</StylizedText>
      <StylizedText type="body2" styleClass="text-black">이 단어는 강아지를 뜻하는 신조어이다.</StylizedText>
    </View>
  </BalloonBox>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a sample message in a balloon box.',
};
