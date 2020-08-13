import React from 'react'

class Detail extends React.Component {
  constructor(props) {
    super(props)

    if (!this.props.publication) return

    this.publication = Object.assign({}, this.props.publication)
    this.people = Object.assign([], this.props.people)
    this.namesId = Object.assign({}, this.props.namesId)

    this.names = this.people.map((person) => person.name )
    if (this.publication.base) {
      this.publication.id = this.publication.base.split('.json')[0]
    }
    this.getProceedings()
    this.getVideoEmbed()


    this.showFigures = false
    if (!this.props.short) {
      this.getFigures()
      if (this.figures[this.publication.id]) {
        this.showFigures = true
      }
    }
  }

  getProceedings() {
    const conference = this.publication.series.slice(0, -5)
    const year = this.publication.series.slice(-2)
    this.proceeding = this.props.booktitles[conference]
    if (!this.proceeding) {
      this.proceeding = {}
    }
    this.proceeding.series = `${conference} '${year}`
    if (this.publication.pages < 4) {
      this.proceeding.booktitle = 'Adjunct ' + this.proceeding.booktitle
    }
  }

  getVideoEmbed() {
    if (this.publication.video) {
      if (this.publication.video.includes('youtube')) {
        this.publication.embedId = this.publication.video.split('?v=')[1]
        this.publication.embed = `https://www.youtube.com/embed/${this.publication.embedId}`
        this.publication.embedThumbnail = `https://img.youtube.com/vi/${this.publication.embedId}/maxresdefault.jpg`
      }
      if (this.publication.video.includes('vimeo')) {
        this.publication.embedId = this.publication.video.split('/')[3]
        this.publication.embed = `https://player.vimeo.com/video/${this.publication.embedId}`
        this.publication.embedThumbnail = this.props.vimeo[this.publication.embedId]
      }
    }
  }

  getFigures() {
    const dirs =
    this.props.files.children
    .filter(dir => dir.name === 'images')[0].children
    .filter(dir => dir.name === 'publications')[0].children
    .filter(dir => dir.name === 'figures')[0].children

    this.figures = {}
    for (let dir of dirs) {
      let id = dir.name
      let files = dir.children.map(file => file.path )
      this.figures[id] = files
    }
  }

  render() {
    if (!this.props.publication) {
      return <div></div>
    }

    return (
      <div id="publication">
        <div className="block">
          <div id="breadcrumb" className="ui breadcrumb">
            <a className="section" href="/publications">Publications</a>
            <i className="right angle icon divider"></i>
            <a className="active section">{ this.publication.series }</a>
          </div>
          <div className="ui grid" style={{ marginTop: '10px' }}>
            <div className="three wide column" style={{ margin: 'auto' }}>
              <img className="cover" src={ `/static/images/publications/cover/${ this.publication.id }.jpg` } />
            </div>
            <div className="thirteen wide column">
              { this.props.short &&
                <h1>
                  <a href={ `/publications/${this.publication.id}` } target="_blank">{ this.publication.title }</a>
                </h1>
              }
              { !this.props.short &&
                <h1>{ this.publication.title }</h1>
              }
              <p className="meta">
                { this.publication.authors.map((author) => {
                    return (
                      this.names.includes(author) ?
                      <a href={ `/people/${ this.namesId[author] }` } key={ author }>
                        <img src={ `/static/images/people/${ this.namesId[author] }.jpg`} className="ui circular spaced image mini-profile" />
                        <strong>{author}</strong>
                      </a>
                      :
                      <span key={ author }>{author}</span>
                    )
                  }).reduce((prev, current) => [prev, ' , ', current])
                }
              </p>
            </div>
          </div>
        </div>
        { this.publication.embed &&
          <div className="block">
            <div className="video-container">
              <iframe
                className="embed"
                width="100%"
                height="315"
                src={`${this.publication.embed}`}
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${this.publication.embed}?autoplay=1><img src=${this.publication.embedThumbnail}><span>▶</span></a>`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                mozallowfullscreen="true"
                msallowfullscreen="true"
                oallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        }
        <div className="block">
          <h1>Abstract</h1>
          <p>{ this.publication.abstract }</p>

          { this.publication.keywords &&
            <div className="ui labels">
              Keywords: &nbsp;
              { this.publication.keywords.split(', ').map((keyword) => {
                return <span className="ui large grey label" key={ keyword }>{ keyword }</span>
              }) }
            </div>
          }
        </div>
        <div className="block">
          <h1>Reference</h1>
          <div className="ui segment">
            <p style={{ lineHeight: "160%" }}>
              { this.publication.authors.reduce((prev, current) => [prev, ', ', current]) }.&nbsp;
              <b>{ this.publication.title }</b>.&nbsp;
              <i>{ `In ${this.proceeding.booktitle} (${ this.proceeding.series })`  }</i>.&nbsp;
              { this.proceeding.publisher }&nbsp;
              Page: 1-{ this.publication.pages }.&nbsp;
              DOI: <a href={ this.publication.doi} target="_blank">{ this.publication.doi }</a>
            </p>
          </div>
        </div>
        { this.showFigures &&
          <div className="block">
            <h1>Figures</h1>
            <div id="figure">
              <div className="ui three cards" style={{ marginTop: '30px' }}>
                { this.figures[this.publication.id].map((src) => {
                  return (
                    <a className="card" href={ `/${src}` } target="_blank" >
                      <div className="image">
                        <img src={ `/${src}` } />
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }

}

export default Detail
