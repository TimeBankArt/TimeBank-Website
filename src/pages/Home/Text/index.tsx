import { useEffect } from 'react';
import Time from '../Time';
import Singer from '../Singer';
import styles from './index.less';

const Roadmap = () => {
  return (
    <div className={styles.banner}>
      <section>
        <Time />

        <div className="quote">
          <cite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel
            sapien elit in malesuada semper mi.
          </cite>
          <span id="replay">Replay</span>
          <a
            id="dex-sign"
            className="play"
            href="http://drygiel.com"
            target="_blank"
          ></a>
        </div>
        <Singer />
      </section>
    </div>
  );
};

export default Roadmap;
