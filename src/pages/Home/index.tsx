import styles from './index.less';
import Banner from './Banner';
import Time from './Time';
import Text from './Text';
import World from './World';
import Roadmap from './Roadmap';
import Network from './Network';
import Chart from './Chart';
import Glitchclock from './Glitchclock';
import Box from './Box';

import Footer from './Footer';
export default function IndexPage() {
  return (
    <div>
      {/* <Time /> */} 
      <Banner />
      <World />
      <Text />
      <Chart />
      <Footer />
      <Network />
      <Glitchclock />
      <Box />
    </div>
  );
}
