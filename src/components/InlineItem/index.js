/* eslint-disable camelcase */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './InlineItem.module.scss'

export default class InlineItem extends Component {
  render() {
    const { title, info, uppercase, title_bold, left_full_flex, right_full_flex } = this.props
    return (
      <div className={`ori-flex-row ${styles.inlineItemContainer}`} >
        <div className={`${styles.leftWrapper} ${uppercase ? 'ori-uppercase' : 'ori-capitalize'} ${left_full_flex ? 'ori-full-flex' : ''}`}>
          <span className={`${title_bold ? 'ori-font-bold' : ''}`}>{title}</span>
        </div>
        <div className={`ori-flex-row ${styles.rightWrapper} ${right_full_flex ? 'ori-full-flex' : ''}`}>
          <span className='ori-font-light'>{info}</span>
        </div>
      </div>
    )
  }
}

InlineItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  uppercase: PropTypes.bool,
  title_bold: PropTypes.bool,
  left_full_flex: PropTypes.bool,
  right_full_flex: PropTypes.bool
}

InlineItem.defaultProps = {
  uppercase: false,
  title_bold: true,
  left_full_flex: false,
  right_full_flex: false
}
