import { useEffect } from 'react';
import styles from './index.less';

const Roadmap = () => {
  useEffect(() => {
    $(document).ready(function () {

      function second_passed() {
        $('.clock').removeClass('is-off');
      }
      setTimeout(second_passed, 2000)
    
      $('.switcher').on('click', function(e) {
        e.preventDefault();
        $('.screen').toggleClass('glitch');
      });
    
    
      var newDate = new Date();
      newDate.setDate(newDate.getDate());
    
      setInterval( function() {
    
        var hours    = new Date().getHours();
        var seconds  = new Date().getSeconds();
        var minutes  = new Date().getMinutes();
    
        var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds
    
        $('.time').html(realTime);
        $('.time').attr('data-time', realTime);
    
      }, 1000);
    
    });
  }, []);
  return (
    <div className={styles.banner}>
      <div className="screen glitch">
        <div className="clock is-off"><span className="time" data-time=""></span></div>
        <div className="figure"></div>
        <div className="figure-mask"></div>
      </div>
    </div>
  );
};

export default Roadmap;
