<template>
    <div :data-theme="theme" class="bg-white">
        <div class="container flex justify-between items-center h-12 mx-auto">
            <!-- Added 'items-center' class -->
            <div class="flex items-center">
                <!-- Added 'items-center' class -->
                <!-- <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Back to homepage"
                    class="flex items-center p-2"
                >
                    <img
                        src="../assets/images/local-first-health-logo.png"
                        alt="Your Logo"
                        class="object-contain h-8 mt-1 w-auto dark:text-default-400"
                    />
                </a> -->
                <ul class="items-stretch hidden space-x-3 lg:flex ml-20 mt-2">
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#true-privacy"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >True Privacy</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#mission"
                            class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400"
                            >Mission</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#health-suite"
                            class="flex items-center px-4 -mb-1 dark:border-transparent dark:text-default-400 dark:border-default-400"
                            >Health Suite</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#local-first"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >Local-First</a
                        >
                    </li>
                    <li class="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#our-story"
                            class="flex items-center px-4 -mb-1 dark:border-transparent"
                            >Our Story</a
                        >
                    </li>
                </ul>
            </div>
            <div class="items-center flex-shrink-0 hidden lg:flex">
                <a
                    href="/easyjoey-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-4 py-2 mt-5 font-semibold rounded bg-teal-600 text-white text-sm"
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
