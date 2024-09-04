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
      <!-- Adjust path as necessary -->

      <p class="w-full max-w-2xl mt-20 text-2xl text-left">
        Dear healthcare providers and everyone,
      </p>

      <br />

      <!-- 1ST Section -->
      <img
        src="../assets/images/local-first-health-broken.png"
        alt="Small Image"
        class="inline-block mt-20 mb-2"
        style="height: 170px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        As you know, our healthcare systems are broken. Despite the advances in
        technology, our medical records remain vulnerable to security concerns
        and privacy issues.
      </p>

      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-ownership.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 180px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        Right now, we don’t have total ownership and control of our data; it’s
        stored in third-party clouds, leaving it open to hacks and breaches.
        This constant threat to our privacy is unacceptable.
      </p>

      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-interoperable.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 180px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        And the idea of seamless collaboration and interoperability? It’s still
        a distant dream.
      </p>
      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-confused-expensive.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 180px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        For healthcare providers, including clinics, diagnostic centers, and
        other facilities, the challenges are even greater. The high costs and
        complexity of electronic medical records (EMR) systems are daunting.
      </p>
      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-paper-records.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 170px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        Many health facilities still rely on paper records, basic spreadsheets,
        or outdated systems that are error-prone and inefficient.
      </p>
      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-vendor-lockin.png"
        alt="Small Image"
        class="inline-block my-0"
        style="height: 200px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-3 text-2xl text-justify">
        Dependence on specific EMR vendors often results in vendor lock-in,
        making it difficult to switch providers and retain access to your data.
        If the vendor shuts down or payments are missed, access to vital medical
        records can be suddenly cut off.
      </p>
      <br />

      <!-- SECTION -->
      <img
        src="../assets/images/local-first-health-offline.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 150px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        Cloud-based systems, while innovative, aren’t always practical. In areas
        with unstable internet, timely access to medical records is crucial.
        These systems often lack robust security measures, putting sensitive
        patient data at risk.
      </p>
      <br />

      <!-- 5th -->
      <img
        src="../assets/images/local-first-health-sharing.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 150px; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        Additionally, the difficulty in sharing medical records across
        facilities disrupts continuity of care. Millions of healthcare providers
        worldwide are stuck with fragmented, inefficient systems that compromise
        patient care.
      </p>
      <br />

      <!-- FORTUNATELY -->
      <img
        src="../assets/images/local-first-health-letters.png"
        alt="Small Image"
        class="inline-block mt-8 mb-2"
        style="height: 190px; width: auto"
      />
      <p class="max-w-2xl mx-auto -mt-8 text-2xl text-justify">
        <u>
          Thankfully, there's a powerful solution to these challenges: the
          "Local-First" software approach.</u
        >
      </p>

      <br /><br />
      <!-- Local-First Diagram -->
      <img
        src="../assets/images/local-first-health-era-diagram.png"
        alt="Small Image"
        class="inline-block max-w-3xl mt-0 mb-2"
        style="height: auto; width: auto"
      />
      <p class="max-w-2xl mx-auto mt-5 text-2xl text-justify">
        Local-First is a software paradigm that ensures data stays on users’
        devices, offering full control, privacy, and offline access. Unlike
        cloud-based systems that rely on third-party servers, Local-First
        combines the local storage of the pre-cloud era with modern sync
        capabilities, enabling seamless collaboration without sacrificing data
        ownership.
      </p>

      <br /><br />

      <img
        src="../assets/images/local-first-health-ink-switch-paper.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 150px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        The concept was introduced in a 2019 whitepaper by Ink & Switch titled
        <a
          href="https://www.inkandswitch.com/local-first/"
          style="color: teal; text-decoration: underline"
          target="_blank"
          >"Local-first software: You own your data, in spite of the cloud."</a
        >

        , a pivotal document outlining seven key principles::
        <br /><br />
      </p>

      <!-- LOCAL-FIRST PRINCIPLES -->
      <p class="max-w-xl mx-auto text-2xl text-left">
        1. <u>User Ownership:</u> Keep your data under your control, not locked
        away in remote servers.

        <br /><br />

        2. <u>Offline Functionality:</u> Access and use the software fully, even
        without an internet connection.

        <br /><br />

        3. <u>Data Synchronization:</u> When you’re online, data syncs across
        all your devices, ensuring everything is up to date.

        <br /><br />

        4. <u>Improved Security:</u> By storing data locally, the risk of
        external breaches is significantly reduced.

        <br /><br />

        5. <u>Faster Response Times:</u> Experience quicker, more reliable
        performance without relying on server response times.

        <br /><br />

        6. <u>Seamless Collaboration:</u> Collaborate efficiently without the
        delays associated with cloud services, syncing only when necessary.

        <br /><br />

        7. <u>Long-Term Availability:</u> Ensure your data remains accessible
        over the long term, free from the risk of remote server shutdowns or
        discontinuations.

        <br /><br />
      </p>

      <img
        src="../assets/images/local-first-health-wired-magazine.png"
        alt="Small Image"
        class="inline-block my-2"
        style="height: 150px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-left">
        Even Wired Magazine featured an

        <a
          href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/"
          style="color: teal; text-decoration: underline"
          target="_blank"
          >article</a
        >
        on Local-First (August 2023).
      </p>

      <img
        src="../assets/images/local-first-health-mission.png"
        alt="Small Image"
        class="inline-block mt-8 mb-2"
        style="height: 300px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        That’s why we’ve created the Local-First Health initiative, focused on
        developing healthcare apps that prioritize security, accessibility, and
        user control—using these principles to bring the benefits of local-first
        to healthcare.
      </p>
    </div>

    <div
      class="container flex flex-col items-center px-4 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32"
      id="products"
    >
      <!-- HEALTH SUITE -->
      <div
        class="grid w-full max-w-2xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-5"
      >
        <div class="flex flex-col items-center">
          <a
            href="https://www.easyjoey.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/local-first-health-suite-easyjoey.png"
              alt="Clinic Management System"
              class="object-contain w-full h-auto"
            />
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
        <div class="flex flex-col items-center">
          <img
            src="~/assets/images/local-first-health-suite-parmago.png"
            alt="Pharmacy Management System"
            class="object-contain w-full h-auto"
          />
          <p class="w-full mt-2 text-lg text-center">
            <b>ParmaGO</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Pharmacies & Drustores
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="~/assets/images/local-first-health-suite-dentalulu.png"
            alt="Dental Management System"
            class="object-contain w-full h-auto"
          />
          <p class="w-full mt-2 text-lg text-center">
            <b>Dentalulu</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Dentists & Dental Clinics
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="~/assets/images/local-first-health-suite-diagnozip.png"
            alt="Laboratory & Radiology Information Systems"
            class="object-contain w-full h-auto"
          />
          <p class="w-full mt-2 text-lg text-center">
            <b>Diagnozip</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">
            For Laboratories & Imaging Centers
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="~/assets/images/local-first-health-suite-ospitalis.png"
            alt="Hospital Management System"
            class="object-contain w-full h-auto"
          />
          <p class="w-full mt-2 text-lg text-center">
            <b>Ospitalis</b>
          </p>
          <p class="w-full mt-0 text-sm text-center">For Hospitals</p>
        </div>
      </div>
      <!-- END OF HEALTH SUITE -->
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        We’re building the world’s first and only local-first health apps—a
        powerful suite of products designed to empower the millions of
        healthcare providers and facilities worldwide that either lack systems
        or struggle with outdated ones.
      </p>
      <br />

      <img
        src="../assets/images/local-first-health-no-subscription.png"
        alt="Small Image"
        class="inline-block mt-10"
        style="height: 180px; width: auto"
      />

      <p class="max-w-2xl mx-auto -mt-5 text-2xl text-justify">
        Unlike traditional systems, which can lock you out of your data,
        local-first ensures your information is always accessible, regardless of
        internet connectivity. It also offers seamless synchronization and
        interoperability for a fully integrated experience. Best of all, there’s
        no subscription required—just a one-time payment.
      </p>
      <br />
      <p class="max-w-2xl mx-auto mt-0 text-2xl text-justfy">
        The Local-First Health Apps in a Nutshell:
      </p>
      <p class="max-w-xl mx-auto text-2xl text-justify">
        1. One-Time Payment <br />
        2. No Subscription <br />
        3. Own the Software <br />
        4. Own Your Data <br />
        5. Offline Functionality <br />
        6. Secure & Private <br />
        7. Seamless Collaboration <br />
        8. Device Synchronization <br />
        9. HIPAA Compliant<br />
        10. Total Freedom!
        <br /><br />
      </p>
      <p class="max-w-2xl mx-auto -mt-5 text-2xl text-justify">
        Although we've only recently begun this initiative, the core
        technologies needed to build our health apps are already in place (see
        our story below), allowing us to accelerate the development process.
        <a
          href="https://www.easyjoey.com"
          style="color: teal; text-decoration: underline"
          target="_blank"
          >"EasyJoey"</a
        >
        is already in Alpha and is set to be released by the fourth quarter of
        2024, with other apps following shortly thereafter.
      </p>
      <br />
      <img
        src="../assets/images/local-first-health-open-source.png"
        alt="Small Image"
        class="inline-block my-0"
        style="height: 230px; width: auto"
      />
      <br />
      <p class="max-w-2xl mx-auto -mt-5 text-2xl text-justify">
        We also plan to open source the foundational core, empowering developers
        to easily create local-first health apps. More importantly, this
        approach allows for the development of localized features and
        functionalities tailored to specific cities or areas, rather than
        relying on a one-size-fits-all solution dictated by a few providers.
        Ultimately, this will benefit everyone—because we are all part of the
        healthcare ecosystem.
      </p>
      <br />

      <img
        src="../assets/images/local-first-health-team.png"
        alt="Small Image"
        class="inline-block mt-10"
        style="height: 230px; width: auto"
      />

      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        Our team has been developing health record systems since 2016. Even
        before the local-first concept was introduced in 2019, we were building
        offline functionality with our own ‘Syncbase’ technology, integrated
        into our health app,

        <a
          href="https://www.mycure.md"
          style="color: teal; text-decoration: underline"
          target="_blank"
          >"MYCURE."</a
        >
        <br /><br />
        Over the past 8+ years, we've encountered the challenges in this sector
        firsthand. Before relocating to San Francisco, I traveled extensively
        across the Philippines, Indonesia, Ethiopia, Kenya, South Africa, India,
        Sri Lanka, and other countries to observe the difficulties faced by
        doctors and small clinics, particularly in developing regions. Many
        still rely on paper-based or outdated systems.
        <br /><br />
        We believe that 'Local-First Health' is the solution to these persistent
        issues. It’s time to finally solve the holy grail of healthcare data.
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
      <p class="max-w-2xl mx-auto mt-4 text-2xl text-justify">
        PS - I participated in the first Local-First Conference, recently held
        in Berlin, Germany (May 2024). This movement is indeed growing. Re-live
        the energy of the conference in a

        <a
          href="https://www.youtube.com/watch?v=cLuX0AFNJzQ"
          style="color: teal; text-decoration: underline"
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
