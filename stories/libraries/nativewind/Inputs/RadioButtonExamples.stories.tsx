import React, { useRef } from 'react';
import { View, Alert, Platform } from 'react-native';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import RadioButtonGroup from './RadioButtonGroup';
import RadioButton from './RadioButton';
import StylizedText from '../Utilities/StylizedText';
import { RoundedTextButton } from './RoundedButton';
import Avatar from '../Frames/Avatar';

const showAlert = (title: string, message: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

export default {
  title: 'Inputs/RadioButton/Example',
  component: RadioButtonGroup,
  argTypes: {
    maxChoice: { control: 'number', description: '최대 선택 가능한 버튼 수' },
    containerStyle: { control: 'text', description: '그룹 컨테이너 스타일' },
    inactiveOutlineStyle: { control: 'select', options: ['dashed', 'solid'], description: '비활성화 테두리 스타일' },
  },
} as ComponentMeta<typeof RadioButtonGroup>;

// Dashed 스타일 예제
export const RadioButtonExampleDashed: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="dashed"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Dashed)" color="bg-secondary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};

RadioButtonExampleDashed.parameters = {
  docs: {
    source: {
      code: `
import React, { useRef } from 'react';
import { View, Alert, Platform } from 'react-native';
import RadioButtonGroup from '@common/RadioButtonGroup';
import RadioButton from '@common/RadioButton';
import StylizedText from '@common/StylizedText';
import { RoundedTextButton } from '@common/RoundedButton';

const showAlert = (title, message) => {
  if (Platform.OS === 'web') {
    window.alert(\`\${title}\\n\\n\${message}\`);
  } else {
    Alert.alert(title, message);
  }
};

const RadioButtonExampleDashed = (args) => {
  const radioButtonGroupRef = useRef(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="dashed"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <StylizedText type="body2" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Dashed)" color="bg-secondary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};
      `,
      language: 'javascript',
    },
  },
};

// Solid 스타일 예제
export const RadioButtonExampleSolid: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="solid"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Solid)" color="bg-primary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};

RadioButtonExampleSolid.parameters = {
  docs: {
    source: {
      code: `
import React, { useRef } from 'react';
import { View, Alert, Platform } from 'react-native';
import RadioButtonGroup from '@common/RadioButtonGroup';
import RadioButton from '@common/RadioButton';
import StylizedText from '@common/StylizedText';
import { RoundedTextButton } from '@common/RoundedButton';
import Avatar from '@common/Avatar';

const showAlert = (title, message) => {
  if (Platform.OS === 'web') {
    window.alert(\`\${title}\\n\\n\${message}\`);
  } else {
    Alert.alert(title, message);
  }
};

const RadioButtonExampleSolid = (args) => {
  const radioButtonGroupRef = useRef(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        inactiveOutlineStyle="solid"
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 1</StylizedText>
        </RadioButton>
        <RadioButton>
          <Avatar size={60} />
          <StylizedText type="body1" styleClass="mt-3">Label 2</StylizedText>
        </RadioButton>
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Solid)" color="bg-primary" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};
      `,
      language: 'javascript',
    },
  },
};

// Text 스타일 예제
export const RadioButtonExampleText: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const radioButtonGroupRef = useRef<any>(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Text)" color="bg-black" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};

RadioButtonExampleText.parameters = {
  docs: {
    source: {
      code: `
import React, { useRef } from 'react';
import { View, Alert, Platform } from 'react-native';
import RadioButtonGroup from '@common/RadioButtonGroup';
import RadioButton from '@common/RadioButton';
import StylizedText from '@common/StylizedText';
import { RoundedTextButton } from '@common/RoundedButton';

const showAlert = (title, message) => {
  if (Platform.OS === 'web') {
    window.alert(\`\${title}\\n\\n\${message}\`);
  } else {
    Alert.alert(title, message);
  }
};

const RadioButtonExampleText = (args) => {
  const radioButtonGroupRef = useRef(null);

  const handleExternalSubmit = () => {
    if (radioButtonGroupRef.current) {
      radioButtonGroupRef.current.submit();
    }
  };

  return (
    <View className="px-12 mt-6 flex justify-center items-center">
      <RadioButtonGroup
        ref={radioButtonGroupRef}
        maxChoice={1}
        onSubmit={(selectedIds) => showAlert('Selected options:', JSON.stringify(selectedIds))}
        containerStyle="flex-row flex-wrap justify-around space-x-8 mb-4"
        {...args}
      >
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
        <RadioButton isSelected={false} onPress={() => {}} variant="text" label="Text Radio Button" />
      </RadioButtonGroup>
      <RoundedTextButton content="Submit (Text)" color="bg-black" widthOption="xl" onPress={handleExternalSubmit} />
    </View>
  );
};
      `,
      language: 'javascript',
    },
  },
};
