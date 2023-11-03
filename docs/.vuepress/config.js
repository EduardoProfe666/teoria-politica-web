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
          { text: "Tema 1", link: "/curso/tema-1/inicio.md" },
          { text: "Tema 2", link: "/curso/tema-2/inicio.md" },
          { text: "Tema 3", link: "/curso/tema-3/inicio.md" },
          { text: "Tema 4", link: "/curso/tema-4/inicio.md" },
        ],
      },
      {
        text: "Escritorio",
        link: "/escritorio/",
      },
      {
        text: "Materiales",
        link: "/materiales/",
      },
    ],
    sidebar: {
      "/escritorio/": [
        {
          title: "Escritorio",
          children: ["/escritorio/README.md"],
        },
      ],
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
              link: "/curso/tema-1/inicio.md",
              children: [],
            },
            {
              text: "Tema 2",
              link: "/curso/tema-2/inicio.md",
              children: [],
            },
            {
              text: "Tema 3",
              link: "/curso/tema-3/inicio.md",
              children: [],
            },
            {
              text: "Tema 4",
              link: "/curso/tema-4/inicio.md",
              children: [],
            },
          ],
        },
      ],
    },
    sidebarDepth: 2,
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
