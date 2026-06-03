<template>
  <main class="container blog-page">
    <Blogs />

    <BlogsLatest />

    <BlogsArticles />
  </main>
</template>

<script setup>
import Blogs from "@/components/blogs/Index.vue";
import BlogsLatest from "@/components/blogs/Latest.vue";
import BlogsArticles from "@/components/blogs/Articles.vue";
</script>

<style lang="scss">
.blog-page {
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  padding-block: clamp(1.5rem, 4vw, 3rem);
}

.blogs {
  @apply py-0;
  &-content {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 1.5rem;
    padding: clamp(1.5rem, 5vw, 4rem);
    background:
      radial-gradient(circle at 88% 10%, rgba(96, 247, 255, 0.2), transparent 22rem),
      radial-gradient(circle at 12% 90%, rgba(255, 101, 179, 0.14), transparent 20rem),
      linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
      rgba(7, 11, 23, 0.76);
    box-shadow: 0 24px 90px rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(18px);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, transparent 49%, rgba(96, 247, 255, 0.04) 50%, transparent 51%),
        linear-gradient(0deg, transparent 49%, rgba(96, 247, 255, 0.035) 50%, transparent 51%);
      background-size: 4rem 4rem;
      mask-image: linear-gradient(90deg, black, transparent 88%);
      pointer-events: none;
    }

    &__title {
      position: relative;
      max-width: 58rem;
      color: var(--text-main);
      font-size: clamp(2.25rem, 7vw, 5.6rem);
      font-weight: 900;
      line-height: 0.96;
      letter-spacing: 0;
      text-shadow: 0 0 36px rgba(96, 247, 255, 0.18);
    }

    &__subtitle {
      position: relative;
      max-width: 42rem;
      margin-top: 1rem;
      color: var(--text-soft);
      font-size: clamp(0.98rem, 2vw, 1.16rem);
      line-height: 1.75;
    }
  }

  &-section-title {
    color: var(--text-main);
    font-size: clamp(1.6rem, 4vw, 3.4rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0;
  }

  &-latest {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    gap: clamp(1rem, 3vw, 2rem);
    align-items: stretch;
    border: 1px solid var(--line);
    border-radius: 1.35rem;
    padding: clamp(1rem, 3vw, 1.5rem);
    background:
      linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.02)),
      rgba(7, 11, 23, 0.72);
    box-shadow: 0 18px 70px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(18px);

    &__img {
      overflow: hidden;
      border-radius: 1rem;
      border: 1px solid var(--line);
      img {
        width: 100%;
        height: 100%;
        min-height: 22rem;
        object-fit: cover;
        transition: transform 320ms ease;
      }
    }

    &:hover {
      .blogs-latest__img img {
        transform: scale(1.04);
      }
    }

    .blogs-content__data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(0.25rem, 2vw, 1rem);

      .blog-meta {
        color: var(--text-muted);
      }

      a {
        color: var(--text-main);
        font-size: clamp(1.75rem, 4vw, 3.2rem);
        font-weight: 900;
        line-height: 1.08;

        &:hover {
          color: var(--cyan);
        }
      }

      p {
        color: var(--text-soft);
        line-height: 1.75;
      }

      .read-time {
        color: var(--lime);
      }
    }
  }

  &-articles {
    @apply grid grid-cols-1 gap-5;

    .article-card {
      display: grid;
      grid-template-columns: minmax(12rem, 0.42fr) minmax(0, 1fr);
      gap: clamp(1rem, 3vw, 1.5rem);
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 1.15rem;
      background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.018)),
        rgba(7, 11, 23, 0.66);
      box-shadow: 0 14px 50px rgba(0, 0, 0, 0.22);
      backdrop-filter: blur(16px);
      transition:
        transform 220ms ease,
        border-color 220ms ease,
        box-shadow 220ms ease;

      &:hover {
        border-color: var(--line-strong);
        transform: translateY(-5px);
        box-shadow: var(--shadow-glow);

        img {
          transform: scale(1.05);
        }
      }
    }

    &__img {
      overflow: hidden;
      min-height: 100%;
      img {
        width: 100%;
        height: 100%;
        min-height: 16rem;
        object-fit: cover;
        transition: transform 320ms ease;
      }
    }

    &__data {
      @apply w-full px-5 py-5 md:py-6;

      .blog-meta {
        color: var(--text-muted);
      }

      a {
        color: var(--text-main);
        font-size: clamp(1.35rem, 3vw, 2.35rem);
        font-weight: 900;
        line-height: 1.12;

        &:hover {
          color: var(--cyan);
        }
      }

      p {
        color: var(--text-soft);
        line-height: 1.7;
      }

      .read-time {
        color: var(--lime);
      }
    }
  }
}

@media (max-width: 900px) {
  .blogs-latest,
  .blogs-articles .article-card {
    grid-template-columns: 1fr;
  }

  .blogs-latest__img img,
  .blogs-articles__img img {
    min-height: 15rem;
    max-height: 22rem;
  }
}
</style>
