export function getSizeImage(url: string, size: number) {
  return `${url}?param=${size}x${size}`
}

export function getHotRecommendCount(count: number) {
  if (count < 0) return
  if (count < 10000) return count
  if (Math.floor(Number(count / 10000 < 10000))) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

function padLeftZero(str: any) {
  return ('00' + str).substr(str.length)
}

export function formatDate(time: any, fmt: any) {
  const date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = (o as any)[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

export function formatMonthDay(time: any) {
  return formatDate(time, 'MM月dd日')
}

export function formatMinuteSecond(time: any) {
  return formatDate(time, 'mm:ss')
}

export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
