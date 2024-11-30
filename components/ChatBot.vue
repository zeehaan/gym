<template>
  <div>
    <!-- The button that triggers the chat box -->
    <v-btn id="button-style" @click="toggleChatBox">
      <v-icon dark>mdi-android</v-icon>
    </v-btn>

    <transition name="fade">
      <div class="chat-container" :style="chatBoxStyle">
        <div>
          <button @click="showConfirmPopup" class="x-button">
            <span class="mdi mdi-window-close"></span>
          </button>
          <button @click="minimizeChatBox" class="min-button">
            <span class="mdi mdi-window-minimize"></span>
          </button>
        </div>

        <div class="chat-header">
          <h3>Chatbot</h3>
        </div>
        <div class="chat-box" ref="chatBox">
          <div v-for="message in messages" :key="message.id" class="chat-message" :class="message.sender">
            <div class="message-content">{{ message.text }}</div>
          </div>
          <!-- Loading indicator -->
          <div v-if="isLoading" class="loading-message">
          <div class="loader"></div> 

            <!-- <div class="message-content">Typing...</div> -->
          </div>
        </div>

        <div class="chat-input">
          <input v-model="userMessage" @keyup="handleTyping" type="text" placeholder="Type a message..." />
          <span 
            id="send-button" 
            @click="sendMessage" 
            class="mdi mdi-send"
            :class="{'show-send-button': isTyping}"
          ></span>
        </div>

        <transition name="fade">
          <div v-if="isConfirmPopupVisible" class="confirm-popup">
            <div class="popup-content">
              <p>Are you sure you want to close the chat?</p>
              <button @click="closeChatBox" class="yes-button">Yes</button>
              <button @click="hideConfirmPopup" class="no-button">No</button>
            </div>
          </div>
        </transition>

      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios for API requests

export default {
  data() {
    return {
      isChatBoxVisible: false, 
      isConfirmPopupVisible: false, 
      isTyping: false, // Tracks whether the user is typing
      isLoading: false, // Tracks whether the bot is processing the message
      chatBoxStyle: {
        position: 'absolute',
        transform: 'scale(0)',
        bottom: '-500px', 
        right: '10px', 
        transition: 'transform 0.5s ease, bottom 0.5s ease', 
      },
      userMessage: '',
      messages: [
        { id: 1, sender: "bot", text: "Hello! How can I assist you today?" }
      ],
    };
  },
  methods: {
    toggleChatBox() {
      this.isChatBoxVisible = !this.isChatBoxVisible;

      if (this.isChatBoxVisible) {
        this.$nextTick(() => {
          const button = document.getElementById('button-style');
          const rect = button.getBoundingClientRect();
          this.chatBoxStyle.bottom = `-${rect.height + 20}px`; 
          setTimeout(() => {
            this.chatBoxStyle.bottom = '10px'; 
            this.chatBoxStyle.transform = 'scale(1)'; 
          }, 10);
        });
      } else {
        this.chatBoxStyle.transform = 'scale(0)';
        this.chatBoxStyle.bottom = `-${document.getElementById('button-style').offsetHeight + 20}px`;
      }
    },

    showConfirmPopup() {
      this.isConfirmPopupVisible = true;
    },

    hideConfirmPopup() {
      this.isConfirmPopupVisible = false;
    },

    closeChatBox() {
      this.isChatBoxVisible = false;
      this.isConfirmPopupVisible = false;
    },

    minimizeChatBox() {
      this.isChatBoxVisible = false;
    },

    handleTyping() {
      // Show the send button when user starts typing
      if (this.userMessage.trim() !== "") {
        this.isTyping = true;
      } else {
        this.isTyping = false;
      }
    },

    async sendMessage () {
      if (this.userMessage.trim() === "") return;

      this.messages.push({
        id: Date.now(),
        sender: "user", 
        text: this.userMessage,
      });

      this.$nextTick(() => {
        const chatBox = this.$refs.chatBox;
        chatBox.scrollTop = chatBox.scrollHeight;
      });

      this.isLoading = true; // Set loading state to true

      try {
        const response = await axios.post('http://192.168.77.69:8000/query/', {
          query: this.userMessage,
        });

        const botMessage = response.data.answer || "Sorry, I didn't understand that.";

        setTimeout(() => {
          this.messages.push({
            id: Date.now(),
            sender: "bot", 
            text: botMessage,
          });

          this.$nextTick(() => {
            const chatBox = this.$refs.chatBox;
            chatBox.scrollTop = chatBox.scrollHeight;
          });
          this.isLoading = false; // Reset loading state after receiving response
        }, 1000);
      } catch (error) {
        console.error("Error fetching response from API", error);
        this.messages.push({
          id: Date.now(),
          sender: "bot",
          text: "Sorry, there was an error. Please try again later.",
        });
        this.isLoading = false; // Reset loading state on error
      }

      this.userMessage = "";
      this.isTyping = false; // Hide send button after sending the message
    }
  }
};
</script>

<style scoped>
#button-style {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: #2583FD;
}

#send-button {
  position: fixed;
  bottom: 19px;
  right: 11px;
  color: #2583FD;
  cursor: pointer;
  visibility: hidden; /* Initially hidden */
  opacity: 0;
  transition: opacity 0.5s ease, visibility 0s 0.5s; /* Animation for smooth appearance */
}

#send-button.show-send-button {
  visibility: visible;
  opacity: 1; /* Show the button */
  transition: opacity 0.5s ease, visibility 0s 0s; /* Instant visibility on animation */
}

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

/* .chat-container {
  background-color: white;
  border-radius: 20px; 
  width: 400px;
  height: 500px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  flex-direction: column;
  z-index: 3000;
}
  
*/


.chat-header {
  background-color: #2583FD;
  color: white;
  padding : 10px;
  text-align: center;
}

.chat-box {
  flex: 1;
  padding: 10px;
  background-color: #fafafa;
  overflow-y: auto;
  display: flex;
  flex-direction: column; 
}

.chat-message {
  margin: 5px 0;
  max-width: 80%;
  padding: 10px 15px; 
  border-radius: 20px;
  position: relative;
  font-size: 16px; 
  line-height: 1.4;
  overflow-wrap: break-word;  /* Ensures long words break and fit inside */
  display: inline-flex;  /* Allows content to expand naturally */
  flex-wrap: wrap;  /* Allow text to wrap within the container */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  word-break: break-word;  /* Prevents overflow of long words */
  white-space: pre-wrap;  /* Preserve spaces and line breaks */
}

.chat-message.user {
  background-color: #007aff; 
  color: white; 
  align-self: flex-end;
}

.chat-message.bot {
  background-color: #f0f0f0; 
  color: black; 
  align-self: flex-start;
}

/* .chat-message {
  margin: 5px 0;
  max-width: 80%;
  padding: 10px 15px; 
  border-radius: 20px;
  position: relative;
  font-size: 16px; 
  line-height: 1.4; 
  overflow-y: auto;
  display: flex;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.chat-message.user {
  background-color: #007aff; 
  color: white; 
  align-self: flex-end;
}

.chat-message.bot {
  background-color: #f0f0f0; 
  color: black; 
  align-self: flex-start;
} */


.chat-input {
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  margin-right: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

.chat-input button {
  padding: 8px 16px;
  background-color: #2583FD;
  color: white;
  border-radius: 20px;
  border: none;
}

.chat-input button:hover {
  background-color: #1a6bbd; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.x-button {
  font-size: 20px;
  position: absolute;
  right: 20px;
  top: 8px;
  color: white;
}

.min-button {
  font-size: 18px;
  position: absolute;
  right: 55px;
  top: 9px;
  color: white;
}

.min-button:hover {
  color: yellow;
}

.x-button:hover {
  color: red;
}

.confirm-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: popupIn 1s ease-out;
}

.popup-content p {
  margin: 0;
  padding-bottom: 15px;
}

.yes-button, .no-button {
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  background-color: #2583FD;
  color: white;
  border: none;
  cursor: pointer;
}

.yes-button:hover, .no-button:hover {
  background-color: #1a6bbd;
}

@keyframes popupIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
