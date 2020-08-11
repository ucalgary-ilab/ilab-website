import React from 'react'
import ReactMarkdown from 'react-markdown'
import news from '../content/output/news.json'

class News extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="news" className="category">
      <div className="ui segment">
        <h1>News</h1>
        <div class="ui divided items">
          { news.map((item) => {
            return (
              <div class="item">
                <div class="ui tiny image">
                  <img src={ `/static/images/news/${ item.image}` } style={{ padding: '5px' }} />
                </div>
                <div class="content">
                  <div class="meta">
                    { item.date }
                  </div>
                  <div class="middle aligned content">
                    { item.text }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    )
  }
}

export default News
