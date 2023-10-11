import { createStore } from "vuex";
// import product from "./modules/product";

export default createStore({
  state: {},
  getters: {},
  actions: {
    fetchProducts({ commit }) {
      return "helloWorld";
    },
  },
  modules: {
    // product,
  },
});
