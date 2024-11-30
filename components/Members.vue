<template>
  <div>
    <!-- Button to navigate to add-members -->
    <router-link to="/add-members" style="text-decoration: none;">
      <v-btn class="button-style">Add Members</v-btn>
    </router-link>
    
    <!-- Data Table displaying member information -->
    <v-data-table
      :headers="headers"
      :items="members"  
      class="elevation-1"
    >
      <template v-slot:item.memberShipType="{ item }">
        <v-chip :color="getColor(item.memberShipType)" dark>
          {{ item.memberShipType }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';  // Import Axios for API requests

export default {
  name: 'Members',
  data() {
    return {
      headers: [
        { text: 'Name', align: 'start', sortable: false, value: 'fullName' },
        { text: 'Email', value: 'email' },
        { text: 'Age', value: 'age' },
        { text: 'Amount', value: 'amount' },
        { text: 'Phone no', value: 'phoneNo' },
        { text: 'Membership (m)', value: 'membership' },
        { text: 'Membership Type', value: 'memberShipType' },
      ],
      members: []  
    };
  },
  methods: {
    getColor(memberShipType) {
      if (memberShipType === 'PAID') return 'orange'; 
      else if (memberShipType === 'NOT_PAID') return 'red';
      return 'green';
    },
    fetchMembers() {
      // axios.get('http://localhost:8080/api/v1/members')
      //   .then(response => {
      //     this.members = response.data.map(member => ({
      //       fullName: `${member.firstName} ${member.lastName}`  
      //     }));
      //   })
      //   .catch(error => {
      //     console.error('Error fetching members:', error);
      //   });
      const url='http://localhost:8080/api/v1/members';
      axios.get(url)
          .then((response) => {
            if (response.status === 200 || response.status === 201 || response.status === 202) {
              return response.data;
            } else if (response.status === "(failed)") {
              this.errorMessage = "Service not available ! Please try later";
              throw new Error("Service Not Found !");
            } else {
              throw new Error("Could not login !");
            }
          })
          .then((data) => {
            console.log(data);
            
          })
          .catch((error) => {
            
          });
    }
  },
  mounted() {
    this.fetchMembers();  
  }
};
</script>

<style scoped>
.button-style {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Elevation effect */
  border: 1px solid transparent; /* Border for outlined effect */
  border-radius: 8px; /* Rounded corners */
  padding: 10px 20px; /* Padding */
  cursor: pointer; /* Pointer on hover */
  background-color: white; /* Button background */
  color: aqua; /* Text color */
  display: flex;
  align-items: center; /* Centering content vertically */
  justify-content: center; /* Centering content horizontally */
  font-size: 16px; /* Optional: Font size */
}

.button-style:hover {
  background-color: grey; /* Hover effect */
  transition: background-color 0.3s ease; /* Smooth transition */
}
</style>
