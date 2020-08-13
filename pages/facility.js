import React from 'react'
import ReactMarkdown from 'react-markdown'
import facility from '../content/output/facility.json'

const categories = Object.keys(facility).slice(0, 7)
console.log(categories)

class Facility extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="facility" className="category">
        <h1 class="ui horizontal divider header">
          <i class="cogs icon"></i>
          Facility
        </h1>
        <div class="ui divided items">
          { categories.map((category) => {
            return (
              <div className="category">
                <h1>{ category }</h1>
                <div className="ui four cards" style={{ marginTop: '30px' }}>
                  { facility[category].map((item) => {
                    return (
                      <a className="card" href={ item.url } target="_blank" >
                        <div className="image">
                          <img src={ `/static/images/facility/${item.img}.jpg` } />
                        </div>
                        <div class="content">
                          <a class="header">{ item.name }</a>
                        </div>
                      </a>
                    )
                  }) }
                </div>
              </div>
            )
          }) }

        </div>
      </div>
    )
  }
}

export default Facility
