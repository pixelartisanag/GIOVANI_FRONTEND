import React from 'react';
import mainLogo from 'theme/assets/img/logo/logo.png';

const FooterAuth = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-bottom">
                <div className="row align-items-end">
                    <div className="col-md-4">
                        <div className="footer-widget logo-widget">
                            <img src={mainLogo} alt="Footer Logo" />
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="footer-widget text-right">
                            <p className="copyright-text">Copyright &copy; 2023, Alissa Monterro</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default FooterAuth;
