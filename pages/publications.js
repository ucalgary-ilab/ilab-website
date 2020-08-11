import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'
import people from '../content/output/people.json'

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
    const names = people.map((person) => person.name )

    if (this.props.short) {
      publications = publications.slice(0, 20)
    }

    if (this.props.author) {
      publications = publications.filter((publication) => {
        return publication.authors.includes(this.props.author)
      })
    }

    return (
      <div id="publications" className="category">
        <h1 class="ui horizontal divider header">
          <i class="file alternate outline icon"></i>
          { this.props.short ? 'Recent Publications' : 'Publications' }
        </h1>
        <div className="ui segment" style={{ marginTop: '50px' }}>
         { publications.map((publication, i) => {
            const id = publication.base.split('.json')[0]
            return (
              <div className="project ui vertical segment stackable grid" data-id={ id } >
                <div className="four wide column">
                </div>
                <div className="twelve wide column">
                  <p><span className="ui big inverted teal label">{ publication.series }</span></p>
                  <p>
                    <a href={ `/publications/${id}` } style={{ fontSize: '1.3em' }}>
                      <b>{ publication.title }</b>
                    </a>
                  </p>
                  <p>
                    { publication.authors.map((author) => {
                        let id = author.replace(' ', '-').toLowerCase()
                        return (
                          names.includes(author) ?
                          <a href={ `/people/${id}` }>
                            <img src={ `/static/images/people/${ id }.jpg`} className="ui mini circular spaced image" style={{ width: '24px', marginLeft: 0 }} />
                            <span>{author}</span>
                          </a>
                          :
                          <span>{author}</span>
                        )
                      }).reduce((prev, current) => [prev, ' , ', current])
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
