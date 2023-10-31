import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: localStorage.getItem('isLogged') === 'true' || false,
    shoppingList: JSON.parse(localStorage.getItem("shoppingList")) || [],
    profilePicture: localStorage.getItem("profilePicture")
  },
  mutations: {
    setLogged(state, status) {
      state.isLogged = status;
      localStorage.setItem('isLogged', status);
    },
    setProfilePicture(state, profilePictureUrl){
      state.profilePicture = profilePictureUrl;
    }
  },
  actions: {
    login({ commit }) {
      commit('setLogged', true);
    },
    logout({ commit }) {
      commit('setLogged', false);
    },
    updateProfilePicture({ commit }, pictureUrl) {
      commit("setProfilePicture", pictureUrl);
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
    getProfilePicture: (state) => state.profilePicture,
  },
})
