<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "#imports";
import { definePageMeta } from "#imports";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // Import the theme you want
import ogBanner from "../assets/images/local-first-health-banner.png"; // Ensure this path is correct

definePageMeta({
    layout: "default",
});

useHead({
    title: "Local-First Health Org",
    description: "The first and only 'Local-First' Healthcare Suite.",
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
    "It's Affordable",
    "It Works Offline",
    "It's Secure",
    "It's Private",
    "It's Shareable",
    "It's Record-Centric",
    "It's Encrypted",
]);
const typingSpeed = ref(100);
const erasingSpeed = ref(100);
const newTextDelay = ref(2000);
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

onMounted(() => {
    setTimeout(typeText, newTextDelay.value + 200);
    hljs.highlightAll(); // Apply syntax highlighting immediately after component mounts
});

const typeText = () => {
    if (
        charIndex.value <
        displayTextArray.value[displayTextArrayIndex.value].length
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
</script>

<template>
    <!-- TITLE -->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-12 md:px-10 lg:px-32 text-gray-900"
            id="true-privacy"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-hands-2.png"
                alt="Logo"
                class="h-50 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-6xl leading-none sm:text-5xl xl:max-w-4xl"
            >
                Control & Access of Our Health Records SHOULD Be in OUR Hands
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (NOT in Someone Else's Cloud)
            </p>

            <p class="max-w-4xl mx-auto mt-4 text-xl text-left">
                Local First Health (LFH) is an initiative dedicated to creating
                tech tools such as open-source SDKs and healthcare APIs that
                enhance health records management and ensure data sovereignty.
                By adhering to local-first principles, data remains secure and
                private—stored on the user’s own device, not in the cloud. This
                approach supports seamless collaboration and enables
                shareability while protecting user privacy and empowering
                healthcare providers and individuals to confidently manage and
                control their medical data.
            </p>
        </div>
    </section>

    <!-- SECOND PANEL -->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="challenges"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-frustrated.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                What Is WRONG with the CURRENT SETUP?
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (And What Needs to Change!)
            </p>

            <p class="max-w-2xl mx-auto mt-4 text-xl text-left">
                1. <b>Outdated Systems:</b> Many clinics and health facilities
                still rely on inefficient paper-based or basic digital systems
                like spreadsheets, which are prone to errors and consume
                valuable time.

                <br /><br />
                2. <b>Security Risks:</b> These systems often lack proper
                security measures and reliable backups, making sensitive patient
                data vulnerable to breaches and loss. <br /><br />
                3. <b>High Costs of EMR:</b> Electronic medical records (EMR)
                systems, though beneficial, are expensive and complex to
                implement, hindering their widespread adoption. <br /><br />
                4. <b>Vendor Lock-in:</b> Dependence on specific vendors for EMR
                systems can limit future access to and control over medical
                data. <br /><br />
                5. <b>Limited Accessibility:</b> Cloud-based systems are not
                always practical in areas with unstable internet, affecting
                timely access to medical records. <br /><br />
                6. <b>Fragmented Data Sharing:</b> Current systems do not
                support easy sharing of medical records across facilities,
                compromising the continuity of care.
            </p>
        </div>
    </section>

    <!-- 3A What Can BE DONE -->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="actions"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-happy.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                So, How Can This Be Addressed?
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (What LFH Is Working On)
            </p>

            <p class="max-w-2xl mx-auto mt-4 text-xl text-left">
                <b>First </b>, the LFH initiative will utilize and promote the
                local-first principles (see 'what is local-first'' below) to
                tackle the inefficiencies and security risks prevalent in
                current health records management systems, reducing internet
                dependency and mitigating data breach risks. <br /><br />

                <b>Second </b>, it introduces 'Project Papaya', an innovative
                open source Software Development Kit (SDK) for Medical Records
                Management that embraces local-first principles. This SDK allows
                developers to build customized medical records apps with ease,
                enhancing accessibility and affordability of EMR solutions.
                Being open source, Project Papaya benefits from continuous
                community-driven improvements, ensuring it meets the evolving
                needs of various healthcare facilities. <br /><br />

                <b>Third </b>, the initiative will establish a community-driven
                platform where innovators and developers can share and
                collaborate on their healthcare applications and code. This
                platform will act as a hub for open-source contributions,
                showcasing existing local-first healthcare apps and encouraging
                the sharing of innovations. The goal is to promote and expand
                the use of local-first solutions within the healthcare industry.
            </p>
        </div>
    </section>

    <!-- 3B Local FIrst -->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="local-first"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-what-is-local-first.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                What is Local-First?
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (And Its 7 Principles)
            </p>

            <p class="max-w-3xl mx-auto mt-4 text-xl text-left">
                The concept "local-first" was introduced in a 2017 whitepaper by
                Ink & Switch titled
                <a
                    href="https://www.inkandswitch.com/local-first/"
                    style="color: teal; text-decoration: underline"
                    target="_blank"
                    >"Local-first software: You own your data, in spite of the
                    cloud."</a
                >
                <br /><br />

                This pivotal document outlines seven fundamental principles that
                guide the development of local-first software:
            </p>

            <p class="max-w-2xl mx-auto mt-0 text-xl text-left">
                <br /><br /><b>User Ownership:</b> Users retain complete control
                over their data, as opposed to it being stored on remote
                servers. <br /><br /><b>Offline Functionality:</b> Local-first
                software is fully functional offline, not reliant on internet
                connectivity. <br /><br /><b>Data Synchronization: </b>When
                connectivity is available, the software synchronizes data across
                all user devices, ensuring updates and changes are reflected
                universally. <br /><br /><b>Improved Security:</b> Data is
                stored locally on the user’s device, reducing the risk of
                external breaches. <br /><br /><b>Faster Response Times:</b> By
                eliminating reliance on server response times, local-first
                software offers a quicker, more reliable user experience.
                <br /><br /><b>Seamless Collaboration:</b> Allows for efficient
                collaboration without the lag associated with cloud services,
                syncing only when connections are available. <br /><br /><b
                    >Long-term Availability:</b
                >
                Ensures data remains accessible over the long term, without the
                threat of remote server shutdowns or discontinuations.
            </p>

            <p class="max-w-3xl mx-auto mt-0 text-xl text-left">
                <br /><br />Additionally, Wired Magazine published an insightful
                article in August 2023 titled
                <a
                    href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/"
                    style="color: teal; text-decoration: underline"
                    target="_blank"
                    >"The Cloud Is a Prison. Can the Local-First Software
                    Movement Set Us Free?"</a
                >
                This article delves into the limitations of cloud-based systems
                and the potential of the local-first software movement to
                liberate users from dependency on external servers.
            </p>
        </div>
    </section>

    <!-- FOURTH - SDK PANEL -->
    <div class="bg-gray-100 py-14 mt-10">
        <section class="max-w-4xl mx-auto font-courier">
            <div class="flex flex-col overflow-hidden lg:flex-row-reverse">
                <img
                    src="../assets/images/local-first-health-papaya.png"
                    alt=""
                    class="w-auto h-auto lg:w-1/3 h-auto aspect-video"
                />

                <div
                    class="flex-col justify-center flex-1 pr-1 dark:bg-gray-50"
                >
                    <span class="text-xl uppercase dark:text-gray-600"
                        >Open Source Medical Records</span
                    >
                    <h3 class="text-4xl font-bold">Project Papaya</h3>
                    <p class="text-xl my-6 dark:text-gray-600">
                        Project Papaya is an open-source Software Development
                        Kit (SDK) designed to empower developers to build
                        healthcare applications that adhere to local-first
                        principles. This SDK provides the tools necessary for
                        creating applications that not only work offline but
                        also sync seamlessly when connectivity is available.
                        <!-- <br /><br /> -->
                    </p>

                    <button
                        type="button"
                        class="self-start border border-black bg-white text-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        Try SDK
                    </button>
                </div>
            </div>
        </section>

        <!-- SDK Code Test -->
        <div class="max-w-4xl mx-auto mt-10" id="papaya-sdk">
            <div>
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

        <section class="max-w-4xl mx-auto font-courier">
            <div class="flex flex-col overflow-hidden lg:flex-row-reverse">
                <div
                    class="flex-col justify-center flex-1 pr-1 dark:bg-gray-50"
                >
                    <p class="text-xl my-6 dark:text-gray-600">
                        <b>Local-First Design:</b> Ensures all user data stays
                        on the device, enhancing privacy and security.
                        <br /><br /><b>Offline Functionality:</b> Allows
                        applications to operate without an internet connection,
                        ensuring reliability and accessibility in all
                        conditions. <br /><br /><b>Seamless Synchronization:</b>
                        When connected, applications can sync data across
                        devices and platforms without user intervention.
                    </p>
                </div>
            </div>
        </section>
    </div>

    <!-- FIFTH PANEL HEALTH SUITE -->
    <section class="bg-white font-courier mt-10">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="health-suite"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-suite.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                Health Suite Built on Project Papaya
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (Products That Are Fruits of Love and Care)
            </p>

            <p class="max-w-3xl mx-auto mt-4 text-xl text-left">
                LFH introduces the Health Suite, a robust collection of
                healthcare products developed using Papaya’s SDK. Designed with
                local-first principles, these tools ensure secure,
                offline-capable, and user-controlled healthcare management.
                Additionally, more local-first health apps developed by the
                community will be featured here, showcasing ongoing innovations
                and contributions.
            </p>
        </div>
    </section>

    <!-- FRUITS SECTION -->
    <!-- 6th MYCURE -->
    <section class="bg-white font-courier -mt-10">
        <div
            class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="challenges"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-suite-mycure-blue-apple.png"
                    alt=""
                    style="height: auto"
                    class="object-contain"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 1
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    <a
                        href="https://www.mycure.md"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >MYCURE</a
                    >
                    : An enterprise-grade clinic management system equipped with
                    Electronic Medical Records (EMR), billing, administrative
                    tools, Point of Sale (POS), inventory management, Laboratory
                    Information System (LIS), Radiology Information System
                    (RIS), and more. Ideal for healthcare facilities with
                    multiple doctors and diverse functions, MYCURE streamlines
                    operations and enhances efficiency.
                </p>
            </div>
        </div>
    </section>

    <!-- 7th PARMAZIP -->
    <section class="bg-white font-courier -mt-36">
        <div
            class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="challenges"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-suite-parmazip-berry.png"
                    alt=""
                    style="height: auto"
                    class="object-contain"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 1
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    <a
                        href="https://www.parmazip.com"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >Parmazip</a
                    >
                    : A comprehensive pharmacy management system tailored for
                    community drugstores. Parmazip streamlines inventory
                    management, prescription filling, patient counseling, and
                    other pharmacy operations, ensuring efficient and accurate
                    service delivery.
                </p>
            </div>
        </div>
    </section>

    <!-- 8th OSPITALIS-->
    <section class="bg-white font-courier -mt-36">
        <div
            class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="challenges"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-suite-ospitalis-green-coco.png"
                    alt=""
                    style="height: auto"
                    class="object-contain"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 1
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    <a
                        href="https://www.ospitalis.com"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >Ospitalis</a
                    >
                    : A robust hospital management solution designed to
                    streamline administrative, clinical, and financial workflows
                    within hospitals. Ospitalis facilitates efficient patient
                    management and resource allocation, enhancing overall
                    operational efficiency and patient care delivery.
                </p>
            </div>
        </div>
    </section>

    <!-- 9th EASYJOEY-->
    <section class="bg-white font-courier -mt-36">
        <div
            class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="challenges"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-suite-easyjoey-durian.png"
                    alt=""
                    style="height: auto"
                    class="object-contain"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 1
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    <a
                        href="https://www.easyjoey.com"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >EasyJoey</a
                    >
                    : A user-friendly medical records management system
                    specifically designed for solo practitioners and small
                    clinics. EasyJoey simplifies the process of recording,
                    storing, accessing, and sharing patient information,
                    enabling healthcare providers to focus more on delivering
                    quality care.
                </p>
            </div>
        </div>
    </section>

    <!-- TENTH PANEL - Own Data-->
    <section class="bg-white font-courier -mt-36">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="true-privacy"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-own-software-own-data.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                Own The Software. Own Your Data.
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (True Privacy. Data Freedom.)
            </p>

            <p class="max-w-2xl mx-auto mt-4 text-xl text-left">
                Local-First ensures your data stays securely stored on your own
                devices, not in a provider's cloud, giving you full ownership
                and control. Unlike traditional systems where ending a
                subscription might mean losing access to your data, with
                Local-First, your information remains accessible at all times.
                This autonomy allows you to manage and access your health data
                securely, providing peace of mind that your information is
                always within reach, irrespective of your subscription status or
                internet connectivity.
            </p>
        </div>
    </section>

    <!-- 11th PANEL - Our Mission-->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="mission"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-mission.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                Our Mission
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">
                (Secure & Easy Health Records Access to Everyone)
            </p>

            <p class="max-w-2xl mx-auto mt-4 text-xl text-left">
                At Local First Health (LFH), our mission is to make medical
                records easily and securely accessible to everyone—from
                healthcare providers to patients. Together with our community,
                we are dedicated to developing a suite of open-source healthcare
                API services crafted around Local-First principles. Our tools
                prioritize security, privacy, ownership, data sovereignty, and
                interoperability. By embracing open-source development, we
                empower a community of innovators who will ultimately benefit
                healthcare providers and humanity as a whole.
            </p>
        </div>
    </section>

    <!-- 12th PANEL - Our Story-->
    <section class="bg-white font-courier">
        <div
            class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900"
            id="our-story"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-story.png"
                alt="Logo"
                class="h-30 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl"
            >
                Our Story
            </h1>
            <p class="max-w-4xl mx-auto mt-0 text-2xl">(Mission-Based Team)</p>

            <p class="max-w-2xl mx-auto mt-4 text-xl text-left">
                The team is led by its founder, Dale. He has recently traveled
                from the Philippines to Indonesia, Ethiopia, Kenya, South
                Africa, India, and Sri Lanka before moving to San Francisco,
                California. His goal was to observe firsthand the challenges
                faced by doctors and small clinics, particularly in developing
                countries. Many still rely on paper-based or analog systems.

                <br /><br />Dale also noted that those who have upgraded to
                electronic medical records (EMRs) deal with high costs and
                complex implementations. Additionally, these systems often
                restrict access to vital patient data when subscriptions are
                discontinued. These challenges prevent millions of patients
                around the globe from easily and securely accessing their
                medical records.

                <br /><br />With over eight years of experience in developing
                health records systems, the team is committed to improving this
                situation by introducing a site for 'local-first' health-related
                resources and providing tech tools like SDKs to easily build
                health apps that will benefit the healthcare community.
                Ultimately, this allows healthcare providers, professionals, and
                patients to fully control their data, free from the usual
                constraints, ensuring true privacy, security, data ownership,
                and sovereignty.

                <br /><br />Join us as we lead the charge in making healthcare
                data accessible, secure, and truly private—an absolute
                game-changer for providers and patients alike.

                <br /><br />Interested in helping? Please email Dale at
                localfirsthealth@gmail.com.
            </p>
        </div>
    </section>

    <!-- FOOTER -->

    <footer class="px-4 divide-y">
        <div class="flex flex-col items-center py-6 font-courier">
            <img
                src="../assets/images/local-first-health-logo-footer.png"
                alt="EasyJoey Logo"
                class="mb-4 w-40 h-auto"
            />
            <!-- Logo added here -->
            <div class="text-md text-center">
                44 Montgomery Street <br />
                San Francisco, CA
            </div>
            <div class="text-md text-center">localfirsthealth@gmail.com</div>
            <div class="text-md text-center">Local First Health</div>
            <div class="text-md text-center">
                © 2024 . All rights reserved.
            </div>
        </div>
    </footer>

    <section>
        <div
            class="container flex flex-col items-center px-4 py-0 pb-0 mx-auto text-center lg:pb-0 md:py-5 md:px-10 lg:px-10 font-courier"
        >
            <img
                src="../assets/images/local-first-health-footer.png"
                alt=""
                class="w-screen mx-auto lg:mt-5"
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
