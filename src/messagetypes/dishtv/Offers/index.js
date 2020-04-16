/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import { formattedPrice } from '../../../data/config/utils'

import InlineItem from '../../../components/inlineitem'
import Buttons from '../../../components/buttons'

class Offers extends React.PureComponent {
  constructor(props) {
    super(props)
    this.defaultSelection = null
    this.setDefaultSelectionRef = element => { this.defaultSelection = element }
  }

  componentDidMount() {
    if (!this.props.disable_offer) {
      this.makeDefaultSelection()
    }
  }

  makeDefaultSelection = () => {
    let defaultSelection = this.defaultSelection
    let selectedOfferId = defaultSelection.value
    let selectedOfferName = defaultSelection.getAttribute('data')
    this.props.handleOfferSelection(selectedOfferId, selectedOfferName)
  };

  radioOnChange = event => {
    let selected_offer_id = event.target.value
    let selected_offer_name = event.target.getAttribute('data')
    this.props.handleOfferSelection(selected_offer_id, selected_offer_name)
  };

  render() {
    const { disable_offer, btn_disabled, handleMsgBtnClick, message } = this.props
    const { payload } = this.props.message

    return (
      <div className='ori-mt-offersContainer'>
        {
          (payload.title) &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first title'>{payload.title}</p>
        }
        {
          (payload.subtitle) &&
          <p className='ori-b-mrgn-5 ori-no-t-mrgn subtitle'>
            {payload.subtitle}
          </p>
        }
        {
          ((payload.data) && !isEmpty(payload.data)) &&
          <div className='ori-font-xs offersCardContainer'>
            {
              (payload.data.recharge_offers) && (payload.data.recharge_offers.length > 0) &&
              payload.data.recharge_offers.map((offer, index) => {
                if (!isEmpty(offer) && offer.offerId) {
                  return (
                    <div className='ori-pad-10 ori-flex-row ori-border-radius-3 ori-border-light ori-tb-mrgn-3 ori-bg-card' key={index}>
                      {
                        !disable_offer &&
                        <div className='ori-r-mrgn-5 radioBtnContainer'>
                          {
                            index === 0
                              ? <input type='radio' className='ori-display-block' ref={this.setDefaultSelectionRef} value={offer.offerId} name='offers-selection' data={offer.offerName} onChange={this.radioOnChange} disabled={disable_offer} defaultChecked={true} />
                              : <input type='radio' className='ori-display-block' value={offer.offerId} name='offers-selection' data={offer.offerName} onChange={this.radioOnChange} disabled={disable_offer} />
                          }
                        </div>
                      }
                      <div className='ori-l-pad-5 ori-full-flex'>
                        <InlineItem title={offer.offerName} info={formattedPrice(offer.offerAmount)} left_full_flex />
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })
            }
          </div>
        }
        {
          (payload.buttons) && (payload.buttons.length > 0) && !disable_offer &&
          <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
        }
      </div>
    )
  }
}

Offers.propTypes = {
  message: PropTypes.object.isRequired,
  handleOfferSelection: PropTypes.func,
  handleMsgBtnClick: PropTypes.func,
  disable_offer: PropTypes.bool,
  btn_disabled: PropTypes.bool
}

Offers.defaultProps = {
  disable_offer: false
}

export { Offers }
