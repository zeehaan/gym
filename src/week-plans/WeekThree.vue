<<<<<<< HEAD
<!-- src/components/Home.vue -->
<template>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="fs-background-colour">
      <v-timeline-item      
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card height="140">
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/day-nine" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-9
  </v-btn>
</router-link>
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <v-icon size="30">
                  mdi-calendar-text
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="amber lighten-1"
        fill-dot
        left
        small
      >
        <v-card height="140">
          <v-card-title class="amber lighten-1 justify-end">
            <v-icon
              dark
              size="5"
            >
              mdi-home-outline
            </v-icon>
          </v-card-title>
          <v-icon size="30">
                  mdi-calendar-text
                </v-icon>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
               <!-- -- -->
              </v-col>
              <v-col
                cols="0"
                md="10"
                style="margin-top: -30px;"
              >
              <router-link to="/day-ten" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-10
  </v-btn>
</router-link>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card height="140">
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/day-eleven" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-11
  </v-btn>
</router-link>
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <v-icon size="5">
                  mdi-calendar-text
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="amber lighten-1"
        fill-dot
        left
        small
      >
        <v-card height="140">
          <v-card-title class="amber lighten-1 justify-end">
            <v-icon
              dark
              size="30"
            >
              mdi-home-outline
            </v-icon>
          </v-card-title>
          <v-icon size="30">
                  mdi-calendar-text
                </v-icon>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
               
              </v-col>
              <v-col
                cols="0"
                md="10"
               style="margin-top: -30px;"
              >
              <router-link to="/day-twelve" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-12
  </v-btn>
</router-link>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

    </v-timeline>
  </template>
  
  <script>
  export default {
    name : 'WeekThree',
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-3',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>

<style scoped>
.hide-circle{
  display: none;
}

.text-white {
  color: white;
}
.fs-background-colour{
  background-color: aliceblue;
=======
<template>
  <div class="fullscreen-wrapper">
    <v-timeline 
      :dense="$vuetify.breakpoint.smAndDown" 
      align-top
      class="compact-timeline"
    >
      <v-timeline-item
        v-for="(day, index) in days"
        :key="index"
        :color="day.color"
        fill-dot
        large
      >
        <router-link :to="`/day-${day.name}`" class="timeline-card-link">
          <v-card class="timeline-card" flat>
            <div class="image-wrapper">
              <v-img
                :src="require(`../pictures/Days/${day.image}`)"
                :lazy-src="require(`../pictures/Days/${day.image}`)"
                cover
                gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
                class="timeline-image"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                  </v-row>
                </template>
                
                <v-card-title class="card-title pa-2">
                  <v-icon v-if="day.position === 'right'" color="white" class="mr-1">mdi-magnify</v-icon>
                  <v-spacer></v-spacer>
                  <v-icon color="white">{{ day.position === 'right' ? 'mdi-calendar-text' : 'mdi-home-outline' }}</v-icon>
                </v-card-title>
              </v-img>
            </div>
          </v-card>
        </router-link>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'WeekThree',
  data: () => ({
    days: [
      { 
        name: 'nine', 
        position: 'right',
        color: 'deep-purple lighten-1',
        image: 'day9.png' 
      },
      { 
        name: 'ten', 
        position: 'left',
        color: 'amber darken-1',
        image: 'day10.png' 
      },
      { 
        name: 'eleven', 
        position: 'right',
        color: 'deep-purple lighten-1',
        image: 'day11.png' 
      },
      { 
        name: 'twelve', 
        position: 'left',
        color: 'amber darken-1',
        image: 'day12.png' 
      }
    ]
  })
}
</script>

<style scoped>
.fullscreen-wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f5f7fa;
}

.compact-timeline {
  height: 100vh;
  padding: 0;
  margin: 0;
}

.v-timeline::before {
  height: calc(100% - 80px) !important;
  top: 40px !important;
}

.timeline-card-link {
  text-decoration: none;
  display: block;
  height: 100%;
  margin: 0 -8px;
}

.timeline-card {
  height: 18vh;
  min-height: 120px;
  border-radius: 0 !important;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 4px 0;
}

.timeline-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.timeline-image {
  height: 100%;
  width: 100%;
  transition: transform 0.4s ease;
}

.timeline-card:hover .timeline-image {
  transform: scale(1.04);
}

.card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 8px;
  z-index: 2;
}

.v-timeline-item {
  padding: 4px 0;
}

.v-timeline-item__body {
  padding-bottom: 8px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .timeline-card {
    height: 16vh;
    min-height: 100px;
  }
  
  .v-timeline::before {
    height: calc(100% - 70px) !important;
    top: 35px !important;
  }
}

@media (max-width: 600px) {
  .timeline-card {
    height: 14vh;
    min-height: 80px;
  }
  
  .card-title {
    padding: 2px 4px;
  }
  
  .card-title .v-icon {
    font-size: 1.2rem !important;
  }
  
  .v-timeline::before {
    height: calc(100% - 60px) !important;
    top: 30px !important;
  }
  
  .v-timeline-item__dot {
    height: 20px !important;
    width: 20px !important;
  }
>>>>>>> main
}
</style>