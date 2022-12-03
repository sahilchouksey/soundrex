"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.webpack = exports.managerWebpack = exports.babelDefault = exports.core = void 0;
var path_1 = require("path");
var semver_1 = __importDefault(require("semver"));
var node_logger_1 = require("@storybook/node-logger");
var pnp_webpack_plugin_1 = __importDefault(require("pnp-webpack-plugin"));
var react_docgen_typescript_plugin_1 = __importDefault(require("@storybook/react-docgen-typescript-plugin"));
var mergePlugins_1 = require("./helpers/mergePlugins");
var getReactScriptsPath_1 = require("./helpers/getReactScriptsPath");
var processCraConfig_1 = require("./helpers/processCraConfig");
var checkPresets_1 = require("./helpers/checkPresets");
var getModulePath_1 = require("./helpers/getModulePath");
var CWD = process.cwd();
var REACT_SCRIPTS_PATH = getReactScriptsPath_1.getReactScriptsPath();
var OPTION_SCRIPTS_PACKAGE = 'scriptsPackageName';
// Ensures that assets are served from the correct path when Storybook is built.
// Resolves: https://github.com/storybookjs/storybook/issues/4645
if (!process.env.PUBLIC_URL) {
    process.env.PUBLIC_URL = '.';
}
// This loader is shared by both the `managerWebpack` and `webpack` functions.
var resolveLoader = {
    modules: ['node_modules', path_1.join(REACT_SCRIPTS_PATH, 'node_modules')],
    plugins: [pnp_webpack_plugin_1.default.moduleLoader(module)],
};
// TODO: Replace with exported type from Storybook.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var core = function (existing) { return (__assign(__assign({}, existing), { disableWebpackDefaults: true })); };
exports.core = core;
// Don't use Storybook's default Babel config.
var babelDefault = function () { return ({
    presets: [],
    plugins: [],
}); };
exports.babelDefault = babelDefault;
// Ensure that loaders are resolved from react-scripts.
var managerWebpack = function (webpackConfig) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    return (__assign(__assign({}, webpackConfig), { resolveLoader: resolveLoader }));
};
exports.managerWebpack = managerWebpack;
// Update the core Webpack config.
var webpack = function (webpackConfig, options) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var scriptsPath, scriptsPackageName, filteredRules, craWebpackConfigPath, craWebpackConfig, craRules, isStorybook6, _a, typescriptOptions, tsDocgenPlugin, isProd, coreOptions, builderOptions, cacheConfig, lazyCompilationConfig;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    scriptsPath = REACT_SCRIPTS_PATH;
                    // Flag any potentially conflicting presets.
                    checkPresets_1.checkPresets(options);
                    scriptsPackageName = options[OPTION_SCRIPTS_PACKAGE];
                    if (typeof scriptsPackageName === 'string') {
                        try {
                            scriptsPath = path_1.dirname(require.resolve(scriptsPackageName + "/package.json", {
                                paths: [options.configDir],
                            }));
                        }
                        catch (e) {
                            node_logger_1.logger.warn("A `" + OPTION_SCRIPTS_PACKAGE + "` was provided, but couldn't be resolved.");
                        }
                    }
                    // If there isn't a scripts-path set, return the Webpack config unmodified.
                    if (!scriptsPath) {
                        node_logger_1.logger.error('Failed to resolve a `react-scripts` package.');
                        return [2 /*return*/, webpackConfig];
                    }
                    node_logger_1.logger.info("=> Loading Webpack configuration from `" + path_1.relative(CWD, scriptsPath) + "`");
                    // Remove existing rules related to JavaScript and TypeScript.
                    node_logger_1.logger.info("=> Removing existing JavaScript and TypeScript rules.");
                    filteredRules = webpackConfig.module &&
                        webpackConfig.module.rules.filter(function (_a) {
                            var test = _a.test;
                            return !(test instanceof RegExp &&
                                ((test && test.test('.js')) || test.test('.ts')));
                        });
                    craWebpackConfigPath = path_1.join(scriptsPath, 'config', 'webpack.config');
                    craWebpackConfig = require(craWebpackConfigPath)(webpackConfig.mode);
                    // Select the relevant CRA rules and add the Storybook config directory.
                    node_logger_1.logger.info("=> Modifying Create React App rules.");
                    craRules = processCraConfig_1.processCraConfig(craWebpackConfig, options);
                    isStorybook6 = semver_1.default.gte(options.packageJson.version || '', '6.0.0');
                    _a = options.typescriptOptions, typescriptOptions = _a === void 0 ? {
                        reactDocgen: 'react-docgen-typescript',
                        reactDocgenTypescriptOptions: {},
                    } : _a;
                    tsDocgenPlugin = !isStorybook6 && typescriptOptions.reactDocgen === 'react-docgen-typescript'
                        ? [
                            new react_docgen_typescript_plugin_1.default(typescriptOptions.reactDocgenTypescriptOptions),
                        ]
                        : [];
                    isProd = webpackConfig.mode !== 'development';
                    return [4 /*yield*/, options.presets.apply('core')];
                case 1:
                    coreOptions = _e.sent();
                    builderOptions = (_b = coreOptions === null || coreOptions === void 0 ? void 0 : coreOptions.builder) === null || _b === void 0 ? void 0 : _b.options;
                    cacheConfig = (builderOptions === null || builderOptions === void 0 ? void 0 : builderOptions.fsCache)
                        ? { cache: { type: 'filesystem' } }
                        : {};
                    lazyCompilationConfig = (builderOptions === null || builderOptions === void 0 ? void 0 : builderOptions.lazyCompilation) && !isProd
                        ? { experiments: { lazyCompilation: { entries: false } } }
                        : {};
                    // Return the new config.
                    return [2 /*return*/, __assign(__assign(__assign(__assign({}, webpackConfig), cacheConfig), lazyCompilationConfig), { module: __assign(__assign({}, webpackConfig.module), { rules: __spreadArray(__spreadArray([], __read((filteredRules || []))), __read(craRules)) }), 
                            // NOTE: this prioritizes the storybook version of a plugin
                            // when there are duplicates between SB and CRA
                            plugins: mergePlugins_1.mergePlugins.apply(void 0, __spreadArray(__spreadArray(__spreadArray([], __read((webpackConfig.plugins || []))), __read(((_c = craWebpackConfig.plugins) !== null && _c !== void 0 ? _c : []))), __read(tsDocgenPlugin))), resolve: __assign(__assign({}, webpackConfig.resolve), { extensions: (_d = craWebpackConfig.resolve) === null || _d === void 0 ? void 0 : _d.extensions, modules: __spreadArray(__spreadArray(__spreadArray([], __read(((webpackConfig.resolve && webpackConfig.resolve.modules) || []))), [
                                    path_1.join(REACT_SCRIPTS_PATH, 'node_modules')
                                ]), __read(getModulePath_1.getModulePath(CWD))), plugins: [pnp_webpack_plugin_1.default] }), resolveLoader: resolveLoader })];
            }
        });
    });
};
exports.webpack = webpack;
//# sourceMappingURL=index.js.map