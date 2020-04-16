/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'

import styles from './TextWithMedia.module.scss'

import Buttons from '../../../components/buttons'

class TextWithMedia extends React.PureComponent {
  state = { show_overlay: false }

  showOverlay = () => { this.setState({ show_overlay: true }) };

  closeOverlay = () => { this.setState({ show_overlay: false }) };

  renderPreviewOverlay = () => {
    const { show_overlay } = this.state
    const { payload } = this.props.message
    if (show_overlay) {
      return (
        <div className={`ori-flex-row ori-flex-jc ori-flex-ac ori-align-full ${styles.previewOverlayContainer}`}>
          <div className='ori-bg-white'>
            <div className='ori-b-mrgn-5'>
              <img src={payload.imageUrl} alt='' style={{ maxWidth: '100%', maxHeight: '70vh' }} />
            </div>
            <div className='ori-lr-pad-10 ori-b-pad-10'>
              {
                payload.title && payload.title.trim().length > 0 &&
                <p className={`${styles.title} ori-font-default title`}>{payload.title}</p>
              }
              <div className='ori-flex-row ori-flex-jc'>
                <Button type='danger' size='small' onClick={this.closeOverlay}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { btn_disabled, message, handleMsgBtnClick, btn_hidden } = this.props
    const { payload } = this.props.message

    return (
      <div className={`${styles.textWithMediaContainer} ${styles.ie10upTextWithMediaContainer}`}>
        {this.renderPreviewOverlay()}
        {
          payload.url && payload.url.trim().length > 0 &&
          <div className='videoContainer'>
            <iframe title='video-message' className='ori-full-width' src={payload.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
          </div>
        }
        {
          payload.imageUrl && payload.imageUrl.trim().length > 0 &&
          <div className={styles.imageContainer} onClick={this.showOverlay}>
            <img src={payload.imageUrl} alt='' className='ori-img-contain' />
          </div>
        }
        {
          payload.title && payload.title.trim().length > 0 &&
          <p className={`${styles.title} title`}>{payload.title}</p>
        }
        {
          payload.subtitle && payload.subtitle.trim().length > 0 &&
          <p className='ori-no-b-mrgn ori-no-t-mrgn subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
        }
      </div>
    )
  }
}

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool
}

TextWithMedia.defaultProps = {
  btn_disabled: false,
  btn_hidden: false
}

export { TextWithMedia }
