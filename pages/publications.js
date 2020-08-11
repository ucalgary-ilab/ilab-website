import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

let fileNames = Object.keys(summary.fileMap)
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


fileNames = Object.keys(summary.fileMap)
keys = fileNames.filter((fileName) => {
  return fileName.includes('people')
})

let people = []
for (let key of keys) {
  let id = key.split('/')[3].replace('.json', '')
  let person = Object.assign(summary.fileMap[key], { id: id })
  people.push(person)
}


class Publications extends React.Component {
  componentDidMount() {
  }

  render() {
    const names = people.map((person) => person.name )
    const namesId = {}
    for (let person of people) {
      namesId[person.name] = person.id
    }

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
              <div className="publication ui vertical segment stackable grid" data-id={ id } >
                <div className="three wide column" style={{ margin: 'auto' }}>
                  <img className="cover" src={ `/static/images/publications/${ id }.jpg` } />
                </div>
                <div className="thirteen wide column">
                  <p><span className="ui big inverted teal label">{ publication.series }</span></p>
                  <p>
                    <a href={ `/publications/${id}` } style={{ fontSize: '1.3em' }}>
                      <b>{ publication.title }</b>
                    </a>
                  </p>
                  <p>
                    { publication.authors.map((author) => {
                        return (
                          names.includes(author) ?
                          <a href={ `/people/${ namesId[author] }` }>
                            <img src={ `/static/images/people/${ namesId[author] }.jpg`} className="ui circular spaced image mini-profile" />
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
