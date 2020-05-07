<template>
  <v-card>
    <v-toolbar dark>
      <v-toolbar-title class="ml-3">
        <strong>{{ `${contact.firstName} ${contact.lastName}` }}</strong>
      </v-toolbar-title>
    </v-toolbar>
    <v-container class="a-3">
      <v-card-title>
        {{ contact.email }}
      </v-card-title>

      <v-card-text v-if="contact.company">
        COMPANY: {{ contact.company }}
      </v-card-text>
      <v-card-text v-if="contact.notes">
        NOTES: {{ contact.notes }}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>EDIT</v-btn>
        <v-btn @click="closeDialog">CLOSE</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ContactCardDetail',
  props: {
    contact: Object,
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>
