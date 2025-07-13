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
              <router-link to="/day-twenty-five" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-25
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
              <router-link to="/day-twenty-six" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-26
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
              <router-link to="/day-twenty-seven" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-27
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
              <router-link to="/day-twenty-eight" style="text-decoration: none;">
  <v-btn color="blue" dark>
    Day-28
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
    name : 'WeekSeven',
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