<template>
  <h2 class="mb-4 text-xl font-bold md:mb-8 md:text-5xl">Latest Blog</h2>
  <div class="blogs-latest">
    <div class="blogs-latest__img">
      <img
        src="@/assets/images/cron-jobs.png"
        alt="Automating Tasks with Cron Jobs: A Beginner's Guide"
      />
    </div>
    <div class="blogs-content__data">
      <div
        class="flex items-center gap-4 text-gray-600 text-sm md:text-base pb-4"
      >
        <p>{{ latest.platform }}</p>
        <span>|</span>
        <p>{{ latest.date_published }}</p>
      </div>
      <div>
        <a
          :href="latest.link"
          target="_blank"
          class="text-2xl font-oswald md:text-4xl hover:text-bright_yellow"
        >
          {{ latest.title }}
        </a>
        <p class="mt-4 text-gray-500 xl:mt-6 xl:text-lg">
          {{ latest.desc.substring(0, 350) + "..." }}
        </p>
      </div>
      <div class="mt-4 flex items-center gap-2 text-gray-600">
        <IconsMdiRead />
        <p>{{ latest.read_time }} min read</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMdiRead from "@/components/icons/MdiRead.vue";

const latest = {
  platform: "Hashnode",
  title: "Automating Tasks with Cron Jobs: A Beginner's Guide",
  desc: "In the world of Linux, automation is the key to efficient system management and maintenance. One of the most powerful tools for task automation is cron, a time-based job scheduler. Whether you need to perform regular backups, clean up logs, or run custom scripts, cron can handle it all. This guide will introduce you to the basics of cron, how to schedule tasks using cron jobs, an example code, and best practices for managing automated tasks.",
  link: "https://jenilgajjar.hashnode.dev/automating-tasks-with-cron-jobs-a-beginners-guide",
  date_published: "Jul 4, 2024",
  read_time: "3",
};
</script>

<style lang="scss"></style>
