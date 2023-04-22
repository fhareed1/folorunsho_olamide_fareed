import React from 'react'

import classes from './Body4.module.css'
import SecImg from '../assets/img/secImage.png'

const Body4 = () => {
  return (
    <div className={classes.top}>
      <div className={classes.part1}>
        <img src={SecImg} alt="Second" />
      </div>
      <div className={classes.part2}>
        <h1 className={classes.desc} >Watch Your Progress Everyday</h1>
        <br />
        <h5 className={classes.desc2} >Watch Your Progress Everyday</h5>
        <br />
        <button className={classes.button} >Statistics →</button>
      </div>
    </div>
  )
}

export default Body4