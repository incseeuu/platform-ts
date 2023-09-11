import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildStylesLoader } from './loaders/buildStylesLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = buildBabelLoader(options)

  const stylesLoader = buildStylesLoader(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    stylesLoader
  ]
}
