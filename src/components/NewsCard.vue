<template>
  <a
    :href="link"
    class="p-8 text-white rounded-3xl bg-slate-950"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="flex flex-col justify-start gap-4">
      <div>
        <div v-if="logoUrl" class="flex justify-between">
          <img
            :src="logoUrl"
            :alt="source"
            class="w-auto h-10"
            loading="lazy"
          />
        </div>
        <br />
        <h2 class="text-xl font-medium text-left text-bold">
          {{ title }}
        </h2>
        <div v-if="imageUrl" class="flex justify-between py-3">
          <img
            :src="imageUrl"
            :alt="title"
            class="w-full h-auto"
            loading="lazy"
          />
        </div>
        <p class="text-left text-stone-300">
          {{ content }}
        </p>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  source: String,
  imageUrl: String,
  logoUrl: String,
  content: String,
  link: String,
});
</script>
