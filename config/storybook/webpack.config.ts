import webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildStylesLoader } from '../build/loaders/buildStylesLoader'

module.exports = ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if (config.module?.rules != null) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (rule.test && (rule.test as RegExp).test('.svg')) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module?.rules?.push(buildStylesLoader(true))

  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }))

  return config
}
