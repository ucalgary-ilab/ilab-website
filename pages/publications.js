import React from 'react'
import Detail from './detail'
import summary from '../content/output/summary.json'
import booktitles from '../content/output/booktitles.json'
import files from '../content/output/files.json'
import vimeo from '../content/output/vimeo.json'

class Publications extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      publication: null
    }

    this.getPublications()
    this.getPeople()

    if (this.props.short) {
      this.publications = this.publications.slice(0, 20)
    }
    if (this.props.author) {
      this.publications = this.publications.filter((publication) => {
        return publication.authors.includes(this.props.author)
      })
    }
  }

  getPublications() {
    const fileNames = Object.keys(summary.fileMap)
    const keys = fileNames.filter((fileName) => {
      return fileName.includes('publications')
    })

    this.publications = []
    for (let key of keys) {
      this.publications.push(summary.fileMap[key])
    }
    this.publications = this.publications.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  }

  getPeople() {
    const fileNames = Object.keys(summary.fileMap)
    const keys = fileNames.filter((fileName) => {
      return fileName.includes('people')
    })

    this.people = []
    for (let key of keys) {
      let id = key.split('/')[3].replace('.json', '')
      let person = Object.assign(summary.fileMap[key], { id: id })
      this.people.push(person)
    }

    this.names = this.people.map((person) => person.name )
    this.namesId = {}
    for (let person of this.people) {
      this.namesId[person.name] = person.id
    }
  }

  render() {
    return (
      <div id="publications" className="category">
        <h1 className="ui horizontal divider header">
          <i className="file alternate outline icon"></i>
          { this.props.short ? 'Recent Publications' : 'Publications' }
        </h1>
        <div className="ui segment" style={{ marginTop: '50px' }}>
         { this.publications.map((publication, i) => {
            publication.id = publication.base.split('.json')[0]
            return (
              <div className="publication ui vertical segment stackable grid" data-id={ publication.id } key={ i }>
                <div className="three wide column" style={{ margin: 'auto' }}>
                  <img className="cover" src={ `/static/images/publications/cover/${publication.id}.jpg` } />
                </div>
                <div className="thirteen wide column">
                  <p>
                    <span className="ui big inverted teal label">{ publication.series }</span>
                    { publication.award &&
                      <span className="ui big label">
                      { publication.award === 'Honorable Mention' &&
                        <b><i className="fas fa-award"></i> Honorable Mention</b>
                      }
                      { publication.award === 'Best Paper' &&
                        <b><i className="fas fa-trophy"></i> Best Paper</b>
                      }
                      </span>
                    }
                  </p>
                  <p style={{ fontSize: '1.3em', color: '#00716C' }}>
                      <b>
                        { publication.title }
                      </b>
                  </p>
                  <p>
                    { publication.authors.map((author) => {
                        return (
                          this.names.includes(author) ?
                          <a href={ `/people/${ this.namesId[author] }` } key={ author }>
                            <img src={ `/static/images/people/${ this.namesId[author] }.jpg`} className="ui circular spaced image mini-profile" />
                            <span className="author-link">{author}</span>
                          </a>
                          :
                          <span key={ author }>{author}</span>
                        )
                      }).reduce((prev, current) => [prev, ' , ', current])
                    }
                  </p>
                </div>
              </div>
            ) // publications
         })}
        </div>

        <div id="publications-modal">
         { this.publications.map((publication, i) => {
            publication.id = publication.base.split('.json')[0]
            return (
              <div id={publication.id} className="ui large modal" key={ publication.id }>
                <div className="header">
                  <a href={ `/publications/${publication.id}` } target="_blank">
                    <i className="fas fa-link fa-fw"></i>{`${publication.id}`}
                  </a>
                  &nbsp;&nbsp;-&nbsp;&nbsp;
                  <a href={ `/publications/${publication.id}.pdf` } target="_blank">
                    <i className="far fa-file-pdf fa-fw"></i> pdf
                  </a>
                  <div className="actions" style={{ float: 'right', cursor: 'pointer', color: 'grey' }}>
                    <i className="ui right cancel close icon">
                    </i>
                  </div>
                </div>
                <div className="content">
                  <Detail
                    publication={ publication }
                    namesId={ this.namesId }
                    people={ this.people }
                    booktitles={ booktitles }
                    files={ files }
                    vimeo={ vimeo }
                    short="true"
                  />
                </div>
                <div className="actions">
                  <div className="ui right cancel button">
                    Close
                  </div>
                </div>
              </div>
            )
          })}
        </div>


        { this.props.short &&
          <div className="ui vertical segment stackable" style={{ textAlign: 'center' }}>
            <a className="ui button" href="/publications">
              { `+ ${this.publications.length} more publications` }
            </a>
          </div>
        }
      </div>
    )
  }
}

export default Publications
