const initialState = {
  counter: 0,
}

const getters = {
  doubleCounter: state => state.counter * 2,
}

const mutations = {
  increment: (state) => state.counter += 1,
  decrement: (state) => state.counter -= 1,
  changeByAmount: (state, payload) => state.counter += payload,
}

const counterModule = {
  state: initialState,
  getters,
  mutations,
  namespaced: true,
};

export default counterModule;
