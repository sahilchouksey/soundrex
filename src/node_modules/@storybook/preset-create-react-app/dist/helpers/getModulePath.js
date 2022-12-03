"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModulePath = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var JSCONFIG = 'jsconfig.json';
var TSCONFIG = 'tsconfig.json';
var getModulePath = function (appDirectory) {
    // CRA only supports `jsconfig.json` if `tsconfig.json` doesn't exist.
    var configName = '';
    if (fs_1.existsSync(path_1.join(appDirectory, TSCONFIG))) {
        configName = TSCONFIG;
    }
    else if (fs_1.existsSync(path_1.join(appDirectory, JSCONFIG))) {
        configName = JSCONFIG;
    }
    try {
        // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
        var baseUrl = require(path_1.join(appDirectory, configName)).compilerOptions.baseUrl;
        return (baseUrl ? [baseUrl] : []);
    }
    catch (e) {
        return [];
    }
};
exports.getModulePath = getModulePath;
//# sourceMappingURL=getModulePath.js.map