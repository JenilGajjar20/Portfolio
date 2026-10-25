<template>
  <section class="contact-section" id="contact">
    <div class="contact-section__content" v-reveal>
      <div class="content-header">
        <h2>Contact Me</h2>
      </div>
      <div class="contact-section__details">
        <div class="content-left">
          <div class="content-left--text">
            <h4>Let's Connect and Collaborate!</h4>
            <p>
              I'd love to hear from you - whether it's about a new project
              &#10024;, collaboration &#129309;, or just to say hi &#128075;!
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
  </section>
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

  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
  };

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  emailjs.send(serviceId, templateId, templateParams, publicKey).then(
    (response) => {
      if (response.status === 200) {
        messageSuccess.value = "Message Sent successfully!";
      }

      setTimeout(() => {
        messageSuccess.value = "";
        form.value = { name: "", email: "", message: "" };
        isLoading.value = false;
      }, 2000);
    },
    (error) => {
      console.error("error:", error);
      isLoading.value = false;
    }
  );
};
</script>

<style lang="scss">
.contact-section {
  &__details {
    @apply md:flex;
    gap: clamp(1.5rem, 5vw, 4rem);

    .form {
      @apply space-y-4 w-full;
      border: 1px solid var(--line);
      border-radius: 1.15rem;
      padding: clamp(1rem, 3vw, 1.5rem);
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
        rgba(8, 13, 27, 0.72);
      box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
      backdrop-filter: blur(18px);
      position: relative;
      overflow: hidden;

      input,
      textarea {
        @apply w-full py-4 px-4 focus:outline-none;
        color: var(--text-main);
        border: 1px solid var(--line);
        border-radius: 0.85rem;
        background: rgba(255, 255, 255, 0.045);
        transition:
          border-color 180ms ease,
          box-shadow 180ms ease,
          background 180ms ease;

        &::placeholder {
          color: var(--text-muted);
        }

        &:focus {
          border-color: var(--line-strong);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 4px rgba(96, 247, 255, 0.08);
        }
      }
      textarea {
        @apply resize-none;
      }

      p {
        color: var(--lime);
        font-weight: 700;
      }
    }

    .content-left {
      @apply w-full;
      &--text {
        @apply mb-6 space-y-4 lg:text-xl;
        color: var(--text-soft);

        h4 {
          color: var(--text-main);
          font-size: clamp(1.45rem, 3vw, 2.15rem);
          font-weight: 800;
          line-height: 1.2;
        }

        ul {
          @apply space-y-3;
          li {
            @apply ml-6;
            list-style: none;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              top: 0.65em;
              left: -1.25rem;
              width: 0.45rem;
              height: 0.45rem;
              border-radius: 999px;
              background: var(--cyan);
              box-shadow: 0 0 12px rgba(96, 247, 255, 0.48);
            }
          }
        }
      }
      &--info {
        @apply space-y-4;
      }
      .my-info {
        @apply py-3 px-4 font-bold lg:py-4 lg:flex lg:items-center lg:justify-between;
        border: 1px solid var(--line);
        border-radius: 0.95rem;
        background: rgba(255, 255, 255, 0.055);
        color: var(--text-soft);
        transition:
          transform 200ms ease,
          border-color 200ms ease,
          box-shadow 200ms ease;

        &:hover {
          border-color: var(--line-strong);
          transform: translateX(6px);
          box-shadow: var(--shadow-glow);
        }

        p {
          color: var(--text-muted);
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        span {
          color: var(--text-main);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .contact-section__details .form {
    margin-top: 1.5rem;
  }
}
</style>
