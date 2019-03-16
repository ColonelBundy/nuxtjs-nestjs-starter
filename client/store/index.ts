import Vuex from 'vuex';
import Vue from 'vue';
import { root, rootStore } from './root';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    root,
  },
});

Vue.prototype.$vxm = {
  root: rootStore.CreateProxy(store, rootStore),
};

declare module 'vue/types/vue' {
  interface Vue {
    $vxm: {
      root: rootStore;
    };
  }
}
