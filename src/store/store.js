import Vue from 'vue';
import Vuex from 'vuex';
import { saveStatePlugin } from '@/utils/utils';
import sampleData from '@/data/sampleData';

Vue.use(Vuex);

const contacts = JSON.parse(localStorage.getItem('contacts')) || sampleData;

const store = new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    contacts,
  },
  mutations: {},
  actions: {},
});

export default store;
