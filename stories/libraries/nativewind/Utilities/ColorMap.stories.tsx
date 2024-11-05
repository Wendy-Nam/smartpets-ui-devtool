import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { View, Text } from 'react-native';
import ColorMap, { OpacityMap } from './ColorMap';

export default {
  title: 'Utilities/ColorMap',
  component: View,
  parameters: {
    docs: {
      description: {
        component: "<b>파일 위치: @common/ColorMap</b> \n\n하위 컴포넌트 : ColorMap, OpacityMap\n\nColorMap['primary']와 같은 형식으로, tailwind 커스텀색상을 직접 적용하기 어려울 때 사용함. (hexcode 가져옴)\n\n\n\nColorMap['primary'] + OpacityMap['60'] 와 같이 사용하면, 60% 투명도의 primary색상코드를 얻을 수 있음."
      },
    },
  },
} as ComponentMeta<typeof View>;

const ColorBox: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <View style={{ backgroundColor: color, padding: 10, marginBottom: 10, borderRadius: 5 }}>
    <Text style={{ color: '#ffffff' }}>{label}</Text>
  </View>
);

const OpacityBox: React.FC<{ color: string; opacity: string; label: string }> = ({ color, opacity, label }) => (
  <View style={{ backgroundColor: color + opacity, padding: 10, marginBottom: 10, borderRadius: 5 }}>
    <Text style={{ color: '#ffffff' }}>{label}</Text>
  </View>
);

export const ColorMapPreview: ComponentStory<typeof View> = () => (
  <View style={{ padding: 10 }}>
    {Object.entries(ColorMap).map(([name, color]) => (
      <ColorBox key={name} color={color} label={`${name}: ${color}`} />
    ))}
  </View>
);

export const OpacityMapPreview: ComponentStory<typeof View> = () => (
  <View style={{ padding: 10 }}>
    {Object.entries(OpacityMap).map(([opacity, hex]) => (
      <OpacityBox
        key={opacity}
        color={ColorMap['primary']}
        opacity={hex}
        label={`Opacity ${opacity}%: ${ColorMap['primary']}${hex}`}
      />
    ))}
  </View>
);
