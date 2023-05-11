import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildWebpackConfiguration = (options: BuildOptions): webpack.Configuration => {

    const {mode, paths} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}