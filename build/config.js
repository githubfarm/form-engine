var path = require('path');

exports.alias = {
  'main': path.resolve(__dirname, '../document/common'),
  'packages': path.resolve(__dirname, '../packages'),
  'examples': path.resolve(__dirname, '../examples'),
  'document': path.resolve(__dirname, '../document'),
  '@': path.resolve(__dirname, '../src'),
  'vue$': 'vue/dist/vue.esm.js'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js|utils\/lodash\.js/;
