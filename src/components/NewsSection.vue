<template>
  <div class="container max-w-5xl px-4 py-8 mx-auto">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NewsCard
        v-for="(news, index) in newsItems"
        :key="index"
        v-memo="[
          news.title,
          news.source,
          news.imageUrl,
          news.logoUrl,
          news.content,
          news.link,
        ]"
        :title="news.title"
        :source="news.source"
        :imageUrl="news.imageUrl"
        :logoUrl="news.logoUrl"
        :content="news.content"
        :link="news.link"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NewsCard from "./NewsCard.vue";

const newsItems = ref([
  {
    title: "Your Medical Data Is Code Blue",
    source: "Wired",
    imageUrl: null,
    logoUrl: null,
    content:
      "Medical data companies aren't doing all they can to protect your most private information. When they get hacked and patient data is stolen, it's the patients who suffer.",
    link: "https://www.wired.com/story/plaintext-our-medical-security-is-code-blue/",
  },
  {
    title: "The unprecedented health-care hack that may affect you",
    source: "Washington Post",
    imageUrl: null,
    logoUrl: null,
    content:
      "In February, a massive cyberattack nearly brought down the entire U.S. health system. Doctors are still reeling, and many patients don't even know their data has been exposed.",
    link: "https://www.washingtonpost.com/podcasts/post-reports/the-unprecedented-healthcare-hack-that-may-affect-you/",
  },
  {
    title:
      "NHS data breach: trusts shared patient details with Facebook without consent",
    source: "The Guardian",
    imageUrl: null,
    logoUrl: null,
    content:
      "NHS trusts are sharing intimate details about patients' medical conditions, appointments and treatments with Facebook without consent despite promising never to do so.",
    link: "https://www.theguardian.com/society/2023/may/27/nhs-data-breach-trusts-shared-patient-details-with-facebook-meta-without-consent",
  },
  {
    title: "Cyberattack Paralyzes the Largest U.S. Health Care Payment System",
    source: "The New York Times",
    imageUrl: null,
    logoUrl: null,
    content:
      "The hacking shut down the nation's biggest health care payment system, causing financial chaos that affected a broad spectrum ranging from large hospitals to single-doctor practices.",
    link: "https://www.nytimes.com/2024/03/05/health/cyberattack-healthcare-cash.html",
  },
  {
    title:
      "Mental Health and Addiction Treatment Provider Exposed Patient Information",
    source: "VPN Mentor",
    imageUrl: null,
    logoUrl: null,
    content:
      "Cybersecurity Researcher discovered a non-password-protected database that contained thousands of records belonging to an AI platform offering mental health and addiction treatment.",
    link: "https://www.vpnmentor.com/news/report-confidanthealth-breach/",
  },
  {
    title: "Medical-Targeted Ransomware Is Breaking Records After $22M Payout",
    source: "Wired",
    imageUrl: null,
    logoUrl: null,
    content:
      "Cybersecurity firm Recorded Future counted 44 health-care-related incidents in the month after Change Healthcare's payment came to light—the most it's ever seen in a single month.",
    link: "https://www.wired.com/story/change-healthcare-22-million-payment-ransomware-spike/",
  },
]);

onMounted(async () => {
  const imageModules = import.meta.glob("../assets/images/*");

  for (const item of newsItems.value) {
    try {
      const imageModule = await imageModules[
        `../assets/images/news-${newsItems.value.indexOf(item) + 1}.png`
      ]();
      item.imageUrl = imageModule.default;

      const logoModule = await imageModules[
        `../assets/images/logo-${item.source
          .toLowerCase()
          .replace(/\s+/g, "")}.png`
      ]();
      item.logoUrl = logoModule.default;
    } catch (error) {
      console.error(`Failed to load image for ${item.title}:`, error);
    }
  }
});
</script>
