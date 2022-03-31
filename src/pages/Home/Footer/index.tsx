import { useEffect } from 'react';
import styles from './index.less';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="flex-rw">
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">About Pavilion</h4>
          </li>
          <li>
            <a
              href="/shop/about-mission"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              GET TO KNOW US
            </a>
          </li>
          <li>
            <a
              href="/promos.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              PROMOS
            </a>
          </li>
          
        </ul>
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">The Gift Selection</h4>
          </li>

          <li>
            <a
              href="/Angels/cat/id/70"
              className="generic-anchor footer-list-anchor"
            >
              ANGEL FIGURINES
            </a>
          </li>
          <li>
            <a
              href="/Home-Decor/cat/id/64"
              className="generic-anchor footer-list-anchor"
            >
              HOME DECOR
            </a>
          </li>
          
        </ul>
        <ul className="footer-list-top">
          <li id="help">
            <h4 className="footer-list-header">Please Help Me</h4>
          </li>
          <li>
            <a
              href="/shop/about-contact"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="/faq.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              FAQ
            </a>
          </li>
          
        </ul>
        <section className="footer-bottom-section flex-rw">
          <div className="footer-bottom-wrapper">
            <i className="fa fa-copyright" role="copyright"></i> 2022 Pavilion in{' '}
            <address className="footer-address" role="company address">
              Bergen, NY
            </address>
            <span className="footer-bottom-rights"> - All Rights Reserved - </span>
          </div>
          <div className="footer-bottom-wrapper">
            <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">
              Terms
            </a>{' '}
            |{' '}
            <a
              href="/privacy-policy.html"
              className="generic-anchor"
              rel="nofollow"
            >
              Privacy
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
