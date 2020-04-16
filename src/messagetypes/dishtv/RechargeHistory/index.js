/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import './index.scss'

import { formattedPrice } from '../../../data/config/utils'

import InlineItem from '../../../components/inlineitem'
import Buttons from '../../../components/buttons'
import CustomTable from '../../../components/CustomTable'

class RechargeHistory extends React.PureComponent {
  constructor(props) {
    super(props)
    this.headers = this.getHistoryTableHeaders()
    this.dataSource = this.getHistoryTableData()
  }

  getHistoryTableHeaders = () => {
    const headers = [
      {
        title: 'Date',
        dataIndex: 'TransactionDate',
        key: 'TransactionDate'
      },
      {
        title: 'Amount',
        dataIndex: 'Amount',
        key: 'Amount'
      },
      {
        title: 'Mode',
        dataIndex: 'PaymentMode',
        key: 'PaymentMode'
      }
    ]
    return headers
  }

  getHistoryTableData = () => {
    const dataSource = []
    const { payload } = this.props.message
    if (payload.data && payload.data.transactions_array) {
      payload.data.transactions_array.forEach((item, index) => {
        let obj = {
          ...item,
          Amount: formattedPrice(item.Amount),
          key: index
        }
        dataSource.push(obj)
      })
    }
    return dataSource
  }

  render() {
    const { payload } = this.props.message
    const { btn_disabled, handleMsgBtnClick, message, btn_hidden } = this.props
    return (
      <div className='ori-mt-rechargeHistoryContainer'>
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
          <div className='ori-pad-10 ori-font-xs ori-border-light ori-border-radius-3 ori-bg-card historyCardContainer'>
            <div className='ori-b-mrgn-5'>
              <InlineItem title='VC Number' info={payload.data.vc_number} title_bold={true} />
            </div>
            {
              this.dataSource.length > 0 &&
              <div className='ori-overflow-auto ori-bg-white ori-pad-5 ori-border-light ori-border-radius-3'>
                <CustomTable headers={this.headers} data={this.dataSource} />
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

RechargeHistory.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool
}

RechargeHistory.defaultProps = {
  btn_disabled: false,
  btn_hidden: false
}

export { RechargeHistory }
