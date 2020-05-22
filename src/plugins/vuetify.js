import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#607D8B',
        secondary: '#ECEFF1', // #FFCDD2
        tertiary: '#CFD8DC', // #3F51B5
      },
    },
  },
});
