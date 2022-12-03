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
exports.processCraConfig = void 0;
var path_1 = require("path");
var semver_1 = __importDefault(require("semver"));
var isRegExp = function (value) {
    return value instanceof RegExp;
};
var isString = function (value) {
    return typeof value === 'string';
};
// This handles arrays in Webpack rule tests.
var testMatch = function (rule, string) {
    if (!rule.test)
        return false;
    return Array.isArray(rule.test)
        ? rule.test.some(function (test) { return isRegExp(test) && test.test(string); })
        : isRegExp(rule.test) && rule.test.test(string);
};
var processCraConfig = function (craWebpackConfig, options) {
    var configDir = path_1.resolve(options.configDir);
    /*
     * NOTE: As of version 5.3.0 of Storybook, Storybook's default loaders are no
     * longer appended when using this preset, meaning less customisation is
     * needed when used alongside that version.
     *
     * When loaders were appended in previous Storybook versions, some CRA loaders
     * had to be disabled or modified to avoid conflicts.
     *
     * See: https://github.com/storybookjs/storybook/pull/9157
     */
    var storybookVersion = semver_1.default.coerce(options.packageJson.version) || '';
    var isStorybook530 = semver_1.default.gte(storybookVersion, '5.3.0');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return craWebpackConfig.module.rules.reduce(function (rules, rule) {
        var oneOf = rule.oneOf, include = rule.include;
        // Add our `configDir` to support JSX and TypeScript in that folder.
        if (testMatch(rule, '.jsx')) {
            var newRule = __assign(__assign({}, rule), { include: [include, configDir].filter(Boolean) });
            return __spreadArray(__spreadArray([], __read(rules)), [newRule]);
        }
        /*
         * CRA makes use of Webpack's `oneOf` feature.
         * https://webpack.js.org/configuration/module/#ruleoneof
         *
         * Here, we map over those rules and add our `configDir` as above.
         */
        if (oneOf) {
            return __spreadArray(__spreadArray([], __read(rules)), [
                {
                    oneOf: oneOf.map(function (oneOfRule) {
                        var _a;
                        // @ts-expect-error - This is a conflict with types bundled in Storybook.
                        if (oneOfRule.type === 'asset/resource') {
                            if (isStorybook530) {
                                var excludes = __spreadArray([
                                    'ejs',
                                    'md',
                                    'mdx',
                                    'cjs'
                                ], __read((((_a = options.craOverrides) === null || _a === void 0 ? void 0 : _a.fileLoaderExcludes) || [])));
                                var excludeRegex = new RegExp("\\.(" + excludes.join('|') + ")$");
                                return __assign(__assign({}, oneOfRule), { 
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    exclude: __spreadArray(__spreadArray([], __read(oneOfRule.exclude)), [
                                        excludeRegex,
                                    ]) });
                            }
                            return {};
                        }
                        // This rule causes conflicts with Storybook addons like `addon-info`.
                        if (testMatch(oneOfRule, '.css')) {
                            return __assign(__assign({}, oneOfRule), { include: isStorybook530 ? undefined : [configDir], exclude: [oneOfRule.exclude, /@storybook/] });
                        }
                        // Used for the next two rules modifications.
                        var isBabelLoader = isString(oneOfRule.loader) &&
                            /[/\\]babel-loader[/\\]/.test(oneOfRule.loader);
                        // Target `babel-loader` and add user's Babel config.
                        if (isBabelLoader &&
                            isRegExp(oneOfRule.test) &&
                            oneOfRule.test.test('.jsx')) {
                            var _include = oneOfRule.include, ruleOptions = oneOfRule.options;
                            var _b = (typeof ruleOptions === 'object' ? ruleOptions : {}), rulePlugins = _b.plugins, rulePresets = _b.presets, ruleOverrides = _b.overrides;
                            var _c = options.babelOptions, _extends = _c.extends, plugins = _c.plugins, presets = _c.presets, overrides = _c.overrides;
                            return __assign(__assign({}, oneOfRule), { include: [_include, configDir].filter(Boolean), options: __assign(__assign({}, ruleOptions), { extends: _extends, plugins: __spreadArray(__spreadArray([], __read((plugins !== null && plugins !== void 0 ? plugins : []))), __read((rulePlugins !== null && rulePlugins !== void 0 ? rulePlugins : []))), presets: __spreadArray(__spreadArray([], __read((presets !== null && presets !== void 0 ? presets : []))), __read((rulePresets !== null && rulePresets !== void 0 ? rulePresets : []))), overrides: __spreadArray(__spreadArray([], __read((overrides !== null && overrides !== void 0 ? overrides : []))), __read((ruleOverrides !== null && ruleOverrides !== void 0 ? ruleOverrides : []))) }) });
                        }
                        // Target `babel-loader` that processes `node_modules`, and add Storybook config dir.
                        if (isBabelLoader &&
                            isRegExp(oneOfRule.test) &&
                            oneOfRule.test.test('.js')) {
                            return __assign(__assign({}, oneOfRule), { include: [configDir] });
                        }
                        return oneOfRule;
                    }),
                },
            ]);
        }
        return __spreadArray(__spreadArray([], __read(rules)), [rule]);
    }, []);
};
exports.processCraConfig = processCraConfig;
//# sourceMappingURL=processCraConfig.js.map