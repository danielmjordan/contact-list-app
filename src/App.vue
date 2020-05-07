<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title @click="showForm = false"
        ><strong>CONTACT</strong>LIST</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn @click="showForm = !showForm" text>
        {{ showForm ? 'View contacts' : 'Add contact' }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-row v-if="showForm">
        <v-col cols="12" class="mx-auto">
          <Form @add-contact="addContact" @cancel-form="showForm = false" />
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12" class="mx-auto ma-3">
          <v-card width="600" class="mx-auto" flat>
            <v-text-field
              label="Search By Last Name"
              v-model="query"
              prepend-icon="mdi-magnify"
            />
          </v-card>
          <ContactCard
            v-for="contact in filteredContacts"
            :key="contact.id"
            @remove-contact="removeContact"
            @view-contact="viewContactDetails"
            :contact="contact"
          />
        </v-col>
      </v-row>

      <v-dialog v-model="showDialog" width="700">
        <ContactCardDetail
          @close-dialog="showDialog = false"
          :contact="currentContact"
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

export default {
  name: 'App',
  components: {
    ContactCard,
    ContactCardDetail,
    Form,
  },

  data: () => ({
    contacts: sampleData,
    currentContact: null,
    query: '',
    message: '',
    showForm: false,
    showDialog: false,
    snackbar: false,
    timeout: 2500,
  }),

  methods: {
    addContact($event) {
      this.contacts.unshift($event);
      this.showForm = false;
      this.message = `${$event.firstName} has successfully been added to your contacts`;
      this.snackbar = true;
    },

    removeContact($event) {
      this.contacts = this.contacts.filter(contact => contact.id !== $event.id);
      this.message = `${$event.firstName} has been removed from your contacts`;
      this.snackbar = true;
    },

    viewContactDetails(contact) {
      this.currentContact = contact;
      this.showDialog = true;
    },
  },

  computed: {
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
