module.exports = {
    locales : ['en','de'],
     // English pages will render without prefix. If you want to prevent it, just delete this key
    defaultLocale: 'en',
    // need for translation spliting
    nsMap: {
        '/': ['common','index'],
        '/404/': ['common','404'],
        '/about/': ['common','about']
    }
}