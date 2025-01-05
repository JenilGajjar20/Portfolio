<template>
  <div class="contact-section" id="contact">
    <div class="contact-section__content">
      <div class="content-header">
        <h2>Contact Me</h2>
      </div>
      <div class="contact-section__details">
        <div class="content-left">
          <div class="content-left--text">
            <h4>Let's Connect and Collaborate!</h4>
            <p>
              I'd love to hear from you - whether it's about a new project ✨,
              collaboration 🤝, or just to say hi 👋!
            </p>

            <ul>
              <p>You can:</p>
              <li>Drop me a message using the contact form.</li>
              <li>Get in touch via email or phone.</li>
            </ul>
          </div>

          <div class="content-left--info">
            <div class="my-info">
              <p>You Can Mail Me Here</p>
              <span>jenilgajjar@gmail.com</span>
            </div>
            <div class="my-info">
              <p>Give Me A Call On</p>
              <span>+91 76006 97082</span>
            </div>
          </div>
        </div>

        <HLine class="md:hidden" />

        <form @submit.prevent="submitForm" class="form">
          <input
            type="text"
            v-model="form.name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name=""
            v-model="form.message"
            rows="5"
            placeholder="Enter your message..."
            required
          ></textarea>
          <div class="flex items-center justify-between">
            <p v-if="messageSuccess">{{ messageSuccess }}</p>
            <ButtonDefault
              text="Submit"
              :is-loading="isLoading"
              class="ml-auto button--outline"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";

import ButtonDefault from "@/components/button/Default.vue";
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const messageSuccess = ref("");
const isLoading = ref(false);

const submitForm = () => {
  isLoading.value = true;

  const tempalateParams = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
  };

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  emailjs.send(serviceId, templateId, tempalateParams, publicKey).then(
    (response) => {
      if (response.status === 200) {
        messageSuccess.value = "Message Sent successfully!";
      }

      setInterval(() => {
        messageSuccess.value = "";
        form.value = {};
        isLoading.value = false;
      }, 2000);
    },
    (error) => {
      console.error("error:", error);
    }
  );
};
</script>

<style lang="scss">
.contact-section {
  &__details {
    @apply pt-4 md:pt-10 md:flex md:gap-8;
    .form {
      @apply space-y-4 w-full;
      input,
      textarea {
        @apply w-full py-4 px-4 rounded bg-gray-800 focus:outline-none border border-gray-500;
      }
      textarea {
        @apply resize-none;
      }
    }

    .content-left {
      @apply w-full;
      &--text {
        @apply mb-6 space-y-4 lg:text-xl;
        ul {
          @apply space-y-3;
          li {
            @apply list-disc ml-6;
          }
        }
      }
      &--info {
        @apply space-y-4;
      }
      .my-info {
        @apply bg-gray-200 text-yellow-600 py-2 px-4 font-bold rounded-md lg:py-4 lg:flex lg:items-center lg:justify-between;
      }
    }
  }
}
</style>
