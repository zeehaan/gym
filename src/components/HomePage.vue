<template>
  <div class="page-container">    
     <v-img 
        src="../pictures/Pic/pic8.jpg" 
        alt="Description of image"
        class="full-page-image">
    </v-img> 
    <!-- <v-carousel hide-delimiters :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>  -->
    
    <div class="content">
       <!-- <v-carousel hide-delimiters :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>  -->
      <h1 class="head-title">Mohammed's Gym</h1>
      <h1 class="main-title">Welcome to Your Fitness Journey</h1>
      <p class="description">
        Discover the best workouts tailored for you. Join us in achieving your fitness goals!
      </p>
      <v-btn class="explore-button" color="purple" @click="navigateToWorkouts">Explore Workouts</v-btn>
    </div>

   

    <v-footer>
      <div class="footer-content">
        ©2024 All Rights Reserved - Website Proudly Created & Maintained by WEB WORLD, MYSORE. +91 9379151845.
      </div>
    </v-footer>
  </div>
</template>

<style scoped>
.page-container {
  position: fixed;
  height: 100vh; 
  width: 100vw;  
  overflow: hidden; 
}

.full-page-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  border-radius: 10px;
  margin: 50px auto;
  max-width: 600px; /* Constrain width for better readability */
}

.main-title {
  font-size: 36px;
  margin-bottom: 15px;
  font-weight: bold;
}

.description {
  font-size: 18px;
  margin-bottom: 20px;
}

.explore-button {
  font-size: 16px;
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: #5e35b1; 
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  color: white; 
  padding: 8px 0;
  text-align: center;
   z-index: 1; 
}

.footer-content {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  color: white; 
  padding: 8px 0; 
  text-align: center;
   z-index: 1; 
  font-size: 14px;
}

.head-title{
  font-size: 20px;
  font-weight: bolder;
}
</style>

<script>
export default {
  name: 'Home-Page',
  methods: {
    navigateToWorkouts() {
      this.$router.push('/weekly-schedule'); 
    }
  },
  data() {
    return {
      items:[
          {
          src: require('../pictures/Pic/pic8.jpg'),
          },
          {
            src: require('../pictures/Pic/pic1.jpg'),
          },
          {
            src: require('../pictures/Pic/pic3.jpg'),
          },
          {
            src: require('../pictures/Pic/pic4.jpg'),
          },
          {
            src: require('../pictures/Pic/pic5.jpg'),
          },
      ],
    }
  }
};
</script>