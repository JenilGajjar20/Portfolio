<template>
  <div class="contact-section">
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
              <li>Drop me a message using the contact form below.</li>
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
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="number" placeholder="Enter your number" />
          <textarea
            name=""
            rows="5"
            placeholder="Enter your message..."
          ></textarea>
          <ButtonDefault text="Submit" class="ml-auto button--outline" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonDefault from "@/components/button/Default.vue";

const submitForm = () => {
  console.log("submitForm");
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
        @apply lg:flex lg:items-center lg:justify-between bg-gray-200 text-gray-800 py-2 px-4 font-bold rounded-md lg:py-4;
      }
    }
  }
}
</style>
