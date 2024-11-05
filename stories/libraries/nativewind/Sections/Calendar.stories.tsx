// .storybook/stories/Calendar.stories.tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Calendar from './Calendar';

export default {
  title: 'Sections/Calendar',
  component: Calendar,
  argTypes: {
    // 필요한 prop에 대한 설명 추가 가능
  },
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @components/Calendar</b> \n\n추후 서버API 연동에 따라, 내부에서 활동한 날짜(paw 아이콘 표시)를 받아오는 부분을 수정해야할 수도 있음."
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {};
