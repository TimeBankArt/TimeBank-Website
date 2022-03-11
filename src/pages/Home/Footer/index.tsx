import { useEffect } from 'react';
import styles from './index.less';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer class="flex-rw">
        <ul class="footer-list-top">
          <li>
            <h4 class="footer-list-header">About Pavilion</h4>
          </li>
          <li>
            <a
              href="/shop/about-mission"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              GET TO KNOW US
            </a>
          </li>
          <li>
            <a
              href="/promos.html"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              PROMOS
            </a>
          </li>
          
        </ul>
        <ul class="footer-list-top">
          <li>
            <h4 class="footer-list-header">The Gift Selection</h4>
          </li>

          <li>
            <a
              href="/Angels/cat/id/70"
              class="generic-anchor footer-list-anchor"
            >
              ANGEL FIGURINES
            </a>
          </li>
          <li>
            <a
              href="/Home-Decor/cat/id/64"
              class="generic-anchor footer-list-anchor"
            >
              HOME DECOR
            </a>
          </li>
          
        </ul>
        <ul class="footer-list-top">
          <li id="help">
            <h4 class="footer-list-header">Please Help Me</h4>
          </li>
          <li>
            <a
              href="/shop/about-contact"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="/faq.html"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              FAQ
            </a>
          </li>
          
        </ul>
        <section class="footer-bottom-section flex-rw">
          <div class="footer-bottom-wrapper">
            <i class="fa fa-copyright" role="copyright"></i> 2019 Pavilion in{' '}
            <address class="footer-address" role="company address">
              Bergen, NY
            </address>
            <span class="footer-bottom-rights"> - All Rights Reserved - </span>
          </div>
          <div class="footer-bottom-wrapper">
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">
              Terms
            </a>{' '}
            |{' '}
            <a
              href="/privacy-policy.html"
              class="generic-anchor"
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
