import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareGithub,
  faSquareYoutube
} from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.bottomNav}>
          <div className={classes.leftSide}>
            <ul className={classes.list1}>
              <li>Home</li>
              <li>Textbook</li>
              <li>Statistics</li>
              <li>Sprint</li>
              <li>Audio Call</li>
            </ul>
          </div>
          <div className={classes.rightSide}>
            <ul className={classes.list2}>
              <li>Alex</li>
              <li>Gabriel</li>
              <li>Marcus</li>
            </ul>
          </div>
        </div>
        <hr />
        <br />
        <div className={classes.belowNav}>
          <div className={classes.socialMedia}>
            <FontAwesomeIcon icon={faSquareGithub} />
            <FontAwesomeIcon icon={faSquareYoutube} />
          </div>
          <div className={classes.copyright}>
            © 2023 GlobalTalk Project For GlobalTalk
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
