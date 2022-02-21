const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, '..'),
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json')
          }
        }
      ]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
