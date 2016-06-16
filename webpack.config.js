const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path');
      join    = path.join,
      resolve = path.resolve;
const getConfig = require('hjs-webpack');

// Path Variables
const root     = resolve(__dirname);
const src      = resolve(root, 'src');
const modules  = resolve(root, 'node_modules');
const dist     = resolve(root, 'dist');

var config = getConfig(
  in: join(__dirname, 'src/app.js'),  // app entry point
  out: join(__dirname, 'dist'),       // output folder to build to
  clearBeforeBuild: true
);
