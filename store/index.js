import DefaultProductList from '@/static/data.json';

export const actions = {
  nuxtServerInit({ commit }) {
    commit('products/setList', DefaultProductList);
  }
};
