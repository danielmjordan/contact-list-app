<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>CONTACT<strong>LIST</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="showForm = !showForm" text>
        Add new contact
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-row v-if="showForm">
        <v-col cols="12">
          <Form />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" class="mx-auto ma-3">
          <ContactCard
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
            @remove-contact="removeContact"
          />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import ContactCard from '@/components/ContactCard';
import ContactDetail from '@/components/ContactDetail';
import Form from '@/components/Form';
import sampleData from '@/data/sampleData.js';

export default {
  name: 'App',
  components: {
    ContactCard,
    Form,
  },

  data: () => ({
    contacts: sampleData,
    showForm: false,
  }),

  methods: {
    removeContact($event) {
      this.contacts = this.contacts.filter(contact => contact.id !== $event.id);
    },
  },
};
</script>
