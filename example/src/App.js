import React, { Component } from 'react'
import { TextMessage, TextWithMedia, CarouselWithButtons, Offers, RechargeHistory } from 'message-types'

const message = {
  NLPSnapshot: {
    entitySnapshot: [
      {
        score: 0.971124,
        endIndex: 17,
        startIndex: 10,
        type: "action_variable::recharge",
        entity: "recharge"
      },
      {
        score: 0.6106828,
        endIndex: 27,
        startIndex: 24,
        type: "troubleshoot_error::101",
        entity: "101"
      }
    ],
    intentSnapshot: {
      score: 0.8424482,
      name: "utilities_modify"
    }
  },
  //-----------carousel payload start -----------
  // payload: {
  //     text: "my vc_number is 13124214212. i want to recharge with 100rs. how will i get my recharge_details",
  //     title: "carousel title",
  //     subtitle: "carousel subtitle",
  //     options: [
  //         {
  //             optionInfo: { key: "option1" },
  //             title: "option1 carousel title",
  //             subtitle: "option1 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/350x150",
  //             buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 1.1",
  //                     url: "",
  //                     postbackRes: "opt1.1"
  //                 },
  //                 {
  //                     text: "select option 1.2",
  //                     url: "",
  //                     postbackRes: "opt1.2"
  //                 },
  //                 {
  //                     text: "select option 1.3",
  //                     url: "",
  //                     postbackRes: "opt1.3"
  //                 }
  //             ]
  //         },
  //         {
  //             optionInfo: { "key": "option2" },
  //             title: "option2 carousel title",
  //             subtitle: "option2 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/200x100", buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 2.1",
  //                     url: "",
  //                     postbackRes: "opt2.1"
  //                 },
  //                 {
  //                     text: "select option 2.2",
  //                     url: "",
  //                     postbackRes: "opt2.2"
  //                 },
  //                 {
  //                     text: "select option 2.3",
  //                     url: "",
  //                     postbackRes: "hi"
  //                 }
  //             ]
  //         },
  //         {
  //             optionInfo: { "key": "option3" },
  //             title: "option3 carousel title",
  //             subtitle: "option3 carousel subtitle",
  //             mediaType: "image",
  //             mediaUrl: "http://via.placeholder.com/200x100",
  //             buttons: [
  //                 {
  //                     text: "Google",
  //                     url: "http://www.google.com",
  //                     postbackRes: ""
  //                 },
  //                 {
  //                     text: "select option 3.1",
  //                     url: "",
  //                     postbackRes: "opt3.1"
  //                 },
  //                 {
  //                     text: "select option 3.2",
  //                     url: "",
  //                     postbackRes: "opt3.2"
  //                 },
  //                 {
  //                     text: "select option 3.3",
  //                     url: "",
  //                     postbackRes: "hi"
  //                 }
  //             ]
  //         }
  //     ],
  //     buttons: [
  //         {
  //             text: "main button 1",
  //             url: "http://www.google.com",
  //             b_id: "",
  //             postbackRes: ""
  //         },
  //         {
  //             text: "main button 2",
  //             b_id: "",
  //             postbackRes: "hi"
  //         },
  //         {
  //             text: "main button 3",
  //             url: "", b_id: "",
  //             postbackRes: ""
  //         }
  //     ]
  // },
  //-----------carousel payload end ------------
  containsHTML: true,
  payload: {
    text: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      </head>
      <body>
      <div class="ori-full-width" style="width:200px">
      <p style="font-size:13px;"><b>{planName}</b></p>
        <div class="progress">
          <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentLeft}">
          </div>
          <div class="progress" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:{percentUsed}">
                <p style="text-align:center;font-size:1vw;margin-top: 0.2vh;color: grey;font-weight:600">{usedData} used</p>
          </div>
        </div>
        <p style="font-size:13px;text-align: center">Total Data : {totalData}</p>
        <!-- <p style="font-size:13px">Used Data=>{usedData},&nbsp;&nbsp;Total Data=>{totalData},&nbsp;&nbsp;&nbsp;&nbsp;Left Data=>{leftData}</p> --/>
      </div>
      </body>
      </html>`,
    title: "dish tv",
    imageUrl: "https://dummyimage.com/400x800/000/fff",
    // url: "https://www.youtube.com/embed/PC_S3UFUMvI",
    subtitle: "Please select one option from the following in order to proceed",
    // checkbox with media options
    options: [
      { value: '1', label: 'hello world' },
      { value: '2', label: 'hii i am vivek' },
      { value: '5', label: 'playing cricket in ahmedabad india. do you want to play cricket please tell me' },
      { value: '3', label: 'how are you ?' },
      { value: '4', label: 'working hour' },
    ],
    list: [
      { value: '1', label: 'hello world' },
      { value: '2', label: 'hii i am vivek' },
      { value: '5', label: 'playing cricket in ahmedabad india. do you want to play cricket please tell me' },
      { value: '3', label: 'how are you ?' },
      { value: '4', label: 'working hour' },
    ],

    //     // recharge 

    //     // data: {
    //     //     PackPeriod: 1,
    //     //     monthly_recharge_amount: 622,
    //     //     recharge_amount: 622,
    //     //     selectedOfferID: null,
    //     //     selectedOfferName: "offer",
    //     //     switchOffDate: "2019-02-15T00:00:00",
    //     //     switchOffDate_fmt: "15 Feb 2019, Fri, 12:00AM",
    //     //     vc_number: "01513953716",
    //     // },

    //     //recharge details

    //     // data: {
    //     //     vc_number:12345675,
    //     //     current_balance: 6753.54,
    //     //     monthly_recharge_amount: 675,
    //     //     switchOffDate_fmt: "15 Feb 2019",
    //     //     otherCharges: [
    //     //         { name: "charge1", price: "234" },
    //     //         { name: "charge2", price: "235" },
    //     //         { name: "charge3", price: "232" }
    //     //     ],
    //     //     pack_details: {
    //     //         12345674: {
    //     //             type: "C",
    //     //             vc_number:12345674,
    //     //             addOnPacks: [
    //     //                 { name: "addon1", price: "134" },
    //     //                 { name: "addon2", price: "135" },
    //     //             ],
    //     //             basePack: { name: "base1", price: "134" }
    //     //         },
    //     //         12345345: {
    //     //             type: "P",
    //     //             vc_number: 12345345,
    //     //             addOnPacks: [
    //     //                 { name: "addon1", price: "334" },
    //     //                 { name: "addon2", price: "235" },
    //     //             ],
    //     //             basePack: { name: "base1", price: "734" }
    //     //         },
    //     //     },
    //     // },

    //     //recharge offers

    // data: {
    //   vc_number: 12345675,
    //   recharge_offers: [
    //     {
    //       offerId: 104,
    //       offerAmount: "1025.00",
    //       offerName: "HD entertainment at the price of SD. Enjoy 265+ chnls and 33 HD chnls. Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months. Recharge Now! TnC",
    //       offerMessage: "HD entertainment at the price of SD. Enjoy 265+ chnls and 33 HD chnls. Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months. Recharge Now! TnC"
    //     },
    //     null,
    //     {
    //       offerId: 105,
    //       offerAmount: "1032.00",
    //       offerName: "HD entertainment at the price of SD. Recharge Now! TnC",
    //       offerMessage: "Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months."
    //     },
    //     {
    //       offerId: 106,
    //       offerAmount: "1235.00",
    //       offerName: " Recharge with GOLD CLUB HD at Rs.3060 + GST= Rs.3611 for 12months.",
    //       offerMessage: "HD entertainment at the price of SD"
    //     },
    //     {
    //       offerId: null
    //     }
    //   ]
    // },

    // recharge history

    data: {
        vc_number: "12345645",
        transactions_array: [
            {
                Amount: 500,
                PaymentMode: "offline",
                TransactionDate: "20 jan 2017"
            },
            {
                Amount: 100,
                PaymentMode: "offline",
                TransactionDate: "15 jan 2017"
            },
    {
        Amount: 3100,
        PaymentMode: "offline",
        TransactionDate: "10 jun 2017"
    },
    {
        Amount: 500,
        PaymentMode: "offline",
        TransactionDate: "20 jan 2017"
    },
    {
        Amount: 100,
        PaymentMode: "offline",
        TransactionDate: "15 jan 2017"
    },
    {
        Amount: 3100,
        PaymentMode: "offline",
        TransactionDate: "10 jun 2017"
    },
    {
        Amount: 3004,
        PaymentMode: "offline",
        TransactionDate: "14 jan 2017"
    },
    {
        Amount: 200,
        PaymentMode: "offline",
        TransactionDate: "12 jan 2017"
    },
    {
        Amount: 500,
        PaymentMode: "offline",
        TransactionDate: "20 jan 2017"
    },
    {
        Amount: 100,
        PaymentMode: "offline",
        TransactionDate: "15 jan 2017"
    },
    {
        Amount: 3100,
        PaymentMode: "offline",
        TransactionDate: "10 jun 2017"
    },
    {
        Amount: 3004,
        PaymentMode: "offline",
        TransactionDate: "14 jan 2017"
    },
    {
        Amount: 200,
        PaymentMode: "offline",
        TransactionDate: "12 jan 2017"
    },
    ]
    },

    // //     //---------- carousel data --------

    buttons: [
      {
        text: "Recharge My Dish TV",
        url: ""
      },
      {
        text: "Other Queries",
        url: ""
      },
      {
        text: "Recharge Offers",
        url: ""
      },
      {
        text: "Current Balance",
        url: ""
      },
      {
        text: "Other Queries",
        url: ""
      },
      {
        text: "Recharge Offers",
        url: ""
      },
      {
        text: "Current Balance",
        url: ""
      }
    ],
  }
};

export default class App extends Component {
  render() {
    return (
      <div className="ori-appContainer">
        {/* <TextMessage message={message} show_nlp_snapshot={false} /> */}
        {/* <ListMessage message={message} /> */}
        {/* <TextWithMedia message={message} /> */}
        {/* <CheckboxWithMedia message={message}/> */}
        {/* <DishtvRecharge message={message} /> */}
        {/* <DishtvRechargeDetails message={message} /> */}
        {/* <UploadFile message={message} /> */}
        {/* <Offers message={message} handleOfferSelection={()=>{}} btn_disabled /> */}
        <RechargeHistory message={message} />
        {/* <CarouselWithButtons message={message} /> */}
      </div>
    )
  }
}
