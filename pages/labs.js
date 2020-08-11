import React from 'react'
import ReactMarkdown from 'react-markdown'
import labs from '../content/output/labs.json'

class Labs extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1 class="ui horizontal divider header">
          Labs
        </h1>
        <div id="labs" className="ui stackable four column grid" style={{ textAlign: 'center' }}>
          { labs.map((lab) => {
            return (
              <div class="column">
                <div class="ui segment">
                  <a href={ lab.url } target="_blank" className="img">
                  { lab.id !== '' &&
                    <img src={ `/static/images/labs/${lab.id}.png` } />
                  }
                  {
                    lab.id === '' &&
                    <img />
                  }
                  </a>
                  <h3>{ lab.description }</h3>
                  <p class="header">Prof. { lab.prof }</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Labs
