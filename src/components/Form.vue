<template v-slot:activator="{ on }">
  <v-card class="mx-auto" flat>
    <v-container class="pa-3">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-text-field
          v-model="form.firstName"
          :counter="20"
          :rules="nameRules"
          label="First name*"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.lastName"
          :counter="20"
          :rules="nameRules"
          label="Last name*"
          required
        ></v-text-field>

        <v-text-field
          v-model.number="form.phone"
          mask="phone"
          :rules="phoneRules"
          label="Phone number*"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          :rules="emailRules"
          label="Email*"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.company"
          :counter="20"
          :rules="companyRules"
          label="Company*"
        ></v-text-field>

        <v-textarea
          v-model="form.notes"
          :counter="500"
          :rules="notesRules"
          label="Notes*"
        ></v-textarea>
      </v-form>
      <small>*indicates required field</small>
    </v-container>
    <v-card-actions>
      <v-btn @click="cancel" color="error">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="submit" color="success">
        Add Contact
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { uuid } from '@/utils/utils';

export default {
  props: {
    populateData: {
      type: Object,
      default: () => {
        {
          empty: true;
        }
      },
    },
  },
  data: () => ({
    valid: false,
    form: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      notes: '',
    },
    nameRules: [
      value => !!value || 'Name is required',
      value =>
        (value && value.length <= 20) || 'Name must be less than 20 characters',
    ],
    phoneRules: [
      value => !!value || 'Phone number is required',
      value =>
        /^[2-9]\d{2}-\d{3}-\d{4}$/.test(value) ||
        'Please enter a valid phone number',
    ],
    emailRules: [
      value => !!value || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    companyRules: [
      value =>
        (value && value.length <= 20) ||
        'Company name must be less than 20 characters',
    ],
    notesRules: [
      value =>
        (value && value.length <= 500) ||
        'Notes must be less than 500 characters',
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const id = uuid();
        const { firstName, lastName, email, company, notes } = this.form;
        const contact = {
          id,
          firstName,
          lastName,
          email,
          company,
          notes,
        };
        this.$store.commit('ADD_CONTACT', contact);
        this.$emit('add-contact', contact);
        this.$refs.form.reset();
      }
    },
    cancel() {
      this.$refs.form.reset();
      this.$emit('cancel-form');
    },
  },

  // created() {
  //   if (!this.populateData.empty) {
  //     this.form = this.populateData;
  //   }
  // },
};
</script>
