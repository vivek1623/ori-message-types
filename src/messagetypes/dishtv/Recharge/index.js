/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import InlineItem from '../../../components/inlineitem'
import Buttons from '../../../components/buttons'

class Recharge extends React.PureComponent {
  constructor(props) {
    super(props)
    this.card_data = props.message.payload.data ? this.setCardData(props.message.payload.data) : []
  }

  setCardData = data => {
    let card_data = []
    if (data.vc_number) {
      let obj = {
        title: 'Viewing Card No',
        info: data.vc_number,
        style: ''
      }
      card_data.push(obj)
    }
    if (data.switchOffDate_fmt) {
      let obj = {
        title: 'Switch Off Date',
        info: data.switchOffDate_fmt,
        style: ''
      }
      card_data.push(obj)
    }
    if (data.PackPeriod) {
      let obj = {
        title: data.PackPeriod === 12 ? 'Annual Recharge Amount ' : 'Monthly Recharge Amount ',
        info: Intl.NumberFormat('en-In', { style: 'currency', currency: 'INR' }).format(data.monthly_recharge_amount),
        style: ''
      }
      card_data.push(obj)
    }
    if (data.selectedOfferName) {
      let obj = {
        title: 'Selected Offer Name',
        info: data.selectedOfferName,
        style: 'ori-t-pad-3 ori-t-mrgn-5 ori-t-border-light'
      }
      card_data.push(obj)
    }
    if (data.recharge_amount) {
      let obj = {
        title: 'Amount To Recharge ',
        info: Intl.NumberFormat('en-In', { style: 'currency', currency: 'INR' }).format(data.recharge_amount),
        style: ''
      }
      card_data.push(obj)
    }
    return card_data
  }

  render() {
    const { payload } = this.props.message
    const { btn_disabled, handleMsgBtnClick, message, btn_hidden } = this.props

    return (
      <div className='ori-mt-rechargeContainer'>
        {
          (payload.title) && (payload.title.trim().length > 0) &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-word-break title'>{payload.title}</p>
        }
        {
          (payload.subtitle) && (payload.subtitle.trim().length > 0) &&
          <p className='ori-b-mrgn-5 ori-no-t-mrgn ori-word-break subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          this.card_data.length > 0 &&
          <div className='ori-pad-10 ori-bg-card ori-font-xs ori-border-radius-3 ori-border-light'>
            {
              this.card_data.map((item, index) => {
                return (
                  <div className={' ' + item.style} key={index}>
                    <InlineItem title={item.title} info={item.info} right_full_flex={true} />
                  </div>
                )
              })
            }
          </div>
        }
        {
          !btn_hidden && (payload.buttons) && (payload.buttons.length > 0) &&
          <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
        }
      </div>
    )
  }
}

Recharge.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool
}

Recharge.defaultProps = {
  btn_disabled: false,
  btn_hidden: false
}

export { Recharge }
