module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories/*.stories.mdx',
    '../src/**/stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/stories/*.stories.mdx',
    '../src/**/**/stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/organisms/Header/stories/header.landing.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-storyshots',
  ],
};
