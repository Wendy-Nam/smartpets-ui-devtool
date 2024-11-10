import './global.css';
import './fonts.css';
import { Provider as PaperProvider } from 'react-native-paper';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  smallTablet: {
    name: 'Small Tablet',
    styles: {
      width: '600px',
      height: '960px',
    },
    type: 'tablet',
  },
  largeTablet: {
    name: 'Large Tablet',
    styles: {
      width: '800px',
      height: '1280px',
    },
    type: 'tablet',
  },
  ultraWideMonitor: {
    name: 'Ultra Wide Monitor',
    styles: {
      width: '2560px',
      height: '1080px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,  // 기본 뷰포트를 포함
      ...customViewports,    // 커스텀 뷰포트를 추가
    },
    defaultViewport: 'iphonex', // 기본 뷰포트를 iPhone X로 설정
  },
};

// decorators 배열을 사용하여 모든 스토리에 PaperProvider 적용
export const decorators = [
  (Story) => (
    <PaperProvider>
      <Story />
    </PaperProvider>
  ),
];
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: { excludeDecorators: true },
    },
    options: {
    storySort: {
      order: ['Utilities', 'Inputs', 'Cards', 'Sections', 'Frames', 'Modal'], // 원하는 순서대로 작성
    },
  },
  },

  tags: ['autodocs'],
}; 

export default preview;
