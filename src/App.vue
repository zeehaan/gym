<template>
  <div data-app>
    <v-card>
    <v-tabs  >
    <v-tab  >      <router-link to="/" style="display: contents; width: 100%; height: 100%;">
        Home
      </router-link>    </v-tab>
      <v-tab>      <router-link to="/about" style="display: contents; width: 100%; height: 100%;">
        about-us
      </router-link>    </v-tab>
    <v-tab>      <router-link to="/weekly-schedule" style="display: contents; width: 100%; height: 100%;">
        weekly schedules
      </router-link>    </v-tab>  
      <v-tab>      <router-link to="/gallery" style="display: contents; width: 100%; height: 100%;">
        Gallery
      </router-link>    </v-tab>
      <!-- <v-tab>      <router-link to="/members" style="display: contents; width: 100%; height: 100%;">
        Members
      </router-link>    </v-tab> 
       <v-tab>      <router-link to="/chatbot" style="display: contents; width: 100%; height: 100%;">
        Chat-Bot
      </router-link>    </v-tab>  -->
      <v-tab>      <router-link to="/contact" style="display: contents; width: 100%; height: 100%;">
       Contact Us
      </router-link>    </v-tab>  

    <!-- <v-tab><router-link target="_blank" to="/about">About</router-link></v-tab> -->
    <!-- <v-tab><router-link to="/about">about-us</router-link></v-tab> -->
    <!-- <v-tab><router-link to="/vue-Practice"> Workouts</router-link></v-tab> -->
    <!-- <v-tab><router-link to="/weekly-schedule"> Weekly Schedules</router-link></v-tab> -->
    </v-tabs> 
</v-card>   
    <router-view></router-view>    
    <!-- <HelloWorld/>    -->
    <!-- <router-link target="_blank" to="/vuex-Practice"> Vue x practice</router-link>  -->    
    </div>   
    </template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
