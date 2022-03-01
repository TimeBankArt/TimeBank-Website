import { useEffect } from 'react';
import styles from './index.less';

const Roadmap = () => {
  useEffect(() => {
    let body = document.body;
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.15,
      snap: 1 / 28,
      onUpdate: (self) => {
        body.style.setProperty('--progress', self.progress * 100);
        body.style.setProperty(
          '--velocity',
          Math.abs(self.getVelocity() / 3500),
        );
      },
      onScrubComplete: () => {
        body.style.setProperty('--velocity', 0);
      },
      onEnter: () => {
        body.style.setProperty('--velocity', 0);
      },
      onEnterBack: () => {
        body.style.setProperty('--velocity', 0);
      },
      onLeave: () => {
        body.style.setProperty('--velocity', 0);
        window.scrollTo(0, 0);
      },
      onLeaveBack: () => {
        body.style.setProperty('--velocity', 0);
      },
    });
  }, []);
  return (
    <div className={styles.banner}>
      <h1>February 2022</h1>
      <p>Holidays and Daily Observances in the United States</p>
      <div className="wrap">
        <ul>
          <li>
            <time datetime="2022-02-01">1</time>
            <span>Dark Chocolate Day</span>
          </li>
          <li>
            <time datetime="2022-02-02">2</time>
            <span>Groundhog Day</span>
          </li>
          <li>
            <time datetime="2022-02-03">3</time>
            <span>Carrot Cake Day</span>
          </li>
          <li>
            <time datetime="2022-02-04">4</time>
            <span>Wear Red Day</span>
          </li>
          <li>
            <time datetime="2022-02-05">5</time>
            <span>Weatherperson's Day</span>
          </li>
          <li>
            <time datetime="2022-02-06">6</time>
            <span>Chopsticks Day</span>
          </li>
          <li>
            <time datetime="2022-02-07">7</time>
            <span>Periodic Table Day</span>
          </li>
          <li>
            <time datetime="2022-02-08">8</time>
            <span>Kite Flying Day</span>
          </li>
          <li>
            <time datetime="2022-02-09">9</time>
            <span>Pizza Day</span>
          </li>
          <li>
            <time datetime="2022-02-10">10</time>
            <span>Umbrella Day</span>
          </li>
          <li>
            <time datetime="2022-02-11">11</time>
            <span>Inventor's Day</span>
          </li>
          <li>
            <time datetime="2022-02-12">12</time>
            <span>Global Movie Day</span>
          </li>
          <li>
            <time datetime="2022-02-13">13</time>
            <span>Tortellini Day</span>
          </li>
          <li>
            <time datetime="2022-02-14">14</time>
            <span>Valentine's Day</span>
          </li>
          <li>
            <time datetime="2022-02-15">15</time>
            <span>Gumdrop Day</span>
          </li>
          <li>
            <time datetime="2022-02-16">16</time>
            <span>Do a Grouch a Favor Day</span>
          </li>
          <li>
            <time datetime="2022-02-17">17</time>
            <span>Cabbage Day</span>
          </li>
          <li>
            <time datetime="2022-02-18">18</time>
            <span>Battery Day</span>
          </li>
          <li>
            <time datetime="2022-02-19">19</time>
            <span>Chocolate Mint Day</span>
          </li>
          <li>
            <time datetime="2022-02-20">20</time>
            <span>Love Your Pet Day</span>
          </li>
          <li>
            <time datetime="2022-02-21">21</time>
            <span>President's Day</span>
          </li>
          <li>
            <time datetime="2022-02-22">22</time>
            <span>Cook a Sweet Potato Day</span>
          </li>
          <li>
            <time datetime="2022-02-23">23</time>
            <span>Tile Day</span>
          </li>
          <li>
            <time datetime="2022-02-24">24</time>
            <span>Toast Day</span>
          </li>
          <li>
            <time datetime="2022-02-25">25</time>
            <span>Clam Chowder Day</span>
          </li>
          <li>
            <time datetime="2022-02-26">26</time>
            <span>Pistachio Day</span>
          </li>
          <li>
            <time datetime="2022-02-27">27</time>
            <span>Polar Bear Day</span>
          </li>
          <li>
            <time datetime="2022-02-28">28</time>
            <span>Tooth Fairy Day</span>
          </li>
        </ul>
      </div>
      <div className="panelwrap">
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
      </div>
    </div>
  );
};

export default Roadmap;
