/* eslint-disable camelcase */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CustomTable extends Component {
  renderTableHeader = () => {
    const { headers } = this.props
    return (
      headers.map(header => {
        return (
          <th key={header.key} className='ori-lr-pad-10 ori-font-13 ori-text-center'>{header.title}</th>
        )
      })
    )
  }

  renderTableData = () => {
    const { data, headers } = this.props
    return (
      data.map((item, index) => {
        return (
          <tr key={index} className='ori-t-border-light'>
            {
              headers.map(header => {
                return (
                  <td key={header.key} className='ori-lr-pad-10 ori-font-xs ori-text-center'>{item[header.key]}</td>
                )
              })
            }
          </tr>
        )
      })
    )
  }

  render() {
    return (
      <table className='ori-mt-customTable'>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }
}

CustomTable.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

CustomTable.defaultProps = {
  header: [],
  data: []
}

export default CustomTable
