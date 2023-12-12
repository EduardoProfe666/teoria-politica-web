import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default {
  title: "Teoría Política",
  description: "Teoría Política",

  head: [
    ["meta", { name: "theme-color", content: "#FC06C3" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/icons/favicon.png",
      },
    ],
  ],

  theme: defaultTheme({

    contributors: false,
    editLink: false,
    editLinkText: "",
    searchPlaceholder: "Buscar...",
    lastUpdated: false,
    logo: "/icons/favicon.png",
    navbar: [
      {
        text: "Curso",
        children: [
          { text: "Inicio", link: "/curso/README.md" },
          { text: "Tema 1", link: "/curso/tema-1/C1.md" },
          { text: "Tema 2", link: "/curso/tema-2/C3.md" },
          { text: "Tema 3", link: "/curso/tema-3/C7.md" },
          { text: "Tema 4", link: "/curso/tema-4/C11.md" },
        ],
      },
      {
        text: "Materiales",
        link: "/materiales/",
      },
    ],
    sidebar: {
      "/materiales/": [
        {
          title: "Materiales",
          children: ["/materiales/README.md"],
        },
      ],
      "/curso/": [
        {
          title: "Inicio",
          children: [
            "/curso/README.md",
            {
              text: "Tema 1",
              children: ["/curso/tema-1/C1.md", "/curso/tema-1/C2.md"],
            },
            {
              text: "Tema 2",
              children: [
                "/curso/tema-2/C3.md",
                "/curso/tema-2/C4.md",
                "/curso/tema-2/C5.md",
                "/curso/tema-2/C6.md",
              ],
            },
            {
              text: "Tema 3",
              children: [
                "/curso/tema-3/C7.md",
                "/curso/tema-3/C8.md",
                "/curso/tema-3/C9.md",
                "/curso/tema-3/C10.md",
              ],
            },
            {
              text: "Tema 4",
              children: [
                "/curso/tema-4/C11.md",
                "/curso/tema-4/C12.md",
                "/curso/tema-4/C13.md",
              ],
            },
          ],
        },
      ],
    },
    sidebarDepth: 1,
    tip: "Nota",
    warning: "Advertencia",
    danger: "Importante",
    notFound: [
      "La página a la que se desea acceder no existe. Revise si cometió algún un error de escritura.",
    ],
    backToHome: "Regresar a Inicio",
    toggleColorMode: "Cambiar Modo de Color",
  }),

  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-nprogress",
    searchPlugin({
      maxSuggestions: 15,
      hotKeys: ["b", "/", "f"],
      locales: {
        "/": {
          placeholder: "Buscar...",
        },
      },
    }),
    googleAnalyticsPlugin({
      id: "G-XR9L70KR2D",
      debug: true,
    }),
  ],
  base: "/teoria-politica-web/",
};
