import { useEffect } from 'react';
import Singer from '../Singer';
import SvgHead from '../SvgHead';
import styles from './index.less';

const Roadmap = () => {
  return (
    <div className={styles.banner}>
      <section>

        <div className="quote">
          <cite>
            Timebank creates cutting-edge art with cutting-edge technology.
          </cite>

        </div>
        {/* <div style={{ textAlign: 'center' }}>
          <Time />

        </div> */}
        {/* <Singer /> */}
        <SvgHead />
      </section>
    </div>
  );
};

export default Roadmap;
