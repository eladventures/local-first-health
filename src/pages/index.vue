<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "#imports";
import { definePageMeta } from "#imports";

import ogBanner from "../assets/images/local-first-health-banner.png"; // Ensure this path is correct

definePageMeta({
  layout: "default",
});

useHead({
  title: "Local-First Health",
  description:
    "The first and only 'Local-First' Healthcare Suite—Reshaping healthcare with secure, private, offline, and data-owned solutions.",
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
</script>

<template>
  <section class="bg-white font-kalam">
    <div
      class="container flex flex-col items-center px-4 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32"
      id="our-story"
    >
      <!--MAIN PANEL -->
      <!-- new era of health records management-->
      <img
        src="../assets/images/local-first-health-logo-location.png"
        alt="Small Image"
        class="inline-block mt-0 mb-2"
        style="height: 150px; width: auto"
      />

      <b
        class="text-4xl text-neutral-600"
        style="font-family: Arial, sans-serif"
        >Local First Health</b
      >

      <p
        class="max-w-2xl mx-auto mt-0 mb-5 text-xl text-justify text-neutral-500"
        style="font-family: Arial, sans-serif"
      >
        a new era of health records management
      </p>

      <p class="max-w-2xl mx-auto mt-10 text-2xl text-center text-neutral-600">
        Our healthcare systems are broken.
      </p>
      <p class="max-w-2xl mx-auto text-2xl text-justify text-neutral-600">
        <br />
        Despite technological advances, medical records remain vulnerable and
        out of users' control, stored in third-party clouds and exposed to
        breaches.
        <br /><br />
        Local-First Health puts data ownership and management back where they
        belong—in the hands of healthcare providers and patients. With secure,
        offline-capable solutions, LFH removes dependence on system providers
        and unreliable internet, offering seamless, efficient, and private
        health records management.
      </p>

      <!-- END OF MAIN PANEL -->

      <br />
      <!-- START OF WHY LOFCAL FIRST HEALTH-->
      <!-- FIRST -->
      <div
        id="why-local-first-health"
        class="pt-1 pb-5 text-xs text-neutral-600"
        style="font-family: Arial, sans-serif"
      >
        <h3 class="px-3 mt-10 mb-3 text-2xl font-bold text-center">
          Why Local-First Health?
        </h3>
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
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
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

      <!-- END OF WHY LFH -->

      <!-- START OF WHAT ARE LFH APPS? -->
      <h3
        id="local-first-health-apps"
        class="px-3 mt-20 mb-3 text-2xl font-bold text-center text-neutral-600"
        style="font-family: Arial, sans-serif"
      >
        The Local-First Health Suite
      </h3>

      <!-- <h3
        id="local-first-health-apps"
        class="px-3 mt-20 mb-3 text-3xl font-bold text-center underline text-sky-600"
      >
        What are the Local-First Health Apps?
      </h3> -->

      <!-- <img
        src="../assets/images/local-first-health-mission.png"
        alt="Small Image"
        class="inline-block mt-8 mb-2"
        style="height: 300px; width: auto"
      /> -->

      <p class="max-w-3xl mx-auto mt-4 text-2xl text-justify text-neutral-600">
        Local-First Health is an initiative focused on building the world’s
        first and only local-first health apps—a powerful suite of products
        designed to empower the millions of healthcare providers and facilities
        worldwide that either lack systems or struggle with outdated ones.
      </p>
    </div>

    <div
      class="container flex flex-col items-center px-0 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-0 md:px-10 lg:px-32"
      id="products"
    >
      <!-- HEALTH SUITE -->
      <div
        class="grid w-full max-w-3xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-5"
      >
        <!-- First Product -->
        <div class="flex flex-col items-center">
          <a
            href="https://www.easyjoey.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="w-full h-auto">
              <img
                src="~/assets/images/logo-local-first-health-suite-easyjoey.png"
                alt="Clinic Management System"
                class="object-cover w-full h-full"
              />
            </div>
          </a>

          <p class="w-full mt-2 text-lg text-center">
            <b>
              <a
                href="https://www.easyjoey.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                EasyJoey
              </a>
            </b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Solo Practice & Small Clinics
          </p>
        </div>

        <!-- Repeat for other products -->
        <div class="flex flex-col items-center">
          <div class="w-full h-auto">
            <img
              src="~/assets/images/logo-local-first-health-suite-parmago.png"
              alt="Pharmacy Management System"
              class="object-cover w-full h-full"
            />
          </div>
          <p class="w-full mt-2 text-lg text-center">
            <b>ParmaGO</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Pharmacies & Drugstores
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-full h-auto">
            <img
              src="~/assets/images/logo-local-first-health-suite-dentalemon.png"
              alt="Dental Management System"
              class="object-cover w-full h-full"
            />
          </div>
          <p class="w-full mt-2 text-lg text-center">
            <b>Dentalemon</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Dentists & Dental Clinics
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-full h-auto">
            <img
              src="~/assets/images/logo-local-first-health-suite-diagnozip.png"
              alt="Laboratory & Radiology Information Systems"
              class="object-cover w-full h-full"
            />
          </div>
          <p class="w-full mt-2 text-lg text-center">
            <b>Diagnozip</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Laboratories & Imaging Centers
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-full h-auto">
            <img
              src="~/assets/images/logo-local-first-health-suite-ospitalis.png"
              alt="Hospital Management System"
              class="object-cover w-full h-full"
            />
          </div>
          <p class="w-full mt-2 text-lg text-center">
            <b>Ospitalis</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">For Hospitals</p>
        </div>
      </div>

      <!-- END OF HEALTH SUITE -->

      <p class="max-w-3xl mx-auto mt-10 text-2xl text-justify text-neutral-600">
        Unlike traditional systems, which can lock you out of your data,
        local-first health apps ensure your information is always accessible,
        regardless of internet connectivity. It also offers seamless
        synchronization and interoperability for a fully integrated experience.
        Best of all, there’s no subscription required—just a one-time payment.
      </p>

      <video
        src="../assets/videos/easy-joey-1.mp4"
        alt="Small Video"
        class="inline-block max-w-3xl mt-10 mb-2 border border-gray-400 shadow-lg"
        style="height: auto; width: auto"
        autoplay
        loop
        muted
        playsinline
      >
        Your browser does not support the video tag.
      </video>

      <p class="max-w-3xl mx-auto mt-10 text-2xl text-justify text-neutral-600">
        Although LFH only recently begun this initiative, the core technologies
        needed to build our health apps are already in place (see 'our story'
        below), allowing the team to accelerate the development process.
        <a
          href="https://www.easyjoey.com"
          class="underline text-sky-600"
          target="_blank"
          >"EasyJoey"</a
        >
        is already in Alpha and is set to be released by the fourth quarter of
        2024, with other apps following thereafter.
      </p>

      <!-- WHAT IS LOCAL-FIRST? -->

      <h3
        id="local-first"
        class="px-3 mt-20 mb-3 text-2xl font-bold text-justify text-neutral-600"
        style="font-family: Arial, sans-serif"
      >
        What is Local-First?
      </h3>

      <p class="max-w-3xl mx-auto mt-5 text-2xl text-justify text-neutral-600">
        Local-First is a software paradigm that ensures data stays on users’
        devices, offering full control, privacy, and offline access. Unlike
        cloud-based systems that rely on third-party servers, Local-First
        combines the local storage of the pre-cloud era with modern sync
        capabilities, enabling seamless collaboration without sacrificing data
        ownership.
      </p>
      <!-- Local-First Diagram -->
      <!-- <img
        src="../assets/images/local-first-health-era-diagram.png"
        alt="Small Image"
        class="inline-block max-w-3xl mt-10 mb-2"
        style="height: auto; width: auto"
      /> -->
      <div
        class="grid w-full max-w-3xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3"
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

      <br /><br />

      <img
        src="../assets/images/local-first-health-ink-switch-paper.png"
        alt="Ink & Switch Paper"
        class="inline-block my-2"
        style="height: auto; width: 600px"
      />

      <p class="max-w-xl mx-auto mt-4 text-2xl text-justify text-neutral-600">
        The concept was introduced in a 2019 whitepaper by Ink & Switch titled
        <a
          href="https://www.inkandswitch.com/local-first/"
          class="underline text-sky-600"
          target="_blank"
          >"Local-first software: You own your data, in spite of the cloud."</a
        >

        , a pivotal document outlining seven key principles.
        <br /><br />
      </p>

      <img
        src="../assets/images/local-first-health-wired-magazine.png"
        alt="Wired Mag Local-First"
        class="inline-block my-2"
        style="height: auto; width: 600px"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify text-neutral-600">
        Even Wired Magazine featured an

        <a
          href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/"
          class="underline text-sky-600"
          target="_blank"
          >article</a
        >
        on Local-First <br />(August 2023).
      </p>

      <!-- END OF WHAT IS LOCAL-FIRST -->

      <!-- <p class="max-w-2xl mx-auto -mt-5 text-2xl text-justify">
        We also plan to open source the foundational core, empowering developers
        to easily create local-first health apps. More importantly, this
        approach allows for the development of localized features and
        functionalities tailored to specific cities or areas, rather than
        relying on a one-size-fits-all solution dictated by a few providers.
        Ultimately, this will benefit everyone—because we are all part of the
        healthcare ecosystem.
      </p>
      <br /> -->

      <h3
        id="mission"
        class="px-3 mt-20 mb-3 text-3xl font-bold text-center text-neutral-600"
        style="font-family: Arial, sans-serif"
      >
        Our Mission
      </h3>

      <img
        src="../assets/images/local-first-health-team.png"
        alt="local first health team image"
        class="inline-block mt-0"
        style="height: 300px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify text-neutral-600">
        Our team has been developing health record systems since 2016. Even
        before the local-first concept was introduced in 2019, we were building
        offline functionality with our own ‘Syncbase’ technology, integrated
        into our health app,

        <a
          href="https://www.mycure.md"
          class="underline text-sky-600"
          target="_blank"
          >"MYCURE."</a
        >
        Over the past 8+ years, we've encountered the challenges in this sector
        and experienced firsthand the limitations of a cloud-based setup.
        <br /><br />
        Before relocating to San Francisco, I traveled extensively across the
        Philippines, Indonesia, Ethiopia, Kenya, South Africa, India, Sri Lanka,
        and other countries to observe the difficulties faced by doctors, small
        clinics, and communtiy drugstores, particularly in developing regions.
        Many still rely on paper-based or outdated systems, highlighting a stark
        reality: health equity remains a significant global issue.
        <br /><br />
        Health equity, a top priority for organizations like the World Health
        Organization (WHO), is about ensuring fair and just access to healthcare
        for all individuals, regardless of socio-economic status, ethnicity,
        gender, or geographic location. A critical aspect of this is the ability
        to access and manage medical records. Yet, in many low- and
        middle-income countries and marginalized communities, disparities in
        health outcomes persist due to limited or outdated systems that hinder
        access to vital health information.

        <br /><br />
        We believe that 'Local-First Health' is the solution to these persistent
        issues. By putting data ownership and management back into the hands of
        healthcare providers and patients, LFH aims to bridge the gap in
        healthcare accessibility, empowering underserved communities with
        secure, offline-capable solutions.

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

        <!-- Reddit Icon -->
        <!-- <a href="https://reddit.com/r/localfirsthealth" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-left: 20px;">
    <img src="../assets/images/reddit.svg" alt="Substack Icon" width="24" height="24" />
    
</a> -->
      </p>

      <br />
      <br />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify text-neutral-600">
        PS - I participated in the first Local-First Conference, recently held
        in Berlin, Germany (May 2024). This movement is indeed growing. Re-live
        the energy of the conference in a

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

@font-face {
  font-family: "Kalam";
  src: url("../assets/fonts/Kalam-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.font-kalam {
  font-family: "Kalam", sans-serif;
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
</style>
