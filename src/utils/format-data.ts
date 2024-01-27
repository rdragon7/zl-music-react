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
