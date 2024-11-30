<!-- src/components/Home.vue -->
<template>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="fs-background-colour">
      <v-timeline-item      
        color="purple lighten-2"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Day-1
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/chest-workouts" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Chest And Bicep's Day
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
        <v-card>
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="text-h4 mr-4 white--text font-weight-light">
              Day-2
            </h2>
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
               <!-- -- -->
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
              <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Bisceps and Shoulders
        </v-btn>
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
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Day-3
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/chest-workouts" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Back And Shoulder Day
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
        <v-card>
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="text-h4 mr-4 white--text font-weight-light">
              Day-4
            </h2>
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
               <!-- -- -->
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
              <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Legs and Shoulders
        </v-btn>
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
        <v-card>
          <v-card-title class="purple lighten-2">
            <v-icon
              dark
              size="30"
              class="mr-4"
            >
              mdi-magnify
            </v-icon>
            <h2 class="text-h4 white--text font-weight-light">
              Day-5
            </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="10"
                md="10"
              >
              <router-link to="/chest-workouts" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Shoulder And tricep's Day
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
    </v-timeline>
  </template>
  
  <script>
  export default {
    name : 'DailySchedule',
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
}
</style>