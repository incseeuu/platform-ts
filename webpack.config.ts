import type webpack from 'webpack'
import { buildWebpackConfiguration } from './config/build/buildWebpackConfiguration'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'
  const PORT = env.port ?? 3000
  const apiUrl = env.apiUrl ?? 'http://localhost:8000'

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend'
  })

  return config
}
