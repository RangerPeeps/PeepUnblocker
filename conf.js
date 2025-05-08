jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  ver: '100',  // Increment this value to make changes effective

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'mysite': {
      label: 'Local',
      lines: {
        [location.host]: 1,
      }
    },
    'demo-hk': {
      label: 'Demo - Hongkong',
      lines: {
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: 'Demo - Singapore',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      }
    },
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        'node-cfworker-2.etherdream.com': 4,
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  // 默认节点
  node_default: 'mysite',

  // 加速节点
  node_acc: 'cfworker',

  // 静态资源 CDN 地址
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表
  direct_host_list: 'cors_v1.txt',

  // 自定义注入页面的 HTML
  inject_html: '<!-- custom html -->',

  // URL 自定义处理（设计中）
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://www.google.com' // Redirect Pornhub to Google
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
