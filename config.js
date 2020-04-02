module.exports = {
  locales: ["en", "ru", "fr"],
  defaultLocale: "en",
  nsMap: {
    "/": ["common", "index"],
    "/404/": ["common", "404"],
    "/about/": ["common", "about", "education","experience"],
    "/projects/": ["common", "projects"],
  },
}
