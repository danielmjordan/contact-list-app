<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title><strong>CONTACT</strong>LIST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="showForm = true" text>
        Add contact
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-dialog v-model="showForm" width="700" persistent>
        <Form
          @add-contact="addContact"
          @cancel-form="showForm = false"
          :populateData="selectedContact"
        />
      </v-dialog>

      <v-row>
        <v-col cols="12" class="mx-auto ma-3">
          <v-card width="600" class="mx-auto" flat>
            <v-text-field
              label="Search contacts"
              v-model="query"
              prepend-icon="mdi-magnify"
            />
          </v-card>
          <ContactCard
            v-for="contact in filteredContacts"
            :key="contact.id"
            @edit-contact="editContact"
            @remove-contact="removeContact"
            @view-contact="viewContactDetails"
            :contact="contact"
          />
        </v-col>
      </v-row>

      <v-dialog v-model="showDialog" width="700">
        <ContactCardDetail
          @close-dialog="showDialog = false"
          @edit-contact="editContact"
          :contact="selectedContact"
        />
      </v-dialog>

      <v-snackbar v-model="snackbar" :timeout="timeout" bottom left>
        {{ message }}
        <v-btn @click="snackbar = false" color="blue" text>
          Close
        </v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import ContactCard from '@/components/ContactCard';
import ContactCardDetail from '@/components/ContactCardDetail';
import Form from '@/components/Form';
import sampleData from '@/data/sampleData.js';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    ContactCard,
    ContactCardDetail,
    Form,
  },

  data: () => ({
    selectedContact: null,
    message: '',
    query: '',
    showForm: false,
    showDialog: false,
    snackbar: false,
    timeout: 2500,
  }),

  methods: {
    addContact(contact) {
      this.showForm = false;
      this.message = `${contact.firstName} has successfully been added to your contacts`;
      this.snackbar = true;
    },

    editContact(contact) {
      this.showForm = true;
      this.selectedContact = contact;
      this.showDialog = false;
    },

    removeContact(contact) {
      this.message = `${contact.firstName} has been removed from your contacts`;
      this.snackbar = true;
    },

    viewContactDetails(contact) {
      this.selectedContact = contact;
      this.showDialog = true;
    },
  },

  computed: {
    ...mapState(['contacts']),
    filteredContacts() {
      const formattedQuery = this.query.toLowerCase();
      return this.contacts.filter(contact => {
        return (
          contact.company.toLowerCase().match(formattedQuery) ||
          `${contact.firstName} ${contact.lastName}`
            .toLowerCase()
            .match(formattedQuery)
        );
      });
    },
  },
};
</script>
