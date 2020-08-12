import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'
import booktitles from '../content/output/booktitles.json'

import Header from './header'
import Detail from './detail'
import Footer from './footer'

let fileNames = Object.keys(summary.fileMap)
let keys = fileNames.filter((fileName) => {
  return fileName.includes('people')
})

let people = []
for (let key of keys) {
  let id = key.split('/')[3].replace('.json', '')
  let person = Object.assign(summary.fileMap[key], { id: id })
  people.push(person)
}
const namesId = {}
for (let person of people) {
  namesId[person.name] = person.id
}

class Publication extends React.Component {
  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  render() {
    const publication = require(`../content/output/publications/${ this.props.id }.json`)
    return (
      <div>
        <title>{ `${publication.title} | Interactions Lab | University of Calgary` }</title>

        <Header current="Publications" />

        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="ten wide column centered">
            <Detail
              publication={ publication}
              namesId={ namesId }
              people={ people }
            />
          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Publication
