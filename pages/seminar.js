import React from 'react'
import ReactMarkdown from 'react-markdown'
import seminar from '../content/output/seminar.json'
import Speaker from './speaker.js'

class Seminar extends React.Component {
  render() {
    console.log('jogejo')
    console.log(seminar)
    return (
      <div id="seminar" className="category">
        <h1 className="ui horizontal divider header">
          <i className="calendar alternate outline icon"></i>
          iLab Invited Talk Series
        </h1>
        <div className="ui " style={{ marginTop: '50px' }}>
         { seminar.map((speaker, i) => {
            return (
              <Speaker
                speaker={ speaker }
              />
            )
          } )}
        </div>
      </div>
    )
  }
}

export default Seminar
