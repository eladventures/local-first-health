<script setup>
import { ref } from "vue";
import { useHead } from "#imports";
import { definePageMeta } from "#imports";
// import GenericPanel from "~/components/commons/GenericPanel";
import ogBanner from "../assets/images/local-first-health-banner.png";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Local-First Health",
  description: "Local-First Health is the first and only local-first health .",
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

const typeValue = ref("");
const typeStatus = ref(false);
const displayTextArray = ref([
  "Works Offline",
  "Own Your Data",
  "Instant Response",
  "Collaborative",
  "Private and Secure",
  "Future-Proof",
]);
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

onMounted(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});

const typeText = () => {
  if (
    charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length
  ) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += displayTextArray.value[
      displayTextArrayIndex.value
    ].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};

function eraseText() {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray.value[
      displayTextArrayIndex.value
    ].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed.value + 1000);
  }
}

// export default {
//   components: {
//     GenericPanel,
//   },
//   setup () {

//     return {};
//   },
//   data: () => {
//     return {
//       typeValue: "",
//       typeStatus: false,
//       displayTextArray: [
//         "It's Affordable",
//         "It Works Offline",
//         "It's Secure",
//         "It's Private",
//         "It's Shareable",
//         "It's Record-Centric",
//         "It's Encrypted",
//       ],
//       typingSpeed: 100,
//       erasingSpeed: 100,
//       newTextDelay: 2000,
//       displayTextArrayIndex: 0,
//       charIndex: 0,
//     };
//   },
//   props: {},
//   created() {
//     setTimeout(this.typeText, this.newTextDelay + 200);
//   },
//   methods: {
//     typeText() {
//       if (
//         this.charIndex <
//         this.displayTextArray[this.displayTextArrayIndex].length
//       ) {
//         if (!this.typeStatus) this.typeStatus = true;
//         this.typeValue += this.displayTextArray[
//           this.displayTextArrayIndex
//         ].charAt(this.charIndex);
//         this.charIndex += 1;
//         setTimeout(this.typeText, this.typingSpeed);
//       } else {
//         this.typeStatus = false;
//         setTimeout(this.eraseText, this.newTextDelay);
//       }
//     },
//     eraseText() {
//       if (this.charIndex > 0) {
//         if (!this.typeStatus) this.typeStatus = true;
//         this.typeValue = this.displayTextArray[
//           this.displayTextArrayIndex
//         ].substring(0, this.charIndex - 1);
//         this.charIndex -= 1;
//         setTimeout(this.eraseText, this.erasingSpeed);
//       } else {
//         this.typeStatus = false;
//         this.displayTextArrayIndex += 1;
//         if (this.displayTextArrayIndex >= this.displayTextArray.length)
//           this.displayTextArrayIndex = 0;
//         setTimeout(this.typeText, this.typingSpeed + 1000);
//       }
//     },
//   },
// };
</script>

<template>
  <!-- HERO PANEL -->
  <!-- Animation souce  https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj -->

  <!-- <section class="bg-gray-100"> -->
  <section class="bg-white">
    <div>
      <div
        class="container flex flex-col items-center px-4 pt-16 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-32 md:px-10 lg:px-32"
      >
        <p class="text-xl sm:mb-12 xl:max-w-3xl font-inter">
          The First & Only 'Local-First' Health Management Suite
        </p>
        <h1
          class="-mt-10 text-6xl font-bold leadi sm:text-6xl xl:max-w-3xl font-inter"
        >
          A new era of health records management.
        </h1>
        <div class="custom-container">
          <h1 class="items-center custom-heading font-inter">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
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
            <a
              href="#local_first_panel"
              style="text-decoration: none; color: inherit"
            >
              What is Local-First?
            </a>
          </button>
        </div>
      </div>
    </div>

    <!-- HEALTH SUITE STARTS HERE -->
    <div class="container mx-auto lg:max-w-6xl" id="mission">
      <!-- <div class="text-left">
        <p
          class="max-w-4xl px-5 mx-auto mt-10 text-3xl font-bold tracki sm:text-3xl font-inter"
        >
          The Mission
        </p>
      </div> -->

      <div
        class="container flex flex-col justify-center max-w-6xl mt-4 mb-10 md:flex-row"
      >
        <!-- <div class="flex flex-col justify-center mt-4 md:flex-row"> -->
        <div class="w-full mx-2 text-left md:w-1/5">
          <img
            src="~/assets/images/local-first-health-suite-easy-joey.png"
            alt="Your Image Description"
            class="w-full rounded-xl"
            data-aos="zoom-in"
          />
        </div>
        <div class="w-full mx-2 text-left md:w-1/5">
          <img
            src="~/assets/images/local-first-health-suite-dentalemon.png"
            alt="Your Image Description"
            class="w-full rounded-xl"
            data-aos="zoom-in"
          />
        </div>
        <div class="w-full mx-2 text-left md:w-1/5">
          <img
            src="~/assets/images/local-first-health-suite-parmago.png"
            alt="Your Image Description"
            class="w-full rounded-xl"
            data-aos="zoom-in"
          />
        </div>
        <div class="w-full mx-2 text-left md:w-1/5">
          <img
            src="~/assets/images/local-first-health-suite-diagnozip.png"
            alt="Your Image Description"
            class="w-full rounded-xl"
            data-aos="zoom-in"
          />
        </div>
        <div class="w-full mx-2 text-left md:w-1/5">
          <img
            src="~/assets/images/local-first-health-suite-ospitalis.png"
            alt="Your Image Description"
            class="w-full rounded-xl"
            data-aos="zoom-in"
          />
        </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- HEALTH SUITE ENDS HERE -->

    <!-- VIDEO HERE -->
    <!-- <div
      class="container flex flex-col items-center px-4 py-8 pb-4 mx-auto mt-8 text-center md:py-16 md:-mt-40 md:pb-8 lg:pb-8 md:py-32 md:px-10 lg:px-32"
    >
      <video
        src="../assets/images/easy-joey-1.mp4"
        autoplay
        loop
        muted
        class="w-full mx-auto mt-4 mb-8 border-0 border-gray-800 shadow-2xl md:max-w-5xl md:mb-10 md:mt-20 rounded-3xl"
      ></video>
    </div> -->
    <!-- TRUE PRIVACY AND DATA FREEDOM -->
    <div
      class="container flex flex-col items-center px-4 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32"
      id="true-privacy"
    >
      <img
        src="../assets/images/local-first-health-logo-location.png"
        alt="Small Image"
        class="inline-block mt-0 mb-2"
        style="height: 100px; width: auto"
      />
      <h1
        class="mt-5 text-6xl font-bold leadi sm:text-5xl xl:max-w-4xl font-inter"
      >
        True Privacy and Data Freedom
      </h1>
      <p class="max-w-3xl mx-auto mt-4 text-2xl font-inter">
        <b>Our healthcare systems are broken.</b> Despite technological
        advances, medical records remain vulnerable and out of users' control,
        stored in third-party clouds and exposed to breaches. It's time to put
        data ownership and management back where they belong—in the hands of
        healthcare providers and patients.
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
    <!-- START OF WHY LFH -->
    <div
      class="container flex flex-col items-center max-w-md p-6 mx-auto text-gray-900 bg-white lg:max-w-5xl rounded-3xl"
      id="whylfh"
    >
      <div class="text-center">
        <h1
          class="mt-10 text-6xl font-bold leadi sm:text-3xl xl:max-w-4xl font-inter"
        >
          Why Local-First Health?
        </h1>
      </div>

      <!-- FIRST -->
      <div
        id="why-local-first-health"
        class="pt-1 pb-5 text-xs text-neutral-600"
        style="font-family: Arial, sans-serif"
      >
        <!-- 1ST ROW OF CARDS -->
        <div
          class="flex flex-wrap justify-center max-w-5xl mx-auto mt-5"
          style="font-family: Arial, sans-serif"
        >
          <!-- remvoe comment mode to bring back to default -->
          <!-- <div class="flex flex-wrap justify-center max-w-5xl mx-auto mt-5"> -->
          <!-- ITEM 1-->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-lab-tech-no-subscription.png"
                alt="No Subscription"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                No Subscription
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> requires no subscription - no
                monthly fees, no hidden costs.
              </p>
            </div>
          </div>

          <!-- ITEM 2-->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-mission-doctor-work-offline.png"
                alt="Works Offline"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Works Offline
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> work anywhere even without an
                internet connection.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Own Your Data
              </h3>
              <p class="text-base text-center">
                With <b class="font-bold">LFH Apps,</b> your data stays with
                you, fully controlled and always accessible.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Own the Software
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> gives you full ownership, so
                you control the software without relying on external providers.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Compliant
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> are built to meet industry
                standards and regulations, ensuring compliance and peace of
                mind.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                True Privacy
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> keep your data private, with
                no third-party access or unnecessary sharing.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Secure
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> provide robust security
                features that protect your data from breaches and unauthorized
                access.
              </p>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-mission-doctor-super.png"
                alt="Powerful"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Powerful
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> are equipped with advanced
                tools to handle all your healthcare needs efficiently.
              </p>
            </div>
          </div>

          <!-- ITEM 3-->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-mission-lab-tech-fast.png"
                alt="Fast"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Fast
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> deliver lightning-fast
                performance, free from server lag or internet slowdowns.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Collaborate
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> allow seamless collaboration
                while keeping your data secure and private.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Synchronize
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> sync your data across all your
                devices effortlessly, ensuring everything is up-to-date.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Decentralized
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> are decentralized, meaning no
                single point of failure—your data is always within your reach.
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
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Open
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> are built on an open-source
                foundation, allowing for customization and transparency.
              </p>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-mission-pharma-affordable.png"
                alt="Affordable"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Affordable
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> are designed to be
                cost-effective, making advanced healthcare technology accessible
                to everyone.
              </p>
            </div>
          </div>

          <!-- ITEM 3 -->
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="max-w-xs p-5 mx-auto">
              <img
                src="../assets/images/why-local-first-health-lab-tech-freedom.png"
                alt="Freedom"
                class="w-40 mx-auto"
              />
              <h3
                class="mt-4 mb-2 text-2xl font-medium text-center text-sky-600"
              >
                Freedom
              </h3>
              <p class="text-base text-center">
                <b class="font-bold">LFH Apps</b> give you the freedom to use
                the software your way, with no restrictions or vendor lock-in.
              </p>
            </div>
          </div>
          <!-- END OF CARDS -->
        </div>
      </div>
    </div>
    <!-- END OF EHY LFH -->

    <!-- START OF What is LF? -->
    <div
      class="container max-w-xl p-6 py-12 mx-auto mb-20 space-y-24 bg-amber-100 lg:px-8 lg:max-w-5xl rounded-3xl"
    >
      <div id="local_first">
        <h2
          class="text-3xl font-bold text-center tracki sm:text-5xl text-neutral font-inter"
        >
          What is Local-First?
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center font-inter">
          Local-First is a software paradigm that ensures data stays on users’
          devices, offering full control, privacy, and offline access. Unlike
          cloud-based systems that rely on third-party servers, Local-First
          combines the local storage of the pre-cloud era with modern sync
          capabilities, enabling seamless collaboration without sacrificing data
          ownership.
          <!-- <em>
            <small>
              * Ink & Switch's

              <a
                href="https://www.inkandswitch.com/local-first/"
                target="_blank"
                ><u> research paper</u></a
              >

              has been key in defining and solidifying this concept.
            </small>
          </em> -->
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
        </div>

        <div class="flex flex-col items-center mt-10">
          <img
            src="../assets/images/local-first-health-wired-magazine.png"
            alt="Wired Mag Local-First"
            class="inline-block my-2"
            style="height: auto; width: 600px"
          />

          <p class="max-w-xl mx-auto mt-4 text-xl text-center text-neutral-600">
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

    <!-- END OF What is LF? -->
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
          class="max-w-2xl mx-auto mt-10 text-xl text-justify text-neutral-600"
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
        <p class="max-w-2xl mx-auto mt-4 text-xl text-justify text-neutral-600">
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
        <img
          src="../assets/images/local-first-health-hands-2.png"
          alt="Logo"
          class="inline-block mt-10"
          style="height: 550px; width: auto"
        />
      </div>
    </div>

    <!-- END OF OUR Story -->

    <!-- START OF FOOTER -->
    <footer class="px-4 divide-y">
      <div class="flex flex-col items-center py-6">
        <img
          src="../assets/images/local-first-health-logo-location.png"
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
  font-size: 2.5rem;
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
</style>
