import React,{useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Modal from './Modal'


const thirdSetSample = [
  {
      "article_title": null,
      "article_source_url": "ttgindia.travel",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade881da0fa204f1729e79",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2019/04/29/advertise-with-us",
      "date_created": "2021-05-27T06:30:45.856Z",
      "date_updated": "2021-05-27T06:30:45.856Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "ttgindia.travel",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade881da0fa204f1729e79",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2019/04/29/advertise-with-us",
      "date_created": "2021-05-26T06:19:45.856Z",
      "date_updated": "2021-05-26T06:20:59.828Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "ttgindia.travel",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade881bc467604b89c8cf6",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2021/05/24/point-to-point-airlines-will-lead-industry-recovery-globaldata",
      "date_created": "2021-05-26T06:19:45.855Z",
      "date_updated": "2021-05-26T06:21:06.092Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "ttgindia.travel",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade88193d81d04b24195b7",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2021/05/24/trip-com-group-launches-covid-19-medical-relief-initiative-for-india",
      "date_created": "2021-05-26T06:19:45.854Z",
      "date_updated": "2021-05-26T06:21:09.016Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "ttgindia.travel",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade881da0fa204f1729e78",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2021/05/25/unwto-google-scale-up-collaboration-to-drive-tourism-recovery",
      "date_created": "2021-05-26T06:19:45.853Z",
      "date_updated": "2021-05-26T06:21:12.511Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "headtopics.com",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade859da0fa204f1729e16",
      "section": "5f58a7a2e87a173d70e89b3c",
      "article_url": "http://headtopics.com/eg/15751604157815992520-20277859",
      "date_created": "2021-05-26T06:19:05.444Z",
      "date_updated": "2021-05-26T06:20:06.340Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "headtopics.com",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade859bc467604b89c8c99",
      "section": "5f58a7a2e87a173d70e89b3c",
      "article_url": "http://headtopics.com/eg/15891608158532462387-20277862",
      "date_created": "2021-05-26T06:19:05.443Z",
      "date_updated": "2021-05-26T06:20:11.447Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "telecompaper.com",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade853da0fa204f1729df4",
      "section": "5f681a4fdd035a101fe2b94a",
      "article_url": "http://www.telecompaper.com/news/rivada-appoints-new-cfo--1384356",
      "date_created": "2021-05-26T06:18:59.903Z",
      "date_updated": "2021-05-26T06:20:14.119Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "todayonline.com",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "Google News Link",
      "created_by": "Global Link",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade83a93d81d04b2419511",
      "article_url": "http://www.todayonline.com/world/chinas-kangtai-biological-partners-agree-run-phase-iii-trial-chile-xinhua",
      "date_created": "2021-05-26T06:18:34.437Z",
      "date_updated": "2021-05-26T06:21:11.799Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "panaynews.net",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "Google News Link",
      "created_by": "Global Link",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade83993d81d04b241950e",
      "article_url": "http://www.panaynews.net/negros-covid-vaccination-gathers-steam",
      "date_created": "2021-05-26T06:18:33.677Z",
      "date_updated": "2021-05-26T06:20:23.290Z",
      "__v": 0
  },
  {
      "article_title": null,
      "article_source_url": "vogue.co.kr",
      "article_authors": null,
      "article_sections": [],
      "article_publish_date": null,
      "article_content": null,
      "article_images": null,
      "article_videos": null,
      "article_media_type": "Web",
      "article_ad_value": 0,
      "article_pr_value": 0,
      "article_language": "en",
      "article_status": "Error",
      "article_error_status": "No content",
      "article_source_from": "NodeJS Static Scraper",
      "created_by": "System",
      "updated_by": "Python Global Scraper",
      "is_in_mysql": false,
      "_id": "60ade835da0fa204f1729da5",
      "section": "5f2de00dd7dde52074e60a79",
      "article_url": "http://www.vogue.co.kr/2021/05/21/패션의-현재-현재의-단어-craft",
      "date_created": "2021-05-26T06:18:29.558Z",
      "date_updated": "2021-05-26T06:20:20.366Z",
      "__v": 0
  },
  {
  
          "article_title": "Kia's Worth the Drive Deals now extended",
          "article_source_url": "malaya.com.ph",
          "article_authors": [],
          "article_sections": [
              "News"
          ],
          "article_publish_date": "2020-10-12T18:17:38.000Z",
          "article_content": "Vehicle buyers confidence to get more boost The fourth and final quarter of the year always serves as the most exciting stretch as buying power starts to increase during this period. This is also the time when vehicle buyers need to stay practical in getting their preferred vehicle without sacrificing style and performance. To continue the thrust they garnered during the early part of second half of 2020, the Ayala-backed Kia Philippines has extended anew their Worth the Drive Deals--helping those who want to get the most out of their vehicles without burning a hole in their budget. The latest extension of the Kias Worth the Drive Deals, which serves Kias wide range of its lineup with incredibly low down payment or monthly amortization terms and even hefty cash discounts, will be accorded until the end of October. Kias Worth the Drive Deals is known for giving customers flexibility of payment and financing options through the help of its bank partners such as BDO Unibank (BDO), BPI Family Savings Bank (BPI FSB), Chinabank Savings (CBS), East West Bank Corporation (EWBC), PNB Savings (PNB), PS Bank (PSB), Rizal Commercial Banking Corporation (RCBC) and Security Bank Corporation (SBC). The highly sought-after models for the Korean automotive brand, particularly the Soluto, Seltos, Sportage, Grand Carnival and K2500 are being offered in the most affordable payment arrangements, making it easier to bring one home. Built for the first-time car buyers, the subcompact sedan Soluto LX MT is being retailed with a P40,000 discount or can be purchased with an affordable monthly scheme P12,094 or reasonably priced down payment of P16,000. The fashionable and multi-functional Seltos subcompact SUV LX AT--designed to cater to the young families and professionals--is being offered with a P50,000 cash discount or a zero-interest monthly amortization up to 18 months. Buyers may also take advantage of the low monthly term of P19,968 (five-year terms) or low down payment of P38,000 for the vehicle, which has just been introduced late last year. Targeted for the mid-level management leaders with growing families, the compact crossover Sportage--in LX Gasoline and Diesel variants-- is being offered on a zero down payment or no-interests scheme up to 60 months. Aside from that, those who want to pay outright can enjoy P250,000 (LX Gas) or P300,000 (LX Diesel) discounts. Should they opt to take it on low monthly terms, they will only have to pay P23,460 and P28,097 for the base and mid-grade, respectively. The luxurious people carrier Grand Carnival LX 11-seater minivan can be yours by availing the zero-percent interest up to 24 months, paid outright with a P120,000 price slash or payment terms of P36,281 monthly for 60 months or low down of P32,000. Suitable public commute option in the transport sector, the business-friendly K2500 4x2 KARGA Plus Protect is retailed in a low down payment option of P28,000 or a cash discount of P60,000 or low monthly of P20,186. To make the Kia ownership more worry-free, every vehicle includes a 5-year warranty or 160,000 kms, whichever comes first for all models except for K2500 which has a 3-year warranty or 110,000 kms. Kia owners are also covered with a 24/7 Roadside Assistance- Free for 5 years, which includes Emergency Towing, Minor Onsite Repair, Medical Assistance, Personal Assistance and Information Service. To know more about the exciting Kia deals and offers, you may call or visit any of the 34 Kia dealers nationwide or log on to the Kia website at https://www.kia.com/ph/main.html. You may also Like and Follow Kia Philippines on Facebook and Instagram to check the latest \"Power to Surprise\" programs in the country.",
          "article_images": [
              "https://malaya.com.ph/wp-content/uploads/2020/10/Seltos.jpeg",
              "https://malaya.com.ph/wp-content/uploads/2020/10/Seltos.jpeg",
              "https://malaya.com.ph/wp-content/uploads/2020/06/MalayaFinalLogoMiddle.jpg",
              "https://malaya.com.ph/wp-content/uploads/2020/03/MalayaFinalLogo-300x75.jpg"
          ],
          "article_videos": [],
          "article_media_type": "web",
          "article_ad_value": 126000,
          "article_pr_value": 127260,
          "article_language": "en",
          "article_status": "Done",
          "article_error_status": null,
          "article_source_from": null,
          "created_by": "Python Global Scraper",
          "updated_by": "Python Global Scraper",
          "is_in_mysql": true,
          "_id": "5f84ee3e14a6d868c385425a",
          "date_created": "2021-02-09T12:46:43.055Z",
          "date_updated": "2021-02-09T12:46:43.072Z",
          "section": {
              "_id": "5f585345faf07b3d393dbac1",
              "section_url": "http://malaya.com.ph/index.php/special-features"
          },
          "article_url": "http://malaya.com.ph/index.php/news_special_feature/kias-worth-the-drive-deals-now-extended",
          "__v": 0
      
  }
]
thirdSetSample.sort(function(a, b) {
  return (a.date_created < b.date_created) ? -1 : ((a.date_created > b.date_created) ? 1 : 0);})

const sample = thirdSetSample.reduce((accu, curr) => {
    const date = new Date(curr.date_created).setSeconds(0,0);
    const getTime = new Date(date).getTime()
    if (!accu[getTime]) {
      accu[getTime] = [];
    }
    accu[getTime].push(curr);
    return accu;
  }, {});
  
  
  const arr = Object.keys(sample).map((time) => {
    return [+time, sample[time].length]
  });

  //======================test area=========================================
//   const newArr = []
//   arr.forEach(obj => newArr.push({x: +obj.x, y:obj.y}))
  
//   console.log('newarray',newArr)

//============================end of test area================================
export  function Spline(){

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [props, setProps] = useState([])
  function converter(item){
    const date = new Date(item).setSeconds(0,0)
    const newDate = new Date(date).toISOString()

    return newDate
  }

  function handleOpenModal(time, arrayTableValue){
    let props = {}
    time = new Date(time).toISOString()
  
    console.log(time)
    arrayTableValue.forEach(item => item.date_created  = converter(item.date_created))
    
    const filterForModalTable = arrayTableValue.filter(item => item.date_created === time)
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)

    props = {...props, time:time, value:filterForModalTable}
    setProps(props)
    console.log("props",props)
  }


  const option10 = {  
    chart:{
      type:'spline'
    },
    title:{
      text: 'Articles Published'
    },
    xAxis: {
        type: 'datetime' //ensures that xAxis is treated as datetime values
    },
    yAxis: {
      title:{
        text: 'Articles'
      }
    },
    plotOptions:{
      series:{
        cursor: 'Pointer',
        point:{
          events:{
            click: function(){
              handleOpenModal(this.x, thirdSetSample)
              //alert(this.y)
              // alert("Category: "  + " Articles: " + this.y)
              //alert(JSON.stringify(filterForModalTable))
            }
          }
        }
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ Highcharts.numberFormat(this.y, 0) + ' Article' +'</b><br/>'+ Highcharts.dateFormat('%y-%m-%d %l:%M:%P', this.x,true);
     }
    },
    legend: {
      enabled:false
    },
    series: [{
    
    data:arr,
        
    }]
    }

    return(
        <>
        <Modal isModalOpen={isModalOpen} props={props}/>
         <HighchartsReact highcharts={Highcharts} options={option10} />    
        </>
    )
}

export function Bar(){

    function getData(n) {
        var arr = [],
            i,
            x,
            a,
            b,
            c,
            spike;
        for (
            i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
            i < n;
            i = i + 1, x = x + 36e5
        ) {
            if (i % 100 === 0) {
                a = 2 * Math.random();
            }
            if (i % 1000 === 0) {
                b = 2 * Math.random();
            }
            if (i % 10000 === 0) {
                c = 2 * Math.random();
            }
            if (i % 50000 === 0) {
                spike = 10;
            } else {
                spike = 0;
            }
            arr.push([
                x,
                2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
            ]);
        }
        return arr;
    }
    var n = 5000,
    data = getData(n);


   const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Error Frequency'
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    xAxis:{
        categories:['12:00 AM', '12:00 PM', '12:00 AM']
    },
    series: [{
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }]
}

    return(
        <>
         <HighchartsReact highcharts={Highcharts} options={options} />       
        </>
    )
}