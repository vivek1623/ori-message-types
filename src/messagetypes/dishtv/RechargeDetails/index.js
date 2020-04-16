/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { formattedPrice } from '../../../data/config/utils'

import InlineItem from '../../../components/inlineitem'
import VCDetails from '../components/vcdetails'
import Buttons from '../../../components/buttons'

class RechargeDetails extends React.PureComponent {
  render() {
    let { payload } = this.props.message
    let { btn_disabled, handleMsgBtnClick, message, btn_hidden } = this.props

    return (
      <div className='ori-mt-rechargeDetailsContainer'>
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
          ((payload.data) && !isEmpty(payload.data)) &&
          <div className='ori-bg-card ori-font-xs ori-border-radius-3 ori-border-light'>
            <div className='ori-b-border-light ori-pad-10'>
              {
                payload.data.switchOffDate_fmt &&
                <InlineItem title='Switch Off Date ' info={payload.data.switchOffDate_fmt} />
              }
              {
                payload.data.current_balance &&
                <InlineItem title='Current Balance ' info={formattedPrice(payload.data.current_balance)} />
              }
            </div>
            {
              payload.data.pack_details && !isEmpty(payload.data.pack_details) &&
              Object.keys(payload.data.pack_details).sort((a, b) => {
                if (payload.data.pack_details[a].type.toLowerCase() > payload.data.pack_details[b].type.toLowerCase()) return -1
                if (payload.data.pack_details[a].type.toLowerCase() < payload.data.pack_details[b].type.toLowerCase()) return 1
                return 0
              }).map(function (key, index) {
                return (
                  <div className='ori-lr-pad-10 ori-t-pad-10' key={index}>
                    <VCDetails vc_details={payload.data.pack_details[key]} />
                  </div>
                )
              })
            }
            {
              (payload.data.otherCharges) && (payload.data.otherCharges.length > 0) &&
              <div className='ori-pad-10 ori-b-border-light'>
                <p className='ori-font-bold ori-no-t-mrgn'>Other Charges</p>
                {
                  payload.data.otherCharges.map((otherCharge, index) => {
                    return (
                      <InlineItem key={index} title={otherCharge.name} info={formattedPrice(otherCharge.price)} uppercase={true} title_bold={false} />
                    )
                  })
                }
              </div>
            }
            {
              payload.data.monthly_recharge_amount &&
              <div className='ori-pad-10'>
                <InlineItem title='Recharge Amount ' info={formattedPrice(payload.data.monthly_recharge_amount)} />
              </div>
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

RechargeDetails.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool
}

RechargeDetails.defaultProps = {
  btn_disabled: false,
  btn_hidden: false
}

export { RechargeDetails }
