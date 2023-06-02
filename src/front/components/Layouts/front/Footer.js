import React from "react";
import styles from 'front/assets/css/footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
        <footer className={styles.footer}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.copyright}>
                  <p>
                    © Copyright 2023 <a href="login.html#">PixelArtisanAgency</a>, All
                    rights reserved.
                  </p>
                </div>
                <div className={styles.back}>
                  <a href="front/components/Layouts/front/Footer#" className={styles.backtop}>
                    <i className="fas fa-arrow-up" /> dasdasdasdasd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;