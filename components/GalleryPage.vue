<template style:position: fixed; background-colour:white;>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
        v-for="(item,i) in items"
      :key="i"
      :src="item.src"
          aspect-ratio="2"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </template>
<script>
export default {
    name:"GalleryPage",

data() {
    return {
      items:[
          {
          src: require('../pictures/slide1.jpg'),
          },
          {
            src: require('../pictures/slide2.jpg'),
          },
          {
            src: require('../pictures/slide3.jpg'),
          },
          {
            src: require('../pictures/slide4.jpg'),
          },
          {
            src: require('../pictures/slide5.jpg'),
          },
      ],
    }
  }
}
</script>