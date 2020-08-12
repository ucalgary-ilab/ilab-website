import React from 'react'
import ReactMarkdown from 'react-markdown'
import news from '../content/output/news.json'

class News extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="news" className="category">
        <h1 className="ui horizontal divider header">
          <i className="paper plane outline icon"></i>
          News
        </h1>
        <div className="ui segment">
          <div className="ui divided items">
            { news.map((item) => {
              return (
                <div className="item" key={ item.date }>
                  <div className="ui tiny image">
                    <img src={ `/static/images/news/${ item.image}` } style={{ padding: '5px' }} />
                  </div>
                  <div className="content">
                    <div className="meta">
                      { item.date }
                    </div>
                    <div className="middle aligned content">
                      { item.text }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
       { this.props.short &&
          <div className="ui vertical segment stackable" style={{ textAlign: 'center' }}>
            <a className="ui button" href="/news">
              { `+ see more updates` }
            </a>
          </div>
       }
      </div>
    )
  }
}

export default News
