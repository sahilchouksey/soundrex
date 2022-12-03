"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPresets = void 0;
var path_1 = require("path");
var node_logger_1 = require("@storybook/node-logger");
var incompatiblePresets = [
    '@storybook/preset-scss',
    '@storybook/preset-typescript',
];
var checkPresets = function (options) {
    var presetsList = options.presetsList || [];
    // Look for a legacy presets file if one exists.
    if (!options.presetsList) {
        try {
            var configDir = path_1.resolve(options.configDir);
            // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
            presetsList = require(path_1.join(configDir, 'presets.js'));
        }
        catch (e) {
            // NOOP
        }
    }
    presetsList.forEach(function (preset) {
        var presetName = typeof preset === 'string' ? preset : preset.name;
        if (incompatiblePresets.includes(presetName)) {
            node_logger_1.logger.warn("`" + presetName + "` may not be compatible with `@storybook/preset-create-react-app`");
        }
    });
};
exports.checkPresets = checkPresets;
//# sourceMappingURL=checkPresets.js.map