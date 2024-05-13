import { u as useHead } from "./index-6a088328.js";
import { ref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __buildAssetsURL("local-first-health-hands-2.2a299bd0.png");
const _imports_1 = "" + __buildAssetsURL("local-first-health-frustrated.8c1264fb.png");
const _imports_2 = "" + __buildAssetsURL("local-first-health-happy.d0bbba87.png");
const _imports_3 = "" + __buildAssetsURL("local-first-health-what-is-local-first.fe17cff6.png");
const _imports_4 = "" + __buildAssetsURL("local-first-health-papaya.460a8e39.png");
const _imports_5 = "" + __buildAssetsURL("local-first-health-suite.8f65fadc.png");
const _imports_6 = "" + __buildAssetsURL("local-first-health-suite-mycure-blue-apple.759054b6.png");
const _imports_7 = "" + __buildAssetsURL("local-first-health-suite-parmazip-berry.e1d42d23.png");
const _imports_8 = "" + __buildAssetsURL("local-first-health-suite-ospitalis-green-coco.355bcf47.png");
const _imports_9 = "" + __buildAssetsURL("local-first-health-suite-easyjoey-durian.dcf70bd3.png");
const _imports_10 = "" + __buildAssetsURL("local-first-health-own-software-own-data.e0933055.png");
const _imports_11 = "" + __buildAssetsURL("local-first-health-mission.10115713.png");
const _imports_12 = "" + __buildAssetsURL("local-first-health-story.eb2969c2.png");
const _imports_13 = "" + __buildAssetsURL("local-first-health-logo-footer.bf3d467f.png");
const _imports_14 = "" + __buildAssetsURL("local-first-health-footer.18352f36.png");
const atomOneDark = "";
const ogBanner = "" + __buildAssetsURL("local-first-health-banner.fad86ee1.png");
const index_vue_vue_type_style_index_0_scoped_42743fce_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Local-First Health Org",
      description: "The first and only 'Local-First' Healthcare Suite.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner
        }
      ]
    });
    ref("");
    ref(false);
    ref([
      "It's Affordable",
      "It Works Offline",
      "It's Secure",
      "It's Private",
      "It's Shareable",
      "It's Record-Centric",
      "It's Encrypted"
    ]);
    ref(100);
    ref(100);
    ref(2e3);
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-12 md:px-10 lg:px-32 text-gray-900" id="true-privacy" data-v-42743fce><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="h-50 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-6xl leading-none sm:text-5xl xl:max-w-4xl" data-v-42743fce> Control &amp; Access of Our Health Records SHOULD Be in OUR Hands </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (NOT in Someone Else&#39;s Cloud) </p><p class="max-w-4xl mx-auto mt-4 text-xl text-left" data-v-42743fce> Local First Health (LFH) is an initiative dedicated to creating tech tools such as open-source SDKs and healthcare APIs that enhance health records management and ensure data sovereignty. By adhering to local-first principles, data remains secure and private—stored on the user’s own device, not in the cloud. This approach supports seamless collaboration and enables shareability while protecting user privacy and empowering healthcare providers and individuals to confidently manage and control their medical data. </p></div></section><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="challenges" data-v-42743fce><img${ssrRenderAttr("src", _imports_1)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> What Is WRONG with the CURRENT SETUP? </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (And What Needs to Change!) </p><p class="max-w-2xl mx-auto mt-4 text-xl text-left" data-v-42743fce> 1. <b data-v-42743fce>Outdated Systems:</b> Many clinics and health facilities still rely on inefficient paper-based or basic digital systems like spreadsheets, which are prone to errors and consume valuable time. <br data-v-42743fce><br data-v-42743fce> 2. <b data-v-42743fce>Security Risks:</b> These systems often lack proper security measures and reliable backups, making sensitive patient data vulnerable to breaches and loss. <br data-v-42743fce><br data-v-42743fce> 3. <b data-v-42743fce>High Costs of EMR:</b> Electronic medical records (EMR) systems, though beneficial, are expensive and complex to implement, hindering their widespread adoption. <br data-v-42743fce><br data-v-42743fce> 4. <b data-v-42743fce>Vendor Lock-in:</b> Dependence on specific vendors for EMR systems can limit future access to and control over medical data. <br data-v-42743fce><br data-v-42743fce> 5. <b data-v-42743fce>Limited Accessibility:</b> Cloud-based systems are not always practical in areas with unstable internet, affecting timely access to medical records. <br data-v-42743fce><br data-v-42743fce> 6. <b data-v-42743fce>Fragmented Data Sharing:</b> Current systems do not support easy sharing of medical records across facilities, compromising the continuity of care. </p></div></section><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="actions" data-v-42743fce><img${ssrRenderAttr("src", _imports_2)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> So, How Can This Be Addressed? </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (What LFH Is Working On) </p><p class="max-w-2xl mx-auto mt-4 text-xl text-left" data-v-42743fce><b data-v-42743fce>First </b>, the LFH initiative will utilize and promote the local-first principles (see &#39;what is local-first&#39;&#39; below) to tackle the inefficiencies and security risks prevalent in current health records management systems, reducing internet dependency and mitigating data breach risks. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Second </b>, it introduces &#39;Project Papaya&#39;, an innovative open source Software Development Kit (SDK) for Medical Records Management that embraces local-first principles. This SDK allows developers to build customized medical records apps with ease, enhancing accessibility and affordability of EMR solutions. Being open source, Project Papaya benefits from continuous community-driven improvements, ensuring it meets the evolving needs of various healthcare facilities. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Third </b>, the initiative will establish a community-driven platform where innovators and developers can share and collaborate on their healthcare applications and code. This platform will act as a hub for open-source contributions, showcasing existing local-first healthcare apps and encouraging the sharing of innovations. The goal is to promote and expand the use of local-first solutions within the healthcare industry. </p></div></section><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="local-first" data-v-42743fce><img${ssrRenderAttr("src", _imports_3)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> What is Local-First? </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (And Its 7 Principles) </p><p class="max-w-3xl mx-auto mt-4 text-xl text-left" data-v-42743fce> The concept &quot;local-first&quot; was introduced in a 2017 whitepaper by Ink &amp; Switch titled <a href="https://www.inkandswitch.com/local-first/" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>&quot;Local-first software: You own your data, in spite of the cloud.&quot;</a><br data-v-42743fce><br data-v-42743fce> This pivotal document outlines seven fundamental principles that guide the development of local-first software: </p><p class="max-w-2xl mx-auto mt-0 text-xl text-left" data-v-42743fce><br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>User Ownership:</b> Users retain complete control over their data, as opposed to it being stored on remote servers. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Offline Functionality:</b> Local-first software is fully functional offline, not reliant on internet connectivity. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Data Synchronization: </b>When connectivity is available, the software synchronizes data across all user devices, ensuring updates and changes are reflected universally. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Improved Security:</b> Data is stored locally on the user’s device, reducing the risk of external breaches. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Faster Response Times:</b> By eliminating reliance on server response times, local-first software offers a quicker, more reliable user experience. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Seamless Collaboration:</b> Allows for efficient collaboration without the lag associated with cloud services, syncing only when connections are available. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Long-term Availability:</b> Ensures data remains accessible over the long term, without the threat of remote server shutdowns or discontinuations. </p><p class="max-w-3xl mx-auto mt-0 text-xl text-left" data-v-42743fce><br data-v-42743fce><br data-v-42743fce>Additionally, Wired Magazine published an insightful article in August 2023 titled <a href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>&quot;The Cloud Is a Prison. Can the Local-First Software Movement Set Us Free?&quot;</a> This article delves into the limitations of cloud-based systems and the potential of the local-first software movement to liberate users from dependency on external servers. </p></div></section><div class="bg-gray-100 py-14 mt-10" data-v-42743fce><section class="max-w-4xl mx-auto font-courier" data-v-42743fce><div class="flex flex-col overflow-hidden lg:flex-row-reverse" data-v-42743fce><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-auto h-auto lg:w-1/3 h-auto aspect-video" data-v-42743fce><div class="flex-col justify-center flex-1 pr-1 dark:bg-gray-50" data-v-42743fce><span class="text-xl uppercase dark:text-gray-600" data-v-42743fce>Open Source Medical Records</span><h3 class="text-4xl font-bold" data-v-42743fce>Project Papaya</h3><p class="text-xl my-6 dark:text-gray-600" data-v-42743fce> Project Papaya is an open-source Software Development Kit (SDK) designed to empower developers to build healthcare applications that adhere to local-first principles. This SDK provides the tools necessary for creating applications that not only work offline but also sync seamlessly when connectivity is available. </p><button type="button" class="self-start border border-black bg-white text-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300" data-v-42743fce> Try SDK </button></div></div></section><div class="max-w-4xl mx-auto mt-10" id="papaya-sdk" data-v-42743fce><div data-v-42743fce><pre data-v-42743fce><code class="language-javascript" data-v-42743fce>
    import { createId, createKeyPair } from &#39;@localfirsthealth/papaya/encryption&#39;;
    import { Application } from &#39;@localfirsthealth/papaya/application&#39;;
    import { Identities } from &#39;@localfirsthealth/papaya/identities&#39;;
    import { MedicalRecords } from &#39;@localfirsthealth/papaya/emr&#39;;

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
        email: &#39;sample@example.com&#39;,
        name: {
            firstName: &#39;Sample&#39;,
            lastName: &#39;User&#39;,
        },
        },
        credentials: [{
        strategy: &#39;local&#39;,
        identity: &#39;sample@example.com&#39;,
        password: &#39;strongpassword&#39;,
        }],
    });
    await app.identities.authenticate({
        credential: {
        strategy: &#39;local&#39;,
        email: &#39;sample@example.com&#39;,
        password: &#39;strongpassword&#39;,
        },
    });

    // create a medical record
    const record = await app.emr.records.create({
        type: &#39;prescription&#39;,
        patient: identity.id,
        medications: [{
        name: &#39;Aspirin&#39;,
        dosage: &#39;1 pill&#39;,
        frequency: &#39;daily&#39;,
        }],
    });
            </code></pre></div></div><section class="max-w-4xl mx-auto font-courier" data-v-42743fce><div class="flex flex-col overflow-hidden lg:flex-row-reverse" data-v-42743fce><div class="flex-col justify-center flex-1 pr-1 dark:bg-gray-50" data-v-42743fce><p class="text-xl my-6 dark:text-gray-600" data-v-42743fce><b data-v-42743fce>Local-First Design:</b> Ensures all user data stays on the device, enhancing privacy and security. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Offline Functionality:</b> Allows applications to operate without an internet connection, ensuring reliability and accessibility in all conditions. <br data-v-42743fce><br data-v-42743fce><b data-v-42743fce>Seamless Synchronization:</b> When connected, applications can sync data across devices and platforms without user intervention. </p></div></div></section></div><section class="bg-white font-courier mt-10" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="health-suite" data-v-42743fce><img${ssrRenderAttr("src", _imports_5)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> Health Suite Built on Project Papaya </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (Products That Are Fruits of Love and Care) </p><p class="max-w-3xl mx-auto mt-4 text-xl text-left" data-v-42743fce> LFH introduces the Health Suite, a robust collection of healthcare products developed using Papaya’s SDK. Designed with local-first principles, these tools ensure secure, offline-capable, and user-controlled healthcare management. Additionally, more local-first health apps developed by the community will be featured here, showcasing ongoing innovations and contributions. </p></div></section><section class="bg-white font-courier -mt-10" data-v-42743fce><div class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="challenges" data-v-42743fce><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-42743fce><img${ssrRenderAttr("src", _imports_6)} alt="" style="${ssrRenderStyle({ "height": "auto" })}" class="object-contain" data-v-42743fce></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-42743fce><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-42743fce><a href="https://www.mycure.md" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>MYCURE</a> : An enterprise-grade clinic management system equipped with Electronic Medical Records (EMR), billing, administrative tools, Point of Sale (POS), inventory management, Laboratory Information System (LIS), Radiology Information System (RIS), and more. Ideal for healthcare facilities with multiple doctors and diverse functions, MYCURE streamlines operations and enhances efficiency. </p></div></div></section><section class="bg-white font-courier -mt-36" data-v-42743fce><div class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="challenges" data-v-42743fce><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-42743fce><img${ssrRenderAttr("src", _imports_7)} alt="" style="${ssrRenderStyle({ "height": "auto" })}" class="object-contain" data-v-42743fce></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-42743fce><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-42743fce><a href="https://www.parmazip.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>Parmazip</a> : A comprehensive pharmacy management system tailored for community drugstores. Parmazip streamlines inventory management, prescription filling, patient counseling, and other pharmacy operations, ensuring efficient and accurate service delivery. </p></div></div></section><section class="bg-white font-courier -mt-36" data-v-42743fce><div class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="challenges" data-v-42743fce><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-42743fce><img${ssrRenderAttr("src", _imports_8)} alt="" style="${ssrRenderStyle({ "height": "auto" })}" class="object-contain" data-v-42743fce></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-42743fce><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-42743fce><a href="https://www.ospitalis.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>Ospitalis</a> : A robust hospital management solution designed to streamline administrative, clinical, and financial workflows within hospitals. Ospitalis facilitates efficient patient management and resource allocation, enhancing overall operational efficiency and patient care delivery. </p></div></div></section><section class="bg-white font-courier -mt-36" data-v-42743fce><div class="max-w-4xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="challenges" data-v-42743fce><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-42743fce><img${ssrRenderAttr("src", _imports_9)} alt="" style="${ssrRenderStyle({ "height": "auto" })}" class="object-contain" data-v-42743fce></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-42743fce><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-42743fce><a href="https://www.easyjoey.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-42743fce>EasyJoey</a> : A user-friendly medical records management system specifically designed for solo practitioners and small clinics. EasyJoey simplifies the process of recording, storing, accessing, and sharing patient information, enabling healthcare providers to focus more on delivering quality care. </p></div></div></section><section class="bg-white font-courier -mt-36" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="true-privacy" data-v-42743fce><img${ssrRenderAttr("src", _imports_10)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> Own The Software. Own Your Data. </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (True Privacy. Data Freedom.) </p><p class="max-w-2xl mx-auto mt-4 text-xl text-left" data-v-42743fce> Local-First ensures your data stays securely stored on your own devices, not in a provider&#39;s cloud, giving you full ownership and control. Unlike traditional systems where ending a subscription might mean losing access to your data, with Local-First, your information remains accessible at all times. This autonomy allows you to manage and access your health data securely, providing peace of mind that your information is always within reach, irrespective of your subscription status or internet connectivity. </p></div></section><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="mission" data-v-42743fce><img${ssrRenderAttr("src", _imports_11)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> Our Mission </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce> (Secure &amp; Easy Health Records Access to Everyone) </p><p class="max-w-2xl mx-auto mt-4 text-xl text-left" data-v-42743fce> At Local First Health (LFH), our mission is to make medical records easily and securely accessible to everyone—from healthcare providers to patients. Together with our community, we are dedicated to developing a suite of open-source healthcare API services crafted around Local-First principles. Our tools prioritize security, privacy, ownership, data sovereignty, and interoperability. By embracing open-source development, we empower a community of innovators who will ultimately benefit healthcare providers and humanity as a whole. </p></div></section><section class="bg-white font-courier" data-v-42743fce><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center lg:pb-8 md:py-10 md:px-10 lg:px-32 text-gray-900" id="our-story" data-v-42743fce><img${ssrRenderAttr("src", _imports_12)} alt="Logo" class="h-30 mb-4" data-v-42743fce><h1 class="-mt-2 font-bold text-3xl leading-none sm:text-4xl xl:max-w-4xl" data-v-42743fce> Our Story </h1><p class="max-w-4xl mx-auto mt-0 text-2xl" data-v-42743fce>(Mission-Based Team)</p><p class="max-w-2xl mx-auto mt-4 text-xl text-left" data-v-42743fce> The team is led by its founder, Dale. He has recently traveled from the Philippines to Indonesia, Ethiopia, Kenya, South Africa, India, and Sri Lanka before moving to San Francisco, California. His goal was to observe firsthand the challenges faced by doctors and small clinics, particularly in developing countries. Many still rely on paper-based or analog systems. <br data-v-42743fce><br data-v-42743fce>Dale also noted that those who have upgraded to electronic medical records (EMRs) deal with high costs and complex implementations. Additionally, these systems often restrict access to vital patient data when subscriptions are discontinued. These challenges prevent millions of patients around the globe from easily and securely accessing their medical records. <br data-v-42743fce><br data-v-42743fce>With over eight years of experience in developing health records systems, the team is committed to improving this situation by introducing a site for &#39;local-first&#39; health-related resources and providing tech tools like SDKs to easily build health apps that will benefit the healthcare community. Ultimately, this allows healthcare providers, professionals, and patients to fully control their data, free from the usual constraints, ensuring true privacy, security, data ownership, and sovereignty. <br data-v-42743fce><br data-v-42743fce>Join us as we lead the charge in making healthcare data accessible, secure, and truly private—an absolute game-changer for providers and patients alike. <br data-v-42743fce><br data-v-42743fce>Interested in helping? Please email Dale at localfirsthealth@gmail.com. </p></div></section><footer class="px-4 divide-y" data-v-42743fce><div class="flex flex-col items-center py-6 font-courier" data-v-42743fce><img${ssrRenderAttr("src", _imports_13)} alt="EasyJoey Logo" class="mb-4 w-40 h-auto" data-v-42743fce><div class="text-md text-center" data-v-42743fce> 44 Montgomery Street <br data-v-42743fce> San Francisco, CA </div><div class="text-md text-center" data-v-42743fce>localfirsthealth@gmail.com</div><div class="text-md text-center" data-v-42743fce>Local First Health</div><div class="text-md text-center" data-v-42743fce> © 2024 . All rights reserved. </div></div></footer><section data-v-42743fce><div class="container flex flex-col items-center px-4 py-0 pb-0 mx-auto text-center lg:pb-0 md:py-5 md:px-10 lg:px-10 font-courier" data-v-42743fce><img${ssrRenderAttr("src", _imports_14)} alt="" class="w-screen mx-auto lg:mt-5" data-v-42743fce></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42743fce"]]);
export {
  index as default
};
//# sourceMappingURL=index-1fb96a1f.js.map
