// ============================================================
// mevoyez Clash Config v1.0
// Clash Verge Rev Script
// ============================================================


// ============================================================
// 双机场订阅接口
// 修改这里即可
// ============================================================

const AIRPORT_A_URL = "机场A订阅地址";

const AIRPORT_B_URL = "机场B订阅地址";



// ============================================================
// 国内 DNS
// ============================================================

const domesticNameservers = [

  "https://223.5.5.5/dns-query",

  "https://doh.pub/dns-query"

];



// ============================================================
// 国外 DNS
// ============================================================

const foreignNameservers = [

  "https://1.1.1.1/dns-query",

  "https://8.8.8.8/dns-query",

  "https://208.67.222.222/dns-query",

  "https://77.88.8.8/dns-query"

];



// ============================================================
// DNS 配置
// ============================================================

const dnsConfig = {


  enable: true,


  listen: "0.0.0.0:1053",


  ipv6: false,


  "prefer-h3": false,


  "respect-rules": true,


  "use-system-hosts": false,


  "cache-algorithm": "arc",


  "enhanced-mode": "fake-ip",


  "fake-ip-range":

    "198.18.0.1/16",



  "fake-ip-filter": [

    "+.lan",

    "+.local",

    "+.msftconnecttest.com",

    "+.msftncsi.com",

    "localhost.ptlogin2.qq.com",

    "localhost.sec.qq.com",

    "+.in-addr.arpa",

    "+.ip6.arpa",

    "time.*.com",

    "time.*.gov",

    "pool.ntp.org",

    "localhost.work.weixin.qq.com"

  ],



  "default-nameserver": [

    "223.5.5.5",

    "1.2.4.8"

  ],



  nameserver: [

    ...foreignNameservers

  ],



  "proxy-server-nameserver": [

    ...domesticNameservers

  ],



  "direct-nameserver": [

    ...domesticNameservers

  ],



  "nameserver-policy": {


    "geosite:private,cn":

      domesticNameservers


  }


};


// ============================================================
// Rule Provider 通用配置
// ============================================================

const ruleProviderCommon = {

  type: "http",

  interval: 86400

};



// ============================================================
// Rule Providers
// ============================================================

const ruleProviders = {


  // 广告拦截

  reject: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",

    path:
      "./ruleset/reject.yaml"

  },



  // Apple

  apple: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",

    path:
      "./ruleset/apple.yaml"

  },



  // iCloud

  icloud: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",

    path:
      "./ruleset/icloud.yaml"

  },



  // Google

  google: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",

    path:
      "./ruleset/google.yaml"

  },



  // Proxy

  proxy: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",

    path:
      "./ruleset/proxy.yaml"

  },



  // Direct

  direct: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",

    path:
      "./ruleset/direct.yaml"

  },



  // Private

  private: {

    ...ruleProviderCommon,

    behavior: "domain",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",

    path:
      "./ruleset/private.yaml"

  },



  // AI

  AI: {

    ...ruleProviderCommon,

    behavior: "classical",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt",

    path:
      "./ruleset/AI.yaml"

  },



  // TikTok

  TikTok: {

    ...ruleProviderCommon,

    behavior: "classical",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt",

    path:
      "./ruleset/TikTok.yaml"

  },



  // Netflix

  Netflix: {

    ...ruleProviderCommon,

    behavior: "classical",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt",

    path:
      "./ruleset/Netflix.yaml"

  },



  // YouTube

  YouTube: {

    ...ruleProviderCommon,

    behavior: "classical",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt",

    path:
      "./ruleset/YouTube.yaml"

  },



  // Spotify

  Spotify: {

    ...ruleProviderCommon,

    behavior: "classical",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt",

    path:
      "./ruleset/Spotify.yaml"

  },



  // Telegram IP

  telegramcidr: {

    ...ruleProviderCommon,

    behavior: "ipcidr",

    format: "text",

    url:
      "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",

    path:
      "./ruleset/telegramcidr.yaml"

  },


};

// ============================================================
// Rules
// ============================================================

const rules = [

  // 常用国外服务

  "DOMAIN-SUFFIX,googleapis.cn,谷歌服务",

  "DOMAIN-SUFFIX,gstatic.com,谷歌服务",

  "DOMAIN-SUFFIX,github.io,节点选择",



  // 广告

  "RULE-SET,reject,REJECT",



  // Apple

  "RULE-SET,icloud,苹果服务",

  "RULE-SET,apple,苹果服务",



  // 娱乐

  "RULE-SET,Spotify,Spotify",

  "RULE-SET,AI,AI",

  "RULE-SET,TikTok,TikTok",

  "RULE-SET,YouTube,YouTube",

  "RULE-SET,Netflix,Netflix",



  // Telegram

  "RULE-SET,telegramcidr,电报消息,no-resolve",



  // Google

  "RULE-SET,google,谷歌服务",



  // Proxy

  "RULE-SET,proxy,节点选择",



  // Direct

  "RULE-SET,direct,DIRECT",

  "RULE-SET,private,DIRECT",



  // 中国大陆

  "GEOIP,CN,DIRECT",

  "GEOSITE,CN,DIRECT",



  // 最终

  "MATCH,漏网之鱼"

];




// ============================================================
// 代理组基础
// ============================================================

const groupBaseOption = {

  interval: 300,

  timeout: 3000,

  url:

    "https://www.gstatic.com/generate_204",

  lazy: true,

  "max-failed-times": 3

};





// ============================================================
// Main
// ============================================================

function main(config) {



  // DNS

  config.dns = dnsConfig;



  // 规则

  config["rule-providers"] = ruleProviders;

  config.rules = rules;



  // ==========================================================
  // Proxy Groups
  // ==========================================================

  config["proxy-groups"] = [



    // 自动选择

    {

      name:"自动选择",

      type:"url-test",

      include-all:true,

      interval:90,

      tolerance:80,

      url:

      "https://www.gstatic.com/generate_204",

      hidden:true

    },



    // 故障转移

    {

      name:"故障转移",

      type:"fallback",

      include-all:true,

      interval:300,

      url:

      "https://www.gstatic.com/generate_204",

      hidden:true

    },



    // 主节点选择

    {

      name:"节点选择",

      type:"select",

      proxies:[

        "自动选择",

        "故障转移"

      ],

      include-all:true

    },



    // AI

    {

      name:"AI",

      type:"url-test",

      include-all:true,

      filter:

      "(?i)AI|GPT",

      interval:90,

      tolerance:80,

      url:

      "https://www.gstatic.com/generate_204",

      hidden:false

    },



    // TikTok

    {

      name:"TikTok",

      type:"url-test",

      include-all:true,

      "exclude-filter":

      "(?i)香港|HK|Hong Kong|HKG|🇭🇰",

      interval:90,

      tolerance:80,

      url:

      "https://www.gstatic.com/generate_204",

      hidden:false

    },



    // Spotify

    {

      name:"Spotify",

      type:"select",

      proxies:[

        "DIRECT",

        "节点选择"

      ],

      include-all:true

    },



    // YouTube

    {

      name:"YouTube",

      type:"select",

      proxies:[

        "节点选择"

      ],

      include-all:true

    },



    // Netflix

    {

      name:"Netflix",

      type:"select",

      proxies:[

        "节点选择"

      ],

      include-all:true

    },



    // Google

    {

      name:"谷歌服务",

      type:"select",

      proxies:[

        "节点选择"

      ],

      include-all:true

    },



    // Apple

    {

      name:"苹果服务",

      type:"select",

      proxies:[

        "DIRECT",

        "节点选择"

      ],

      include-all:true

    },



    // Telegram

    {

      name:"电报消息",

      type:"select",

      proxies:[

        "节点选择"

      ],

      include-all:true

    },



    // 漏网之鱼

    {

      name:"漏网之鱼",

      type:"select",

      proxies:[

        "节点选择",

        "DIRECT"

      ],

      include-all:true

    }

  ];



  return config;

}
