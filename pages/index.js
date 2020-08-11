import React from 'react'

import ReactMarkdown from 'react-markdown'

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

<div id="labs" class="category ui stackable four column grid" style={{ textAlign: 'center' }}>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img src="/static/images/labs/utouch.png" />
      </div>
      <h3>Physical Interaction and Human-Robot Interaction</h3>
      <p class="header">Prof. Ehud Sharlin</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img src="/static/images/labs/curiosity.png" />
      </div>
      <h3>Human-Centered Design for Creativity & Curiosity</h3>
      <p class="header">Prof. Lora Oehlberg</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img src="/static/images/labs/dataexperience.png" />
      </div>
      <h3>Visual Data-driven Tools and Experiences</h3>
      <p class="header">Prof. Wesley Willet</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img />
      </div>
      <h3>Tangible and Shape-changing Interfaces</h3>
      <p class="header">Prof. Ryo Suzuki</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img src="/static/images/labs/grouplab.png" />
      </div>
      <h3>Research in HCI, CSCW, and UbiComp</h3>
      <p class="header">Prof. Saul Greenberg (Emeritus)</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <div className="img">
      <img src="/static/images/labs/ricelab.png" />
      </div>
      <h3>Rethinking Interaction, Collaboration, & Engagement</h3>
      <p class="header">Prof. Anthony Tang (Adjunct - University of Toronto</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">

      <div className="img">
      <img src="/static/images/labs/innovis.png" />
      </div>
      <h3>Innovations in Visualization Laboratory</h3>
      <p class="header">Prof. Sheelagh Carpendale (Adjunct - Simon Fraser University)</p>
    </div>
  </div>
</div>

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
