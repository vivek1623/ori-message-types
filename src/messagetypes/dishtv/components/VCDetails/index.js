/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import InlineItem from '../../../../components/InlineItem'

class VCDetails extends React.PureComponent {
  formattedPrice = price => {
    return Intl.NumberFormat('en-In', { style: 'currency', currency: 'INR' }).format(price)
  }

  render() {
    let { vc_details } = this.props

    return (
      <div className='ori-border-light ori-border-radius-3 ori-bg-white ori-pad-10 vcDetailsContainer'>
        {
          vc_details.vc_number &&
          <div className='ori-b-border-light ori-b-pad-10'>
            <InlineItem title={'Viewing Card No (' + vc_details.type + ')'} info={vc_details.vc_number} />
          </div>
        }
        {
          vc_details.basePack && !isEmpty(vc_details.basePack) &&
          <div className='ori-full-width ori-t-pad-10'>
            <p className='ori-font-bold'>Base Pack</p>
            <InlineItem title={vc_details.basePack.name} info={this.formattedPrice(vc_details.basePack.price)} title_bold={false} uppercase={true} />
          </div>
        }
        {
          vc_details.addOnPacks && vc_details.addOnPacks.length > 0 &&
          <div className='ori-full-width ori-t-pad-10'>
            <p className='ori-font-bold'>AddOn Pack</p>
            {
              vc_details.addOnPacks.map((addon, index) => {
                return (
                  <InlineItem key={index} title={addon.name} info={this.formattedPrice(addon.price)} uppercase={true} title_bold={false} />
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

VCDetails.propTypes = {
  vc_details: PropTypes.object.isRequired
}

export default VCDetails
