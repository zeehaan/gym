<template>
  <div v-if="visible" class="notification" @click="close">
    <p>{{ 'zdfxbnadfb' }}</p>
  </div>
</template>

<script>
export default {
  name: 'NotificationPage',
  props: ['message'],
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
    }, 3000); // Automatically close after 3 seconds
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #2583FD;
  color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: opacity 0.5s;
}
</style>