import { mergeProps, useSSRContext, ref, resolveComponent, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./index-C2merokO.js";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _imports_0 = "" + __buildAssetsURL("section-local-first-health-doctor-app.C88EEuYF.png");
const _imports_1 = "" + __buildAssetsURL("section-local-first-health-mission-nurse-warning.D8JkBp9U.png");
const _imports_2 = "" + __buildAssetsURL("local-first-image-reed-jobs-2.CK27XNao.png");
const _imports_3 = "" + __buildAssetsURL("section-local-first-health-mission-nurse-cloud-problem.BFatAV25.png");
const _imports_4 = "" + __buildAssetsURL("icons-data-breach.DOSz90IT.png");
const _imports_5 = "" + __buildAssetsURL("icons-ransomware.DZ4q-OXc.png");
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTA5LTIyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQ1ZGM0MDlkLTE3YTYtNDExYi05OTQ0LThmZmU2ZTVhZDgzYjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5NWUNVUkUgLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz7ks5z+AAAMFklEQVR4nO3dB5BkVRUG4ANLTgsoIigwgFnEgAFBzFkxIBgRRURMqGXOLphFy4Q5LWZRzFlRzAkDogIGXFQUkMXAEhQBz1f33ppmZKyZ7pnu6bd9qv56szPd7933v/POPenejZjIRKqsMwdMZCJLV5YlNkhsltgqsU1i28R2iWskrlmP29Xf+/uWiU0T6yfWHf6Qx0+Ygc0T10ncK3F44hWJNyfel/h44lP1eEzi6MRLE4cl7prYJQrhE7kSoYEbRdHUWyT2Tzw98dbElxK/SPwhcV7i34n/JP6VWJ1Ylfh54rOJNyaektgvccvEDvW8Ew2PQgINnEo8LIrm/jjxp8RZUcj9R+L8xAWJCxMX1eMF9ff+vrp+3vdOTLwr8fDETvX8a/WEyQ7vmLhv4pWJLyR+nbg4CoG/THwl8f4o2vryxIsSL6hH33lT4oOJrydOi/IQfP93iS9GMSt3j2LPlw3ntpaO0C4k07b7Jd4ZRRORSzPPSHwriv19QuJuid2jTIDLo0ySjkzDTaPY8qcm3pb4fuKP9TzO9/vE62Oa7PWHcH9LRtzsjRKPT3wmCsnMwG8Tn0g8KQq5N47yMK4ahdwNo5iaderRv02cvI6dY5r0ZyY+H+WBMTHIPjZxcOLaQ7i/JSHNXBwShdRzEv9MnJx4d+LQKB7HRn2ef5MoD5G38oHEqVE028P8UOLBiavVcXRaeBYPSHws8bcomvy9xAsTe0UxCb2aOx/xeXbYQ7pK4o5R7PpP63VMrCsTd0lcfbDbWLrSXnU3+Z4okxVNQ/KLE7eJEpwspDApd0q8JvGTKBPlrxJviPJQmbDOeSMbR3Hhnpv4cxTbyT9ekbh1lFeeLNSNt/Ow4XdIHBXl4V5UjyZZk2vnTIhQmZ/80Sgmw82+N4rG0eTFcr3WizKZ3idxXBRbfW6Ut0pgs+UiXXfo0jTLBPWWxClRXC/ehglxWLaSV2KC5G+bfNnto+rve8c5tkJTmQW2mT326jIdK6K4WpvM+s2FlS0S10+8LsrcsCbx5cStYnryHWthAxHKZ2YuaJNg5CEx3Bv0wM0Tj42SGzm/Hg+M4quvN6RxLJrQ2DsnXps4M0pQwoTcdkTjuWcU/3pVlAcvRN87OjApemVFZJ+O4scKkUV+NxjReG6WeF7iZ4mzo0zOD4z+A6QlI2b1Z0fxYwUNEkfC5O1HNJ6pxIOimC9mzIPn6g1rrlg02TrxssTpUXLINIhWLR/ReLiS+0TJc5uYZfzkRsa2WNDcJaGw7NlfoyTsVUm4VBuOaFxMxA2jVGmMRw77iChJq7GURrRgQfqS2bg8SuJI8DIqd8p1eRnH1fFw8+S1x55o+QZRGO1xY2+P0ZmNNiZB0rF1PJdE8Yg2H9GYBpZeohVRL69QBxyV9vS+ZR/uGRPTNiF6EcY0IXpIY5oQPaQxrXVEDztjNheixy6L1wasPifvvJSI9vA/ElckeosRjWnBRGS4MqZvSkJp41EOKEp0qFDbxsS9W7IhuGyXPjdZOMXWgxKPipLMb3hklBat78b0TZ0QJWV68IzPDguu++TED3vG9NUo+Y6ZY3I/up30nsjwqd4PNZ0qt6sZRWlKACKhL5chnD27B/4t9BYVXlrh53NmfG7YcP0Le8a0ZpYxKVBI634jSqeU0tc2MaSOJzZs1ygarBULwS287ipk+bSqSR9Iqe44MItzELmC1jKAZH1uCp6e/Kmz4LQZmO1zw8RcxuT3igN/idLFqt6p12+vgVmcg3ht2DKJc09aI+JzEveI0nK7R+Lm9TiuaOPfM0r1XN8JpdK1Kn+938AszkEQbYJje9m3b0fpm1iys/aAwu3T7XpS4rIoDZQHDePCiJYoN5m0Gft6PX+by8KecUGb9FTKf1TvVznu0QPwN2dx8WdFqZa4sJL9rvVvY+vszyLtflSEmjvIfBw6jIs3oi+uF9Yofq0ZA+uKtPthrxvRf48REr02afSE6EWQtYLoNiGtW7GsYr0eLOvBuj3fWcgxkE4T7TrSmZZLcK8eE8XbWZE4MspioWdE8QD2TewWJVm0kEXfThPt/HLDWhK09CJTqM+9EoGuielVW9YeyrNIw+oUleASHm8aC5OP6DTRtFLkpQWAj65ZXZCgp1rDi2r6pfXIl+fXIlxAYbkbbdcJtcXME/chnSSazaXFQl4ZQSF+I1JC5weJr0VZbfW5KK1lep0t3pRnkQ6Q3KL5lk5Y7mZ53CCmpHNE+55eDzegQd1yNcQJ80+IsgblEYnbR7HF161Hi4HYaMQiAgkCit9EWYz00CipgUHGRTpDtJVaJjxVDzlgZOld1jQugWWNC+2cWZlhHlrx4XFRymQybh7SqigLRa1X7HdVQWeIbu7b7aKskpWaXFOP0pEWzuvdQ7CSGMI8FC1lulQ3qOdgdiTkEb4yphve2e1XR8kq9uP6dYZoRHHhaCObzMaa+LhuyG8kT0UpizEhiqqqHbaN2LnnXMhWCLaVhLUpcsgeGtuuq3+rmH8ZqjNEe/Vpm+KolVI8i+OjrBDYsv79JlF8aATTdGZFy+3hPdftHRvN57V8J4pWI/zIep75pnI7Q7RmdJrJg7BSSxFXC60k1Ub1+JIoXoeJ8aIKGjsV/9vT3KLD3etnNL97gDpH5ZC3nuf4xp7o9jnfQwhfmTbbLuL+UQix2JKnwTdWRrq0Xs/PHgYvZbadCjxAheNPRnkDuIDM0XZ9jnPsidYQziTQVkRbuKOIQJt5Ghb1KCG1anUjmqmxMH95TOc/RJMe0Pr1Z6G7CZWdtkjpHTFdVF3riPaK01jmANHCbWQxAQION8fOXlbhevqZ2fGn1e+3vTuU05iHHeoYabUF94Ie4boHOtXnOMeeaBOU6I62IvqJMb3kQtMKbW4hdyPazzT0+DqOA6JsDcEjOSaKJhPkMxeI9hZYSrFLn+PsPNH84UviikQ7KqOxvZJMp9fPIZ8rt0/9/oTons9ZHy5vwX9GtGVy29Zr6B1RYZfr6CV5tiaX8+pY9qzf3ylKYsq5PRRR51Sf4xx7oq3NtkqLr4toUZxXn7+rt0Jyie/caz560bJ4xmJnMZOkhaImQ00uJkD2eVWUiXGHPsc5tkQ3EdlpTkESjeTvaioU4dFs9peL5vVvi416J8Zms02YK6MsPxZNCtP55yZaxAhe2tsyn3F2hui2hweCBSxyExJJMnOb1vPaaPCbUWyxm2SfL6nHtu8HO+/mt6/fkyNpbwPX0Vuj43W+e3N0hmik8KW5Ya3D04Qmk+chtEqLHLXMnMDjvPq5c+tnj66fZ5O5esiW2zgppvsCtaz1syFWZ4gWaMhn8H9prUkL4UhlNkRyvBCZOX41r0RI/qooJkeftUnTQ/HQ2GCmR2lrdYXxyX1sFvMvb3WG6CZedVEhW83eKk2JCpFLo73yy/8PZObsCUKzbfHG1Wu2+flRApt+pHNEm8B4CZZdtK7NM6KQZps2PjUT06LGNg4pVr447Wd+lLnOrN/XYiuPosuo332TOkc04dLZ3sFr35JMtJuW29BVyI1QlXG5aqlUESFvwmSnfZjPzFzYL8lkqA1hkC0yO0m089JsySQ2WMpUQgh5ljmoI/IiPIST61HZalUUuy5fQpN5ICuiaPKgfR6dJLoJT0PR1aauNNUkidCWj27+M1+a9+Eh2DRQ7sPSBxOmhT0LsfKr00TTQK87+0srrYziW9uImxnRWkC7Vbq1Fgho2GKbYQnpW6p0IcbSaaJ7r8OjUGUxUWqKsVCH+8Yd5Cuz2ZZ0yG9MRXkbJi1hYygToockE6KHJEuO6MnSikWQK1ssNN/KxbhIux858pEsFlJEXVMvzH/drf6tt+u+C2jL+Xg9J9b7lTU8ZDAK5yYubstLVRF5YREcF2tUO38ttvDnuZWaLhUf5GIOHMaFES1Zr9O+Jd4FFIfVAe3fARxQj3IptpeQtpWsos16tPcdmMU5CPOg0mzXFjmHC+oAzuoohPirY7rJXZZwj4FZnIOwWRLycsUawPW3qXrMdUuGcYSklWqO/xxNo842A7M4D5HjvXeUJ6xlQB5CcueUDkGGkLchL67fT2p26Ductf+kQGWD+yPfYHbeu0PYq96X4oKgTMJqKLvPTGSJyKj93oXGRCYykYlMZC2R/wIZJQ3/eKgC7gAAAABJRU5ErkJggg==";
const _imports_7 = "" + __buildAssetsURL("icons-no-cloud.Cq187nl5.png");
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTA5LTIyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjk0MmJiMTQ0LTdhOGItNGZlNy1hNTdlLWI0NWQ2ZGI0ODFiYjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5NWUNVUkUgLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz7Wd7DyAAAIE0lEQVR4nO2dd6gcVRTGT9TYe0FFTTYxiRWxxAJWFMGI/qGiKCIaGyiCBSwImmeJHVTs+IclKgiCiKBiAwUVwY6JUaNuInaxRo0xxfPjzGFuJrPv7b7dnbnzdj74eM99u887X86c+91z75wnUqNGjRo1atSoUSNejEu+bqncX7mHcu0yBwPXiIw+rm6uC0xTXql8UfmY8vDk99foIaYob1B+qVyp/E15qXKdogeypnIb5S7KfcRurwNK5n7JWHZVTlBuPMprm6y8SdkUE3m58hPlqcl1FwJunU3ELuwa5fPK+cpvlT+WyB+UXydjeUV5j3KmWG7dQrlWG9dGythReYvyK+WyhF8k17pdBzp1ja2U5yrfUX6v/FvsX3xlJGQs/yh/ERP+TTGRdhYTOy93+2sN5W3KhcnvWSEm8nViIneT99sG/5ONlBco50lc4rrAK3JeJyIXKZ9VniirpxMXbyexSF6UfIbPLlBerdxhlJqNCqSMY5SvSXphTBAvKe9IBnR5gbxCeZnyLuX7kt7m5FJSx7vJ+Fzwpco3lGeLpRJ3J4Bov1lM5OUJP1cOieVrkYKiGZCX71P+LjbwX5WPKI8WSydlgRz8qPLfhE8qT1OeorxT+bZysaR34HvKs8TuTsBkTiQvlPQOQORZyknJewoTmdzGBb0qaTS/pZwu6SQzrmC6n91X+biYyEuUDyn3TH62uZhTeEEsQDy9kLePVO4mlpMXBdfVVM5WTgyuqzCsrzxBLBoYEJPg7WK3YOGDyQA710po/jGIXBzSU5LejT+LLUKeEPPJCLws+f56sUmxFGwoltvmig30U+WFyg3KGlCAvZVzJE0dc5LXQqyrPFD5nNj4/1P+JSb80uQ13AWRjP8uLXCIivPEPCqD+lh5jsQhNLf/A2LRjGhE6qHJz0LBxivPF3NMWWdCJGMBG4WMeBhgiRhkjEJvq7xKUj//jZjPD+cOz+dZ1+QT37ViCxV/f2mIVWhEYUl8kpjA7n+fUR4r5oZcOBwE+XeBpO6C74fE6hoiJYsMYhYakD6wddg4xkeufl15sZi7ID/fKqmFI5rDFV/4u0pFrEI71lPOEPPMiOzLcLy+10F84vNIJidPzPtlZSJ2ocFmYikEf4/IeSUCPDQik5NLdRetUAWhAeM8QnmjmOdfFhCRfVk9oaTxjYiqCO0RepTyZUlXgnyl7ElOnpp5b1SoitAAm0ZqcHeByL7ii8ZdtEIVhEY8Jrdw+8mX1aSSRvC+aFEFoRtiS+impKVOLBzCT2r5qcgQq9DhYgSRffvJd0ZIIUR5ZXauYxTaRSbvMskhrFs6t3DDRXK3RxL6gtiEbiWyT3y8FkXtolPEKDRCushe+vTaxXAi8xrL7hkJ+T6a1BKb0H7uInQXCI6F2z55T6tI3lTsGML8hGeIrSqjQExCN8SchE98LvLs5GcjpQoO19wrVoCCnP/YvT9D7RxlC+3isXRG5KakEx/f+85IO9hLbDN3SUI2mKf3bqjdoUyhXWSWzuTkpqR1Z1/xTc79ZD4QGnFroXMQuguf+EgdRPfUYT6XhzqiWwAvjMjhxLdARl8gqoXOga/4EJnVntcuENlzcqc+uRY6A5bOLnLWXXRTu6iFltXdBXnY3YXXk7s91TnwQg/nLojkIelNFW7ghQYusrsLhPZI7lXtYuCFJl1kRSY/k0J6WSAaaKF9Z6QpqcicwWBnZLTuohUGVuhs0T7cfmLF1+sy50AJnd0Z8aOz7i6I7n6duxgYobNFe/fJ7i7Cia8fGBihgbuLcMVHJA9J/3dGBkZoJr6su/BILuKZkYEQOs9dENXk6aJOdY5ZoX23GQcRugvf4/NILmoTdUwK7eK5yFl3EVbhisKYEzrvSEC4MzKaon0vMOaEBtmdEYRuim0/lXWqc8wJ7Tsj2doFKaTwx34DjBmhEa8hJqifIGLiQ2TOYpTyRGqAygvtwvnOiBftYzvVWWmh/UiVu4umrDrxDUk8z4xUTmgeWQ4jOqxd+CMN7pP7WbvoFJUTOoxomorkLaujeSI1QOWEJqJ5GJ+8yySXJ3IRtYtOUTmhiWh6eOCJm7JqKwYmvrLdRStUSuiPxJ48pcUPeRiB3V0Q3URyNGeOM6iE0PTpQOiflB8qvxPzyF60J100yhli26iU0IjrDUVidRetEL3QNEZxod2+hRPftOS9seXkLKIU2kXDXdCSwZ9G9cd++W8mw1gnvjxEKbSDShvtdMjNYYGICbHX5y76jeiEDg8cZs9ddPLMSGyISmgXj7wbPphDNHsrhu2leiIDb9/mQtO+LdtVrBCEpzrD88nhY79T8j8aNfy6DhFrOIhrooFKqU9lYdOY5IjksBXDSLWLcZEyHN/pkq5k6SxGx/NC2xX7QDwn+zMjLjJn4WKsXbQDxktv1YPEWsj7dbHgokPl+KIH5AWipqS1C74fycL5hZC3J0TCiclXronJbqZYU/E/xdLgH8qnxTqMtbquniI8cEjU+sTnrX3bcRf8ZQdaaNI4ioLT3Ag4L/j6mVjT7sWSnin5QHmcWN/VwhD+4YDQXcySkVuWUTw6WCw6sl25YiQi01v6TLEAKQy4Cy91urvwLgHt7PER6XS3fVjS+kds5O6kwy7t8u9XHi/WKbiwuYbGfBfJ6l0C6G7eyZEAdlpoyUB+p0P53RGR8dAjGndxsqQ1mUJB784HJa1f+KlO72lfNXcRLfiTRJeICUwxn5xcuKccFNAWmNXSYcqtpY7iGjVq1KhRo0aNGjXA/2mBTjXxQ2BOAAAAAElFTkSuQmCC";
const _imports_9 = "" + __buildAssetsURL("diagram-local-first-pre-cloud.CE16OO0W.png");
const _imports_10 = "" + __buildAssetsURL("diagram-local-first-cloud-era.BhrR0YuA.png");
const _imports_11 = "" + __buildAssetsURL("diagram-local-first-local-first-era.BClw7hAE.png");
const _imports_12 = "" + __buildAssetsURL("local-first-health-ink-switch-paper.DH48Gm2z.png");
const _imports_13 = "" + __buildAssetsURL("local-first-health-wired-magazine.Df1Hhiq7.png");
const _imports_14 = "" + __buildAssetsURL("section-local-first-health-doctor-super.nQSo2g3b.png");
const _imports_15 = "" + __buildAssetsURL("why-local-first-health-mission-doctor-work-offline.DYKuOJf4.png");
const _imports_16 = "" + __buildAssetsURL("why-local-first-health-doctor-own-data.0cItx1-w.png");
const _imports_17 = "" + __buildAssetsURL("why-local-first-health-doctor-own-the-software.FZeCFIk8.png");
const _imports_18 = "" + __buildAssetsURL("why-local-first-health-mission-nurse-compliant.CqLuBigu.png");
const _imports_19 = "" + __buildAssetsURL("why-local-first-health-doctor-data-privacy.BjRfwFis.png");
const _imports_20 = "" + __buildAssetsURL("why-local-first-health-nurse-secure.DPidXQTM.png");
const _imports_21 = "" + __buildAssetsURL("why-local-first-health-mission-lab-tech-fast.DputqfZK.png");
const _imports_22 = "" + __buildAssetsURL("why-local-first-health-pharmacist-collaborate.BBgytfzy.png");
const _imports_23 = "" + __buildAssetsURL("why-local-first-health-mission-nurse-synced.CIQBMCz8.png");
const _imports_24 = "" + __buildAssetsURL("why-local-first-health-mission-lab-tech-decentralized.DDLM-C6S.png");
const _imports_25 = "" + __buildAssetsURL("why-local-first-health-mission-pharmacist-open.5cxNucUa.png");
const _imports_26 = "" + __buildAssetsURL("why-local-first-health-lab-tech-freedom.cyKqYZfh.png");
const _imports_27 = "" + __buildAssetsURL("section-local-first-health-down._-lSueiW.png");
const _imports_28 = "" + __buildAssetsURL("local-first-health-suite-easy-joey.D17FqL94.png");
const _imports_29 = "" + __buildAssetsURL("local-first-health-suite-dentalemon.BZtflxqW.png");
const _imports_30 = "" + __buildAssetsURL("local-first-health-suite-parmago.BFbpowo6.png");
const _imports_31 = "" + __buildAssetsURL("local-first-health-suite-diagnozip.BnwFAyzD.png");
const _imports_32 = "" + __buildAssetsURL("local-first-health-suite-ospitalis.y0SyTjcD.png");
const _imports_33 = "" + __buildAssetsURL("easy-joey-1.DoKu5k6k.mp4");
const _imports_34 = "" + __buildAssetsURL("local-first-health-team.BfGIWY3M.png");
const _imports_35 = "data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eX%3c/title%3e%3cpath%20d='M18.901%201.153h3.68l-8.04%209.19L24%2022.846h-7.406l-5.8-7.584-6.638%207.584H.474l8.6-9.83L0%201.154h7.594l5.243%206.932ZM17.61%2020.644h2.039L6.486%203.24H4.298Z'/%3e%3c/svg%3e";
const _imports_36 = "data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eSubstack%3c/title%3e%3cpath%20d='M22.539%208.242H1.46V5.406h21.08v2.836zM1.46%2010.812V24L12%2018.11%2022.54%2024V10.812H1.46zM22.54%200H1.46v2.836h21.08V0z'/%3e%3c/svg%3e";
const _imports_37 = "" + __buildAssetsURL("local-first-health-hands-2.B-mO-qJm.png");
const _imports_38 = "" + __buildAssetsURL("local-first-health-logo-location-brown.Cwt8VQsB.png");
const _sfc_main$2 = {
  __name: "NewsCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    source: String,
    imageUrl: String,
    logoUrl: String,
    content: String,
    link: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.link,
        class: "p-8 text-white rounded-3xl bg-slate-950",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _attrs))}><div class="flex flex-col justify-start gap-4"><div>`);
      if (__props.logoUrl) {
        _push(`<div class="flex justify-between"><img${ssrRenderAttr("src", __props.logoUrl)}${ssrRenderAttr("alt", __props.source)} class="w-auto h-10" loading="lazy"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br><h2 class="text-xl font-medium text-left text-bold">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.imageUrl) {
        _push(`<div class="flex justify-between py-3"><img${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.title)} class="w-full h-auto" loading="lazy"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-left text-stone-300">${ssrInterpolate(__props.content)}</p></div></div></a>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NewsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const newsItems = ref([
      {
        title: "Your Medical Data Is Code Blue",
        source: "Wired",
        imageUrl: null,
        logoUrl: null,
        content: "Medical data companies aren't doing all they can to protect your most private information. When they get hacked and patient data is stolen, it's the patients who suffer.",
        link: "https://www.wired.com/story/plaintext-our-medical-security-is-code-blue/"
      },
      {
        title: "The unprecedented health-care hack that may affect you",
        source: "Washington Post",
        imageUrl: null,
        logoUrl: null,
        content: "In February, a massive cyberattack nearly brought down the entire U.S. health system. Doctors are still reeling, and many patients don't even know their data has been exposed.",
        link: "https://www.washingtonpost.com/podcasts/post-reports/the-unprecedented-healthcare-hack-that-may-affect-you/"
      },
      {
        title: "NHS data breach: trusts shared patient details with Facebook without consent",
        source: "The Guardian",
        imageUrl: null,
        logoUrl: null,
        content: "NHS trusts are sharing intimate details about patients' medical conditions, appointments and treatments with Facebook without consent despite promising never to do so.",
        link: "https://www.theguardian.com/society/2023/may/27/nhs-data-breach-trusts-shared-patient-details-with-facebook-meta-without-consent"
      },
      {
        title: "Cyberattack Paralyzes the Largest U.S. Health Care Payment System",
        source: "The New York Times",
        imageUrl: null,
        logoUrl: null,
        content: "The hacking shut down the nation's biggest health care payment system, causing financial chaos that affected a broad spectrum ranging from large hospitals to single-doctor practices.",
        link: "https://www.nytimes.com/2024/03/05/health/cyberattack-healthcare-cash.html"
      },
      {
        title: "Mental Health and Addiction Treatment Provider Exposed Patient Information",
        source: "VPN Mentor",
        imageUrl: null,
        logoUrl: null,
        content: "Cybersecurity Researcher discovered a non-password-protected database that contained thousands of records belonging to an AI platform offering mental health and addiction treatment.",
        link: "https://www.vpnmentor.com/news/report-confidanthealth-breach/"
      },
      {
        title: "Medical-Targeted Ransomware Is Breaking Records After $22M Payout",
        source: "Wired",
        imageUrl: null,
        logoUrl: null,
        content: "Cybersecurity firm Recorded Future counted 44 health-care-related incidents in the month after Change Healthcare's payment came to light—the most it's ever seen in a single month.",
        link: "https://www.wired.com/story/change-healthcare-22-million-payment-ransomware-spike/"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl px-4 py-8 mx-auto" }, _attrs))}><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(newsItems.value, (news, index2) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: index2,
          title: news.title,
          source: news.source,
          imageUrl: news.imageUrl,
          logoUrl: news.logoUrl,
          content: news.content,
          link: news.link
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ogBanner = "" + __buildAssetsURL("local-first-health-banner.CdGD9QSS.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    hljs.registerLanguage("javascript", javascript);
    useHead({
      title: "Local-First Health",
      description: "Local-First Health is the first and only local-first health solution.",
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
    const typeValue = ref("");
    const typeStatus = ref(false);
    ref(0);
    ref(0);
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
      const cssLink = (void 0).createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
      (void 0).head.appendChild(cssLink);
      waitlistScript = (void 0).createElement("script");
      waitlistScript.src = `https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js?cacheBust=${Date.now()}`;
      waitlistScript.async = true;
      waitlistScript.onload = () => {
        isWidgetLoaded.value = true;
        initializeWidget();
      };
      (void 0).body.appendChild(waitlistScript);
    };
    const initializeWidget = () => {
      if ((void 0).GetWaitlistWidget) {
        (void 0).GetWaitlistWidget.init({
          waitlistId: "20759",
          elementId: "getWaitlistContainer",
          widgetType: "WIDGET_1"
        });
      }
    };
    const reinitializeWidget = () => {
      const container = (void 0).getElementById("getWaitlistContainer");
      if (container) {
        container.innerHTML = "";
        initializeWidget();
      }
    };
    const closeModal = () => {
      showWaitlist.value = false;
    };
    __expose({
      typeValue,
      typeStatus,
      showWaitlist,
      isWidgetLoaded,
      triggerWaitlist,
      closeModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input58t = resolveComponent("Input:t");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-c1522c7b><div data-v-c1522c7b><div class="container flex flex-col items-center px-4 pt-16 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32" data-v-c1522c7b><div class="flex justify-center w-full px-5 pb-20 mt-5 overflow-hidden border-2 border-gray-200 shadow-lg rounded-3xl" data-v-c1522c7b><div class="w-full" data-v-c1522c7b><h1 class="mt-10 font-extrabold text-center" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_0)} class="pt-3 w-64 h-auto mx-auto lg:top-[-5rem]" alt="Void" data-v-c1522c7b><span class="block mt-2 text-6xl font-bold" data-v-c1522c7b>Build &#39;Local-First&#39; Health Apps</span></h1><div class="custom-container" data-v-c1522c7b><h1 class="items-center custom-heading font-inter" data-v-c1522c7b><span class="typed-text" data-v-c1522c7b>${ssrInterpolate(typeValue.value)}</span><span class="blinking-cursor" data-v-c1522c7b>|</span><span class="${ssrRenderClass([{ typing: typeStatus.value }, "cursor"])}" data-v-c1522c7b> </span></h1></div><div class="max-w-4xl py-5 mx-auto text-xl text-center" data-v-c1522c7b><p class="mb-2 text-2xl font-inter text-neutral-500" data-v-c1522c7b><b data-v-c1522c7b>Our health systems are broken. </b><br data-v-c1522c7b>Health records should belong to healthcare providers and patients—not be controlled by third parties. It’s time to take back control of our medical records and build healthcare systems that prioritize privacy, security, collaboration, and data ownership. Let’s reclaim healthcare with Local First Health—where data freedom and true privacy are in our hands. </p></div><div class="flex items-center justify-center gap-3 mx-auto mt-10" data-v-c1522c7b><a href="#local-first" class="flex items-center gap-2 px-8 py-3 bg-gray-400 rounded-lg hover:bg-gray-300" data-v-c1522c7b><span class="text-xl font-medium text-white cursor-pointer" data-v-c1522c7b>What is Local-First</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-7" data-v-c1522c7b><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" data-v-c1522c7b></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" data-v-c1522c7b></path></svg></a><a href="javascript:void(0);" class="flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900 hover:bg-slate-700" data-v-c1522c7b><span class="text-xl font-medium text-white cursor-pointer" data-v-c1522c7b> Get early access </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7" data-v-c1522c7b><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" fill="white" stroke="black" data-v-c1522c7b></path></svg></a></div></div></div>`);
      if (showWaitlist.value) {
        _push(`<div class="modal-overlay" data-v-c1522c7b><div class="modal-content" data-v-c1522c7b><button class="close-button" data-v-c1522c7b>×</button><div id="getWaitlistContainer" data-waitlist_id="20759" data-widget_type="WIDGET_1" data-v-c1522c7b></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", _imports_1)} alt="Void" class="w-[200px] h-auto mt-20" data-v-c1522c7b><h1 class="mt-0 text-3xl font-bold leadi sm:text-4xl xl:max-w-3xl font-inter" data-v-c1522c7b> WARNING: <br data-v-c1522c7b> Our Health Data is in Jeopardy </h1><p class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500" data-v-c1522c7b> The current cloud-based setup leaves our medical records exposed to breaches and exploitation. Ransomware attacks and data breaches are constantly in the news. Perhaps it&#39;s time to rethink how we manage sensitive health information? </p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="flex items-center justify-center min-h-screen" data-v-c1522c7b><div class="flex flex-col items-center justify-center w-full max-w-6xl px-5 pb-20 mt-10 mb-10 text-center rounded-3xl" id="mission" data-v-c1522c7b><p class="mt-0 text-3xl font-bold sm:text-4xl xl:max-w-2xl font-inter" data-v-c1522c7b><b data-v-c1522c7b>Excerpt: Reed Jobs &amp; Dean Lloyd Minor Interview</b></p><p class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-2xl font-inter text-neutral-500" data-v-c1522c7b> Reed Jobs, the former Managing Director of Health at Emerson Collective, eloquently highlighted the concerns regarding medical records during his interview with Dean Lloyd Minor of Stanford Medical School (March 2022). </p><div class="container items-center justify-center max-w-3xl px-5 pb-10 mt-0 overflow-hidden border-2 border-gray-200 shadow-lg bg-gray-50 rounded-3xl" data-v-c1522c7b><div class="w-full" data-v-c1522c7b><h1 class="mt-5 font-extrabold text-center" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_2)} class="pt-3 w-max h-auto mx-auto lg:top-[-5rem]" alt="Void" data-v-c1522c7b></h1><div class="max-w-4xl py-5 mx-auto text-xl text-justify" data-v-c1522c7b><p class="mt-10 mb-2 text-xl font-inter text-neutral-600" data-v-c1522c7b><i data-v-c1522c7b>“I think one of the most important things we can learn is that we need to <b data-v-c1522c7b><u data-v-c1522c7b>really respect people&#39;s privacy and we need to give them the power to determine who has access to their data and what that&#39;s used for </u></b>.. and so it&#39;s interesting when you look at healthcare, clinical records, and most data that flows through hospital systems, it is absurdly balkanized and the user interface is atrocious, and it&#39;s kind of this surreal experience honestly because we live in a wonderfully high-tech world and particularly here in Silicon Valley, yet when you go to a hospital, even a great hospital like Stanford, it&#39;s like you&#39;re stepping back in a time machine 30 years and you know the software there is nothing against everybody, the software&#39;s not very, not very good, the <b data-v-c1522c7b><u data-v-c1522c7b>user interface isn&#39;t very good, and it&#39;s this, you know, departments can&#39;t talk to each other, and you can&#39;t transfer data </u></b>, and people give you floppy disks with things on it, and it&#39;s like this anachronistic little, you know, little time machine, it&#39;s crazy. <br data-v-c1522c7b><br data-v-c1522c7b> So I think one of the most interesting things that&#39;s going to happen in healthcare in the next kind of 20 years is seeing it really catch up with the rest of the world from a technological point of view just both from a data infrastructure interoperability and UI aspect, and I really hope, and luckily, this is a lot of this is already codified in legislature like HIPAA and stuff, but <b data-v-c1522c7b><u data-v-c1522c7b>people&#39;s privacy and control over that data is gonna need to be paramount </u></b> as it, you know, it currently is now, but it really needs to be a lot more electronic and it needs to be a lot more interoperable, again, this is something that&#39;s probably, you know, a nationwide, you know, level, whether that&#39;s through legislation or through some really innovative companies in the space of which I think there&#39;s space for many, but yeah, we need to, we need to really shape up the, the, the infrastructure systems that we have in place because, not only are they really not helping patient care, but it&#39;s, it&#39;s really bad for the hospital systems themselves too and the physicians..” <br data-v-c1522c7b><br data-v-c1522c7b> - <b data-v-c1522c7b>Reed Jobs</b></i></p></div></div></div></div></div><img${ssrRenderAttr("src", _imports_3)} alt="Void" class="w-[200px] h-auto mt-0" data-v-c1522c7b><h1 class="mt-0 text-3xl font-bold leadi sm:text-4xl xl:max-w-3xl font-inter" id="cloud" data-v-c1522c7b> The Cloud Problem </h1><p class="mt-2 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500" data-v-c1522c7b> Today’s healthcare systems rely heavily on cloud-based setups, and while they offer convenience, they come with significant risks: </p><ul class="mt-2 mb-0 space-y-4 text-2xl text-left sm:mb-8 xl:max-w-2xl font-inter text-neutral-500" data-v-c1522c7b><li class="flex items-start" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_4)} alt="Icon" class="w-10 h-auto mt-3 mr-3" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>Data Breaches:</strong> Centralized data storage has made cloud systems prime targets for cyberattacks, putting millions of health records at risk. </span></li><li class="flex items-start" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_5)} alt="Icon" class="w-10 h-auto mt-3 mr-3" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>Ransomware:</strong> Hospitals and clinics have been crippled by ransomware attacks, locking them out of vital patient information until hefty ransoms are paid. </span></li><li class="flex items-start" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_6)} alt="Icon" class="w-10 h-auto mt-3 mr-3" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>Privacy Concerns:</strong> Sensitive health data is often processed and stored by third-party providers, raising serious privacy issues and regulatory concerns. </span></li><li class="flex items-start" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_7)} alt="Icon" class="w-10 h-auto mt-3 mr-3" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>Downtime &amp; Access Issues:</strong> Internet outages or service disruptions can render cloud-dependent systems inaccessible, potentially delaying patient care. </span></li><li class="flex items-start" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_8)} alt="Icon" class="w-10 h-auto mt-3 mr-3" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>Lack of Ownership:</strong> Healthcare providers and patients have limited control over their data, with cloud services holding ultimate authority over where and how information is stored. </span></li></ul><div class="container flex flex-col items-center justify-center max-w-xl p-6 py-10 mx-auto mt-20 mb-20 space-y-24 bg-gray-100 lg:px-8 lg:max-w-4xl rounded-3xl" data-v-c1522c7b><div id="local-first" class="text-center" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_1)} alt="Void" class="w-[200px] h-auto mt-0 mx-auto" data-v-c1522c7b><h2 class="text-3xl font-bold text-center text-gray-900 tracki sm:text-4xl font-inter" data-v-c1522c7b> Taking Control: <br data-v-c1522c7b>The &#39;Local-First&#39; Approach </h2><p class="max-w-3xl mx-auto mt-4 text-2xl text-center font-inter text-neutral-500" data-v-c1522c7b> It’s time for a shift in how we handle health data. Local-first software offers a groundbreaking approach to the vulnerabilities of cloud-based systems. By keeping sensitive information on your device, local-first ensures privacy, security, and control, while still allowing seamless collaboration and syncing when needed. </p><div class="grid w-full max-w-5xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3" data-v-c1522c7b><div class="w-full h-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_9)} alt="Image 1" class="object-cover w-full h-full border border-gray-200" data-v-c1522c7b></div><div class="w-full h-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_10)} alt="Image 2" class="object-cover w-full h-full border border-gray-200" data-v-c1522c7b></div><div class="w-full h-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_11)} alt="Image 3" class="object-cover w-full h-full border border-gray-200" data-v-c1522c7b></div></div><div class="flex flex-col items-center mt-20" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_12)} alt="Ink &amp; Switch Paper" class="inline-block my-2" style="${ssrRenderStyle({ "height": "auto", "width": "600px" })}" data-v-c1522c7b><p class="max-w-xl mx-auto mt-4 text-xl text-justify text-neutral-600" data-v-c1522c7b> The concept was introduced in a 2019 whitepaper by Ink &amp; Switch titled <a href="https://www.inkandswitch.com/local-first/" class="underline text-sky-600" target="_blank" data-v-c1522c7b>&quot;Local-first software: You own your data, in spite of the cloud.&quot;</a> , a pivotal document outlining seven key principles. <br data-v-c1522c7b><br data-v-c1522c7b></p><ul class="mt-2 mb-0 space-y-4 text-xl text-left sm:mb-8 xl:max-w-xl font-inter text-neutral-500" data-v-c1522c7b><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>1. No Spinners:</strong> Your work is always at your fingertips, fast and responsive. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>2. The Network is Optional:</strong> Work offline, sync when you’re back online. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>3. Seamless Collaboration:</strong> Work with colleagues without data conflicts. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>4. Your Work is Not Trapped on One Device:</strong> Your data isn’t tied to one device; it syncs across all of them. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>5. The Long Now:</strong> Your data lasts as long as you need it, independent of cloud services. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>6. Security &amp; Privacy by Default:</strong> Your data is protected from breaches and exploitation. </span></li><li class="flex items-start" data-v-c1522c7b><span data-v-c1522c7b><strong class="text-neutral-800" data-v-c1522c7b>7. You Retain Ultimate Ownership &amp; Control:</strong> You own and control your data at all times. </span></li></ul></div><div class="flex flex-col items-center mt-10" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_13)} alt="Wired Mag Local-First" class="inline-block my-2" style="${ssrRenderStyle({ "height": "auto", "width": "600px" })}" data-v-c1522c7b><p class="max-w-xl mx-auto mt-4 text-xl text-center text-neutral-600" data-v-c1522c7b> Even Wired Magazine featured an <a href="https://www.wired.com/story/the-cloud-is-a-prison-can-the-local-first-software-movement-set-us-free/" class="underline text-sky-600" target="_blank" data-v-c1522c7b>article</a> on Local-First <br data-v-c1522c7b>(August 2023). </p></div></div></div><div class="container max-w-3xl px-4 py-8 mx-auto" data-v-c1522c7b><div class="text-center" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_14)} alt="Local First Health Superhero" class="inline-block mt-10 mb-0 w-[200px] h-auto" data-v-c1522c7b><h2 class="mt-4 text-3xl font-bold sm:text-4xl font-inter" id="local-first-health" data-v-c1522c7b> Introducing: Local First Health </h2><p class="mt-4 mb-8 text-xl sm:text-2xl font-inter text-neutral-500" data-v-c1522c7b> Local First Health (LFH) is a tech initiative that leverages local-first principles to solve inefficiencies and security risks in health records management. Introducing Project Papaya—an open-source SDK that empowers developers to easily create custom, local-first health apps, boosting accessibility, speed, security, and data ownership. </p><a href="javascript:void(0);" class="inline-flex items-center justify-center gap-2 px-8 py-3 text-xl font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-700" data-v-c1522c7b> Get early access on GitHub <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-6 h-6 fill-current" data-v-c1522c7b><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" data-v-c1522c7b></path></svg></a><div class="mt-10 text-left" data-v-c1522c7b><div class="code-block-container" data-v-c1522c7b><pre data-v-c1522c7b><code class="language-javascript" data-v-c1522c7b>
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
      </code></pre></div></div><h1 class="mt-20 text-4xl leadi sm:text-2xl xl:max-w-4xl font-inter text-neutral-500" data-v-c1522c7b> Start building health apps that can do the following: </h1><div id="why-local-first-health" class="pt-1 pb-5 text-xs text-neutral-600" style="${ssrRenderStyle({ "font-family": "Arial, sans-serif" })}" data-v-c1522c7b><div class="flex flex-wrap justify-center max-w-4xl mx-auto mt-0" style="${ssrRenderStyle({ "font-family": "Arial, sans-serif" })}" data-v-c1522c7b><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_15)} alt="Works Offline" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Works Offline </h3><p class="text-base text-center" data-v-c1522c7b> Works anywhere even without an internet. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_16)} alt="Own Your Data" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Own Your Data </h3><p class="text-base text-center" data-v-c1522c7b> Data stays with you, always accessible. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_17)} alt="Own the Software" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Own the Software </h3><p class="text-base text-center" data-v-c1522c7b> Full control &amp; management. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_18)} alt="Compliant" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Compliant </h3><p class="text-base text-center" data-v-c1522c7b> Industry security standards + HIPAA. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_19)} alt="True Privacy" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> True Privacy </h3><p class="text-base text-center" data-v-c1522c7b> No third-party access or unnecessary sharing. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_20)} alt="Secure" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Secure </h3><p class="text-base text-center" data-v-c1522c7b> Encryption + extra security features </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_21)} alt="Fast" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Fast </h3><p class="text-base text-center" data-v-c1522c7b> Free from server lag or internet slowdowns. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_22)} alt="Collaborate" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Collaborate </h3><p class="text-base text-center" data-v-c1522c7b> Allows seamless, secure collaboration. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_23)} alt="Synchronize" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Synchronize </h3><p class="text-base text-center" data-v-c1522c7b> Syncs your data across all your devices. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_24)} alt="Decentralized" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Decentralized </h3><p class="text-base text-center" data-v-c1522c7b> No single point of failure—your data within reach. </p></div></div><div class="w-full px-4 mb-20 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_25)} alt="Open" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Open </h3><p class="text-base text-center" data-v-c1522c7b> Open-source, for custom and transparency. </p></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/3" data-v-c1522c7b><div class="max-w-xs p-5 mx-auto" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_26)} alt="Freedom" class="w-40 mx-auto" data-v-c1522c7b><h3 class="mt-4 mb-2 text-xl font-medium text-center" data-v-c1522c7b> Freedom </h3><p class="text-base text-center" data-v-c1522c7b> Use software your way, no vendor lock-in. </p></div></div></div></div></div></div><div class="w-1/2 my-8 mt-20 border-t border-gray-300" data-v-c1522c7b></div><img${ssrRenderAttr("src", _imports_27)} alt="Void" class="w-[200px] h-auto mt-0 mx-auto" data-v-c1522c7b><p class="mt-10 mb-0 text-2xl sm:mb-8 xl:max-w-3xl font-inter text-neutral-500" data-v-c1522c7b> Below are health apps being built using the LFH platform. </p><div class="w-1/3 my-8 border-t border-gray-300" data-v-c1522c7b></div></div></div><div class="flex items-center justify-center min-h-screen bg-white" data-v-c1522c7b><div class="container flex flex-col justify-center max-w-5xl px-5 pb-10 mt-4 mb-10 overflow-hidden border-2 border-gray-200 shadow-lg rounded-3xl" id="mission" data-v-c1522c7b><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-12 md:px-10 lg:px-32" data-v-c1522c7b><p class="mt-10 text-xl sm:mb-1 xl:max-w-3xl font-inter" id="health-suite" data-v-c1522c7b> The First &amp; Only &#39;Local-First&#39; Health Management Suite </p><h1 class="mt-0 text-6xl font-bold leadi sm:text-6xl xl:max-w-3xl font-inter" data-v-c1522c7b> A new era of health records management. </h1><div class="custom-container" data-v-c1522c7b><h1 class="items-center custom-heading font-inter" data-v-c1522c7b><span class="typed-text" data-v-c1522c7b>${ssrInterpolate(typeValue.value)}</span><span class="blinking-cursor" data-v-c1522c7b>|</span><span class="${ssrRenderClass([{ typing: typeStatus.value }, "cursor"])}" data-v-c1522c7b> </span></h1></div><p class="mb-0 text-2xl sm:mb-8 xl:max-w-2xl font-inter" data-v-c1522c7b> Own, manage, and protect your health records with ease right on your own computer—no subscription required.`);
      _push(ssrRenderComponent(_component_Input58t, null, null, _parent));
      _push(`</p><div class="flex flex-wrap justify-center" data-v-c1522c7b><button type="button" class="px-8 py-3 m-2 text-lg border border-gray-800 rounded" data-v-c1522c7b><a style="${ssrRenderStyle({ "text-decoration": "none", "color": "inherit" })}" data-v-c1522c7b> Coming Soon. Join the Waitlist. </a></button></div></div><div class="container flex flex-col justify-center max-w-6xl md:flex-row" data-v-c1522c7b><div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_28)} alt="Your Image Description" class="w-2/3 sm:w-full rounded-xl" data-aos="zoom-in" data-v-c1522c7b></div><div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_29)} alt="Your Image Description" class="w-2/3 sm:w-full rounded-xl" data-aos="zoom-in" data-v-c1522c7b></div><div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_30)} alt="Your Image Description" class="w-2/3 sm:w-full rounded-xl" data-aos="zoom-in" data-v-c1522c7b></div><div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_31)} alt="Your Image Description" class="w-2/3 sm:w-full rounded-xl" data-aos="zoom-in" data-v-c1522c7b></div><div class="flex justify-center w-full mx-2 mb-4 text-left md:w-1/5" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_32)} alt="Your Image Description" class="w-2/3 sm:w-full rounded-xl" data-aos="zoom-in" data-v-c1522c7b></div></div><div class="container flex flex-col items-center px-4 pb-8 mx-auto text-center text-gray-900 lg:pb-8 md:py-10 md:px-10 lg:px-32" id="true-privacy" data-v-c1522c7b><h1 class="mt-5 text-6xl font-bold leadi sm:text-5xl xl:max-w-4xl font-inter" data-v-c1522c7b> True Privacy and Data Freedom </h1><p class="max-w-4xl mx-auto mt-4 text-2xl font-inter" data-v-c1522c7b> With Local First Health (LFH), true privacy means your health data stays on your device, under your control—no third-party servers, no unnecessary risks. You have full data freedom, working offline, accessing records anytime, and deciding when and how to share information. It&#39;s privacy and freedom the way it should be: secure, accessible, and entirely yours. </p></div><div class="container flex flex-col items-center px-4 py-8 pb-4 mx-auto mt-8 text-center md:py-16 md:-mt-40 md:pb-8 lg:pb-8 md:py-32 md:px-10 lg:px-32" data-v-c1522c7b><video${ssrRenderAttr("src", _imports_33)} autoplay loop muted class="w-full mx-auto mt-4 mb-8 border-0 border-gray-800 shadow-2xl md:max-w-5xl md:mb-10 md:mt-20 rounded-3xl" data-v-c1522c7b></video></div></div></div><div class="container max-w-xl p-6 mx-auto lg:max-w-7xl" id="our-story" data-v-c1522c7b><div class="text-center" id="our_story" data-v-c1522c7b><h2 class="mt-20 text-3xl font-bold tracki sm:text-5xl font-inter" data-v-c1522c7b> Our Story </h2><img${ssrRenderAttr("src", _imports_34)} alt="local first health team image" class="inline-block mt-5" style="${ssrRenderStyle({ "height": "300px", "width": "auto" })}" data-v-c1522c7b><p class="max-w-2xl mx-auto mt-10 text-xl text-left text-neutral-600 font-courier" data-v-c1522c7b> Our team has been developing health record systems since 2016. Even before the local-first concept was introduced in 2019, we were building offline functionality with our own ‘Syncbase’ technology, integrated into our health app, <a href="https://www.mycure.md" class="underline text-sky-600" target="_blank" data-v-c1522c7b>&quot;MYCURE.&quot;</a> Over the past 8+ years, we&#39;ve encountered the challenges in this sector and experienced firsthand the limitations of a cloud-based setup. <br data-v-c1522c7b><br data-v-c1522c7b> Before relocating to San Francisco, I traveled extensively across the Philippines, Indonesia, Ethiopia, Kenya, South Africa, India, Sri Lanka, and other countries to observe the difficulties faced by doctors, small clinics, and communtiy drugstores, particularly in developing regions. Many still rely on paper-based or outdated systems, highlighting a stark reality: health equity remains a significant global issue. <br data-v-c1522c7b><br data-v-c1522c7b> Health equity, a top priority for organizations like the World Health Organization (WHO), is about ensuring fair and just access to healthcare for all individuals, regardless of socio-economic status, ethnicity, gender, or geographic location. A critical aspect of this is the ability to access and manage medical records. Yet, in many low- and middle-income countries and marginalized communities, disparities in health outcomes persist due to limited or outdated systems that hinder access to vital health information. <br data-v-c1522c7b><br data-v-c1522c7b> We believe that &#39;Local-First Health&#39; is the solution to these persistent issues. By putting data ownership and management back into the hands of healthcare providers and patients, LFH aims to bridge the gap in healthcare accessibility, empowering underserved communities with secure, offline-capable solutions. <br data-v-c1522c7b><br data-v-c1522c7b> It’s time to finally solve the holy grail of healthcare data and contribute to a world where health equity is more than just an aspiration—it’s a reality. <br data-v-c1522c7b><br data-v-c1522c7b> The future is now—and it’s local. <br data-v-c1522c7b><br data-v-c1522c7b> Dale David<br data-v-c1522c7b> Founder<br data-v-c1522c7b> Local-First Health <br data-v-c1522c7b> San Francisco, CA <br data-v-c1522c7b> localfirsthealth@gmail.com <br data-v-c1522c7b><br data-v-c1522c7b><a href="https://x.com/localfirsthlth" target="_blank" rel="noopener noreferrer" style="${ssrRenderStyle({ "display": "inline-block" })}" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_35)} alt="Substack Icon" width="24" height="24" data-v-c1522c7b></a><a href="https://localfirsthealth.substack.com" target="_blank" rel="noopener noreferrer" style="${ssrRenderStyle({ "display": "inline-block", "margin-left": "20px" })}" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_36)} alt="Substack Icon" width="24" height="24" data-v-c1522c7b></a></p><p class="max-w-2xl mx-auto mt-4 text-xl text-left text-neutral-600 font-courier" data-v-c1522c7b> PS - I participated in the first Local-First Conference, recently held in Berlin, Germany (May 2024). This movement is indeed growing. Re-live the energy of the conference in a <a href="https://www.youtube.com/watch?v=cLuX0AFNJzQ" class="underline text-sky-600" target="_blank" data-v-c1522c7b>96-second video.</a><br data-v-c1522c7b><br data-v-c1522c7b></p><br data-v-c1522c7b><br data-v-c1522c7b><div class="flex justify-center mt-10" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_37)} alt="Logo" class="object-contain w-full max-w-md" data-v-c1522c7b></div></div></div><footer class="px-4 divide-y" data-v-c1522c7b><div class="flex flex-col items-center py-6" data-v-c1522c7b><img${ssrRenderAttr("src", _imports_38)} alt="Local First Health Logo" class="w-auto h-10 mb-2" data-v-c1522c7b><div class="text-sm text-center" data-v-c1522c7b>Born in San Francisco, CA</div><div class="text-sm text-center" data-v-c1522c7b>localfirsthealth@gmail.com</div><div class="text-sm text-center" data-v-c1522c7b> © 2024 Local First Health | All rights reserved. </div></div></footer></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1522c7b"]]);
export {
  index as default
};
//# sourceMappingURL=index-DRuZeY9Y.js.map
