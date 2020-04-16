/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'antd/lib/carousel'

import styles from './CarouselWithButtons.module.scss'

import Buttons from '../../../components/buttons'

class CarouselWithButtons extends React.PureComponent {
  render() {
    const { btn_disabled, handleMsgBtnClick, message, btn_hidden } = this.props
    const { payload } = this.props.message

    return (
      <div className='ori-relative ori-word-break ori-mt-carouselWithButtonsContainer'>
        {
          payload && payload.title && payload.title.trim().length > 0 &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold  ori-capitalize-first title'>{payload.title} </p>
        }
        {
          payload && payload.subtitle && payload.subtitle.trim().length > 0 &&
          <p className='ori-no-b-mrgn  ori-no-t-mrgn subtitle'>{payload.subtitle}</p>
        }
        {
          payload && payload.options && payload.options.length > 0 &&
          <Carousel className={`ori-mt-CarouselContainer ${styles.carouselContainer}`} arrows={true}>
            {
              payload.options.map((carousel_item, index) => {
                return (
                  <div className={`carouselItem ${styles.carouselItem}`} key={index}>
                    {
                      carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'video' && carousel_item.mediaUrl.trim().length > 0 &&
                      <div className='videoContainer'>
                        <iframe title='video-message' className='ori-full-width' src={carousel_item.mediaUrl} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                      </div>
                    }
                    {
                      carousel_item.mediaType && carousel_item.mediaUrl && carousel_item.mediaType === 'image' && carousel_item.mediaUrl.trim().length > 0 &&
                      <div className={styles.imageContainer}>
                        <img src={carousel_item.mediaUrl} alt='' className='ori-img-contain' />
                      </div>
                    }
                    {
                      carousel_item.title && carousel_item.title.trim().length > 0 &&
                      <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-lr-pad-10 ori-capitalize ori-word-wrap ori-word-break title'>{carousel_item.title}</p>
                    }
                    {
                      carousel_item.subtitle && carousel_item.subtitle.trim().length > 0 &&
                      <p className='ori-no-b-mrgn ori-lr-pad-10 ori-no-t-mrgn ori-word-wrap ori-word-break subtitle'>{carousel_item.subtitle}</p>
                    }
                    {
                      carousel_item.buttons && carousel_item.buttons.length > 0 &&
                      <div className='ori-pad-10'>
                        <Buttons buttons={carousel_item.buttons} message={message} handleMsgBtnClick={handleMsgBtnClick} btn_disabled={btn_disabled} />
                      </div>
                    }
                  </div>
                )
              })
            }
          </Carousel>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <div className='ori-t-pad-5'>
            <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
          </div>
        }
      </div>
    )
  }
}

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool
}

CarouselWithButtons.defaultProps = {
  btn_disabled: false,
  btn_hidden: false
}

export { CarouselWithButtons }
