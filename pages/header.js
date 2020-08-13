import React from 'react'
import ReactMarkdown from 'react-markdown'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.items = [
      'Publications',
      'People',
      'Courses',
      'Facility',
      'News',
      'Location'
    ]
  }

  render() {
    return (
      <div>
        <div className="ui right vertical sidebar menu">
          <a className="item" href="/">Home</a>
          { this.items.map((item) => {
            return (
              <a className={ this.props.current == item ? 'item active' : 'item' } href={ `/${item.toLowerCase()}` } key={ item }>
                { item }
              </a>
            )
          })}
        </div>

        <div className="ui stackable secondary pointing container menu" style={{ borderBottom: 'none', marginRight: '15%', fontSize: '1.1em' }}>
          <div className="left menu">
            <a className='item' href='/'>
              <b style={{ color: '#00716C' }}>UCalgary iLab</b>
            </a>
          </div>
          <div className="right menu">
            { this.items.map((item) => {
              return (
                <a className={ this.props.current == item ? 'item active' : 'item' } href={ `/${item.toLowerCase()}` } key={ item }>
                  { item }
                </a>
              )
            })}
            <div className="toc item">
              <a href="/"><b>UCalgary iLab</b></a>
              <i style={{ float: 'right' }} className="sidebar icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header