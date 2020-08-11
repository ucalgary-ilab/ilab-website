import React from 'react'
import ReactMarkdown from 'react-markdown'
import news from '../content/output/news.json'

class News extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="news" className="category">
        <h1 class="ui horizontal divider header">
          <i class="paper plane outline icon"></i>
          News
        </h1>
        <div className="ui segment">
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
