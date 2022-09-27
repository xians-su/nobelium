const BLOG = {
  title: 'Xians | 慢三拍嘮叨',
  author: 'Xians Su',
  email: 'hi@xians.su',
  link: 'https://blog.xians.su',
  description: '😨資訊恐慌症 × 松鼠症患者🐿，不時嘮叨，但提醒自己言之有物',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://previews.dropbox.com/p/thumb/ABquPDME5Ixbw53WI7HNnVD8-rVnjtwHSy8A2yBXwbITRwjSvjukyk6Sfg8vhNHThy8h1_rm8MCTTDQ0OsXxQC5gRi5HQ5_rO5aFF2eqnsBlORG4zG1cmShtXlLXbWMWvJSg1kcPqT2OjOljAOpKMIfZZ54x_NLQ7QKhajZqBUYPeLubTecr-oqP3HdGvd9B2LFUNJryjy6d1mCmxg_IPdcBhVF5pOfVxCjzjDJ_KwWfgnCEedCoZE6p6Fik1f_Ec0l-4p7FWhJJb5j1owZqSKSBVw_EReC7s8v5Rt789No9dyVRWvv5Bi0xGhQPtyMH1duk45Odein-30WUV2e25ioXgwjwsW9KfcYF5HE8AbhNGAzeQEX3xmLdd6AUQyPX0I0/p.png',
  //socialLink: 'https://twitter.com/arcxians',
  seo: {
    keywords: ['慢三拍嘮叨', 'xians', 'Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ackee', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: 'https://ackee.xians.su/tracker.js', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: 'https://ackee.xians.su', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: 'a531dcad-6197-4326-9abe-3f2d2d35b463' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '8295339c-1c1b-49a8-9641-7f9092f737c9', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
