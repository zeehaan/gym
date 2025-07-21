<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" class="d-flex child-flex" cols="4">
      <v-img :src="item.src" aspect-ratio="2" class="grey lighten-2">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      items: [
        { src: require('../pictures/Lib/lib1.jpg') },
        { src: require('../pictures/Lib/lib2.jpg') },
        { src: require('../pictures/Lib/lib3.jpg') },
        { src: require('../pictures/Lib/lib4.jpg') },
        { src: require('../pictures/Lib/lib5.jpg') },
        { src: require('../pictures/Lib/lib6.jpg') },
        { src: require('../pictures/Lib/lib7.jpg') },
        { src: require('../pictures/Lib/lib8.jpg') },
        { src: require('../pictures/Lib/lib9.jpg') },
      ],
    };
  },
};
</script>
