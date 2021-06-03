import React,{useState} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official-fix'



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
      "date_created": "2021-05-27T01:15Z",
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
      "_id": "60ade881da0fa204f1729e79",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2019/04/29/advertise-with-us",
      "date_created": "2021-05-26T06:20Z",
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
      "_id": "60ade881da0fa204f1729e79",
      "section": "5f2d7fd8591132886d070d10",
      "article_url": "http://www.ttgindia.travel/2019/04/29/advertise-with-us",
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:19Z",
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
      "date_created": "2021-05-26T06:18Z",
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
      "date_created": "2021-05-26T06:18Z",
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
      "date_created": "2021-05-26T06:18Z",
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
      "date_created": "2021-05-26T06:18Z",
      "date_updated": "2021-05-26T06:20:20.366Z",
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
      "date_created": "2021-05-26T06:17Z",
      "date_updated": "2021-05-26T06:20:20.366Z",
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
      "date_created": "2021-05-26T06:17Z",
      "date_updated": "2021-05-26T06:20:20.366Z",
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
      "date_created": "2021-05-26T24:00Z",
      "date_updated": "2021-05-26T06:20:20.366Z",
      "__v": 0
    },
  ]

const sample = thirdSetSample.reduce((accu, curr) => {
    const date =  curr.date_created;
    if (!accu[date]) {
      accu[date] = [];
    }
    accu[date].push(curr);
    return accu;
  }, {});
  
  
  const arr = Object.keys(sample).map((time) => {
    return {x: new Date(time), y: sample[time].length}
  });
  console.log('arr',arr)
  //======================test area=========================================
//   const newArr = []
//   arr.forEach(obj => newArr.push({x: +obj.x, y:obj.y}))
  
//   console.log('newarray',newArr)
const testArray = [1,2,3,4,5,6,7,8,9,10]
//============================end of test area================================
export default function Spline(){
    const [isModalOpen, setIsModalOpen] = useState(false)
  
  function handleOpenModal(time, arrayTableValue){
    let props = {}
    const dateTimeToString = time.toString()
    // const convertedToStandardTimeFormat = new Date(time)

    // const convertedTo12Hour = moment.utc(convertedToStandardTimeFormat, ["HH.mm"]).format("hh:m a")
    arrayTableValue.forEach(item => item.date_created  = new Date(item.date_created).toString())
  

    const filterForModalTable = arrayTableValue.filter(item => item.date_created == time)
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)
    props = {...props, time:time, value:thirdSetSample}

    //console.log('value', props)
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
    
    data:testArray

    // data: [(function(){
    //     let chartData = []
    //      arr.map(item => chartData.push(item))
    //      return chartData
    // }())]
        // {x: new Date("2021-05-27T01:15Z"), y : 10},
        // {x: new Date("2021-05-27T02:15Z"), y : 20},
        // {x: new Date("2021-05-27T03:15Z"), y : 30},
        // {x: new Date("2021-05-27T04:15Z"), y : 35},
        // {x: new Date("2021-05-27T05:15Z"), y : 40},
        // ["2021-05-27T01:15Z", 1],
        // ["2021-05-26T06:20Z", 1],
        // ["2021-05-26T06:19Z", 6],
        // ["2021-05-26T06:18Z", 4],
        // ["2021-05-26T06:17Z", 2],
        // ["2021-05-26T24:00Z", 1],
    ,
      //pointInterval: 3600000,
      // pointStart: Date.UTC(2021,4,1)
        
    }]
    }

    return(
        <>
         <HighchartsReact highcharts={Highcharts} options={option10} />    
        </>
    )
}

// export function Bar(){

//     function getData(n) {
//         var arr = [],
//             i,
//             x,
//             a,
//             b,
//             c,
//             spike;
//         for (
//             i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
//             i < n;
//             i = i + 1, x = x + 36e5
//         ) {
//             if (i % 100 === 0) {
//                 a = 2 * Math.random();
//             }
//             if (i % 1000 === 0) {
//                 b = 2 * Math.random();
//             }
//             if (i % 10000 === 0) {
//                 c = 2 * Math.random();
//             }
//             if (i % 50000 === 0) {
//                 spike = 10;
//             } else {
//                 spike = 0;
//             }
//             arr.push([
//                 x,
//                 2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
//             ]);
//         }
//         return arr;
//     }
//     var n = 5000,
//     data = getData(n);


//    const options = {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Error Frequency'
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Rainfall (mm)'
//         }
//     },
//     tooltip: {
//         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//         footerFormat: '</table>',
//         shared: true,
//         useHTML: true
//     },
//     plotOptions: {
//         column: {
//             pointPadding: 0.2,
//             borderWidth: 0
//         }
//     },
//     xAxis:{
//         categories:['12:00 AM', '12:00 PM', '12:00 AM']
//     },
//     series: [{
//         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

//     }]
// }

//     return(
//         <>
//          <HighchartsReact highcharts={Highcharts} options={options} />       
//         </>
//     )
// }