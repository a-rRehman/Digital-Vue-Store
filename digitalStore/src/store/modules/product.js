import ApiServices from "@/services/api";

const state = {
  products: [],
};
const getters = {
  getProducts: (state) => state.products,
};
const mutations = {
  setProducts(state, value) {
    state.products = value;
  },
};
const actions = {
  async fetchProducts({ commit }) {
    const response = await ApiServices.gettingProducts();
    // console.log(response.products);
    commit("setProducts", response.products);
    return response;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
