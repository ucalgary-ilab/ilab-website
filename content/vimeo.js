const vimeos = []
const summary = require('./output/summary.json')
for (let key of Object.keys(summary.fileMap)) {
  const item = summary.fileMap[key]
  if (item.video && item.video.includes('vimeo')) vimeos.push(item.video)
  if (item.talk && item.talk.includes('vimeo')) vimeos.push(item.talk)
}
for (let vimeo of vimeos) {
  const id = vimeo.split('/')[3]
  const url = `http://vimeo.com/api/v2/video/${id}.json`
  console.log(url)
}