export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: `razelle's front end portfolio`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    '@/assets/css/reset.css',
    // SCSS file in the project
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vuemq.js',
    '~/plugins/vuecarousel.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
