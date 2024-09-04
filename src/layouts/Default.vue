<template>
  <div :data-theme="theme" class="bg-white">
    <div class="container flex items-center justify-between h-12 mx-auto">
      <!-- Added 'items-center' class -->
      <div class="flex items-center">
        <!-- Added 'items-center' class -->
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          class="flex items-center p-2"
        >
          <img
            src="../assets/images/local-first-health-logo-location.png"
            alt="Your Logo"
            class="object-contain w-auto mt-1 h-11 dark:text-default-400"
          />
        </a>
        <!-- <b>Local-First Health</b> -->

        <ul class="items-stretch hidden mt-2 ml-20 space-x-3 lg:flex">
          <!-- <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#true-privacy"
              class="flex items-center px-4 -mb-1 text-lg font-bold dark:border-transparent"
              >Local-First Health</a
            >
          </li> -->
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#why-local-first-health"
              class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400"
              >Why Local-First Health</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#local-first-health-apps"
              class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400"
              >LF Health Apps</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#local-first"
              class="flex items-center px-4 -mb-1 dark:border-transparent"
              >What is Local-First</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#mission"
              class="flex items-center px-4 -mb-1 dark:border-transparent"
              >Mission</a
            >
          </li>
        </ul>
      </div>
      <div class="items-center flex-shrink-0 hidden lg:flex">
        <a
          href="/easyjoey-paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-4 py-2 mt-5 text-sm font-semibold text-gray-800 bg-transparent border border-gray-800 rounded"
        >
          Read Whitepaper
        </a>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
export default {
  setup() {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem("daisyui-theme", value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem("daisyui-theme") || "dark";
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>
