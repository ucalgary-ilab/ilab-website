import React from 'react'
import ReactMarkdown from 'react-markdown'
import labs from '../content/output/labs.json'

class Labs extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1 className="ui horizontal divider header">
          Research Labs
        </h1>
        <div id="labs" className="ui stackable four column grid" style={{ textAlign: 'center' }}>
          { labs.map((lab) => {
            return (
              <div className="column" key={ lab.id }>
                <a href={ lab.url } target="_blank" className="ui segment">
                  <div className="img">
                  { lab.id !== '' &&
                    <img src={ `/static/images/labs/${lab.id}.png` } />
                  }
                  {
                    lab.id === '' &&
                    <img />
                  }
                  </div>
                  <h3>{ lab.description }</h3>
                  <p className="header">Prof. { lab.prof }</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Labs
