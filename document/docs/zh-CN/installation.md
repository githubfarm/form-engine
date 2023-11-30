## 安装

### 安装方式

```shell
npm install form-engine -S
```

或者

```shell
yarn add form-engine -S
```

## 引入 form-engine

`form-engine`提供了 2 种引入方式，分别是全局引入和按需引入。

### 全局引入

全局引入，就是整个`form-engine`的功能全部引入至你的项目当中。

全局引入示例：

```js
import Vue from 'vue'
import FormEngine from 'form-engine'

Vue.use(FormEngine)
```

### 按需引入

按需引入，是可以按照你所需要的局部功能进行引入。

按需引入示例：

```js
import Vue from 'vue'
import { Designer, Parser } from 'form-engine'

Vue.use(Designer)
Vue.use(Parser)
```
