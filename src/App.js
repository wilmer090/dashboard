import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Nav from './components/Nav'
import {Container} from '@material-ui/core'
import {DataProvider} from './contextApi'
import './App.css';


function App() {
  
  return (
    <>
      <Container maxWidth="lg">
        <Router>
          <DataProvider>
          <Nav />
          <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          </Switch>
          </DataProvider>
        </Router>
      </Container>

     </>
  )
}

export default App;

