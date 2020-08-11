import React from 'react'
import ReactMarkdown from 'react-markdown'

const items = [
  'Home',
  'Publications',
  'People',
  'Courses',
  'Facility',
  'News',
  'Access'
]

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="ui stackable secondary pointing container menu" style={{ 'border-bottom': 'none', marginRight: '15%', fontSize: '1.1em' }}>
          <div className="right menu">
            { items.map((item) => {
              return (
                <a className={ this.props.current == item ? 'item active' : 'item' } href={ item === 'Home' ? '/' : `/${item.toLowerCase()}` }>
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