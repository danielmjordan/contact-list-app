<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>BLANK<strong>SLATE</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Create</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>

    <v-footer app dense>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
