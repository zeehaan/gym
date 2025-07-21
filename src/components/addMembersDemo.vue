<template>
  <v-app>
    <v-container>
      <!-- Header Section -->
      <v-row class="header-section text-center py-8">
        <v-col>
          <h1 class="title mb-4">Welcome to Our Website</h1>
          <p class="subtitle">Your journey to fitness starts here!</p>
        </v-col>
      </v-row>

      <!-- About Us Section -->
      <v-row id="about-us" class="section py-12">
        <v-col cols="12" class="text-center mb-6">
          <h2 class="section-title">About Us</h2>
        </v-col>
        <v-col cols="12" md="8" class="mx-auto text-center animated fade-in">
          <p class="text-body">
            We are dedicated to helping you achieve your fitness goals. Our expert team offers personalized training,
            top-notch guidance, and access to cutting-edge equipment to make your fitness journey a success.
          </p>
        </v-col>
      </v-row>

      <!-- What We Offer Section -->
      <v-row id="what-we-offer" class="section py-12">
        <v-col cols="12" class="text-center mb-6">
          <h2 class="section-title">What We Offer</h2>
        </v-col>
        <v-row>
          <v-col
            v-for="(item, index) in offerings"
            :key="index"
            cols="12"
            md="4"
            class="animated fade-in-up"
          >
            <v-card outlined class="hover-card">
              <v-img :src="item.image" height="200px" class="rounded-top"></v-img>
              <v-card-text class="text-center py-4">
                <p class="offer-text">{{ item.text }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-row>

      <!-- Pictures Section -->
      <v-row id="pictures" class="section py-12">
        <v-col cols="12" class="text-center mb-6">
          <h2 class="section-title">Pictures</h2>
        </v-col>
        <v-row>
          <v-col
            v-for="(picture, index) in pictures"
            :key="index"
            cols="12"
            md="4"
            class="text-center animated fade-in-up"
          >
            <v-img :src="picture" height="200px" class="rounded my-4"></v-img>
          </v-col>
        </v-row>
      </v-row>

      <!-- Videos Section -->
      <v-row id="videos" class="section py-12">
        <v-col cols="12" class="text-center mb-6">
          <h2 class="section-title">Videos</h2>
        </v-col>
        <v-row>
          <v-col
            v-for="(video, index) in videos"
            :key="index"
            cols="12"
            md="6"
            class="animated fade-in"
          >
            <video controls class="rounded video-element">
              <source :src="video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </v-col>
        </v-row>
      </v-row>

      <!-- Contact Us Section -->
      <v-row id="contact-us" class="section py-12">
        <v-col cols="12" class="text-center mb-6">
          <h2 class="section-title">Contact Us</h2>
        </v-col>
        <v-col cols="12" md="6" class="mx-auto animated fade-in">
          <v-form>
            <v-text-field label="Your Name" outlined></v-text-field>
            <v-text-field label="Your Email" outlined></v-text-field>
            <v-textarea label="Your Message" outlined></v-textarea>
            <v-btn color="primary" class="mt-4">Send Message</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      offerings: [
        {
          image: "https://via.placeholder.com/400x300?text=Workout+Plans",
          text: "Personalized workout plans tailored to your needs.",
        },
        {
          image: "https://via.placeholder.com/400x300?text=Expert+Guidance",
          text: "Expert trainers to guide you every step of the way.",
        },
        {
          image: "https://via.placeholder.com/400x300?text=Modern+Equipment",
          text: "State-of-the-art gym equipment for all your fitness goals.",
        },
      ],
      pictures: [
        "https://via.placeholder.com/400x300?text=Picture+1",
        "https://via.placeholder.com/400x300?text=Picture+2",
        "https://via.placeholder.com/400x300?text=Picture+3",
      ],
      videos: [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/movie.mp4",
      ],
    };
  },
};
</script>

<style>
/* Section Styling */
.section {
  border-bottom: 1px solid #eee;
  padding-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.text-body {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

/* Animations */
.animated {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-in-out;
}

.animated.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.animated.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Card Hover */
.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Header Section */
.header-section {
  background: linear-gradient(135deg, #6b63ff, #a89efb);
  color: white;
}

.title {
  font-size: 3rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 1rem;
}

/* Video Styling */
.video-element {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}

/* Misc */
.rounded {
  border-radius: 10px;
}

.rounded-top {
  border-radius: 10px 10px 0 0;
}
</style>
