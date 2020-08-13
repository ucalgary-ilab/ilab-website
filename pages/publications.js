import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

import Detail from './detail'

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
  constructor(props) {
    super(props);

    this.state = {
      publication: publications[0]
    }
  }

  componentDidMount() {
  }

  onClick(publication) {
    this.setState({ publication: publication })
    // $('.ui.modal').modal('show')
    console.log($('.ui.modal').modal)
    // $('.ui.modal').modal('show')
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
        <h1 className="ui horizontal divider header">
          <i className="file alternate outline icon"></i>
          { this.props.short ? 'Recent Publications' : 'Publications' }
        </h1>
        <div className="ui segment" style={{ marginTop: '50px' }}>
         { publications.map((publication, i) => {
            const id = publication.base.split('.json')[0]
            return (
              <div className="publication ui vertical segment stackable grid" data-id={ id } onClick={ this.onClick.bind(this, publication) } key={ i }>
                <div className="three wide column" style={{ margin: 'auto' }}>
                  <img className="cover" src={ `/static/images/publications/cover/${ id }.jpg` } />
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
                          names.includes(author) ?
                          <a href={ `/people/${ namesId[author] }` } key={ author }>
                            <img src={ `/static/images/people/${ namesId[author] }.jpg`} className="ui circular spaced image mini-profile" />
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
            )
         })}
        </div>
        <div className="ui large modal">
          { this.state.publication &&
            <div className="header">
              <a href={ `/publications/${ this.state.publication.base.split('.json')[0] }.pdf` } target="_blank">
                <i className="far fa-file-pdf fa-fw"></i> PDF
              </a>
              &nbsp;&nbsp;
              <a href={ `/publications/${ this.state.publication.base.split('.json')[0] }` } target="_blank" style={{ float: 'right' }}>
                <i className="fas fa-external-link-alt fa-fw"></i> Link
              </a>
            </div>
          }
          <div className="content">
            <Detail
              publication={ this.state.publication }
              namesId={ namesId }
              people={ people }
            />
          </div>
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
