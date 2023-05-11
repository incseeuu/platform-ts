import webpack from 'webpack'
import {buildWebpackConfiguration} from "./config/build/buildWebpackConfiguration";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfiguration({
    mode: 'development',
    paths,
    isDev
})

export default config