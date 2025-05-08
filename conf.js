jsproxy_config({
  ver: '101',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
    'mysite': {
      label: 'My Worker',
      lines: {
        '18f36c2b-8a5a-4475-9081-d941994be5e4.preview.devprod.cloudflare.dev': 1,
      }
    },
    'cfworker': {
      label: 'CFWorker Shared',
      lines: {
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  node_default: 'mysite',
  node_acc: 'cfworker',

  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  direct_host_list: 'cors_v1.txt',

  inject_html: '<!-- custom html -->',

  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://blog.51sec.org/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
