import styles from './index.less';
import Banner from './Banner';
import Time from './Time';
import Text from './Text';
import World from './World';
import Roadmap from './Roadmap';
import Chart from './Chart';
import Footer from './Footer';
export default function IndexPage() {
  return (
    <div>
      {/* <Time /> */} 
      <Banner />
      <Text />
      <World />
      <Chart />
      <Footer />
    </div>
  );
}
