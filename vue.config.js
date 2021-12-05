module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Мое здоровье',
    description: "Мед. карточка всегда на руках",
    themeColor: '#f5f5f5',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'f5f5f5',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  

  },

}

