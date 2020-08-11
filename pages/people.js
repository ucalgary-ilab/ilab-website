import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'

let types = [
  { key: 'faculty', title: 'Faculty' },
  { key: 'postdoc', title: 'Post Docs' },
  { key: 'phd', title: 'PhD Students' },
  { key: 'master', title: 'Masters Students' },
  { key: 'undergrad', title: 'Undergrad Students'},
  { key: 'visiting', title: 'Visiting Researchers' },
  { key: 'alumni', title: 'Alumni' }
]

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


class People extends React.Component {
  componentDidMount() {
  }

  render() {
    if (this.props.short) {
      types = types.slice(0, 4)
    }
    return (
      <div id="people" className="category">
        <h1 class="ui horizontal divider header">
          <i class="child icon"></i>
          People
        </h1>
        { types.map((type) => {
          return (
            <div className="people-category">
              <h2>{ type.title }</h2>
              <div className="ui grid">
                { people
                  .filter((person) => {
                    return person.type === type.key
                  }) // filter
                  .map((person) => {
                    return (
                      <a className="four wide column person" href={ `/people/${ person.id }` }>
                        <img className="ui tiny circular image" src={ `/static/images/people/${ person.id }.jpg`}/>
                        <p><b>{ person.name }</b></p>
                        <p>{ person.title }</p>
                      </a>
                    ) // return
                  }) // map
                }
              </div>
            </div>
          )
        })}
       { this.props.short &&
          <div className="ui vertical segment stackable" style={{ textAlign: 'center' }}>
            <a className="ui button" href="/people">
              + see more members
            </a>
          </div>
       }
      </div>
    )
  }
}

export default People
