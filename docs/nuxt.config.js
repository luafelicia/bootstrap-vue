const fs = require('fs')
const path = require('path')
const hljs = require('highlight.js')
const marked = require('marked')

const renderer = new marked.Renderer()

const ANCHOR_LINK_HEADING_LEVELS = [2, 3, 4, 5]

// Get routes by a given dir
const getRoutesByDir = (root, dir, excludes = []) =>
  fs
    .readdirSync(`${root}/${dir}`)
    .filter(c => excludes.indexOf(c) === -1)
    .filter(c => !/\.(s?css|js|ts)$/.test(c))
    .map(page => `/docs/${dir}/${page}`)

// Custom "highlight.js" implementation for markdown renderer
renderer.code = (code, language) => {
  const validLang = !!(language && hljs.getLanguage(language))
  const highlighted = validLang ? hljs.highlight(language, code).value : code
  return `<pre class="hljs ${language} text-monospace p-2 notranslate" translate="no">${highlighted}</pre>`
}

// Instruct google translate not to translate `<code>` content
renderer.codespan = text => {
  return `<code translate="no" class="notranslate">${text}</code>`
}

// Custom heading implementation for markdown renderer
// @link: https://github.com/nuxt/docs/blob/967fc39b4dc0712d2d5089014eddc7e7a2e65422/api.js#L27
// @link: https://github.com/markedjs/marked/blob/1f5b9a19f532e2e1e3e63ae5efd81af75acf572f/lib/marked.js#L962
renderer.heading = function(text, level, raw, slugger) {
  const getTextMarkup = text => `<span class="bd-content-title">${text}</span>`

  if (!this.options.headerIds) {
    return `<h${level}>${getTextMarkup(text)}</h${level}>\n`
  }

  const pattern = /\s?{([^}]+)}$/

  let link = pattern.exec(text)
  if (link && link.length && link[1]) {
    text = text.replace(pattern, '')
    link = link[1]
  } else {
    link = this.options.headerPrefix + slugger.slug(raw)
  }

  const anchor =
    ANCHOR_LINK_HEADING_LEVELS.indexOf(level) !== -1
      ? `<a class="anchorjs-link" href="#${link}" aria-label="Anchor"></a>`
      : ''

  return `<h${level} id="${link}">${getTextMarkup(text + anchor)}</h${level}>\n`
}

// Convert lead-in blockquote paragraphs to true bootstrap docs leads
renderer.blockquote = function(text) {
  return text.replace('<p>', '<p class="bd-lead">')
}

// Bootstrap v4 table support for markdown renderer
const originalTable = renderer.table
renderer.table = function(header, body) {
  let table = originalTable.apply(this, arguments)
  table = table
    .replace('<table>', '<table class="b-table table table-bordered table-striped bv-docs-table">')
    .replace('<thead>', '<thead class="thead-default">')
  return `<div class="table-responsive-sm">${table}</div>`
}

module.exports = {
  srcDir: __dirname,

  modern: 'client',

  build: {
    extractCSS: true,
    cssSourceMap: true,
    postcss: {
      preset: {
        autoprefixer: {
          cascade: false
        }
      }
    },
    extend(config, { loaders }) {
      config.resolve.alias.vue = 'vue/dist/vue.common'

      config.resolveLoader.alias = config.resolveLoader.alias || {}
      config.resolveLoader.alias['marked-loader'] = path.join(__dirname, './utils/marked-loader')

      config.devtool = 'eval-source-map'

      config.module.rules.push({
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: 'marked-loader',
            options: {
              // Our customized renderer
              renderer,
              // headerIds must always be true, since Search and Table of Contents rely on the IDs
              headerIds: true,
              // Handle GitHub flavoured markdown
              gfm: true
            }
          }
        ]
      })

      loaders.scss.precision = 6
      loaders.scss.outputStyle = 'expanded'
    }
  },

  loading: {
    color: '#59cc93',
    height: '3px'
  },

  manifest: {
    name: 'BootstrapVue',
    short_name: 'BootstrapVue',
    description: 'Quickly integrate Bootstrap v4 components with Vue.js',
    theme_color: '#563d7c'
  },

  generate: {
    dir: 'docs-dist',
    routes: () => [
      ...getRoutesByDir('src', 'components'),
      ...getRoutesByDir('src', 'directives', ['modal', 'toggle']),
      ...getRoutesByDir('docs/markdown', 'reference'),
      ...getRoutesByDir('docs/markdown', 'misc')
    ]
  },

  plugins: [
    '~plugins/bootstrap-vue.js',
    '~plugins/codemirror.js',
    '~plugins/play.js',
    '~/plugins/docs.js'
  ],

  modules: ['@nuxtjs/pwa', '@nuxtjs/google-analytics'],

  'google-analytics': {
    id: 'UA-89526435-1',
    autoTracking: {
      exception: true
    }
  },

  head: {
    meta: [{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    script: [
      {
        src: '//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver',
        crossorigin: 'anonymous'
      }
    ]
  },

  css: [
    'highlight.js/styles/atom-one-light.css',
    'codemirror/lib/codemirror.css',
    'bootstrap/dist/css/bootstrap.css',
    '../scripts/build.scss', // BootstrapVue SCSS
    '@assets/css/docs.min.css',
    '@assets/scss/styles.scss'
  ]
}
