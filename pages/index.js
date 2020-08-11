import React from 'react'

import ReactMarkdown from 'react-markdown'

import Header from './header'
import Labs from './labs'
import News from './news'
import Publications from './publications'
import People from './people'
import Footer from './footer'

class Index extends React.Component {
  componentDidMount() {
    // $('a').attr('target', 'blank');
  }

  render() {

    return (
      <div>
        <title>Interactions Lab - University of Calgary HCI Group</title>

        <Header />

        <div id="top-video-container">
          <video id="top-video" poster="/static/posters/top.png" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
            <source src="/static/video/shapebots.mp4" type="video/mp4"></source>
          </video>
        </div>


        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">
            <div id="header-logo">
              <div>
                <img src="/static/images/logo-3.png" style={{ height: '100px' }}/>
              </div>
              <div>
                <img src="/static/images/logo-1.png" style={{ height: '200px', marginTop: '-20px' }}/>
              </div>
            </div>

            <div id="header" className="category">
              <h1>
                University of Calgary - Interactions Lab
              </h1>
              <p>
                Human-Computer Interaction and Information Visualization Group
              </p>
            </div>

            <Labs />
            <News short="true" />
            <Publications short="true" />
            <People short="true" />
          </div>
          <div className="one wide column"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
