<template>
    <div class="container">
        <div class="loader">Hi</div>
      <button class="button" @click="toggleSheet">Home</button>
      <h1>This is Vuetify!</h1>
      
      <transition name="pop">
        <div v-if="showSheet" class="sheet-container" :style="sheetStyle">
          <button @click="toggleSheet">Close</button>
          <h1>This is Sheetpage</h1>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        showSheet: false, // State to control the visibility of the sheet
        sheetStyle: {
          position: 'absolute',
          top: '0', // Default top position
          right: '0', // Default right position
          transform: 'scale(0)', // Initial scale
          transition: 'transform 0.5s ease, top 0.5s ease, right 0.5s ease', // Transition for scaling and position
        },
      };
    },
    methods: {
      toggleSheet() {
        this.showSheet = !this.showSheet;
        if (this.showSheet) {
          this.$nextTick(() => {
            const button = this.$el.querySelector('.button');
            const rect = button.getBoundingClientRect();
            
            // Set initial position to the button's position
            this.sheetStyle.top = `${rect.top}px`;
            this.sheetStyle.right = `${window.innerWidth - rect.left}px`; // Adjust for right position
  
            // Set final position and scale after a short delay
            setTimeout(() => {
              this.sheetStyle.top = `${rect.top - 200}px`; // Offset 200px from the button
              this.sheetStyle.right = `${window.innerWidth - rect.left - 100}px`; // Offset 100px from the button
              this.sheetStyle.transform = 'scale(1)'; // Scale to full size
            }, 10); // Delay the final position by 10ms to allow the animation to start
          });
        } else {
          // Reset position and scale when closing
          this.sheetStyle.top = '0';
          this.sheetStyle.right = '0';
          this.sheetStyle.transform = 'scale(0)'; // Scale back to 0
        }
      },
    },
  };
  </script>
  
  <style scoped>
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {    
  --r1: 154%;
  --r2: 68.5%;
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%; 
  background:
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
    radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%),
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
    white;
  background-size: 50.5% 220%;
  background-position: -100% 0%,0% 0%,100% 0%;
  background-repeat:no-repeat;
  animation: l9 2s infinite linear;
}
@keyframes l9 {
    33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
    66%  {background-position: -100%  66%,0%   66% ,100% 66% }
    100% {background-position:    0% 100%,100% 100%,200% 100%}
}

  .button {
    background-color: blue;
    color: white; /* Change text color to white for better contrast */
    border: none; /* Remove default border */
    padding: 10px 20px; /* Add padding for a better appearance */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  
  .container {
    margin: 0;
    height: 100vh; 
    display: fixed;
    justify-content: flex-end; 
    align-items: flex-end;
    position: relative; /* Make the container relative for absolute positioning of the sheet */
  }
  
  .sheet-container {
    background-color: white; /* Background color for the sheet */
    border: 1px solid #ccc; /* Border for the sheet */
    padding: 20px; /* Padding for the sheet */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
    transition: all 0.5s ease; /* Animation for pop-up effect */
  }
  
  .pop-enter-active, .pop-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .pop-enter, .pop-leave-to /* .pop-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: scale(0.9); /* Slightly scale down on enter/leave */
  }
  </style>