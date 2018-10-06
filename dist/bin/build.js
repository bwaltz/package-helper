#!/usr/bin/env node
"use strict";

var _crossSpawn = require("cross-spawn");

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rimraf = require.resolve("rimraf/bin.js");
var babel = require.resolve("babel-cli/bin/babel.js");
var args = process.argv.slice(2);

_crossSpawn2.default.sync(rimraf, ["dist"], { stdio: "inherit" });

var buildDist = (0, _crossSpawn2.default)(babel, ["src", "--out-dir", "dist", "--copy-files", "--presets=cccisd", "--no-babelrc"].concat(args), { stdio: "inherit" });

process.on("exit", function () {
    buildDist.kill();
});