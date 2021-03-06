const path = require('path');

const dist = 'dist';  // be aware 'dist' folder is also used for tsconfig output

module.exports = {
  entry: {
    Bold: `./src/Bold.ts`,
    Strikethrough: `./src/Strikethrough.ts`
  },
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  mode: 'production',
  target: 'node',
  node: {
    __dirname: true
  },
  externals: {
    // pre-defined modules computed below
  }
}

// https://console.bluemix.net/docs/openwhisk/openwhisk_reference.html#openwhisk_ref_javascript_environments_8
const installedModules = [
  'amqplib',
  'apn',
  'async',
  'bent',
  'body-parser',
  'btoa',
  'cassandra-driver',
  'cloudant',
  '@cloudant\/cloudant',
  'commander',
  'composeaddresstranslator',
  'consul',
  'cookie-parser',
  'cradle',
  'elasticsearch',
  'errorhandler',
  'etcd3',
  'express',
  'express-session',
  'formidable',
  'glob',
  'gm',
  'ibm-cos-sdk',
  'ibm_db',
  'ibmiotf',
  'iconv-lite',
  'jsdom',
  'jsonwebtoken',
  'lodash',
  'log4js',
  'marked',
  'merge',
  'moment',
  'mongodb',
  'mysql',
  'mustache',
  'nano',
  'nodemailer',
  'oauth2-server',
  'openwhisk',
  'path-to-regex',
  'pg',
  'process',
  'pug',
  'redis',
  'request',
  'request-promise',
  'rimraf',
  'semver',
  '@sendgrid/mail@6.3.1',
  'serve-favicon',
  'superagent',
  'twilio',
  'underscore',
  'url-pattern',
  'uuid',
  'validator',
  'watson-developer-cloud',
  'when',
  'winston',
  'ws',
  'xml2js',
  'xmlhttprequest',
  'yauzl'
  ];

  installedModules.forEach((nodeModule) => module.exports.externals[nodeModule] = `commonjs ${nodeModule}`); // don't bundle externals; leave as require('module')
