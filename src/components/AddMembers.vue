<template>
  <v-form v-model="valid" @submit.prevent="submitForm">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="age" :rules="AgeRules" label="Age" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="amount" :rules="AmountRules" label="Amount" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="phoneNo" :rules="PhoneNoRule" label="Phone no" required></v-text-field>
        </v-col>

        <v-col>
          <v-text-field v-model="membership" :rules="membershipPeriodRules" label="Membership Period (m)"
            required></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="membershipTypes" v-model="selectedMembershipType" label="Membership Type" outlined
            :rules="[v => !!v || 'Membership type is required']" required item-text="text"
            item-value="value"></v-select>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-around">
        <v-btn class="save-button" @click="submitForm">
          Save
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import axios from 'axios';

Vue.use(Toast);

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  name: 'AddMembers',
  data: () => ({
    firstname: '',
    lastname: '',
    email: '',
    age: null,
    amount: null,
    phoneNo: '',
    membership: null,
    memberShipType: '',
    valid: false,
    selectedMembershipType: null,
    membershipTypes: [
      { text: 'PAID', value: 'PAID' },
      { text: 'NOT_PAID', value: 'NOT_PAID' },
      { text: 'EXPIRED', value: 'EXPIRED' }
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    AgeRules: [
      v => !!v || 'Age is required',
      v => (v <= 110 && v > 0) || 'Enter a valid age (1-110)',
    ],
    AmountRules: [
      v => !!v || 'Amount is required',
      v => (v <= 100000 && v >= 0) || 'Enter a valid amount (0-100000)',
    ],
    PhoneNoRule: [
      v => !!v || 'Phone Number is required',
      v => (v.length === 10 && /^\d+$/.test(v)) || 'Phone must be 10 digits',
    ],
    membershipPeriodRules: [
      v => !!v || 'Membership period is Required',
      v => (v > 0 && v <= 24) || 'Period must be between 1 and 24 months',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    async submitForm() {
      if (!this.valid) return;

      const memberData = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        age: this.age,
        amount: this.amount,
        phoneNo: this.phoneNo,
        membership: this.membership,
        memberShipType: this.selectedMembershipType,
      };

      try {
        const response = await apiClient.post('/members', memberData);
        console.log('Member saved successfully:', response.data);
        this.resetForm();
        this.$emit('member-added', response.data);

        this.$toast.success('Member added successfully!');
      } catch (error) {
        console.error('Error saving member:', error);

        message: (result && result.errors && result.errors[0] && result.errors[0].message) || 'Submission failed. Please try again.';

        

        this.$toast.error(errorMsg);
      }
    },

    resetForm() {
      if (this.$refs.form) {
        this.$refs.form.reset();
      }
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.age = null;
      this.amount = null;
      this.phoneNo = '';
      this.membership = null;
      this.selectedMembershipType = null;
    },
  },
}
</script>

<style>
.save-button {
  color: black;
  background-color: #FFA500;
}
</style>
