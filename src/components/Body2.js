import React from 'react'

import classes from './Body2.module.css'
import ThirdImg from '../assets/img/thirdImage.png'

const Body2 = () => {
  return (
    <div className={classes.top}>
      <div className={classes.part1}>
        <img src={ThirdImg} alt="Third" />
      </div>
      <div className={classes.part2}>
        <h1 className={classes.desc} >Learn a Language in a playful way</h1>
        <h4 className={classes.desc2}>Make learning words more fun with mini-games</h4>
      </div>
    </div>
  )
}

export default Body2