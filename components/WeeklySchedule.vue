<!-- src/components/Home.vue -->
<template >
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="fs-background-colour">    
      <v-timeline-item
  color="purple lighten-1"
  fill-dot
  right
>
  <router-link to="/daily-schedule" style="text-decoration: none;">
    <v-card>
      <v-img 
        src="../pictures/gym-pic1.jpg" 
        alt="Description of image"        
        max-height="200px"
        style="object-fit: contain; width: 100%; height: auto; gradient:30%"
      >
      <v-hover></v-hover>
        <v-card-title class="purple lighten-2">
          <!-- <v-icon
            dark
            size="30"
            class="mr-4"
          >
            mdi-magnify
          </v-icon> -->
          <h2 class="week-text">
            Week-1
          </h2>
        </v-card-title>         
        <v-container>
          <v-row>
            <v-col
              cols="8"
              md="10"
            >
              <!-- You can add a button or any other content here -->
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <!-- <v-icon size="30" class="text-white">
                mdi-calendar-text
              </v-icon> -->
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-card>
  </router-link>
</v-timeline-item>   
  
     <v-hover>
      <v-timeline-item
        color="amber lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic2.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="week-text">
              Week-2
            </h2>
            <!-- <v-icon
              dark
              size="30"
            >
              mdi-home-outline
            </v-icon> -->
          </v-card-title>
          <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
               <!-- -- -->
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
              <!-- <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Bisceps and Shoulders
        </v-btn> -->
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>
     </v-hover>

      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic3.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="purple lighten-2">
            <!-- <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon> -->
            <h2 class="week-text">
               Week-3
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/chest-workouts" style="text-decoration: none;">
                   <!-- <v-btn color="blue" dark>
    Chest Day
  </v-btn> -->
</router-link>
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic4.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="week-text">
             Week-4
            </h2>
            <!-- <v-icon
              dark
              size="30"
            >
              mdi-account-multiple-outline
            </v-icon> -->
          </v-card-title>
          <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
          <v-container>
            <v-row>
              <v-col
                class="hidden-sm-and-down"
                md="2"
              >
              </v-col>
              <v-col
                cols="12"
                md="10"
              >
              <!-- <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        > Legs and Triceps </v-btn> -->
                
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic5.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="purple lighten-2">
            <!-- <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon> -->
            <h2 class="week-text">
              Week-5
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <!-- <router-link to="/chest-workouts" style="text-decoration: none;"> -->
                   <!-- <v-btn color="blue" dark>
    Chest Day
  </v-btn> -->
<!-- </router-link> -->
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="red lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic6.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="week-text">
             Week-6
            </h2>
            <!-- <v-icon
              dark
              size="30"
            >
              mdi-account-multiple-outline
            </v-icon> -->
          </v-card-title>
          <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
          <v-container>
            <v-row>
              <v-col
                class="hidden-sm-and-down"
                md="2"
              >
              </v-col>
              <v-col
                cols="12"
                md="10"
              >
              <!-- <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        > Legs and Triceps </v-btn> -->
                
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>
  
      <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic7.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="purple lighten-2">
            <!-- <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon> -->
            <h2 class="week-text">
              Week-7
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <!-- <router-link to="/chest-workouts" style="text-decoration: none;"> -->
                   <!-- <v-btn color="blue" dark>
                                       Chest Day
                   </v-btn> -->
              <!-- </router-link> -->
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-1"
        fill-dot
        left
        small
      >
        <v-card>
          <v-img 
        src="../pictures/gym-pic8.jpg" 
        alt="Description of image"        
        max-height="200px"
         style="object-fit: contain; width: 100%; height: auto;"
      >
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="text-white">
             Week-8
            </h2>
            <!-- <v-icon
              dark
              size="30"
            >
              mdi-account-multiple-outline
            </v-icon> -->
          </v-card-title>
          <!-- <v-icon size="30" class="text-white">
                  mdi-calendar-text
                </v-icon> -->
          <v-container>
            <v-row>
              <v-col
                class="hidden-sm-and-down"
                md="2"
              >
              </v-col>
              <v-col
                cols="12"
                md="10"
              >
              <!-- <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        > Legs and Triceps </v-btn> -->
                
              </v-col>
            </v-row>
          </v-container>
        </v-img>
        </v-card>
      </v-timeline-item>

    </v-timeline>    
  </template>
  
  <script>
  export default {
    name : 'VuePractice',
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
.week-text {
  color: white;
  text-align: justify;
}
.fs-background-colour{
  background-color: white;
}
</style>