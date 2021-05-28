import React from 'react'
import useStyles from '../style'


const About = () => {
    const classes = useStyles()
    return (
        <div>
            <main className={classes.content}>
            <div className={classes.toolbar} />
             <h1>About</h1>
            </main>
            
        </div>
    )
}

export default About
