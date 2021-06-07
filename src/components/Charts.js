import React,{useState, useEffect, useContext} from 'react'
import Highcharts from 'highcharts'
import {apiContext} from '../contextApi'
import HighchartsReact from 'highcharts-react-official'
import Modal from './Modal'


class GetArticlesCountAndDate{
  constructor(data){
    this.data = data
  }

  objectTOArray(data){
    return Object.keys(data).map((time) => {
        return [+time, data[time].length]
      });
  }
  getCountOfArticles(){

    const sample = this.data.reduce((accu, curr) => {
    const date = new Date(curr.date_created).setSeconds(0,0);
    const getTime = new Date(date).getTime()
     if (!accu[getTime]) {
       accu[getTime] = [];
      }

    accu[getTime].push(curr);

    return accu;

    }, {});
  
    return sample
  }
 
  dataProcessor(){
    
    const dataHolder = this.data
    
    if(this.data){
      
      dataHolder.sort(function(a, b) {
    
      return (a.date_created < b.date_created) ? -1 : ((a.date_created > b.date_created) ? 1 : 0);
      })
    
      const numberOfArticles = this.getCountOfArticles()
      
      const resultNumberOfArticles = this.objectTOArray(numberOfArticles)

      console.log('ArticlesNumber: ', resultNumberOfArticles)
      
      return resultNumberOfArticles
    }

    return
 
}

}

function converter(item){
  const date = new Date(item).setSeconds(0,0)
  const newDate = new Date(date).toISOString()

  return newDate
}
 
export  function Spline(){

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [props, setProps] = useState([])

  const data = useContext(apiContext)
  
  const processorResult = new GetArticlesCountAndDate(data.data).dataProcessor()

// handle modal state
  function handleOpenModal(time,{data} ){
    let props = {}
    const arrayTableValue = data
    time = new Date(time).toISOString()
  
    arrayTableValue.forEach(item => item.date_created  = converter(item.date_created))
    
    const filterForModalTable = arrayTableValue.filter(item => item.date_created === time)
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)

    props = {...props, time:time, value:filterForModalTable}
    setProps(props)
  }


  const option1 = {  
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
    credits:{
      enabled: false
    },
    plotOptions:{
      series:{
        cursor: 'Pointer',
        point:{
          events:{
            click: function(){
              handleOpenModal(this.x, data)
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
    
    data:processorResult
        
    }]
    }

    return(
        <>
        <Modal isModalOpen={isModalOpen} props={props}/>
         <HighchartsReact highcharts={Highcharts} options={option1} />    
        </>
    )
}

export function Bar(){

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [props, setProps] = useState([])

  const data = useContext(apiContext)


  function filterData({data}){
    return  data.filter(data => data.article_status === "Error")
  }

  const new_data = filterData(data)

  const processorResult = new GetArticlesCountAndDate(new_data).dataProcessor()

  function handleOpenModal(time,{data} ){
    let props = {}
    const arrayTableValue = data
    time = new Date(time).toISOString()
  
    arrayTableValue.forEach(item => item.date_created  = converter(item.date_created))
    
    const filterForModalTable = arrayTableValue.filter(item => item.date_created === time && item.article_status === "Error")
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)

    props = {...props, time:time, value:filterForModalTable}
    setProps(props)
    console.log("props",props)
  }


   const options = {  
    chart:{
      type:'column'
    },
    title:{
      text: 'Error Frequency'
    },
    xAxis: {
        type: 'datetime' //ensures that xAxis is treated as datetime values
    },
    yAxis: {
      title:{
        text: 'Articles'
      }
    },
    credits:{
      enabled: false
    },
    plotOptions:{
      series:{
        cursor: 'Pointer',
        point:{
          events:{
            click: function(){
              handleOpenModal(this.x, data)
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
    
    data:processorResult
        
    }]
    }

    return(
        <>
         <Modal isModalOpen={isModalOpen} props={props}/>
         <HighchartsReact highcharts={Highcharts} options={options} />       
        </>
    )
}