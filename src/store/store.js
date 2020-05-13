import Vue from 'vue';
import Vuex from 'vuex';
import sampleData from '@/data/sampleData';

Vue.use(Vuex);

const contacts = JSON.parse(localStorage.getItem('contacts')) || sampleData;

export default new Vuex.store({
  state: {
    contacts,
  },
  mutations: {},
  actions: {},
});
