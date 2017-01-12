import gulp from "gulp";
import webpack from "webpack";
import chalk from "chalk";
import rimraf from "rimraf";
import {create as createServerConfig} from "./webpack.server";

const $ = require("gulp-load-plugins")();

