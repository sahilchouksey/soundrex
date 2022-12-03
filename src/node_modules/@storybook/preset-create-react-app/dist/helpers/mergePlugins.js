"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePlugins = void 0;
var react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var mergePlugins = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (plugins, plugin) {
        if (plugins.some(function (includedPlugin) {
            return includedPlugin.constructor.name === plugin.constructor.name;
        }) ||
            plugin.constructor.name === 'WebpackManifestPlugin') {
            return plugins;
        }
        var updatedPlugin = plugin;
        if (plugin.constructor.name === 'ReactRefreshPlugin') {
            // Storybook uses webpack-hot-middleware
            // https://github.com/storybookjs/presets/issues/177
            updatedPlugin = new react_refresh_webpack_plugin_1.default({
                overlay: {
                    sockIntegration: 'whm',
                },
            });
        }
        return __spreadArray(__spreadArray([], __read(plugins)), [updatedPlugin]);
    }, []);
};
exports.mergePlugins = mergePlugins;
//# sourceMappingURL=mergePlugins.js.map