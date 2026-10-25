<template>
  <section v-reveal>
    <h2 class="blogs-section-title mb-4 md:mb-8">Latest Blog</h2>
  </section>
  <article class="blogs-latest" v-reveal>
    <div class="blogs-latest__img">
      <img
        :src="`/images/${latest.image}`"
        alt="Automating Tasks with Cron Jobs: A Beginner's Guide"
      />
    </div>
    <div class="blogs-content__data">
      <div class="blog-meta flex items-center gap-4 text-sm md:text-base pb-4">
        <p>{{ latest.platform }}</p>
        <span>|</span>
        <p>{{ latest.date_published }}</p>
      </div>
      <div>
        <a
          :href="latest.link"
          target="_blank"
        >
          {{ latest.title }}
        </a>
        <p class="mt-4 xl:mt-6 xl:text-lg">
          {{ latest.desc.substring(0, 300) + "..." }}
        </p>
      </div>
      <div class="read-time mt-4 flex items-center gap-2">
        <IconsMdiRead />
        <p>{{ latest.read_time }} min read</p>
      </div>
    </div>
  </article>
</template>

<script setup>
import IconsMdiRead from "@/components/icons/MdiRead.vue";

const latest = {
  platform: "Hashnode",
  desc: "In this article, we will explore the concept of keyloggers, their various types, and their practical applications. From capturing user input to logging it efficiently, keyloggers can serve multiple purposes, both good and bad. I will walk you through a simple implementation using Python, dissect the code for a better understanding, and discuss the ethical considerations every developer must keep in mind when using such a tool.",
  title:
    "Implementing a Keylogger: A Comprehensive Approach to Keystroke Tracking",
  link: "https://jenilgajjar.hashnode.dev/implementing-a-keylogger-a-comprehensive-approach-to-keystroke-tracking",
  date_published: "Sept 14, 2024",
  read_time: "5",
  image: "keylogger.png",
};
</script>

<style lang="scss"></style>
