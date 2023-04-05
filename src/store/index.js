import { createStore } from "vuex";

import modules from './modules';

const storeOptions = {
  modules,
}

const store = createStore(storeOptions)

export default store;
