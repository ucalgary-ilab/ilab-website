const fs = require('fs')
const tree = require('directory-tree')

const files = tree('./static', {
  extensions: /\.(jpg|jpeg|png)$/
})
fs.writeFileSync('./content/output/files.json', JSON.stringify(files, null, 2))