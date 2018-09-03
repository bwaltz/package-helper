#!/usr/bin/env node
import spawn from "cross-spawn";

const rimraf = require.resolve("rimraf/bin.js");
const babel = require.resolve("babel-cli/bin/babel.js");
const args = process.argv.slice(2);

spawn.sync(rimraf, ["dist"], { stdio: "inherit" });

const buildDist = spawn(
    babel,
    [
        "src",
        "--out-dir",
        "dist",
        "--copy-files",
        "--presets=cccisd",
        "--no-babelrc"
    ].concat(args),
    { stdio: "inherit" }
);

process.on("exit", () => {
    buildDist.kill();
});
