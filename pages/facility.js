import React from 'react'
import ReactMarkdown from 'react-markdown'

class Facility extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="facility" className="category">
        <h1 class="ui horizontal divider header">
          <i class="cogs icon"></i>
          Facility
        </h1>
        <div class="ui divided items">
          <p>under construction</p>
        </div>
      </div>
    )
  }
}

export default Facility
