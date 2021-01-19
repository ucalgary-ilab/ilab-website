import React from 'react'
import ReactMarkdown from 'react-markdown'
import _ from 'lodash'
import Header from './header'
import Publications from './publications'
import Footer from './footer'

class Speaker extends React.Component {
  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  constructor(props) {
    super(props)

    this.speaker = this.props.speaker
    this.speaker.nameId = _.lowerCase(this.speaker.name).replace(/ /g, '-')
    this.speaker.id = `${this.speaker.date}-${this.speaker.nameId}`
  }

  render() {
    return (
      <div style={{ 'margin': '40px 0' }}>
        <p className="ui horizontal divider header">
          { this.speaker.date }
        </p>
        <div className="publication ui vertical segment grid" data-id={ this.speaker.id } key={ this.speaker.id }>
          <div className="three wide column" style={{ margin: 'auto', 'text-align': 'center' }}>
            <a href={ this.speaker.url } target="_blank" >
            <img className="photo" src={ `/static/images/seminar/${this.speaker.nameId}.jpg` } />
            <h1>{ this.speaker.name }</h1>
            <h3>
              { this.speaker.affiliation }
            </h3>
            </a>
          </div>
          <div className="twelve wide column">
            <h1>{ this.speaker.title }</h1>
            <h2>Abstract</h2>
            <p>{ this.speaker.abstract }</p>
            <h2>Bio</h2>
            <p>{ this.speaker.bio }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Speaker
