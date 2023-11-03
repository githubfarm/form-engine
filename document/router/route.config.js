import navConfig from './nav.config';
import navConfigGuide from './nav.config.guide';
import langs from '../i18n/route';

const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`../pages/zh-CN/${name}.vue`)),
    'zh-CN');
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../docs/zh-CN${path}.md`)),
    'zh-CN');
  }
};

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};

const registerRoute = (type, navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    if(type === 'component') {
      route.push({
        path: `/${ lang }/component`,
        redirect: `/${ lang }/component/common`,
        component: load(lang, 'component'),
        children: []
      });
    } else if(type === 'guide') {
      route.push({
        path: `/${ lang }/guide`,
        redirect: `/${ lang }/guide/installation`,
        component: load(lang, 'guide'),
        children: []
      });
    }
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });

  function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? load(lang, 'changelog')
      : loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    };
  
    route[index].children.push(child);
  }

  return route;
};

let route = registerRoute('component', navConfig);
let routeGuide = registerRoute('guide', navConfigGuide);

const generateMiscRoutes = function(lang) {
  // homepage
  let indexRoute = {
    path: `/${ lang }`,
    meta: { lang },
    name: 'home' + lang,
    redirect: `/${ lang }/guide/installation`,
    component: load(lang, 'index')
  };

  return [indexRoute];
};

langs.forEach(lang => {
  route = route.concat(routeGuide, generateMiscRoutes(lang.lang));
});

let defaultPath = '/zh-CN';

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);

console.log(route);
export default route;
