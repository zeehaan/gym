<template>
  <v-form v-model="valid" @submit.prevent="submitForm">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="age"
            :rules="AgeRules"
            label="Age"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="amount"
            :rules="AmountRules"
            label="Amount"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="phoneNo"
            :rules="PhoneNoRule"
            label="Phone no"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="membership"
            :rules="membershipPeriodRules"
            label="Membership Period (m)"
            required
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="membershipTypes"
            label="Membership Type"
            outlined
            :rules="paymentStatusRules"
            required
          ></v-select>
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
import axios from 'axios';

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
    membershipTypes:['Foo', 'Bar', 'Fizz', 'Buzz'],
    valid: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    AgeRules: [
      v => !!v || 'Age is required',
      v => (v <= 110) || 'Enter a valid age',
    ],
    AmountRules: [
      v => !!v || 'Amount is required',
      v => (v <= 100000) || 'Enter a valid amount',
    ],
    PhoneNoRule: [
      v => !!v || 'Phone Number is required',
      v => v.length <= 10 || 'Phone number must be less than 10 characters',
    ],
    membershipPeriodRules: [
      v => !!v || 'Membership period is Required',
      v => v.length <= 2 || 'Membership period must be within 1-2 years',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  
  methods: {
    async submitForm() {
      // Construct the JSON object to be sent to the API
      const memberData = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        age: this.age,
        amount: this.amount,
        phoneNo: this.phoneNo,
        membership: this.membership,
        memberShipType: this.memberShipType,
      };

      try {
        // Make the API call to save the member data
        const response = await axios.post('http://localhost:8080/api/v1/members', memberData);
        console.log('Member saved successfully:', response.data);
        this.resetForm();
      } catch (error) {
        console.error('Error saving member:', error);      
      }
    },

    resetForm() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.age = null;
      this.amount = null;
      this.phoneNo = '';
      this.membership = null;
      this.memberShipType = '';
      this.valid = false; 
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