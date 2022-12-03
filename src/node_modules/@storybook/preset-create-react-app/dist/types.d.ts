import type { PluginItem, TransformOptions } from '@babel/core';
import type { PluginOptions as RDTSPluginOptions } from '@storybook/react-docgen-typescript-plugin';
export declare type Preset = string | {
    name: string;
};
export interface PluginOptions {
    /**
     * Optionally set the package name of a react-scripts fork.
     * In most cases, the package is located automatically by this preset.
     */
    scriptsPackageName?: string;
    /**
     * Overrides for Create React App's Webpack configuration.
     */
    craOverrides?: {
        fileLoaderExcludes?: string[];
    };
    configDir: string;
    babelOptions: {
        extends: string | null;
        plugins: PluginItem[] | null;
        presets: PluginItem[] | null;
        overrides: TransformOptions[] | null;
    };
    presetsList: Preset[];
    packageJson: {
        version: string;
    };
    typescriptOptions?: {
        reactDocgen: 'react-docgen-typescript' | 'react-docgen' | false;
        reactDocgenTypescriptOptions: RDTSPluginOptions;
    };
    presets: {
        apply<T>(preset: Preset): Promise<T>;
    };
}
export interface CoreConfig {
    builder: {
        options?: {
            fsCache?: boolean;
            lazyCompilation?: boolean;
        };
    };
}
