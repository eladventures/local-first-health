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
            class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 text-gray-900"
            id="true-privacy"
        >
            <!-- Logo Image -->

            <img
                src="../assets/images/local-first-health-logo.png"
                alt="Logo"
                class="h-50 mb-4"
            />

            <!-- Adjust path as necessary -->

            <h1
                class="-mt-2 font-bold text-6xl leading-none sm:text-5xl xl:max-w-4xl"
            >
                True Privacy and Data Freedom
            </h1>
            <p class="max-w-4xl mx-auto mt-4 text-xl">
                Mission: To unlock the holy grail of medical records. Through a
                local-first approach, we're building a suite of healthcare
                solutions tailored for healthcare providers, placing utmost
                importance on security, privacy, ownership, data
                sovereignty,interoperability, and affordability. They work
                offline and are not dependent on someone else's cloud. This
                allows users to access, control, and manage their data anytime,
                anywhere. True freedom!
            </p>
        </div>
    </section>

    <!-- FIRST PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-40 lg:flex-row lg:justify-between"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-doctors.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Background
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    In the world of healthcare, doctors are the unsung heroes,
                    tirelessly dedicating themselves to patient well-being. Each
                    interaction, every diagnosis, is a testament to their
                    commitment to saving lives.
                </p>
                <!-- <div
                    class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
                >
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                        >Suspendisse</a
                    >
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                        >Malesuada</a
                    >
                </div> -->
            </div>
        </div>
    </section>

    <!-- SECOND PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="challenges"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-problem-1.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 1
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    However, doctors often find themselves overwhelmed by the
                    burden of administrative tasks, such as managing and
                    updating medical records, which diverts their attention away
                    from their core mission of providing quality patient care.
                </p>
            </div>
        </div>
    </section>

    <!-- THIRD PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-problem-2.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 2
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    Despite advancements in technology, many clinics still rely
                    on paper-based or analog systems, such as spreadsheets.
                    These not only raise the likelihood of errors but also
                    present significant privacy risks. Without reliable backups
                    in place, sensitive patient data stored in these systems is
                    vulnerable to loss or unauthorized access, potentially
                    compromising patient confidentiality and trust.
                </p>
            </div>
        </div>
    </section>

    <!-- FOURTH PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-problem-3.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <!-- <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Problem 3
                </h1> -->
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    While some physicians have embraced electronic medical
                    records (EMR) systems, the widespread adoption of these
                    systems is hindered by their high costs and complex
                    implementation processes. Moreover, concerns about vendor
                    lock-in add another layer of complication, potentially
                    limiting data access in the future. Additionally, the
                    predominant reliance on cloud-based systems renders them
                    impractical in regions with limited or intermittent internet
                    connectivity.
                </p>
            </div>
        </div>
    </section>

    <!-- FIFTH PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-result.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    The Result
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    Doctors find themselves devoting excessive time to
                    administrative duties, detracting from their capacity to
                    focus on patient care. Furthermore, the repercussions extend
                    beyond the medical community; billions of individuals not
                    only face obstacles in securely accessing their medical
                    records but also encounter difficulties in seamlessly
                    sharing their health data between different healthcare
                    facilities. This fragmentation in health data sharing
                    undermines the continuity of care and poses significant
                    challenges in achieving comprehensive healthcare outcomes.
                </p>
            </div>
        </div>
    </section>

    <!-- 6th PANEL -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="mission"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-mission.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Our Mission
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    At LocalFirstHealth.org, we're on a mission to ensure that
                    medical records are easily and securely accessible to
                    everyone, from healthcare providers to patients. We are
                    building a suite of healthcare solutions that are
                    meticulously crafted according to Local-First principles,
                    placing utmost importance on security, privacy, ownership,
                    data sovereignty, and interoperability.
                </p>
            </div>
        </div>
    </section>

    <!-- 7th -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="local-first"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-what-is-local-first.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    So, what is Local-First?
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    Local-first software prioritizes user control of data,
                    ensuring faster response times and seamless collaboration
                    across devices. Unlike cloud-based systems, which store data
                    externally, Local-First keeps data within your control,
                    enhancing security and accessibility.

                    <br /><br />The term "local-first" was introduced in a
                    groundbreaking whitepaper by Ink & Switch titled
                    <a
                        href="https://www.inkandswitch.com/local-first/"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >"Local-first software: You own your data, in spite of
                        the cloud."</a
                    >
                    in 2017. This paper outlines seven fundamental principles
                    guiding the development of local-first software, emphasizing
                    the importance of user ownership, offline functionality, and
                    data synchronization across devices.

                    <br /><br />Additionally, Wired Magazine published an
                    insightful article in August 2023 titled
                    <a
                        href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >"The Cloud Is a Prison. Can the Local-First Software
                        Movement Set Us Free?"</a
                    >
                    This article delves into the limitations of cloud-based
                    systems and the potential of the local-first software
                    movement to liberate users from dependency on external
                    servers.
                </p>
            </div>
        </div>
    </section>

    <!-- 8th -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="health-suite"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-health-suite.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    The Health Suite
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    Local-First Health Org offers a comprehensive suite of
                    healthcare products tailored to meet various needs:

                    <br /><br /><a
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

                    <br /><br />
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

                    <br /><br />
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

                    <br /><br />
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

                    <br /><br />
                    <a
                        href="https://www.hapihub.com"
                        style="color: teal; text-decoration: underline"
                        target="_blank"
                        >HAPIHub</a
                    >
                    : A versatile collection of healthcare APIs that enable
                    developers to build custom health applications while
                    ensuring security and compliance. HAPIHub empowers
                    innovation in healthcare by providing easy access to
                    essential healthcare functionalities.

                    <br /><br />Each of the products prioritizes security and
                    privacy, utilizing end-to-end encryption to safeguard
                    patients' records and ensuring full autonomy over health
                    data. Our approach to medical records management underscores
                    our commitment to privacy, security, and data ownership,
                    empowering healthcare providers and patients alike while
                    upholding data sovereignty.
                </p>
            </div>
        </div>
    </section>

    <!-- 9th -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-own-the-software.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    Own The Software. Own Your Data.
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    With Local-First, your data remains under your control,
                    securely stored on your own devices rather than being hosted
                    in a provider's cloud. This means that you retain full
                    ownership and autonomy over your data. Unlike traditional
                    systems where discontinuing a subscription could result in
                    losing access to your information, with Local-First, your
                    data stays accessible. This level of control empowers you to
                    manage and access your health data securely, offering peace
                    of mind knowing that your information is always within reach
                    whenever you need it, regardless of your subscription status
                    or internet connection.
                </p>
            </div>
        </div>
    </section>

    <!-- 10 -->
    <section class="bg-white font-courier">
        <div
            class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between"
            id="our-story"
        >
            <div
                class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            >
                <img
                    src="~/assets/images/local-first-health-story.png"
                    alt=""
                    class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
            </div>
            <div
                class="flex flex-col justify-center mb-20 p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left"
            >
                <h1 class="text-3xl font-bold leading-none sm:text-3xl">
                    The Team
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12">
                    The team is lead by its founder, Dale. He has recently
                    traveled from the Philippines to Indonesia, Ethiopia, Kenya,
                    South Africa, India, Sri Lanka before moving to San
                    Francisco, California. His goal was to observe firsthand the
                    challenges faced by doctors and small clinics, particularly
                    in developing countries. Many still rely on paper-based or
                    analog systems.

                    <br /><br />Dale also noted that those who have upgraded to
                    electronic medical records (EMRs) deal with high costs and
                    complex implementations. Additionally, these systems often
                    restrict access to vital patient data when subscriptions are
                    discontinued. These challenges prevent millions of patients
                    around the globe from easily and securely accessing their
                    medical records.

                    <br /><br />With over eight years of experience in
                    developing health records systems, the team is committed to
                    improving this situation by introducing the first
                    'local-first' health management suite. The goal is to
                    provide an affordable and effective solution that allows
                    healthcare providers, professionals, and patients to control
                    their data fully, free from the usual constraints, ensuring
                    true privacy, security, data ownership and sovereignty.

                    <br /><br />Join us as we lead the charge in making
                    healthcare data accessible, secure, and truly private—an
                    absolute game-changer for providers and patients alike.

                    <br /><br />Interested to help? Please email Dale at
                    localfirsthealth@gmail.com.
                </p>
                <div
                    class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
                >
                    <!-- <a
                        rel="noopener noreferrer"
                        href="#"
                        class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                        >Suspendisse</a
                    >
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                        >Malesuada</a
                    > -->
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->

    <footer class="px-4 divide-y">
        <div class="flex flex-col items-center py-6 font-courier">
            <img
                src="../assets/images/local-first-health-logo.png"
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
