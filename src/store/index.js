import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('http://127.0.0.1:8000/api/login', credentials);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
    },
    async register({ commit }, userData) {
      const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
    },
    async logout({ commit }) {
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      commit('logout');
    }
  }
});
