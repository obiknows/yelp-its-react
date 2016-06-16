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

// Check if 'Dev' or 'Production'
const NODE_ENV = process.env.NODE_ENV;
const isDev    = NODE_ENV === 'development';


var config = getConfig({
  isDev: isDev,
  in: join(__dirname, 'src/app.js'),  // app entry point
  out: join(__dirname, 'dist'),       // output folder to build to
  clearBeforeBuild: true
});

// Export the config object
module.exports = config;
