<!-- src/components/Home.vue -->
<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="fs-background-colour">
    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-one" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
            <v-img src="../pictures/Weeks/week1.jpg" alt="Description of image" max-height="200px"
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-1</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
                  
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-two" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week2.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-2</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
                  
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-three" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic10.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week3.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-3</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
                  
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-four" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week4.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-4</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
                  
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-five" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic10.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week5.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-5</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
                  
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-six" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week6.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-6</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
                  
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-seven" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic10.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week7.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-7</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-eight" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week8.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-8</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>
    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-nine" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
            <v-img src="../pictures/Weeks/week1.jpg" alt="Description of image" max-height="200px"
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-9</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-ten" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week10.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-10</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="purple lighten-1" fill-dot right small>
      <router-link to="/week-eleven" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic10.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week11.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="purple lighten-1 justify-end">
                <h2 class="week-text">Week-11</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <router-link to="/week-twelve" style="text-decoration: none;">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="week-card">
<<<<<<< HEAD
            <v-img src="../pictures/pic2.jpg" alt="Description of image" max-height="200px"
=======
            <v-img src="../pictures/Weeks/week12.jpg" alt="Description of image" max-height="200px"
>>>>>>> main
              style="object-fit: contain; width: 100%; height: auto;">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="week-text">Week-12</h2>
              </v-card-title>
            </v-img>

            <v-card-text class="pt-4">
              <v-row>
                <v-col cols="12" class="text-right">
<<<<<<< HEAD
                  <!-- Optional info or button -->
=======
>>>>>>> main
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-timeline-item>

  </v-timeline>
</template>

<script>
export default {
  name: 'VuePractice',
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
.fs-background-colour {
  background-color: white;
}

body>div.v-application--wrap>div.v-timeline>div.v-timeline-item>div.v-timeline-item__body>div:before {
  display: none;
}

.week-card {
  width: 100%;
  max-width: 550px;
  margin: 0px;
  transition: box-shadow 0.3s ease;
}

.week-overlay {
  justify-content: flex-end;
  height: 100%;
  align-items: flex-end;
  padding: 16px;
}

.week-text {
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  color: whitesmoke;
  text-align: right;
}
</style>