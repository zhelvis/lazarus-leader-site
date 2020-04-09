module.exports = {
  locales: ["en", "ru", "fr"],
  defaultLocale: "en",
  nsMap: {
    "/": ["common", "indexPage", "manifest"],
    "/404/": ["common", "404"],
    "/about/": [
      "common",
      "aboutPage",
      "generalInfo",
      "education",
      "experience",
    ],
    "/projects/": ["common", "projectsPage", "projects"],
  },
}
