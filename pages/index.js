import React from 'react'

import ReactMarkdown from 'react-markdown'

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
        <div id="top-video-container">
          <video id="top-video" poster="/static/posters/top.png" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
            {/*
            <source src="/static/webm/top.webm" type="video/webm"></source>
            */}
            <source src="/static/video/shapebots.mp4" type="video/mp4"></source>
          </video>
        </div>



<div class="ui secondary pointing menu" style={{ 'border-bottom': 'none', marginRight: '15%', fontSize: '1.1em' }}>
  <div class="right menu">
  <a class="item">
    Home
  </a>
  <a class="item">
    Publications
  </a>
  <a class="item">
    People
  </a>
    <a class="ui item">
      Courses
    </a>
    <a class="ui item">
      Facility
    </a>
    <a class="ui item">
      News
    </a>
  </div>
</div>


        <div className="ui stackable grid">
          <div className="one wide column"></div>
          <div className="eleven wide column centered">

<div id="header-logo">
  <div>
    <img src="/static/images/logo-3.png" style={{ height: '100px', marginLeft: '-30px' }}/>
  </div>
  <div>
    <img src="/static/images/logo-1.png" style={{ height: '200px', marginLeft: '-50px', marginTop: '-20px' }}/>
  </div>
</div>

<div id="header" className="category">
<h1>
University of Calgary - Interactions Lab</h1>
<p>
Human-Computer Interaction and Information Visualization Group
</p>
</div>


<Labs />

<News />
<Publications />
<People />


          </div>
        </div>
<Footer />
      </div>
    )
  }
}

export default Index
