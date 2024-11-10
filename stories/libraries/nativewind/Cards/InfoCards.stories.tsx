import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { DiseaseCard, VaccinationCard, OrderInfoCard } from './InfoCards';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RoundedCircleButton } from '../Inputs/RoundedButton';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorMap from '../Utilities/ColorMap';

export default {
  title: 'Cards/InfoCards',
  component: DiseaseCard,
  parameters: {
    docs: {
      description: {
        component: '<b>파일 위치: @components/InfoCards</b> \n\n\n하위컴포넌트: DiseaseCard, VaccinationCard, OrderInfoCard'
      },
    },
  },
} as ComponentMeta<typeof DiseaseCard>;

// DiseaseCard 기본 사용 예제
const DiseaseCardTemplate: ComponentStory<typeof DiseaseCard> = (args) => <DiseaseCard {...args} />;
export const DefaultDiseaseCard = DiseaseCardTemplate.bind({});
DefaultDiseaseCard.args = {
  title: '심장 질환',
  percentage: 45,
  badge: true,
  icon: true,
  body: false,
};

// VaccinationCard 기본 사용 예제
const VaccinationCardTemplate: ComponentStory<typeof VaccinationCard> = (args) => <VaccinationCard {...args} />;
export const DefaultVaccinationCard = VaccinationCardTemplate.bind({});
DefaultVaccinationCard.args = {
  title: '광견병 백신',
  description: '광견병을 예방하며, 매년 접종이 권장됩니다.',
};

// OrderInfoCard 기본 사용 예제
const OrderInfoCardTemplate: ComponentStory<typeof OrderInfoCard> = (args) => <OrderInfoCard {...args} />;

export const DefaultOrderInfoCard = OrderInfoCardTemplate.bind({});
DefaultOrderInfoCard.args = {
  title: '아직 적용안된 props',
  description: '주문내역이 없습니다.',
};
