<template v-slot:activator="{ on }">
  <v-card @click="viewContact" width="600" class="mx-auto ma-3" flat hover>
    <v-card-title>
      {{ contact.firstName }} {{ contact.lastName }}
    </v-card-title>
    <v-card-subtitle>
      {{ contact.email }}
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click.stop="editContact" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn @click="removeContact" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: Object,
  },

  methods: {
    editContact() {
      this.$emit('edit-contact', this.contact);
    },
    removeContact() {
      this.$store.commit('REMOVE_CONTACT', this.contact);
      this.$emit('remove-contact', this.contact);
    },
    viewContact() {
      this.$emit('view-contact', this.contact);
    },
  },
};
</script>
