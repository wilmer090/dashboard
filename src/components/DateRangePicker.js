import React,{useState,useEffect,useContext} from 'react'
import {apiContext} from '../contextApi'
import './DateRangePicker.css'
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

function DateRangePicker(){

    const [date, setDate] = useState([])
    const {data, setDateRange} = useContext(apiContext)

    const onChange = (props) => {

        // format date to ISO and add 1 day 
        const startDate = new Date(props.startDate);
        const endDate = new Date(props.endDate);
        
        let newStartDate = startDate.setDate(startDate.getDate()+1)

        newStartDate = new Date(newStartDate).toISOString()

        let newEndDate = endDate.setDate(endDate.getDate()+1)

        newEndDate = new Date(newEndDate).toISOString()
        

        const dateRange = {
            newStartDate,
            newEndDate
        }

        console.log('new dates', dateRange)
        
        setDate(dateRange)
        
    };

    useEffect(()=>{
        setDateRange(date)
        console.log('isWorking')
    }, [date])
    

    return(
        <>
            <DateRangePickerComponent placeholder="Date" change={onChange} />
        </>
    )
}

export default DateRangePicker
