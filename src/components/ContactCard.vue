<template>
  <v-card flat hover width="600" class="mx-auto ma-3">
    <v-card-title>
      {{ fullName }}
    </v-card-title>
    <v-card-subtitle>
      {{ contact.email }}
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn>EDIT</v-btn>
      <v-btn @click="removeContact">DELETE</v-btn>
    </v-card-actions>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: {
    contact: Object,
  },

  methods: {
    removeContact() {
      this.$emit('remove-contact', this.contact);
    },
  },

  computed: {
    fullName() {
      return `${this.contact.firstName} ${this.contact.lastName}`;
    },
  },
};
</script>
