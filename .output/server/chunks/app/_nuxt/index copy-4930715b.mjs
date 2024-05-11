import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ref, useSSRContext } from 'vue';
import { u as useHead } from './index-6a088328.mjs';
import { ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_13, a as _imports_11, b as _imports_3$1, c as _imports_12, d as _imports_14, o as ogBanner } from './local-first-health-banner-da5bb025.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_1 = "" + buildAssetsURL("local-first-health-doctors.520722c5.png");
const _imports_2 = "" + buildAssetsURL("local-first-health-problem-1.8ab0004c.png");
const _imports_3 = "" + buildAssetsURL("local-first-health-problem-2.000c2370.png");
const _imports_4 = "" + buildAssetsURL("local-first-health-problem-3.04afb4dd.png");
const _imports_5 = "" + buildAssetsURL("local-first-health-result.112d7038.png");
const _imports_8 = "" + buildAssetsURL("local-first-health-health-suite.5666c95f.png");
const _imports_9 = "" + buildAssetsURL("local-first-health-own-the-software.88d3f215.png");
const _sfc_main = {
  __name: "index copy",
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
      _push(`<!--[--><section class="bg-white font-courier" data-v-d1b7076a><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 text-gray-900" id="true-privacy" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_13)} alt="Logo" class="h-50 mb-4" data-v-d1b7076a><h1 class="-mt-2 font-bold text-6xl leading-none sm:text-5xl xl:max-w-4xl" data-v-d1b7076a> True Privacy and Data Freedom </h1><p class="max-w-4xl mx-auto mt-4 text-xl" data-v-d1b7076a> Mission: To unlock the holy grail of medical records. Through a local-first approach, we&#39;re building a suite of healthcare solutions tailored for healthcare providers, placing utmost importance on security, privacy, ownership, data sovereignty,interoperability, and affordability. They work offline and are not dependent on someone else&#39;s cloud. This allows users to access, control, and manage their data anytime, anywhere. True freedom! </p></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-40 lg:flex-row lg:justify-between" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_1)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> Background </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> In the world of healthcare, doctors are the unsung heroes, tirelessly dedicating themselves to patient well-being. Each interaction, every diagnosis, is a testament to their commitment to saving lives. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="challenges" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_2)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> However, doctors often find themselves overwhelmed by the burden of administrative tasks, such as managing and updating medical records, which diverts their attention away from their core mission of providing quality patient care. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_3)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> Despite advancements in technology, many clinics still rely on paper-based or analog systems, such as spreadsheets. These not only raise the likelihood of errors but also present significant privacy risks. Without reliable backups in place, sensitive patient data stored in these systems is vulnerable to loss or unauthorized access, potentially compromising patient confidentiality and trust. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_4)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> While some physicians have embraced electronic medical records (EMR) systems, the widespread adoption of these systems is hindered by their high costs and complex implementation processes. Moreover, concerns about vendor lock-in add another layer of complication, potentially limiting data access in the future. Additionally, the predominant reliance on cloud-based systems renders them impractical in regions with limited or intermittent internet connectivity. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_5)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> The Result </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> Doctors find themselves devoting excessive time to administrative duties, detracting from their capacity to focus on patient care. Furthermore, the repercussions extend beyond the medical community; billions of individuals not only face obstacles in securely accessing their medical records but also encounter difficulties in seamlessly sharing their health data between different healthcare facilities. This fragmentation in health data sharing undermines the continuity of care and poses significant challenges in achieving comprehensive healthcare outcomes. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="mission" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_11)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> Our Mission </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> At LocalFirstHealth.org, we&#39;re on a mission to ensure that medical records are easily and securely accessible to everyone, from healthcare providers to patients. We are building a suite of healthcare solutions that are meticulously crafted according to Local-First principles, placing utmost importance on security, privacy, ownership, data sovereignty, and interoperability. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="local-first" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_3$1)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> So, what is Local-First? </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> Local-first software prioritizes user control of data, ensuring faster response times and seamless collaboration across devices. Unlike cloud-based systems, which store data externally, Local-First keeps data within your control, enhancing security and accessibility. <br data-v-d1b7076a><br data-v-d1b7076a>The term &quot;local-first&quot; was introduced in a groundbreaking whitepaper by Ink &amp; Switch titled <a href="https://www.inkandswitch.com/local-first/" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>&quot;Local-first software: You own your data, in spite of the cloud.&quot;</a> in 2017. This paper outlines seven fundamental principles guiding the development of local-first software, emphasizing the importance of user ownership, offline functionality, and data synchronization across devices. <br data-v-d1b7076a><br data-v-d1b7076a>Additionally, Wired Magazine published an insightful article in August 2023 titled <a href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>&quot;The Cloud Is a Prison. Can the Local-First Software Movement Set Us Free?&quot;</a> This article delves into the limitations of cloud-based systems and the potential of the local-first software movement to liberate users from dependency on external servers. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="health-suite" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_8)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> The Health Suite </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> Local-First Health Org offers a comprehensive suite of healthcare products tailored to meet various needs: <br data-v-d1b7076a><br data-v-d1b7076a><a href="https://www.mycure.md" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>MYCURE</a> : An enterprise-grade clinic management system equipped with Electronic Medical Records (EMR), billing, administrative tools, Point of Sale (POS), inventory management, Laboratory Information System (LIS), Radiology Information System (RIS), and more. Ideal for healthcare facilities with multiple doctors and diverse functions, MYCURE streamlines operations and enhances efficiency. <br data-v-d1b7076a><br data-v-d1b7076a><a href="https://www.easyjoey.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>EasyJoey</a> : A user-friendly medical records management system specifically designed for solo practitioners and small clinics. EasyJoey simplifies the process of recording, storing, accessing, and sharing patient information, enabling healthcare providers to focus more on delivering quality care. <br data-v-d1b7076a><br data-v-d1b7076a><a href="https://www.parmazip.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>Parmazip</a> : A comprehensive pharmacy management system tailored for community drugstores. Parmazip streamlines inventory management, prescription filling, patient counseling, and other pharmacy operations, ensuring efficient and accurate service delivery. <br data-v-d1b7076a><br data-v-d1b7076a><a href="https://www.ospitalis.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>Ospitalis</a> : A robust hospital management solution designed to streamline administrative, clinical, and financial workflows within hospitals. Ospitalis facilitates efficient patient management and resource allocation, enhancing overall operational efficiency and patient care delivery. <br data-v-d1b7076a><br data-v-d1b7076a><a href="https://www.hapihub.com" style="${ssrRenderStyle({ "color": "teal", "text-decoration": "underline" })}" target="_blank" data-v-d1b7076a>HAPIHub</a> : A versatile collection of healthcare APIs that enable developers to build custom health applications while ensuring security and compliance. HAPIHub empowers innovation in healthcare by providing easy access to essential healthcare functionalities. <br data-v-d1b7076a><br data-v-d1b7076a>Each of the products prioritizes security and privacy, utilizing end-to-end encryption to safeguard patients&#39; records and ensuring full autonomy over health data. Our approach to medical records management underscores our commitment to privacy, security, and data ownership, empowering healthcare providers and patients alike while upholding data sovereignty. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_9)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> Own The Software. Own Your Data. </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> With Local-First, your data remains under your control, securely stored on your own devices rather than being hosted in a provider&#39;s cloud. This means that you retain full ownership and autonomy over your data. Unlike traditional systems where discontinuing a subscription could result in losing access to your information, with Local-First, your data stays accessible. This level of control empowers you to manage and access your health data securely, offering peace of mind knowing that your information is always within reach whenever you need it, regardless of your subscription status or internet connection. </p></div></div></section><section class="bg-white font-courier" data-v-d1b7076a><div class="max-w-6xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pt-10 lg:flex-row lg:justify-between" id="our-story" data-v-d1b7076a><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_12)} alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-v-d1b7076a></div><div class="flex flex-col justify-center mb-20 p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-d1b7076a><h1 class="text-3xl font-bold leading-none sm:text-3xl" data-v-d1b7076a> The Team </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-d1b7076a> The team is lead by its founder, Dale. He has recently traveled from the Philippines to Indonesia, Ethiopia, Kenya, South Africa, India, Sri Lanka before moving to San Francisco, California. His goal was to observe firsthand the challenges faced by doctors and small clinics, particularly in developing countries. Many still rely on paper-based or analog systems. <br data-v-d1b7076a><br data-v-d1b7076a>Dale also noted that those who have upgraded to electronic medical records (EMRs) deal with high costs and complex implementations. Additionally, these systems often restrict access to vital patient data when subscriptions are discontinued. These challenges prevent millions of patients around the globe from easily and securely accessing their medical records. <br data-v-d1b7076a><br data-v-d1b7076a>With over eight years of experience in developing health records systems, the team is committed to improving this situation by introducing the first &#39;local-first&#39; health management suite. The goal is to provide an affordable and effective solution that allows healthcare providers, professionals, and patients to control their data fully, free from the usual constraints, ensuring true privacy, security, data ownership and sovereignty. <br data-v-d1b7076a><br data-v-d1b7076a>Join us as we lead the charge in making healthcare data accessible, secure, and truly private\u2014an absolute game-changer for providers and patients alike. <br data-v-d1b7076a><br data-v-d1b7076a>Interested to help? Please email Dale at localfirsthealth@gmail.com. </p><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-d1b7076a></div></div></div></section><footer class="px-4 divide-y" data-v-d1b7076a><div class="flex flex-col items-center py-6 font-courier" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_13)} alt="EasyJoey Logo" class="mb-4 w-40 h-auto" data-v-d1b7076a><div class="text-md text-center" data-v-d1b7076a> 44 Montgomery Street <br data-v-d1b7076a> San Francisco, CA </div><div class="text-md text-center" data-v-d1b7076a>localfirsthealth@gmail.com</div><div class="text-md text-center" data-v-d1b7076a>Local First Health</div><div class="text-md text-center" data-v-d1b7076a> \xA9 2024 . All rights reserved. </div></div></footer><section data-v-d1b7076a><div class="container flex flex-col items-center px-4 py-0 pb-0 mx-auto text-center lg:pb-0 md:py-5 md:px-10 lg:px-10 font-courier" data-v-d1b7076a><img${ssrRenderAttr("src", _imports_14)} alt="" class="w-screen mx-auto lg:mt-5" data-v-d1b7076a></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1b7076a"]]);

export { index_copy as default };
//# sourceMappingURL=index copy-4930715b.mjs.map
