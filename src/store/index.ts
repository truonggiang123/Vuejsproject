import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/service/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    GET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORIES(state, category) {
      const categories = state.categories.concat(category);
      state.categories = categories;
    },
    UPDATE_CATEGORIES(state, category) {
      const categories: any = state.categories;
      for (let i = 0; i < categories.length; i++) {
        if (categories[i]._id === category._id) {
          categories[i] = category;
          categories.__ob__.dep.notify();
          break;
        }
      }
      // const currentCat: any = state.categories.filter((item: any) => item._id === category._id);
      // if (currentCat && currentCat.length) {
      //   currentCat[0] = category;
      // }
    },
    // delete mutations
    DELETE_CATEGORIES(state, id) {
      const categories: any = state.categories;
      for (let i = 0; i < state.categories.length; i++) {
        if (categories[i]._id === id) {
          categories.splice(i, 1);
        }
      }
    }
  },
  actions: {
    async getAllCategory({ commit }) {
      const response = await Api().get('/categories');
      commit('GET_CATEGORIES', response.data.data);
    },
    async addCategory({ commit }, { category, callback }) {
      const response = await Api().post('/categories', category);
      console.log(response);
      if (response.data.status === 'success') {
        commit('ADD_CATEGORIES', response.data.data);
        if (callback) {
          callback(response.data.status);
        }
      } else {
        callback(response.data.status);
      }
    },
    // update category
    async updateCategory({ commit }, { category, id, callback }) {
      const response = await Api().patch(`/categories/${id}`, category);
      if (response.data.status === 'success') {
        commit('UPDATE_CATEGORIES', response.data.data);
        if (callback) {
          callback(response.data.status);
        }
      } else {
        callback(response.data.status);
      }
    },
    // delete category
    async deleteCategory({ commit }, { id, callback }) {
      console.log(id);
      const response = await Api().delete(`/categories/${id}`);
      if (response.data.status === 'success') {
        commit('DELETE_CATEGORIES', id);
        if (callback) {
          callback(response.data.status);
        }
      } else {
        callback(response.data.status);
      }
    }
  },
  modules: {
  },
});
