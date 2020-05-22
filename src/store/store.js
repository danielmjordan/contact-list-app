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
  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.unshift(contact);
    },
    REMOVE_CONTACT(state, contact) {
      state.contacts = state.contacts.filter(c => c.id !== contact.id);
    },
  },
  actions: {},
});

export default store;
