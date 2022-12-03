import { Configuration } from 'webpack';
import { PluginOptions } from './types';
export declare const core: (existing: {
    disableWebpackDefaults: boolean;
}) => {
    disableWebpackDefaults: boolean;
};
export declare const babelDefault: () => Record<string, (string | [string, object])[]>;
export declare const managerWebpack: (webpackConfig?: Configuration) => Configuration;
export declare const webpack: (webpackConfig: Configuration | undefined, options: PluginOptions) => Promise<Configuration>;
