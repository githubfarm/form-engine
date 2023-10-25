import Tinymce from './src/index';

Tinymce.install = function (Vue) {
  Vue.component(Tinymce.name, Tinymce);
};

export default Tinymce;
