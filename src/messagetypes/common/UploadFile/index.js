/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Upload from 'antd/lib/upload'
import Button from 'antd/lib/button'
import UploadIcon from 'react-icons/lib/md/cloud-upload'
import FileIcon from 'react-icons/lib/fa/file-o'
import CloseIcon from 'react-icons/lib/md/close'

import styles from './UploadFile.module.scss'

import Buttons from '../../../components/buttons'
import { fileToBase64 } from '../../../data/config/utils'

class UploadFile extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      file: props.message.payload.file ? props.message.payload.file : null,
      fileUrl: props.message.payload.fileUrl ? props.message.payload.fileUrl : ''
    }
  }

  beforeUpload = file => {
    fileToBase64(file).then(fileUrl => {
      this.setState({
        file,
        fileUrl
      })
    })
    return false
  }

  onRemove = file => {
    this.setState({
      file: null,
      fileUrl: ''
    })
  }

  onClickFileUpload = () => {
    const { handleFileUpload, message } = this.props
    const { file, fileUrl } = this.state
    const payload = {
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
        uid: file.uid
      },
      fileUrl
    }
    handleFileUpload(payload, message)
  }

  renderImage = () => {
    const { file, fileUrl } = this.state
    if (file && file.type && file.type.indexOf('image/') !== -1) {
      return (
        <div className={styles.imageBg} style={{ backgroundImage: `url(${fileUrl})` }} />
      )
    } else {
      return (
        <div className='ori-r-mrgn-10 ori-flex'>
          <FileIcon size={40} />
        </div>
      )
    }
  }

  renderFileList = () => {
    const { file, fileUrl } = this.state
    const { disabled } = this.props
    if (file === null && fileUrl === '') {
      return (
        <div className='ori-bg-card ori-cursor-ptr ori-pad-10 ori-flex-column ori-flex-jc ori-flex-ac ori-border-radius-3 ori-border-dashed-default uploaderWrapper'>
          <UploadIcon size={40} />
          <div className='ori-t-pad-5'>Select file to upload</div>
        </div>
      )
    } else if (file && file.name) {
      return (
        <div className='ori-relative ori-flex-row ori-tb-mrgn-5 ori-pad-10 ori-border-light ori-border-radius-3'>
          {
            !disabled &&
            <div className='ori-absolute ori-cursor-ptr' style={{ right: 10 }} onClick={this.onRemove}>
              <CloseIcon size={14} />
            </div>
          }
          {this.renderImage()}
          {
            file &&
            <div className='ori-flex-column ori-flex-jc ori-full-flex ori-overflow-hidden'>
              <a className='ori-text-overflow-dotted ori-font-xs' href={fileUrl} target='_blank'>{file.name}</a>
            </div>
          }
        </div>
      )
    }
  }

  render() {
    const { btn_disabled, message, handleMsgBtnClick, btn_hidden, disabled, accept, uploading } = this.props
    const { payload } = this.props.message
    const { file, fileUrl } = this.state
    return (
      <div className='ori-word-break ori-uploadFileContainer'>
        {
          payload.title && payload.title.trim().length > 0 &&
          <p className='ori-no-t-mrgn ori-no-b-mrgn ori-font-bold ori-capitalize-first ori-word-break title'>{payload.title}</p>
        }
        {
          payload.subtitle && payload.subtitle.trim().length > 0 &&
          <p className='ori-no-b-mrgn ori-no-t-mrgn ori-word-break subtitle'>
            {payload.subtitle}
          </p>
        }
        <div className='ori-tb-pad-10 ori-flex-row ori-flex-jc'>
          <Upload
            className='ori-full-width ori-mt-fileUploaderContainer'
            listType='picture'
            showUploadList={false}
            beforeUpload={this.beforeUpload}
            onRemove={this.onRemove}
            disabled={disabled || file !== null}
            accept={accept}
          >
            {this.renderFileList()}
          </Upload>
        </div>
        {
          file && fileUrl !== '' && !disabled &&
          <Button className='ori-full-width uploadButton' disabled={disabled} onClick={this.onClickFileUpload}>{uploading ? 'Uploading' : 'Upload'}</Button>
        }
        {
          !btn_hidden && payload.buttons && payload.buttons.length > 0 &&
          <Buttons buttons={payload.buttons} message={message} btn_disabled={btn_disabled} handleMsgBtnClick={handleMsgBtnClick} />
        }
      </div>
    )
  }
}

UploadFile.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  uploading: PropTypes.bool,
  handleFileUpload: PropTypes.func,
  accept: PropTypes.string
}

UploadFile.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  uploading: false,
  handleFileUpload: () => { }
}

export { UploadFile }
