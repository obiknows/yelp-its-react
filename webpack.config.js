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

console.log(config.module.loaders);
// break;

// PostCSS config
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
])

// CSS Naming config
const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l &&
    l.loader && l.loader.match(match));
  return found ? found[0] : null;
}

const cssloader = findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader
    .replace(matchCssLoaders,
    `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})
config.module.loaders.push(newloader);
cssloader.test =
  new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
})

// Export the config object
module.exports = config;
