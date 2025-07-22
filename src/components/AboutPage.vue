<template>


  <div class="about-us">
    <v-img :src="require('@/pictures/gym.jpg')" alt="Description of image" class="full-page-image">

      <h1 class="title">About Us</h1>
      <p class="intro">
        Welcome to <span class="gym-name">{{ gymName }}</span>!
      </p>
      <p class="description">
        At <span class="gym-name">{{ gymName }}</span>, we believe that fitness is not just about working out; it's a
        lifestyle. Our mission is to inspire and empower individuals to achieve their health and fitness goals in a
        supportive and motivating environment. Whether you are a beginner or a seasoned athlete, we have something for
        everyone!
      </p>

      <h2 class="section-title">Our Story</h2>
      <p class="story">
        Founded in {{ foundingYear }}, <span class="gym-name">{{ gymName }}</span> was born out of a passion for fitness
        and a desire to create a community where everyone feels welcome and supported. Our founders, {{ foundersNames
        }}, envisioned a place where individuals could come together to transform their lives through fitness, health,
        and wellness.
      </p>

      <h2 class="section-title">Our Facilities</h2>
      <ul class="facilities-list">
        <li>Cardio Machines: Treadmills, ellipticals, stationary bikes, and more to get your heart pumping.</li>
        <li>Strength Training Equipment: Free weights, resistance machines, and functional training areas to build
          muscle and strength.</li>
        <li>Group Fitness Classes: From yoga and Pilates to high-intensity interval training (HIIT) and cycling, we
          offer a diverse range of classes to keep you engaged and motivated.</li>
        <li>Personal Training: Our certified trainers are here to provide personalized guidance and support to help you
          reach your specific fitness goals.</li>
      </ul>

      <h2 class="section-title">Our Community</h2>
      <p class="community">
        At <span class="gym-name">{{ gymName }}</span>, we pride ourselves on fostering a strong sense of community. Our
        members come from all walks of life, and we celebrate the diversity that makes our gym unique. We encourage
        camaraderie, motivation, and support among our members, creating an environment where everyone feels at home.
      </p>

      <h2 class="section-title">Our Values</h2>
      <ul class="values-list">
        <li>Inclusivity: We welcome everyone, regardless of fitness level, age, or background.</li>
        <li>Empowerment: We strive to empower our members to take control of their health and fitness journeys.</li>
        <li>Wellness: We promote a holistic approach to health, focusing on physical, mental, and emotional well-being.
        </li>
      </ul>

      <h2 class="section-title">Join Us</h2>
      <p class="join-us">
        Are you ready to take the first step toward a healthier, happier you? Join us at <span class="gym-name">{{
          gymName }}</span> and become a part of our thriving community. Whether you’re looking to lose weight, build
        muscle, or simply stay active, we are here to support you every step of the way.
      </p>
      <p class="call-to-action">
        Visit us today for a tour of our facilities and a complimentary trial class. Let’s embark on this journey
        together!
      </p>

      <h2 class="section-title">Contact Us</h2>
      <p class="contact-info">
        For more information, please reach out to us at <span class="contact-number">{{ contactInfo }}</span> or visit
        our Contact Page.
      </p>
    </v-img>
  </div>
</template>

<style scoped>
/* .about-us {
  padding: 30px;
  font-family: 'Arial', sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.6;
  color: whitesmoke;
  background-color: #f9f9f9;
  border-radius: 10px;
} */
.about-us {
  height: calc(100vh - 64px);
  /* Assuming your header is 64px tall */
  overflow-y: auto;
  font-family: 'Arial', sans-serif;
}

.background-image {
  background-image: url('../pictures/aboutus.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100%;
  padding: 40px 20px;
}

.content {
  max-width: 900px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  /* Optional readability */
  padding: 30px;
  border-radius: 10px;
  color: whitesmoke;
}

h1.title {

  text-align: center;
  font-size: 2.5rem;
  color: whitesmoke;
  margin-bottom: 20px;
}

.gym-name {
  font-weight: bold;
  color: #e74c3c;
}

.intro,
.description,
.story,
.community,
.join-us,
.call-to-action,
.contact-info {
  font-size: 1.1rem;
  color: whitesmoke;
  margin-bottom: 20px;
}

h2.section-title {
  font-size: 1.8 rem;
  color: whitesmoke;
  margin-top: 30px;
  margin-bottom: 10px;
}

ul.facilities-list,
ul.values-list {
  margin-left: 20px;
  list-style-type: square;
  color: whitesmoke;
  padding-left: 10px;
}

li {
  margin-bottom: 10px;
}

ul.facilities-list li,
ul.values-list li {
  font-size: 1rem;
  line-height: 1.5;
}

.join-us,
.call-to-action {
  font-size: 1.2rem;
  color: whitesmoke;
}

.contact-number {
  font-weight: bold;
  color: #e74c3c;
}

.call-to-action {
  font-style: italic;
  color: whitesmoke;
  margin-bottom: 40px;
}

.about-us p {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      gymName: "Mohammed's Gym",
      foundingYear: '1997',
      foundersNames: 'Sameed & Zeeshan',
      contactInfo: '9379151845'
    };
  }
};
</script>