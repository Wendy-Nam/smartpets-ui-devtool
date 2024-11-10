const path = require('path');

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',  // 뷰포트 애드온 추가
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-vector-icons'],
      },
    },
    {
      name: '../preset.js',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'react-native-vector-icons',
          'nativewind',
          'react-native-css-interop',
        ],
        babelPresets: ['nativewind/babel'],
        babelPresetReactOptions: { jsxImportSource: 'nativewind' },
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // speeds up storybook build time
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  webpackFinal: async (config) => {
    // fonts.css 추가
    config.entry.push(path.resolve(__dirname, './global.css'));
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
      include: [
        path.resolve(__dirname, './assets/fonts'), // Pretendard 폰트 파일 경로
      ]
    });
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: [
        path.resolve(__dirname, '../stories/nativewind'),
        path.resolve(__dirname, './'),
      ],
    });

  // 이미지 파일에 대한 로더 설정
  config.module?.rules?.push({
    test: /\.(png|jpe?g|gif|webp)$/,
    // use: [
    //   {
    //     loader: require.resolve('url-loader'),
    //     options: {
    //       limit: 10000, // 10kB
    //       name: '[name].[hash:7].[ext]',
    //     },
    //   },
    // ],
    use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // 원본 경로 유지
            context: path.resolve(__dirname, '../'), // 경로 기준 설정
            outputPath: 'images/',
            publicPath: '/images/',
          },
        },
    ],
    include: [
      path.resolve(__dirname, '../public'), // 이미지 파일이 포함된 폴더로 조정
      path.resolve(__dirname, '../stories/libraries/image'),
    ]
  });
    return {
      ...config,
    };
  },
  staticDirs: ["../public"], // Here
};
