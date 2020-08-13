import React from 'react'
import ReactMarkdown from 'react-markdown'

import Header from './header'
import Publications from './publications'
import Footer from './footer'

class Person extends React.Component {
  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  constructor(props) {
    super(props)

    this.person = require(`../content/output/people/${this.props.id}.json`)
  }

  renderLink(person, key) {
    if (!person[key]) {
      return ''
    }

    let title = person[key].split('/')[3]
    let href
    let icon
    switch(key) {
      case 'twitter':
        icon = 'fab fa-twitter fa-fw'
        break
      case 'facebook':
        icon = 'fab fa-facebook-square fa-fw'
        break
      case 'github':
        icon = 'fab fa-github-alt fa-fw'
        break
      case 'cv':
        icon = 'far fa-file fa-fw'
        break
      case 'email':
        title = person[key]
        icon = 'far fa-envelope fa-fw'
        break
      case 'linkedin':
        title = 'LinkedIn'
        icon = 'fab fa-linkedin-in fa-fw'
        break
    }

    return (
      <div className="item">
        <a href={ person[key] } target="_blank" style={{ fontSize: '1.2em' }}>
          <i className={ icon } />
          { title }
        </a>
      </div>
    )
  }

  render() {
    return (
      <div>
        <title>{ `${this.person.name} - Interactions Lab | University of Calgary HCI Group` }</title>

        <Header current="People" />

        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">
            <div id="person" className="category" style={{ textAlign: 'center' }}>
              <img className="ui circular image large-profile" src={ `/static/images/people/${this.props.id}.jpg`} style={{ margin: 'auto' }} />
              <h1>{ this.person.name }</h1>
              <p>{ this.person.title }</p>
              { this.person.url &&
                <p>
                  <a href={ this.person.url} target="_blank">
                  <i className="fas fa-link fa-fw"/>{ this.person.url }
                  </a>
                </p>
              }
              { this.person.scholar &&
                <p>
                  <a href={ this.person.scholar} target="_blank">
                    <i className="fas fa-graduation-cap fa-fw"/>
                    Google Scholar
                  </a>
                </p>
              }
              <div class="ui horizontal small divided link list">
                { ['cv', 'facebook', 'twitter', 'github', 'linkedin', 'email'].map((key) => {
                  return this.renderLink(this.person, key)
                }) }
              </div>
            </div>
            <Publications author={ this.person.name } />
          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Person
