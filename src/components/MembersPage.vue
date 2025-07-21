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
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.fullName }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.phoneNo }}</td>
          <td>{{ item.membership }}</td>
          <td>
            <v-chip :color="getMembershipColor(item.memberShipType)" dark>
              {{ item.memberShipType }}
            </v-chip>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'MembersPage',
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
      getMembershipColor(type) {
    const colorMap = {
      'PAID': '#4CAF50',  
      'NOT_PAID': '#F44336',
      'EXPIRED': '#FF9800'
    };
    return colorMap[type] ;
    },
    async fetchMembers() {
  try {
    const response = await axios.get('http://localhost:8086/api/members', {
      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      this.members = response.data.map(member => ({
        fullName: `${member.firstName || ''} ${member.lastName || ''}`.trim(),
        email: member.email || '',
        age: member.age || 0,
        amount: member.amount || 0,
        phoneNo: member.phoneNo || '',
        membership: member.membership || 0,
        memberShipType: member.memberShipType || 'UNKNOWN'
      }));
    }
  } catch (error) {
    console.error('Error fetching members:', error);
    this.errorMessage = "Failed to load members. Please refresh or try again later.";
  }
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