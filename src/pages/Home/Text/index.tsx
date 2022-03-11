import { useEffect } from 'react';
import Time from '../Time';
import Singer from '../Singer';
import styles from './index.less';

const Roadmap = () => {
  return (
    <div className={styles.banner}>
      <section>

        <div className="quote">
          <cite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel
            sapien elit in malesuada semper mi.
          </cite>

        </div>
        <div style={{textAlign:'center'}}>
        <Time />

        </div>
        <Singer />
      </section>
    </div>
  );
};

export default Roadmap;
