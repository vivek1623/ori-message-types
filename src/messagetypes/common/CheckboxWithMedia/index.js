/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'antd/lib/checkbox'

import styles from './CheckboxWithMedia.module.scss'

import Buttons from '../../../components/buttons'

class CheckboxWithMedia extends React.PureComponent {
  render() {
    const { payload } = this.props.message
    const { btn_disabled, message, handleMsgBtnClick, btn_hidden, checkbox_disabled, onChangeCheckbox } = this.props

    return (
      <div className='ori-word-break ori-mt-checkboxWithMediaContainer'>
        {
          payload.imageUrl &&
          <div className={styles.imageContainer}>
            <img src={payload.imageUrl} alt='' className='ori-img-contain' />
          </div>
        }
        {
          payload.title &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first title'>{payload.title}
          </p>
        }
        {
          payload.subtitle &&
          <p className='ori-no-b-mrgn ori-no-t-mrgn subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          payload.options && payload.options.length > 0 &&
          <div className={styles.checkboxGroupContainer}>
            <Checkbox.Group className={styles.checkboxGroupAlignVertical} options={payload.options} disabled={checkbox_disabled} onChange={onChangeCheckbox} />
          </div>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
        }
      </div>
    )
  }
}

CheckboxWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  checkbox_disabled: PropTypes.bool,
  onChangeCheckbox: PropTypes.func
}

CheckboxWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  checkbox_disabled: false
}

export { CheckboxWithMedia }
