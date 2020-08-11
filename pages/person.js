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

  renderLink(person, key) {
    if (!person[key]) {
      return ''
    }

    let title = key
    if (key === 'scholar') {
      title = 'Google Scholar'
    } else {
      title = person[key].split('/')[3]
    }

    let href
    let icon
    switch(key) {
      case 'scholar':
        icon = 'fas fa-graduation-cap fa-fw'
        break
      case 'twitter':
        icon = 'fab fa-twitter fa-fw'
        break
      case 'facebook':
        icon = 'fab fa-facebook-square fa-fw'
        break
      case 'cv':
        icon = 'far fa-file fa-fw'
        break
      case 'github':
        icon = 'fab fa-github-alt fa-fw'
        break
      case 'email':
        icon = 'far fa-envelope fa-fw'
        break
      case 'linkedin':
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
    const person = require(`../content/output/people/${this.props.id}.json`)
    // const person = people.filter((person) => {
    //   return person.name.replace(' ', '-').toLowerCase() === this.props.id
    // })[0]

    return (
      <div>
        <title>{ `${person.name} | Interactions Lab | University of Calgary` }</title>

        <Header current="People" />

        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">
            <div id="person" className="category" style={{ textAlign: 'center' }}>
              <img className="ui small circular image" src={ `/static/images/people/${this.props.id}.jpg`} style={{ margin: 'auto' }} />
              <h1>{ person.name }</h1>
              <p>{ person.title }</p>
              <p>
                <a href={ person.url} target="_blank">
                <i className="fas fa-link fa-fw"/>{ person.url }
                </a>
              </p>
              <div class="ui horizontal small divided link list">
                { ['scholar', 'cv', 'email', 'facebook', 'twitter', 'github', 'linkedin'].map((key) => {
                  return this.renderLink(person, key)
                }) }
              </div>
            </div>
            <Publications author={ person.name } />
          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Person
