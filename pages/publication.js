import React from 'react'
import ReactMarkdown from 'react-markdown'
import people from '../content/output/people.json'

import Header from './header'
import Publications from './publications'
import Footer from './footer'

class Publication extends React.Component {
  static async getInitialProps(req) {
    const id = req.query.id
    return { id: id }
  }

  render() {
    const publication = require(`../content/output/publications/${ this.props.id }.json`)
    const names = people.map((person) => person.name )

    return (
      <div>
        <title>{ `${publication.title} | Interactions Lab | University of Calgary` }</title>

        <Header current="Publications" />

        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="ten wide column centered">
            <div id="publication" className="category">
              <div id="breadcrumb" className="ui breadcrumb">
                <a className="section" href="/publications">Publications</a>
                <i className="right angle icon divider"></i>
                <a className="active section">{ publication.series }</a>
              </div>
              <h1>{ publication.title }</h1>
              <p className="meta">
                { publication.authors.map((author) => {
                    let id = author.replace(' ', '-').toLowerCase()
                    return (
                      names.includes(author) ?
                      <a href={ `/people/${id}` }>
                        <img src={ `/static/images/people/${ id }.jpg`} className="ui mini circular spaced image" style={{ width: '24px', marginLeft: 0 }} />
                        <strong>{author}</strong>
                      </a>
                      :
                      <span>{author}</span>
                    )
                  }).reduce((prev, current) => [prev, ' , ', current])
                }
              </p>
            </div>
            <div className="video-container" style={{ display: publication.embed ? 'block' : 'none' }} >
              <iframe
                className="embed"
                width="100%"
                height="315"
                src={`${publication.embed}?`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                mozAllowFullScreen={true}
                msAllowFullScreen={true}
                oAllowFullScreen={true}
                webkitAllowFullScreen={true}
              ></iframe>
            </div>

            <ReactMarkdown
              source={publication.bodyContent}
              escapeHtml={false}
              linkTarget="_blank"
            />

          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Publication
