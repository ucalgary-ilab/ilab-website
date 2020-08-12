import React from 'react'
import ReactMarkdown from 'react-markdown'

const items = [
  'Publications',
  'People',
  'Courses',
  'Facility',
  'News',
  'Space'
]

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="ui stackable secondary pointing container menu" style={{ borderBottom: 'none', marginRight: '15%', fontSize: '1.1em' }}>
          <div className="left menu">
            <a className='item' href='/'>
              <b style={{ color: '#00716C' }}>UCalgary iLab</b>
            </a>
          </div>
          <div className="right menu">
            { items.map((item) => {
              return (
                <a className={ this.props.current == item ? 'item active' : 'item' } href={ item === 'Home' ? '/' : `/${item.toLowerCase()}` } key={ item }>
                  { item }
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Header