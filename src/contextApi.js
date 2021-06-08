import React, {useState, useEffect, createContext} from 'react'

export const apiContext = createContext()

export const DataProvider = (props) =>{

  const [data, setData] = useState([])
  const [dateRange, setDateRange] = useState([])

  // first get data from api 
  const getData = async () =>{
    const response = await fetch("http://localhost:8000/data")
    const data = await response.json()
    // store the data to a state
    setData(data)
  }
   
  // the useEffect will call a setter of our second state
  // the second sate will handle the data for table and chart  

  // dateRange filter

  function dateRangeFilter({newStartDate, newEndDate}){
    const filteredData = data.filter(item => new Date(item.date_created).getTime() >= new Date(newStartDate).getTime() && new Date(item.date_created).getTime() <= new Date(newEndDate).getTime())
    setData(filteredData)
  }

  useEffect(()=>{
    dateRangeFilter(dateRange)
  }, [dateRange])

  
  // const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.f2X7W_6J8g6y-jKto1fMj5zq7QkOLu9WBGw5b-sHAIc"

  // async function fetchData(){
  //   const response = await fetch('http://192.168.3.143:4040/mmi-endpoints/v0/article/custom_query', {
  //     method : "POST",
  //     // mode: "same-origin",
  //     headers: {
  //       "Content-Type" : "application/json",
  //       "Authorization" :  `Bearer ${TOKEN}`
  //     }
  //   })
  //   const data = await response.json()
  //   setData(data)
  // }


  // use the state to trigger a useEffect
  useEffect(()=>{
    getData()
  }, [])

    return(
        <apiContext.Provider value={{data, setDateRange}}>
            {props.children}
        </apiContext.Provider>
    )

}
