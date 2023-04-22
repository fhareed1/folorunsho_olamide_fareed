import React from 'react';

import classes from './Body.module.css';
import MainImg from '../assets/img/mainImage.png';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <div className={classes.top}>
        <div className={classes.part1}>
          <h4 className={classes.title}>E-Course PlatForm</h4>
          <br />
          <h1 className={classes.desc}>
            Learning and teaching online made easy.
          </h1>
          <br />
          <h5 className={classes.desc2}>
            Practice your english and learn new things with the platform
          </h5>
          <br />
          <button className={classes.button}>About Platform</button>
          <br />
          <div className={classes.numdiv}>
            <div className={classes.numberLeft}>
              <h1>600+</h1>
              <h5>Popular Words</h5>
            </div>

            <div className={classes.numberRight}>
              <h1>2+</h1>
              <h5>Mini-games</h5>
            </div>
          </div>
        </div>
        <div className={classes.part2}>
          <img src={MainImg} alt='img' className={classes.img} />
        </div>
      </div>
      {/* Second part of the   */}
      <Body2 />
      <Body3 />
      <Body4 />
      <Footer />
    </>
  );
};

export default Body;
