import React, {Component} from "react";
import {useLocation, Route} from "react-router-dom";

import AdminNavbar from "admin/components/Navbars/AdminNavbar";
import Footer from "admin/components/Footer/Footer";
import Sidebar from "admin/components/Sidebar/Sidebar";
import FixedPlugin from "admin/components/FixedPlugin/FixedPlugin.js";

import routes from "admin/routes.js";

import sidebarImage from "admin/assets/img/sidebar-3.jpg";
import 'admin/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import 'admin/assets/css/demo.css';
import {useAuth} from 'hooks/auth';

const Adminayout = ({children}) => {
  const {user} = useAuth({middleware: 'auth'})
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div id="admin-wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes}/>
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar/>
          <div className="content">
            {children}
          </div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Adminayout