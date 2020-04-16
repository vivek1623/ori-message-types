import React from 'react'
import PropTypes from 'prop-types'

class ListMessage extends React.PureComponent {
  render() {
    const { message } = this.props
    return (
      <div className='ori-b-pad-5 ori-lr-pad-10 '>
        <ul className='ori-no-b-mrgn ori-no-pad'>
          {
            message.payload.list.map(item => {
              return (<li>{item.label}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

ListMessage.propTypes = {
  message: PropTypes.object.isRequired
}

export { ListMessage }
