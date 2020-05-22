<template>
  <v-card>
    <v-toolbar color="primary" flat>
      <v-toolbar-title>
        <strong>{{ `${contact.firstName} ${contact.lastName}` }}</strong>
        <v-divider></v-divider>
        <small v-if="contact.company">{{ contact.company }}</small>
      </v-toolbar-title>
    </v-toolbar>
    <div class="pa-2">
      <strong>{{ contact.email }}</strong>
    </div>
    <div v-if="contact.notes" class="pa-2">
      {{ contact.notes }}
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="editContact" icon><v-icon>mdi-pencil</v-icon></v-btn>
      <v-btn @click="closeDialog" icon><v-icon>mdi-close-circle</v-icon></v-btn>
    </v-card-actions>
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
    editContact() {
      this.$emit('edit-contact');
    },
  },
};
</script>
