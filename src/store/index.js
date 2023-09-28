import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: localStorage.getItem('isLogged') === 'true' || false,
  },
  mutations: {
    setLogged(state, status) {
      state.isLogged = status;
      localStorage.setItem('isLogged', status);
    },
  },
  actions: {
    login({ commit }) {
      commit('setLogged', true);
    },
    logout({ commit }) {
      commit('setLogged', false);
    },
  },
  getters: {
    isLogged: (state) => state.isLogged,
  },
})
