import React, {useState, useEffect} from 'react'
import Highcharts, { Pointer } from 'highcharts'
import HighchartsReact from 'highcharts-react-official-fix'
import {Typography} from '@material-ui/core'
import Modal from './components/Modal'


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
  const date = new Date(curr.date_created);
  if (!accu[date]) {
    accu[date] = [];
  }
  accu[date].push(curr);
  return accu;
}, {});


const arr = Object.keys(sample).map((time) => {
  return {
    x:time,
    y: sample[time].length
  };
});

console.log('arr',arr)



const Chart = () =>{
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  function handleOpenModal(time, arrayTableValue){
    let props = {}
    const dateTimeToString = time.toString()

    arrayTableValue.forEach(item => item.date_created  = new Date(item.date_created).toString())
  

    const filterForModalTable = arrayTableValue.filter(item => item.date_created == time)
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)
    props = {...props, time:time, value:thirdSetSample}
  }


  const options = {  
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
              // alert("Category: "  + " Articles: " + this.y)
              //alert(JSON.stringify(filterForModalTable))
            }
          }
        }
      }
    },
    // tooltip: {
    //   formatter: function() {
    //       return '<b>'+ Highcharts.numberFormat(this.y, 0) + ' Article' +'</b><br/>'+ Highcharts.dateFormat('%y-%m-%d %l:%M:%P', this.x,true);
    //   }
    // },
    legend: {
      enabled:false
    },
    series: [{
    
      // number of articles published example
      data: (function(){
          return arr.map(item =>{
            return {x: new Date(item.x), y: item.y}
          })
      }()),
      pointInterval: 3600000,    
    }]
    }

  return(
    <>
      <Typography variant="h1">Chart Sample</Typography>
      <Modal isModalOpen={isModalOpen}/>
    
      <HighchartsReact highcharts={Highcharts} options={options} />
  
    </>
  )
}

export default Chart