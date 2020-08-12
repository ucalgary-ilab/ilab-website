import React from 'react'
import ReactMarkdown from 'react-markdown'
import summary from '../content/output/summary.json'
import booktitles from '../content/output/booktitles.json'

class Detail extends React.Component {

  componentDidUpdate(prev) {
    console.log('update')
    console.log(prev)
  }

  render() {
    const publication = this.props.publication
    const people = this.props.people
    const namesId = this.props.namesId

    if (!publication) {
      return <div></div>
    }

    const names = people.map((person) => person.name )
    const conference = publication.series.slice(0, -5)
    const year = publication.series.slice(-2)
    let proceeding = booktitles[conference]
    if (!proceeding) {
      proceeding = {}
    }
    proceeding.series = `${ conference } '${year}`
    if (publication.pages < 4) {
      proceeding.booktitle = 'Adjunct ' + proceeding.booktitle
    }

    if (publication.video) {
      if (publication.video.includes('youtube')) {
        let id = publication.video.split('?v=')[1]
        publication.embed = `https://www.youtube.com/embed/${id}`
      }
      if (publication.video.includes('vimeo')) {
        let id = publication.video.split('/')[3]
        publication.embed = `https://player.vimeo.com/video/${id}`
      }
    }

    return (
      <div>
        <div id="publication" className="category">
          <div id="breadcrumb" className="ui breadcrumb">
            <a className="section" href="/publications">Publications</a>
            <i className="right angle icon divider"></i>
            <a className="active section">{ publication.series }</a>
          </div>
          <h1>{ publication.title }</h1>
          <p className="meta">
            { publication.authors.map((author) => {
                return (
                  names.includes(author) ?
                  <a href={ `/people/${ namesId[author] }` } key={ author }>
                    <img src={ `/static/images/people/${ namesId[author] }.jpg`} className="ui circular spaced image mini-profile" />
                    <strong>{author}</strong>
                  </a>
                  :
                  <span key={ author }>{author}</span>
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
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            mozallowfullscreen="true"
            msallowfullscreen="true"
            oallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>

        <div style={{ margin: '50px 0px', fontSize: '1.1em' }}>
          <h1>Abstract</h1>
          <p>{ publication.abstract }</p>

          { publication.keywords &&
            <div className="ui labels">
              Keywords: &nbsp;
              { publication.keywords.split(', ').map((keyword) => {
                return <span className="ui large blue label" key={ keyword }>{ keyword }</span>
              }) }
            </div>
          }

          <div className="ui segment">
            <p style={{ lineHeight: "160%" }}>
              { publication.authors.reduce((prev, current) => [prev, ', ', current]) }.&nbsp;
              <b>{ publication.title }</b>.&nbsp;
              <i>{ `In ${proceeding.booktitle} (${ proceeding.series })`  }</i>.&nbsp;
              { proceeding.publisher }&nbsp;
              Page: 1-{ publication.pages }.&nbsp;
              DOI: <a href={ publication.doi} target="_blank">{ publication.doi }</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Detail
