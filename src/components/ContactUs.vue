<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">Have questions about our gym or training programs? Send us a message!</p>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required>
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="form.subject" placeholder="What's this about?" required>
        </div>

        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us how we can help you..."
            required></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>

        <div v-if="submitStatus" class="status-message" :class="submitStatus.type">
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        const response = await fetch('https://formspree.io/f/mgvyjbgd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message
          })
        });

        const result = await response.json();

        if (response.ok) {
          this.submitStatus = {
            type: 'success',
            message: 'Thanks for your message! We\'ll get back to you soon.'
          };

          // Reset form
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        } else {
          // Handle Formspree-specific errors
          this.submitStatus = {
            type: 'error',
            message: result?.errors?.[0]?.message || 'Submission failed. Please try again.'
          };
        }
      } catch (error) {
        console.error('Failed to submit form:', error);
        this.submitStatus = {
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>


<style scoped>
<<<<<<< HEAD
/* Main Section Styling */
.contact-section {
  padding: 5rem 1rem;
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)),
=======
.contact-section {
  padding: 5rem 1rem;
  background-color: #0a0a0a;
  background-image: linear-gradient(rgba(230, 217, 217, 0.9), rgba(236, 231, 231, 0.9)),
>>>>>>> main
    url('https://images.unsplash.com/photo-1581009137042-c552e485697a');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 0.8s ease-out;
}

/* Typography */
.section-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #f94144;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Form Container */
.contact-form {
  background-color: rgba(20, 20, 20, 0.8);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

/* Form Elements */
.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #f94144;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #333;
  border-radius: 6px;
  background-color: rgba(30, 30, 30, 0.8);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #aaa;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f94144;
  background-color: rgba(40, 40, 40, 0.9);
  box-shadow: 0 0 0 3px rgba(249, 65, 68, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

/* Submit Button */
.submit-btn {
  display: block;
  width: 100%;
  padding: 1.2rem;
  background-color: #f94144;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  background-color: #f83236;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn:disabled {
  background-color: #555;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Status Messages */
.status-message {
  margin-top: 2rem;
  padding: 1.2rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  animation: slideUp 0.4s ease-out;
}

.status-message.success {
  background-color: rgba(46, 125, 50, 0.2);
  color: #81c784;
  border: 1px solid #2e7d32;
}

.status-message.error {
  background-color: rgba(198, 40, 40, 0.2);
  color: #e57373;
  border: 1px solid #c62828;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .contact-form {
    padding: 1.8rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .submit-btn {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>