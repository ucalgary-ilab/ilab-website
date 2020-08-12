import React from 'react'

import ReactMarkdown from 'react-markdown'

import Header from './header'
import Labs from './labs'
import News from './news'
import Publications from './publications'
import People from './people'
import Courses from './courses'
import Facility from './facility'
import Location from './location'
import Footer from './footer'

class Page extends React.Component {
  static async getInitialProps(req) {
    const id = req.query.id
    const title = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()
    return { id: id, title: title }
  }

  renderSwitch(id) {
    switch (id) {
      case 'publications':
        return <Publications />
      case 'people':
        return <People />
      case 'courses':
        return <Courses />
      case 'facility':
        return <Facility />
      case 'news':
        return <News />
      case 'location':
        return <Location />
    }
  }

  render() {

    return (
      <div>
        <title>{ `${this.props.title } | Interactions Lab | University of Calgary` }</title>

        <Header current={ this.props.title } />

        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">
            { this.renderSwitch(this.props.id) }
          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Page
