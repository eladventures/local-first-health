<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useHead } from "#imports";
import { definePageMeta } from "#imports";
import NewsSection from "../components/NewsSection.vue";
import ogBanner from "../assets/images/local-first-health-banner.png";

// For highlight.js (code block)
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

definePageMeta({
  layout: "default",
});

useHead({
  title: "Local-First Health",
  description:
    "Local-First Health is the first and only local-first health solution.",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  meta: [
    {
      hid: "og:image",
      name: "og:image",
      property: "og:image",
      content: ogBanner,
    },
  ],
});

// Typing animation logic
const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = [
  "Works Offline",
  "Own Your Data",
  "Instant Response",
  "Collaborative",
  "Private and Secure",
  "Future-Proof",
];
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 2000;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

const typeText = () => {
  const currentText = displayTextArray[displayTextArrayIndex.value];
  if (charIndex.value < currentText.length) {
    typeStatus.value = true;
    typeValue.value += currentText.charAt(charIndex.value);
    charIndex.value++;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  const currentText = displayTextArray[displayTextArrayIndex.value];
  if (charIndex.value > 0) {
    typeStatus.value = true;
    typeValue.value = currentText.substring(0, charIndex.value - 1);
    charIndex.value--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value =
      (displayTextArrayIndex.value + 1) % displayTextArray.length;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

// Waitlist modal logic
const showWaitlist = ref(false);
const isWidgetLoaded = ref(false);
let waitlistScript = null;

const triggerWaitlist = async () => {
  showWaitlist.value = true;
  await nextTick();
  if (!isWidgetLoaded.value) {
    loadWaitlistResources();
  } else {
    reinitializeWidget();
  }
};

const loadWaitlistResources = () => {
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href =
    "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
  document.head.appendChild(cssLink);

  waitlistScript = document.createElement("script");
  waitlistScript.src = `https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js?cacheBust=${Date.now()}`;
  waitlistScript.async = true;
  waitlistScript.onload = () => {
    isWidgetLoaded.value = true;
    initializeWidget();
  };
  document.body.appendChild(waitlistScript);
};

const initializeWidget = () => {
  if (window.GetWaitlistWidget) {
    window.GetWaitlistWidget.init({
      waitlistId: "20759",
      elementId: "getWaitlistContainer",
      widgetType: "WIDGET_1",
    });
  }
};

const reinitializeWidget = () => {
  const container = document.getElementById("getWaitlistContainer");
  if (container) {
    container.innerHTML = "";
    initializeWidget();
  }
};

const closeModal = () => {
  showWaitlist.value = false;
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
  hljs.highlightAll();

  // Clean up resources when component is unmounted
  return () => {
    if (waitlistScript) {
      waitlistScript.remove();
    }
    const cssLink = document.querySelector('link[href*="getwaitlist.min.css"]');
    if (cssLink) {
      cssLink.remove();
    }
  };
});

// Expose necessary variables and functions to the template
defineExpose({
  typeValue,
  typeStatus,
  showWaitlist,
  isWidgetLoaded,
  triggerWaitlist,
  closeModal,
});
</script>

<template>
  <!-- Animation souce  https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj -->
  <section class="bg-white">
    <div>
      <div
        class="container flex flex-col items-center px-4 pt-16 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32"
      >
        <!-- Hero Panel -->
        <div
          class="flex justify-center w-full px-5 pb-20 mt-5 overflow-hidden border-2 border-gray-200 shadow-lg rounded-3xl"
        >
          <div class="w-full">
            <h1 class="mt-10 font-extrabold text-center">
              <img
                src="../assets/images/section-local-first-health-doctor-app.png"
                class="pt-3 w-64 h-auto mx-auto lg:top-[-5rem]"
                alt="Void"
              />
              <span class="block mt-2 text-6xl font-bold"
                >Build 'Local-First' Health Apps</span
              >
            </h1>
            <div class="custom-container">
              <h1 class="items-center custom-heading font-inter">
                <!-- Display the typed text -->
                <span class="typed-text">{{ typeValue }}</span>

                <!-- Blinking cursor -->
                <span class="blinking-cursor">|</span>

                <!-- Optional cursor that changes class based on typeStatus -->
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </h1>
            </div>
            <div class="max-w-4xl py-5 mx-auto text-xl text-center">
              <p class="mb-2 text-2xl font-inter text-neutral-500">
                <b>Our health systems are broken. </b><br />Health records
                should belong to healthcare providers and patients—not be
                controlled by third parties. It’s time to take back control of
                our medical records and build healthcare systems that prioritize
                privacy, security, collaboration, and data ownership. Let’s
                reclaim healthcare with Local First Health—where data freedom
                and true privacy are in our hands.
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 mx-auto mt-10">
              <!-- What is Local-First Button -->
              <a
                href="#local-first"
                class="flex items-center gap-2 px-8 py-3 bg-gray-400 rounded-lg hover:bg-gray-300"
              >
                <span class="text-xl font-medium text-white cursor-pointer"
                  >What is Local-First</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </a>

              <!-- GitHub Waitlist Button -->
              <a
                href="javascript:void(0);"
                @click="triggerWaitlist"
                class="flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900 hover:bg-slate-700"
              >
                <span class="text-xl font-medium text-white cursor-pointer">
                  Get early access
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-7 h-7"
                >
                  <path
                    d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                    fill="white"
                    stroke="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- END of Hero Panel-->

        <!-- WAITLIST Modal Structure with the widget (hidden initially) -->
        <div v-if="showWaitlist" class="modal-overlay">
          <div class="modal-content">
            <button @click="closeModal" class="close-button">&times;</button>

            <!-- Waitlist Widget Container -->
            <div
              id="getWaitlistContainer"
              data-waitlist_id="20759"
              data-widget_type="WIDGET_1"
            ></div>
          </div>
        </div>

        <!-- END of WAITLIST MODAL -->

        <!-- WARNING: News Section -->
        <img
          src="../assets/images/section-local-first-health-mission-nurse-warning.png"
          alt="Void"
          class="w-[200px] h-auto mt-20"
        />
        <h1
          class="mt-0 text-3xl font-bold leadi sm:text-4xl xl:max-w-3xl font-inter"
        >
          WARNING: <br />
          Our Health Data is in Jeopardy
        </h1>

        <p
          class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500"
        >
          The current cloud-based setup leaves our medical records exposed to
          breaches and exploitation. Ransomware attacks and data breaches are
          constantly in the news. Perhaps it's time to rethink how we manage
          sensitive health information?
        </p>

        <!-- Replace the old news cards with the new NewsSection component -->
        <NewsSection />
        <!-- END OF NEWS CARD -->

        <!-- Reed Jobs Section -->
        <div class="flex items-center justify-center min-h-screen">
          <!-- Main container without border and shadow -->
          <div
            class="flex flex-col items-center justify-center w-full max-w-6xl px-5 pb-20 mt-10 mb-10 text-center rounded-3xl"
            id="mission"
          >
            <!-- Centering additional content -->

            <p
              class="mt-0 text-3xl font-bold sm:text-4xl xl:max-w-2xl font-inter"
            >
              <b>Excerpt: Reed Jobs & Dean Lloyd Minor Interview</b>
            </p>

            <p
              class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-2xl font-inter text-neutral-500"
            >
              Reed Jobs, the former Managing Director of Health at Emerson
              Collective, eloquently highlighted the concerns regarding medical
              records during his interview with Dean Lloyd Minor of Stanford
              Medical School (March 2022).
            </p>

            <!-- Reed Jobs Interview -->
            <div
              class="container items-center justify-center max-w-3xl px-5 pb-10 mt-0 overflow-hidden border-2 border-gray-200 shadow-lg bg-gray-50 rounded-3xl"
            >
              <div class="w-full">
                <h1 class="mt-5 font-extrabold text-center">
                  <img
                    src="../assets/images/local-first-image-reed-jobs-2.png"
                    class="pt-3 w-max h-auto mx-auto lg:top-[-5rem]"
                    alt="Void"
                  />
                </h1>

                <div class="max-w-4xl py-5 mx-auto text-xl text-justify">
                  <p class="mt-10 mb-2 text-xl font-inter text-neutral-600">
                    <i
                      >“I think one of the most important things we can learn is
                      that we need to
                      <b
                        ><u
                          >really respect people's privacy and we need to give
                          them the power to determine who has access to their
                          data and what that's used for
                        </u></b
                      >.. and so it's interesting when you look at healthcare,
                      clinical records, and most data that flows through
                      hospital systems, it is absurdly balkanized and the user
                      interface is atrocious, and it's kind of this surreal
                      experience honestly because we live in a wonderfully
                      high-tech world and particularly here in Silicon Valley,
                      yet when you go to a hospital, even a great hospital like
                      Stanford, it's like you're stepping back in a time machine
                      30 years and you know the software there is nothing
                      against everybody, the software's not very, not very good,
                      the
                      <b
                        ><u
                          >user interface isn't very good, and it's this, you
                          know, departments can't talk to each other, and you
                          can't transfer data
                        </u></b
                      >, and people give you floppy disks with things on it, and
                      it's like this anachronistic little, you know, little time
                      machine, it's crazy. <br /><br />

                      So I think one of the most interesting things that's going
                      to happen in healthcare in the next kind of 20 years is
                      seeing it really catch up with the rest of the world from
                      a technological point of view just both from a data
                      infrastructure interoperability and UI aspect, and I
                      really hope, and luckily, this is a lot of this is already
                      codified in legislature like HIPAA and stuff, but
                      <b
                        ><u
                          >people's privacy and control over that data is gonna
                          need to be paramount
                        </u></b
                      >
                      as it, you know, it currently is now, but it really needs
                      to be a lot more electronic and it needs to be a lot more
                      interoperable, again, this is something that's probably,
                      you know, a nationwide, you know, level, whether that's
                      through legislation or through some really innovative
                      companies in the space of which I think there's space for
                      many, but yeah, we need to, we need to really shape up
                      the, the, the infrastructure systems that we have in place
                      because, not only are they really not helping patient
                      care, but it's, it's really bad for the hospital systems
                      themselves too and the physicians..” <br /><br />

                      - <b>Reed Jobs</b>
                    </i>
                  </p>
                </div>
              </div>
            </div>

            <!-- END of Reed Jobs Interview-->
          </div>
        </div>

        <!-- END OF Reed Jobs -->

        <!-- START OF CURRENT PROBLEMS SECTION -->
        <img
          src="../assets/images/section-local-first-health-mission-nurse-cloud-problem.png"
          alt="Void"
          class="w-[200px] h-auto mt-0"
        />
        <h1
          class="mt-0 text-3xl font-bold leadi sm:text-4xl xl:max-w-3xl font-inter"
          id="cloud"
        >
          The Cloud Problem
        </h1>

        <p
          class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500"
        >
          Today’s healthcare systems rely heavily on cloud-based setups, and
          while they offer convenience, they come with significant risks:
        </p>
        <!-- BULLETS: Reasons -->
        <ul
          class="mt-2 mb-0 space-y-4 text-2xl text-left sm:mb-8 xl:max-w-2xl font-inter text-neutral-500"
        >
          <li class="flex items-start">
            <img
              src="~/assets/images/icons-data-breach.png"
              alt="Icon"
              class="w-10 h-auto mt-3 mr-3"
            />
            <span>
              <strong class="text-neutral-800">Data Breaches:</strong>
              Centralized data storage has made cloud systems prime targets for
              cyberattacks, putting millions of health records at risk.
            </span>
          </li>
          <li class="flex items-start">
            <img
              src="~/assets/images/icons-ransomware.png"
              alt="Icon"
              class="w-10 h-auto mt-3 mr-3"
            />
            <span>
              <strong class="text-neutral-800">Ransomware:</strong> Hospitals
              and clinics have been crippled by ransomware attacks, locking them
              out of vital patient information until hefty ransoms are paid.
            </span>
          </li>
          <li class="flex items-start">
            <img
              src="~/assets/images/icons-privacy.png"
              alt="Icon"
              class="w-10 h-auto mt-3 mr-3"
            />
            <span>
              <strong class="text-neutral-800">Privacy Concerns:</strong>
              Sensitive health data is often processed and stored by third-party
              providers, raising serious privacy issues and regulatory concerns.
            </span>
          </li>
          <li class="flex items-start">
            <img
              src="~/assets/images/icons-no-cloud.png"
              alt="Icon"
              class="w-10 h-auto mt-3 mr-3"
            />
            <span>
              <strong class="text-neutral-800"
                >Downtime & Access Issues:</strong
              >
              Internet outages or service disruptions can render cloud-dependent
              systems inaccessible, potentially delaying patient care.
            </span>
          </li>
          <li class="flex items-start">
            <img
              src="~/assets/images/icons-no-document.png"
              alt="Icon"
              class="w-10 h-auto mt-3 mr-3"
            />
            <span>
              <strong class="text-neutral-800">Lack of Ownership:</strong>
              Healthcare providers and patients have limited control over their
              data, with cloud services holding ultimate authority over where
              and how information is stored.
            </span>
          </li>
        </ul>
        <!-- End of Bullets -->
        <!-- END OF PROBLEMS Section -->

        <!-- START OF LF SOLUTION-->

        <div
          class="container flex flex-col items-center justify-center max-w-xl p-6 py-10 mx-auto mt-20 mb-20 space-y-24 bg-gray-100 lg:px-8 lg:max-w-4xl rounded-3xl"
        >
          <div id="local-first" class="text-center">
            <img
              src="../assets/images/section-local-first-health-mission-nurse-warning.png"
              alt="Void"
              class="w-[200px] h-auto mt-0 mx-auto"
            />

            <h2
              class="text-3xl font-bold text-center text-gray-900 tracki sm:text-4xl font-inter"
            >
              Taking Control: <br />The 'Local-First' Approach
            </h2>
            <p
              class="max-w-3xl mx-auto mt-4 text-2xl text-center font-inter text-neutral-500"
            >
              It’s time for a shift in how we handle health data. Local-first
              software offers a groundbreaking approach to the vulnerabilities
              of cloud-based systems. By keeping sensitive information on your
              device, local-first ensures privacy, security, and control, while
              still allowing seamless collaboration and syncing when needed.
            </p>
            <!-- 3 images -->
            <div
              class="grid w-full max-w-5xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <div class="w-full h-auto">
                <img
                  src="~/assets/images/diagram-local-first-pre-cloud.png"
                  alt="Image 1"
                  class="object-cover w-full h-full border border-gray-200"
                />
              </div>

              <div class="w-full h-auto">
                <img
                  src="~/assets/images/diagram-local-first-cloud-era.png"
                  alt="Image 2"
                  class="object-cover w-full h-full border border-gray-200"
                />
              </div>

              <div class="w-full h-auto">
                <img
                  src="~/assets/images/diagram-local-first-local-first-era.png"
                  alt="Image 3"
                  class="object-cover w-full h-full border border-gray-200"
                />
              </div>
            </div>
            <!-- end of 3 images -->
            <!-- xxxx -->
            <div class="flex flex-col items-center mt-20">
              <img
                src="../assets/images/local-first-health-ink-switch-paper.png"
                alt="Ink & Switch Paper"
                class="inline-block my-2"
                style="height: auto; width: 600px"
              />

              <p
                class="max-w-xl mx-auto mt-4 text-xl text-justify text-neutral-600"
              >
                The concept was introduced in a 2019 whitepaper by Ink & Switch
                titled
                <a
                  href="https://www.inkandswitch.com/local-first/"
                  class="underline text-sky-600"
                  target="_blank"
                  >"Local-first software: You own your data, in spite of the
                  cloud."</a
                >
                , a pivotal document outlining seven key principles.
                <br /><br />
              </p>
              <!-- START OF 7 IDEALS -->
              <ul
                class="mt-2 mb-0 space-y-4 text-xl text-left sm:mb-8 xl:max-w-xl font-inter text-neutral-500"
              >
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800">1. No Spinners:</strong>
                    Your work is always at your fingertips, fast and responsive.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800"
                      >2. The Network is Optional:</strong
                    >
                    Work offline, sync when you’re back online.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800"
                      >3. Seamless Collaboration:</strong
                    >
                    Work with colleagues without data conflicts.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800"
                      >4. Your Work is Not Trapped on One Device:</strong
                    >
                    Your data isn’t tied to one device; it syncs across all of
                    them.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800">5. The Long Now:</strong>
                    Your data lasts as long as you need it, independent of cloud
                    services.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800"
                      >6. Security & Privacy by Default:</strong
                    >
                    Your data is protected from breaches and exploitation.
                  </span>
                </li>
                <li class="flex items-start">
                  <span>
                    <strong class="text-neutral-800"
                      >7. You Retain Ultimate Ownership & Control:</strong
                    >
                    You own and control your data at all times.
                  </span>
                </li>
              </ul>
              <!-- END OF 7 IDEALS -->
            </div>

            <div class="flex flex-col items-center mt-10">
              <img
                src="../assets/images/local-first-health-wired-magazine.png"
                alt="Wired Mag Local-First"
                class="inline-block my-2"
                style="height: auto; width: 600px"
              />

              <p
                class="max-w-xl mx-auto mt-4 text-xl text-center text-neutral-600"
              >
                Even Wired Magazine featured an
                <a
                  href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/"
                  class="underline text-sky-600"
                  target="_blank"
                  >article</a
                >
                on Local-First <br />(August 2023).
              </p>
            </div>
            <!-- xxxx -->
          </div>
        </div>
        <!-- END OF What LF SOLUTION -->

        <!--START OF LF HEALTH  -->
        <div class="container max-w-3xl px-4 py-8 mx-auto">
          <div class="text-center">
            <img
              src="../assets/images/section-local-first-health-doctor-super.png"
              alt="Local First Health Superhero"
              class="inline-block mt-10 mb-0 w-[200px] h-auto"
            />
            <h2
              class="mt-4 text-3xl font-bold sm:text-4xl font-inter"
              id="local-first-health"
            >
              Introducing: Local First Health
            </h2>
            <p
              class="mt-4 mb-8 text-xl sm:text-2xl font-inter text-neutral-500"
            >
              Local First Health (LFH) is a tech initiative that leverages
              local-first principles to solve inefficiencies and security risks
              in health records management. Introducing Project Papaya—an
              open-source SDK that empowers developers to easily create custom,
              local-first health apps, boosting accessibility, speed, security,
              and data ownership.
            </p>

            <!-- GitHub Early Access Button -->
            <a
              href="javascript:void(0);"
              @click="triggerWaitlist"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 text-xl font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-700"
            >
              Get early access on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                class="w-6 h-6 fill-current"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
            <!-- end of GITHUB Button -->

            <!-- SDK Example -->
            <div class="mt-10 text-left">
              <div class="code-block-container">
                <!-- <h3 class="mb-4 text-2xl font-semibold">Coming Soon:</h3> -->
                <pre><code class="language-javascript">
import { createId, createKeyPair } from '@localfirsthealth/papaya/encryption';
import { Application } from '@localfirsthealth/papaya/application';
import { Identities } from '@localfirsthealth/papaya/identities';
import { MedicalRecords } from '@localfirsthealth/papaya/emr';

// ensure a unique instance id for the app
const instanceId = createId();

// ensure a key-pair for signing
const signinKeys = createKeyPair();

// create the main app
const app = new Application({ instanceId, signinKeys })
app.use(new Identities())
app.use(new MedicalRecords())

// signup/signin user
const identity = await app.identities.identities.create({
  attributes: {
    email: 'sample@example.com',
    name: {
      firstName: 'Sample',
      lastName: 'User',
    },
  },
  credentials: [{
    strategy: 'local',
    identity: 'sample@example.com',
    password: 'strongpassword',
  }],
});
await app.identities.authenticate({
  credential: {
    strategy: 'local',
    email: 'sample@example.com',
    password: 'strongpassword',
  },
});

// create a medical record
const record = await app.emr.records.create({
  type: 'prescription',
  patient: identity.id,
  medications: [{
    name: 'Aspirin',
    dosage: '1 pill',
    frequency: 'daily',
  }],
});
      </code></pre>
              </div>
            </div>
            <!-- END OF SDK -->

            <!-- START OF ICONS -->
            <h1
              class="mt-20 text-4xl leadi sm:text-2xl xl:max-w-4xl font-inter text-neutral-500"
            >
              Start building health apps that can do the following:
            </h1>

            <!-- FIRST -->
            <div
              id="why-local-first-health"
              class="pt-1 pb-5 text-xs text-neutral-600"
              style="font-family: Arial, sans-serif"
            >
              <!-- 1ST ROW OF CARDS -->
              <div
                class="flex flex-wrap justify-center max-w-4xl mx-auto mt-0"
                style="font-family: Arial, sans-serif"
              >
                <!-- remvoe comment mode to bring back to default -->
                <!-- <div class="flex flex-wrap justify-center max-w-5xl mx-auto mt-5"> -->
                <!-- ITEM 1-->
                <!-- <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="max-w-xs p-5 mx-auto">
                <img
                  src="../assets/images/why-local-first-health-lab-tech-no-subscription.png"
                  alt="No Subscription"
                  class="w-40 mx-auto"
                />
                <h3 class="mt-4 mb-2 text-2xl font-medium text-center">
                  No Subscription
                </h3>
                <p class="text-base text-center">
                  Requires no subscription - no monthly fees, no hidden costs.
                </p>
              </div>
            </div> -->

                <!-- ITEM 2-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-doctor-work-offline.png"
                      alt="Works Offline"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Works Offline
                    </h3>
                    <p class="text-base text-center">
                      Works anywhere even without an internet.
                    </p>
                  </div>
                </div>

                <!-- ITEM 3-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-doctor-own-data.png"
                      alt="Own Your Data"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Own Your Data
                    </h3>
                    <p class="text-base text-center">
                      Data stays with you, always accessible.
                    </p>
                  </div>
                </div>

                <!-- 2ND ROW OF CARDS -->
                <!-- ITEM 1-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-doctor-own-the-software.png"
                      alt="Own the Software"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Own the Software
                    </h3>
                    <p class="text-base text-center">
                      Full control & management.
                    </p>
                  </div>
                </div>
                <!-- ITEM 2 -->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-nurse-compliant.png"
                      alt="Compliant"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Compliant
                    </h3>
                    <p class="text-base text-center">
                      Industry security standards + HIPAA.
                    </p>
                  </div>
                </div>

                <!-- ITEM 3-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-doctor-data-privacy.png"
                      alt="True Privacy"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      True Privacy
                    </h3>
                    <p class="text-base text-center">
                      No third-party access or unnecessary sharing.
                    </p>
                  </div>
                </div>
                <!-- START OF 3RD ROW -->
                <!-- ITEM 1-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-nurse-secure.png"
                      alt="Secure"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Secure
                    </h3>
                    <p class="text-base text-center">
                      Encryption + extra security features
                    </p>
                  </div>
                </div>

                <!-- ITEM 2 -->
                <!-- <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="max-w-xs p-5 mx-auto">
                <img
                  src="../assets/images/why-local-first-health-mission-doctor-super.png"
                  alt="Powerful"
                  class="w-40 mx-auto"
                />
                <h3 class="mt-4 mb-2 text-2xl font-medium text-center">
                  Powerful
                </h3>
                <p class="text-base text-center">
                  Equipped with advanced tools to handle all your healthcare
                  needs efficiently.
                </p>
              </div>
            </div> -->

                <!-- ITEM 3-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-lab-tech-fast.png"
                      alt="Fast"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Fast
                    </h3>
                    <p class="text-base text-center">
                      Free from server lag or internet slowdowns.
                    </p>
                  </div>
                </div>

                <!-- START of 4th ROW -->
                <!-- ITEM 1-->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-pharmacist-collaborate.png"
                      alt="Collaborate"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Collaborate
                    </h3>
                    <p class="text-base text-center">
                      Allows seamless, secure collaboration.
                    </p>
                  </div>
                </div>

                <!-- ITEM 2 -->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-nurse-synced.png"
                      alt="Synchronize"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Synchronize
                    </h3>
                    <p class="text-base text-center">
                      Syncs your data across all your devices.
                    </p>
                  </div>
                </div>

                <!-- ITEM 3 -->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-lab-tech-decentralized.png"
                      alt="Decentralized"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Decentralized
                    </h3>
                    <p class="text-base text-center">
                      No single point of failure—your data within reach.
                    </p>
                  </div>
                </div>

                <!-- START of 5th ROW -->
                <!-- ITEM 1-->
                <div class="w-full px-4 mb-20 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-mission-pharmacist-open.png"
                      alt="Open"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Open
                    </h3>
                    <p class="text-base text-center">
                      Open-source, for custom and transparency.
                    </p>
                  </div>
                </div>

                <!-- ITEM 2 -->
                <!-- <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="max-w-xs p-5 mx-auto">
                <img
                  src="../assets/images/why-local-first-health-mission-pharma-affordable.png"
                  alt="Affordable"
                  class="w-40 mx-auto"
                />
                <h3 class="mt-4 mb-2 text-2xl font-medium text-center">
                  Affordable
                </h3>
                <p class="text-base text-center">
                  Designed to be cost-effective, making advanced healthcare
                  technology accessible to everyone.
                </p>
              </div>
            </div> -->

                <!-- ITEM 3 -->
                <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div class="max-w-xs p-5 mx-auto">
                    <img
                      src="../assets/images/why-local-first-health-lab-tech-freedom.png"
                      alt="Freedom"
                      class="w-40 mx-auto"
                    />
                    <h3 class="mt-4 mb-2 text-xl font-medium text-center">
                      Freedom
                    </h3>
                    <p class="text-base text-center">
                      Use software your way, no vendor lock-in.
                    </p>
                  </div>
                </div>
                <!-- END OF CARDS -->
              </div>
            </div>

            <!-- END Of Why LF -->
          </div>
        </div>

        <!-- LINE -->
        <div class="w-1/2 my-8 mt-20 border-t border-gray-300"></div>

        <img
          src="../assets/images/section-local-first-health-down.png"
          alt="Void"
          class="w-[200px] h-auto mt-0 mx-auto"
        />
        <p
          class="mt-10 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500"
        >
          Below are health apps being built using the LFH platform.
        </p>

        <!-- LINE -->
        <div class="w-1/3 my-8 border-t border-gray-300"></div>
      </div>
    </div>

    <!-- LFH PRODUCT START -->
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div
        class="container flex flex-col justify-center max-w-5xl px-5 pb-10 mt-4 mb-10 overflow-hidden border-2 border-gray-200 shadow-lg rounded-3xl"
        id="mission"
      >
        <!-- START OF COPY -->
        <div
          class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-12 md:px-10 lg:px-32"
        >
          <p
            class="mt-10 text-xl sm:mb-1 xl:max-w-3xl font-inter"
            id="health-suite"
          >
            The First & Only 'Local-First' Health Management Suite
          </p>
          <h1
            class="mt-0 text-6xl font-bold leadi sm:text-6xl xl:max-w-3xl font-inter"
          >
            A new era of health records management.
          </h1>
          <div class="custom-container">
            <h1 class="items-center custom-heading font-inter">
              <!-- Display the typed text -->
              <span class="typed-text">{{ typeValue }}</span>

              <!-- Blinking cursor -->
              <span class="blinking-cursor">|</span>

              <!-- Optional cursor that changes class based on typeStatus -->
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
          </div>

          <p class="mb-0 text-2xl sm:mb-8 xl:max-w-2xl font-inter">
            Own, manage, and protect your health records with ease right on your
            own computer—no subscription required.<Input:t></Input:t>
          </p>
          <div class="flex flex-wrap justify-center">
            <button
              type="button"
              class="px-8 py-3 m-2 text-lg border border-gray-800 rounded"
            >
              <a style="text-decoration: none; color: inherit">
                Coming Soon. Join the Waitlist.
              </a>
            </button>
          </div>
        </div>
        <!-- END OF COPY -->

        <!-- HEALTH SUITE STARTS HERE -->
        <div
          class="container flex flex-col justify-center max-w-6xl md:flex-row"
        >
          <div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5">
            <img
              src="~/assets/images/local-first-health-suite-easy-joey.png"
              alt="Your Image Description"
              class="w-2/3 sm:w-full rounded-xl"
              data-aos="zoom-in"
            />
          </div>
          <div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5">
            <img
              src="~/assets/images/local-first-health-suite-dentalemon.png"
              alt="Your Image Description"
              class="w-2/3 sm:w-full rounded-xl"
              data-aos="zoom-in"
            />
          </div>
          <div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5">
            <img
              src="~/assets/images/local-first-health-suite-parmago.png"
              alt="Your Image Description"
              class="w-2/3 sm:w-full rounded-xl"
              data-aos="zoom-in"
            />
          </div>
          <div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5">
            <img
              src="~/assets/images/local-first-health-suite-diagnozip.png"
              alt="Your Image Description"
              class="w-2/3 sm:w-full rounded-xl"
              data-aos="zoom-in"
            />
          </div>
          <div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5">
            <img
              src="~/assets/images/local-first-health-suite-ospitalis.png"
              alt="Your Image Description"
              class="w-2/3 sm:w-full rounded-xl"
              data-aos="zoom-in"
            />
          </div>
        </div>

        <!-- TRUE PRIVACY AND DATA FREEDOM -->
        <div
          class="container flex flex-col items-center px-4 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32"
          id="true-privacy"
        >
          <!-- <img
        src="../assets/images/local-first-health-logo-location.png"
        alt="Small Image"
        class="inline-block mt-0 mb-2"
        style="height: 100px; width: auto"
      /> -->
          <h1
            class="mt-5 text-6xl font-bold leadi sm:text-5xl xl:max-w-4xl font-inter"
          >
            True Privacy and Data Freedom
          </h1>
          <p class="max-w-4xl mx-auto mt-4 text-2xl font-inter">
            With Local First Health (LFH), true privacy means your health data
            stays on your device, under your control—no third-party servers, no
            unnecessary risks. You have full data freedom, working offline,
            accessing records anytime, and deciding when and how to share
            information. It's privacy and freedom the way it should be: secure,
            accessible, and entirely yours.
          </p>
        </div>
        <!-- END OF TRUE PRIVACY -->
        <!-- VIDEO HERE -->
        <div
          class="container flex flex-col items-center px-4 py-8 pb-4 mx-auto mt-8 text-center md:py-16 md:-mt-40 md:pb-8 lg:pb-8 md:py-32 md:px-10 lg:px-32"
        >
          <video
            src="../assets/images/easy-joey-1.mp4"
            autoplay
            loop
            muted
            class="w-full mx-auto mt-4 mb-8 border-0 border-gray-800 shadow-2xl md:max-w-5xl md:mb-10 md:mt-20 rounded-3xl"
          ></video>
        </div>
        <!-- end of video -->
      </div>
    </div>

    <!-- END OF LFH PRODUCT START -->

    <!-- START of Our Story -->
    <div class="container max-w-xl p-6 mx-auto lg:max-w-7xl" id="our-story">
      <div class="text-center" id="our_story">
        <h2 class="mt-20 text-3xl font-bold tracki sm:text-5xl font-inter">
          Our Story
        </h2>
        <!-- IMAGE HERE -->
        <img
          src="../assets/images/local-first-health-team.png"
          alt="local first health team image"
          class="inline-block mt-5"
          style="height: 300px; width: auto"
        />
        <!-- END OF IMAGE -->
        <p
          class="max-w-2xl mx-auto mt-10 text-xl text-left text-neutral-600 font-courier"
        >
          Our team has been developing health record systems since 2016. Even
          before the local-first concept was introduced in 2019, we were
          building offline functionality with our own ‘Syncbase’ technology,
          integrated into our health app,

          <a
            href="https://www.mycure.md"
            class="underline text-sky-600"
            target="_blank"
            >"MYCURE."</a
          >
          Over the past 8+ years, we've encountered the challenges in this
          sector and experienced firsthand the limitations of a cloud-based
          setup.
          <br /><br />

          Before relocating to San Francisco, I traveled extensively across the
          Philippines, Indonesia, Ethiopia, Kenya, South Africa, India, Sri
          Lanka, and other countries to observe the difficulties faced by
          doctors, small clinics, and communtiy drugstores, particularly in
          developing regions. Many still rely on paper-based or outdated
          systems, highlighting a stark reality: health equity remains a
          significant global issue.
          <br /><br />
          Health equity, a top priority for organizations like the World Health
          Organization (WHO), is about ensuring fair and just access to
          healthcare for all individuals, regardless of socio-economic status,
          ethnicity, gender, or geographic location. A critical aspect of this
          is the ability to access and manage medical records. Yet, in many low-
          and middle-income countries and marginalized communities, disparities
          in health outcomes persist due to limited or outdated systems that
          hinder access to vital health information.

          <br /><br />
          We believe that 'Local-First Health' is the solution to these
          persistent issues. By putting data ownership and management back into
          the hands of healthcare providers and patients, LFH aims to bridge the
          gap in healthcare accessibility, empowering underserved communities
          with secure, offline-capable solutions.

          <br /><br />
          It’s time to finally solve the holy grail of healthcare data and
          contribute to a world where health equity is more than just an
          aspiration—it’s a reality.
          <br /><br />
          The future is now—and it’s local.
          <br /><br />

          Dale David<br />
          Founder<br />
          Local-First Health <br />
          San Francisco, CA <br />
          localfirsthealth@gmail.com <br />
          <br />

          <!-- twitter -->
          <a
            href="https://x.com/localfirsthlth"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-block"
          >
            <img
              src="../assets/images/x.svg"
              alt="Substack Icon"
              width="24"
              height="24"
            />
          </a>
          <!-- Icon links -->
          <a
            href="https://localfirsthealth.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-block; margin-left: 20px"
          >
            <img
              src="../assets/images/substack.svg"
              alt="Substack Icon"
              width="24"
              height="24"
            />
          </a>
        </p>
        <p
          class="max-w-2xl mx-auto mt-4 text-xl text-left text-neutral-600 font-courier"
        >
          PS - I participated in the first Local-First Conference, recently held
          in Berlin, Germany (May 2024). This movement is indeed growing.
          Re-live the energy of the conference in a

          <a
            href="https://www.youtube.com/watch?v=cLuX0AFNJzQ"
            class="underline text-sky-600"
            target="_blank"
            >96-second video.</a
          ><br />
          <br />
        </p>

        <br /><br />
        <div class="flex justify-center mt-10">
          <img
            src="../assets/images/local-first-health-hands-2.png"
            alt="Logo"
            class="object-contain w-full max-w-md"
          />
        </div>
      </div>
    </div>

    <!-- END OF OUR Story -->

    <!-- START OF FOOTER -->
    <footer class="px-4 divide-y">
      <div class="flex flex-col items-center py-6">
        <img
          src="../assets/images/local-first-health-logo-location-brown.png"
          alt="Local First Health Logo"
          class="w-auto h-10 mb-2"
        />
        <!-- Logo added here -->
        <div class="text-sm text-center">Born in San Francisco, CA</div>
        <div class="text-sm text-center">localfirsthealth@gmail.com</div>
        <div class="text-sm text-center">
          © 2024 Local First Health | All rights reserved.
        </div>
      </div>
    </footer>
    <!-- END OF FOOTER -->
    <!-- TEST TEST TEST FOR SECOND PAGE LINK-->
    <!-- <nuxt-link to="/dentalemon" class="block mt-5">
      <img
        src="~/assets/images/local-first-health-suite-easy-joey.png"
        alt="Dental Page Icon"
        class="w-16 h-16 mx-auto"
      />
      <p class="mt-2 text-lg">Go to Dental Page</p>
    </nuxt-link> -->
    <!-- END OF TEST -->
  </section>
</template>

<style scoped>
/* type of font */
.font-inter {
  font-family: "Inter", sans-serif;
  /* Replace 'Inter' with your font's name if different */
}

.font-courier {
  font-family: "Courier", monospace;
}

/* easyjoey logo container */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  /* Adjust the margin as needed */
}

/* Style for the logo */
.logo {
  max-width: 200px;
  /* Set the maximum width of your logo */
  height: auto;
  /* Maintain the aspect ratio */
  margin-right: 10px;
  /* Adjust the margin as needed */
}

/* font animation container */
.custom-container {
  /* width: 100%;
  height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-heading {
  font-size: 3rem;
  font-weight: normal;
}

/* animation blinking */
.custom-heading .typed-text {
  color: #009999;
}

.blinking-cursor {
  font-size: 2rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

/* end of animation blinking */

/* start of waitlist modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it overlays other content */
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 500px;
  height: auto; /* Adjust height based on content */
  z-index: 1100;
  overflow-y: auto; /* Add vertical scrolling if content exceeds modal height */
  max-height: 90vh; /* Keep the modal from growing too large */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .modal-content {
    width: 90%;
  }
}

.getWaitlistContainer {
  width: 100%;
  height: auto;
  display: block;
}
/* end of waitlist modal */

/* for highlights js */
.code-block-container pre {
  padding: 0;
  margin: 0;
  text-align: left;
  white-space: pre-wrap; /* Allows long code lines to wrap */
}

.code-block-container code {
  display: block;
  overflow-x: auto;
  padding: 1rem;
  background-color: #272822; /* Monokai theme background color */
  color: #f8f8f2; /* Monokai theme text color */
  border-radius: 5px;
  font-size: 0.9rem; /* This is where you adjust the font size, 0.875rem is smaller */
  line-height: 1.4; /* Adjust line height for readability */
}
/* end highlights js */
</style>
