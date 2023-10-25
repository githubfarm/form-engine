import Designer from './src/index';

Designer.install = function (Vue) {
  Vue.component(Designer.name, Designer);
};

export default Designer;
