/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

export const handleAndroidBtnClick = (button, data) => {
  let android = localStorage.getItem('android') ? JSON.parse(localStorage.getItem('android')) : false
  if (android) {
    let payload = { button, data }
    window.androidObj.textToAndroid(JSON.stringify(payload))
  }
}

export const formattedPrice = (price) => {
  return Intl.NumberFormat('en-In', { style: 'currency', currency: 'INR' }).format(price)
}

export const fileToBase64 = file => {
  return new Promise(resolve => {
    var reader = new FileReader()
    // Read file content on file loaded event
    reader.onload = event => {
      resolve(event.target.result)
    }
    // Convert data to base64
    reader.readAsDataURL(file)
  })
}

export const linkify = inputText => {
  let linkifiedText = inputText

  // URLs starting with http://, https://, or ftp://
  let urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
  linkifiedText = inputText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>')

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  let pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim
  linkifiedText = linkifiedText.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>')

  // Change email addresses to mailto:: links.
  let emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim
  linkifiedText = linkifiedText.replace(emailPattern, '<a href="mailto:$1">$1</a>')
  return linkifiedText
}
