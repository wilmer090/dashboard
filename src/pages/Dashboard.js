import React,{useContext} from 'react'
import {apiContext} from '../contextApi'
import {Spline, Bar} from '../components/Charts'
import DataTable from '../components/DataTable'
import {Typography, Grid, Paper} from '@material-ui/core'
import useStyles from '../style'

const Dashboard = () => {
    const classes = useStyles()

    // const {data} = useContext(apiContext)
    return (
        <div>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.Grid}>
         
          <Grid item xs={6}>
            <Paper className={classes.paper}>
             <Spline />
            </Paper>
          </Grid>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}>
             <Bar />
            </Paper>
          </Grid>
        </Grid>
       
        <DataTable />
      </main>
        </div>
    )
}

export default Dashboard
