import { version } from '../package.json'

import Component from './components/Component.js'

export {
  version,

  Component
}

export default {
  version,

  Component,

  install (Vue) {
    Vue.component(Component.name, Component);
  }
}
