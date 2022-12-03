"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReactScriptsPath = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getReactScriptsPath = function () {
    var cwd = process.cwd();
    var scriptsBinPath = path_1.join(cwd, '/node_modules/.bin/react-scripts');
    if (process.platform === 'win32') {
        /*
         * Try to find the scripts package on Windows by following the `react-scripts` CMD file.
         * https://github.com/storybookjs/storybook/issues/5801
         */
        try {
            var content = fs_1.readFileSync(scriptsBinPath, 'utf8');
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            var packagePathMatch = content.match(/"\$basedir[\\/](\S+?)[\\/]bin[\\/]react-scripts\.js"/i);
            if (packagePathMatch && packagePathMatch.length > 1) {
                var scriptsPath = path_1.join(cwd, '/node_modules/.bin/', packagePathMatch[1]);
                return scriptsPath;
            }
        }
        catch (e) {
            // NOOP
        }
    }
    else {
        /*
         * Try to find the scripts package by following the `react-scripts` symlink.
         * This won't work for Windows users, unless within WSL.
         */
        try {
            var resolvedBinPath = fs_1.realpathSync(scriptsBinPath);
            var scriptsPath = path_1.join(resolvedBinPath, '..', '..');
            return scriptsPath;
        }
        catch (e) {
            // NOOP
        }
    }
    /*
     * Try to find the `react-scripts` package by name (won't catch forked scripts packages).
     */
    try {
        var scriptsPath = path_1.dirname(require.resolve('react-scripts/package.json'));
        return scriptsPath;
    }
    catch (e) {
        // NOOP
    }
    return '';
};
exports.getReactScriptsPath = getReactScriptsPath;
//# sourceMappingURL=getReactScriptsPath.js.map