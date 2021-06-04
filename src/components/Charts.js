import React,{useState, useEffect, useContext} from 'react'
import Highcharts from 'highcharts'
import {apiContext} from '../contextApi'
import HighchartsReact from 'highcharts-react-official'
import Modal from './Modal'



const filterArticlesWithErrorStatus = (data) =>{
    return data.filter(data => data.article_status === "Error")
}

const ObjectTOArray = (data) =>{
      return Object.keys(data).map((time) => {
          return [+time, data[time].length]
        });
}

const getCountOfArticles = (data) =>{

    const sample = data.reduce((accu, curr) => {
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

const getCountOfArticlesWithError = (data) =>{

  const sample = data.reduce((accu, curr) => {

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

const dataProcessor = ({data}) =>{
    
    const dataHolder = data
    
    if(data){

       dataHolder.sort(function(a, b) {
      
        return (a.date_created < b.date_created) ? -1 : ((a.date_created > b.date_created) ? 1 : 0);
        })
      
         
        const numberOfArticles = getCountOfArticles(dataHolder)

        const ArticlesWithErrors = filterArticlesWithErrorStatus(data)
        
        const numberOfArticlesWithErrors = getCountOfArticlesWithError(ArticlesWithErrors)

        const resultNumberOfArticles = ObjectTOArray(numberOfArticles)

        const resultNumberOfArticlesWithErrors = ObjectTOArray(numberOfArticlesWithErrors)

        console.log('Articles w/ errors: ', resultNumberOfArticlesWithErrors)
        console.log('numberOfArticlesWithErrors', numberOfArticlesWithErrors)
        console.log('numberOfArticles', numberOfArticles)

        return resultNumberOfArticles
    }

    return
 
}




  //======================test area=========================================
//   const newArr = []
//   arr.forEach(obj => newArr.push({x: +obj.x, y:obj.y}))
  
//   console.log('newarray',newArr)
//============================end of test area================================
export  function Spline(){

  const [isModalOpen, setIsModalOpen] = useState(false)

  const data = useContext(apiContext)

  const  processorResult = dataProcessor(data)

  console.log('dataProcessorOutput', processorResult)
  
  const [props, setProps] = useState([])

  function converter(item){
    const date = new Date(item).setSeconds(0,0)
    const newDate = new Date(date).toISOString()

    return newDate
  }

  function handleOpenModal(time,{data} ){
    let props = {}
    const arrayTableValue = data
    time = new Date(time).toISOString()
  
    console.log('arrayTable', arrayTableValue)
    arrayTableValue.forEach(item => item.date_created  = converter(item.date_created))
    
    const filterForModalTable = arrayTableValue.filter(item => item.date_created === time)
    console.log('updated value',filterForModalTable)
  
    setIsModalOpen(isModalOpen => !isModalOpen)

    props = {...props, time:time, value:filterForModalTable}
    setProps(props)
    console.log("props",props)
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
    plotOptions:{
      series:{
        cursor: 'Pointer',
        point:{
          events:{
            click: function(){
              handleOpenModal(this.x, data)
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

  const data = useContext(apiContext)

  const processorResult = dataProcessor(data)

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
    plotOptions:{
      series:{
        cursor: 'Pointer',
        point:{
          events:{
            click: function(){
              // handleOpenModal(this.x, data)
              alert(this.y)
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
    
    data:processorResult
        
    }]
    }

    return(
        <>
         <HighchartsReact highcharts={Highcharts} options={options} />       
        </>
    )
}