import Parser from './src/index';

Parser.install = function (Vue) {
  Vue.component(Parser.name, Parser);
};

export default Parser;
