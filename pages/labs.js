import React from 'react'
import ReactMarkdown from 'react-markdown'
import labs from '../content/output/labs.json'

class Labs extends React.Component {

  render() {
    return (
      <div>
        <h1 className="ui horizontal divider header">
          Research Labs
        </h1>
        <div id="labs" className="ui stackable four cards" style={{ textAlign: 'center', marginTop: '15px' }}>
          { labs.map((lab) => {
            return (
              <div className="card" key={ lab.id } style={{ padding: '15px' }}>
                <a href={ lab.url } target="_blank" className="ui ">
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
