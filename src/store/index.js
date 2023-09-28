import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: localStorage.getItem('isLogged') === 'true' || false,
    shoppingList: JSON.parse(localStorage.getItem("shoppingList")) || [],
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
    //shopping cart operations
    addItem(state, item) {
      state.shoppingList.push(item);
      localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
    },
    removeItem(state, index) {
      state.shoppingList.splice(index, 1);
      localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
    },
    clearList(state) {
      state.shoppingList = [];
      localStorage.removeItem('shoppingList');
    },
  },
  getters: {
    isLogged: (state) => state.isLogged,
    shoppingList: (state) => state.shoppingList,
  },
})
