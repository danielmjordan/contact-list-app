<template>
  <v-content>
    <v-dialog v-model="showDialog" width="700">
      <ContactCardDetail
        @close-dialog="showDialog = false"
        :contact="contact"
      />
    </v-dialog>

    <v-card
      @click="showDialog = !showDialog"
      width="600"
      class="mx-auto ma-3"
      flat
      hover
    >
      <v-card-title>
        {{ `${contact.firstName} ${contact.lastName}` }}
      </v-card-title>
      <v-card-subtitle>
        {{ contact.email }}
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="editContact" icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="removeContact" icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
    </v-card>
  </v-content>
</template>

<script>
import ContactCardDetail from '@/components/ContactCardDetail';

export default {
  name: 'ContactCard',
  components: {
    ContactCardDetail,
  },
  props: {
    contact: Object,
  },

  data: () => ({
    showDialog: false,
  }),

  methods: {
    editContact() {
      this.$emit('edit-contact', this.contact);
    },
    removeContact() {
      this.$emit('remove-contact', this.contact);
    },
  },
};
</script>
