interface MethodArgs {
  description: string
  default?: string | number
}

interface Method {
  detail?: string
  description?: string
  args?: {
    [key: string]: string | MethodArgs
  }
}

interface Entity {
  [methodName: string]: Method
}

export const entity: Entity = {
  boolean: {
    description: '返回一个随机的布尔值。',
  },
  cfirst: {
    description: '随机生成一个常见的中文名。',
  },
  character: {
    description: '返回一个随机字符。',
  },
  city: {
    description: '随机生成一个（中国）市。',
  },
  clast: {
    description: '随机生成一个常见的中文姓。',
  },
  cname: {
    description: '随机生成一个常见的中文姓名。',
  },
  color: {
    description: '随机生成一个有吸引力的颜色，格式为 #RRGGBB。',
  },
  county: {
    description: '随机生成一个（中国）县。',
  },
  cparagraph: {
    description: '随机生成一段中文文本。',
  },
  csentence: {
    description: '随机生成一段中文文本。',
  },
  ctitle: {
    description: '随机生成一句中文标题。',
  },
  cword: {
    description: '随机生成一个汉字。',
  },
  dataImage: {
    description: '生成一段随机的 Base64 图片编码。',
  },
  date: {
    description: '返回一个随机的日期字符串。',
  },
  dateBetween: {
    args: {
      start: {
        default: '@dayjs().format(\'YYYY-MM-DD HH:mm:ss\')',
        description: '开始时间',
      },
      end: {
        default: '@dayjs().add(10, \'day\').format(\'YYYY-MM-DD HH:mm:ss\')',
        description: '结束时间',
      },
      unit: {
        default: 'day',
        description: '单位 - 可选 year, month, week, day, hour, minute, second ',
      },
      format: '时间格式 - YYYY-MM-DD HH:mm:ss',
    },
    description: '根据开始时间和结束时间生成一个时间序列',
  },
  dateRange: {
    args: {
      start: {
        default: '@dayjs().format(\'YYYY-MM-DD HH:mm:ss\')',
        description: '开始时间',
      },
      length: {
        default: 10,
        description: '长度',
      },
      unit: {
        default: 'day',
        description: '单位 - 可选 year, month, week, day, hour, minute, second ',
      },
      format: '时间格式 - YYYY-MM-DD HH:mm:ss',
    },
    description: '根据开始时间和长度生成一个时间序列',
  },
  datetime: {
    description: '返回一个随机的日期和时间字符串。',
  },
  domain: {
    description: '随机生成一个域名。',
  },
  email: {
    description: '随机生成一个邮件地址。',
  },
  first: {
    description: '随机生成一个常见的英文名。',
  },
  float: {
    description: '返回一个随机的浮点数。',
  },
  guid: {
    description: '随机生成一个 GUID。',
  },
  id: {
    description: '随机生成一个 18 位身份证。',
  },
  image: {
    description: '生成一个随机的图片地址。',
  },
  integer: {
    description: '返回一个随机的整数。',
  },
  ip: {
    description: '随机生成一个 IP 地址。',
  },
  last: {
    description: '随机生成一个常见的英文姓。',
  },
  name: {
    description: '随机生成一个常见的英文姓名。',
  },
  natural: {
    description: '返回一个随机的自然数（大于等于 0 的整数）。',
  },
  now: {
    description: '返回当前的日期和时间字符串。',
  },
  paragraph: {
    description: '随机生成一段文本。',
  },
  protocol: {
    description: '随机生成一个 URL 协议。',
  },
  province: {
    description: '随机生成一个（中国）省（或直辖市、自治区、特别行政区）。',
  },
  range: {
    description: '返回一个整型数组。',
  },
  region: {
    description: '随机生成一个（中国）大区。',
  },
  sentence: {
    description: '随机生成一个句子，第一个单词的首字母大写。',
  },
  string: {
    description: '返回一个随机字符串。',
  },
  time: {
    description: '返回一个随机的时间字符串。',
  },
  title: {
    description: '随机生成一句标题，其中每个单词的首字母大写。',
  },
  tld: {
    description: '随机生成一个顶级域名（Top Level Domain）。',
  },
  url: {
    description: '随机生成一个 URL。',
  },
  word: {
    description: '随机生成一个单词。',
  },
  zip: {
    description: '随机生成一个邮政编码（六位数字）。',
  },
}
