// 定义正则表达式
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString: string) {
  const lineStrings = lyricString.split('\n')
  const lyrics = []
  for (const line of lineStrings) {
    const res = parseExp.exec(line)
    if (!res) continue
    const time1 = (res[1] as any) * 60 * 1000
    const time2 = (res[2] as any) * 1000
    const time3 =
      (res[3] as any).length === 3 ? (res[3] as any) * 1 : (res[3] as any) * 10
    const time = time1 + time2 + time3
    const content = line.replace(parseExp, '').trim()
    const lyricObj = { time, content }
    lyrics.push(lyricObj)
  }
  return lyrics
}
