const fs = require("fs")
const path = require("path")
const i18next = require("i18next")
const nodeFsBackend = require("i18next-node-fs-backend")
const config = require("./config")

const { locales, defaultLocale, nsMap } = config

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const srcPath = resolveApp("src")

const createI18nextInstance = async (language, namespaces) => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend)
  await new Promise((resolve) =>
    i18n.init(
      {
        lng: language,
        ...(namespaces && { ns: namespaces }),
        fallbackLng: language,
        interpolation: { escapeValue: false },
        backend: { loadPath: `${srcPath}/locales/{{lng}}/{{ns}}.json` },
      },
      resolve
    )
  )
  return i18n
}

const getLocalzedPath = (path, locale, defaultLocale) =>
  defaultLocale && defaultLocale === locale ? path : `/${locale}${path}`

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  deletePage(page)

  locales.map(async (locale) => {
    const i18n = await createI18nextInstance(locale, nsMap[page.path])

    const localizedPath = getLocalzedPath(page.path, locale, defaultLocale)

    const alternateLinks = locales.map((altLocale) => ({
      language: altLocale,
      path: getLocalzedPath(page.path, altLocale, defaultLocale),
    }))

    const isDefault404 = localizedPath === "/404/"
    const isPrefixed404 = /^\/[a-z]{2}\/404\/$/.test(localizedPath)
    const is404 = isDefault404 || isPrefixed404

    return createPage({
      ...page,
      path: localizedPath,
      ...(isDefault404 && {
        matchPath: "/*",
      }),
      ...(isPrefixed404 && {
        matchPath: `/${locale}/*`,
      }),
      context: {
        ...page.context,
        language: locale,
        i18nResources: i18n.services.resourceStore.data,
        ...(!is404 && { alternateLinks }),
      },
    })
  })
}
