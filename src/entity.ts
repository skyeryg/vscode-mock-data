interface Method {
  description: string
}

interface Entity {
  [methodName: string]: Method
}

export const entity: Entity = {
  boolean: {
    description: '返回一个随机的布尔值。',
  },
  natural: {
    description: '返回一个随机的自然数（大于等于 0 的整数）。',
  },
  integer: {
    description: '返回一个随机的整数。',
  },
  float: {
    description: '返回一个随机的浮点数。',
  },
  character: {
    description: '返回一个随机字符。',
  },
  string: {
    description: '返回一个随机字符串。',
  },
  range: {
    description: '返回一个整型数组。',
  },
  date: {
    description: '返回一个随机的日期字符串。',
  },
  time: {
    description: '返回一个随机的时间字符串。',
  },
  datetime: {
    description: '返回一个随机的日期和时间字符串。',
  },
  now: {
    description: '返回当前的日期和时间字符串。',
  },
  image: {
    description: '生成一个随机的图片地址。',
  },
  dataImage: {
    description: '生成一段随机的 Base64 图片编码。',
  },
  color: {
    description: '随机生成一个有吸引力的颜色，格式为 \'#RRGGBB\'。',
  },
  paragraph: {
    description: '随机生成一段文本。',
  },
  sentence: {
    description: '随机生成一个句子，第一个单词的首字母大写。',
  },
  word: {
    description: '随机生成一个单词。',
  },
  title: {
    description: '随机生成一句标题，其中每个单词的首字母大写。',
  },
  cparagraph: {
    description: '随机生成一段中文文本。',
  },
  csentence: {
    description: '随机生成一段中文文本。',
  },
  cword: {
    description: '随机生成一个汉字。',
  },
  ctitle: {
    description: '随机生成一句中文标题。',
  },
  first: {
    description: '随机生成一个常见的英文名。',
  },
  last: {
    description: '随机生成一个常见的英文姓。',
  },
  name: {
    description: '随机生成一个常见的英文姓名。',
  },
  cfirst: {
    description: '随机生成一个常见的中文名。',
  },
  clast: {
    description: '随机生成一个常见的中文姓。',
  },
  cname: {
    description: '随机生成一个常见的中文姓名。',
  },
  url: {
    description: '随机生成一个 URL。',
  },
  protocol: {
    description: '随机生成一个 URL 协议。',
  },
  domain: {
    description: '随机生成一个域名。',
  },
  email: {
    description: '随机生成一个邮件地址。',
  },
  ip: {
    description: '随机生成一个 IP 地址。',
  },
  tld: {
    description: '随机生成一个顶级域名（Top Level Domain）。',
  },
  region: {
    description: '随机生成一个（中国）大区。',
  },
  province: {
    description: '随机生成一个（中国）省（或直辖市、自治区、特别行政区）。',
  },
  city: {
    description: '随机生成一个（中国）市。',
  },
  county: {
    description: '随机生成一个（中国）县。',
  },
  zip: {
    description: '随机生成一个邮政编码（六位数字）。',
  },
  guid: {
    description: '随机生成一个 GUID。',
  },
  id: {
    description: '随机生成一个 18 位身份证。',
  },
}
