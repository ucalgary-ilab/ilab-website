import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'


const fileNames = Object.keys(summary.fileMap)
let keys = fileNames.filter((fileName) => {
  return fileName.includes('publications')
})

let publications = []
for (let key of keys) {
  publications.push(summary.fileMap[key])
}
publications = publications.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})

class Publications extends React.Component {
  componentDidMount() {
  }

  render() {
    if (this.props.short) {
      publications = publications.slice(0, 20)
    }
    return (
      <div id="publications" className="category">
        <h1 class="ui horizontal divider header">
          <i class="file alternate outline icon"></i>
          Publications
        </h1>
        <div className="ui segment" style={{ marginTop: '50px' }}>
         { publications.map((publication, i) => {
            return (
              <div className="project ui vertical segment stackable grid" data-id={ publication.base.split('.json')[0] } >
                <div className="four wide column">
                </div>
                <div className="twelve wide column">
                  <p><span className="ui large inverted pink label">{ publication.series }</span></p>
                  <p><b>{ publication.title }</b></p>
                  <p>
                    { publication.authors.map((author)  => author
                      ).reduce((prev, current) => [prev, ', ', current])
                    }
                  </p>
                </div>
              </div>
            )
         })}
        </div>
       { this.props.short &&
          <div className="ui vertical segment stackable" style={{ textAlign: 'center' }}>
            <a className="ui button" href="/publications">
              { `+ ${publications.length} more publications` }
            </a>
          </div>
       }
      </div>
    )
  }
}

export default Publications
