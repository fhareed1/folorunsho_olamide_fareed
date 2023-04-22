import React from 'react'

import classes from './Body3.module.css'
import LastImg from '../assets/img/lastImage.png'

const Body3 = () => {
  return (
    <div className={classes.top}>
      <div className={classes.part1}>
        <h1 className={classes.desc} >Increase Your Vocabulary</h1>
        <br />
        <h4 className={classes.desc2} >Traditional and new effective approach to study</h4>
        <br />
        <button className={classes.button}>Textbook →</button>
      </div>
      <div className={classes.part2}>
        <img src={LastImg} alt="The last" />
      </div>
    </div>
  )
}

export default Body3