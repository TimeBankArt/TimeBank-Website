import { useEffect, useLayoutEffect } from 'react';
import { ReactComponent as S1 } from "./1.svg";
import { ReactComponent as S2 } from "./2.svg";
import { ReactComponent as S3 } from "./3.svg";
import styles from './index.less';

const Roadmap = () => {

  return (
    <div className={styles.banner}>
      <div className="wrapper">

        <div className="container" id="c0">
          <div className="image" id="i0">

            <div className="city">

              <S1 />

            </div>
          </div>
          <div className="story" id="s0">
            <div className="info">
              <h3>Pyramids</h3>
              <p> Built during a time when Egypt was one of the richest and most powerful civilizations in the world. Their massive scale reflects the unique role that the pharaoh played in ancient Egyptian society.</p>
            </div>
          </div>
        </div>
        <div className="container" id="c1">
          <div className="image" id="i1">
            <div className="city">
              <S2 />

            </div>
          </div>
          <div className="story" id="s1">
            <div className="info">
              <h3>Stonehenge</h3>
              <p> Stonehenge is a prehistoric monument in Wiltshire, England. It was constructed in several stages between 3000 and 1500 B.C., spanninng to the Bronze Age.</p>
            </div>
          </div>
        </div>
        <div className="container" id="c2">
          <div className="image" id="i2">
            <div className="city">

              <S3 />


            </div>
          </div>
          <div className="story" id="s2">
            <div className="info">
              <h3>Tower of Pisa</h3>
              <p> The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt</p>

            </div>
          </div>
        </div>

        <div className="page">
          <h4>Hover the card</h4>
          <ul><li> {`<<<`} </li>

            <li> {`>>>`} </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Roadmap;
