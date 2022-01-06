import React from "react";
import image from "../assets/images/logo.png";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav  sidebar sidebar-dark accordion bg-azul"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-50" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span className="principal-font">Dashboard - Triathlon Store</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span className="secundary-font">Pages</span>
          </a>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span className="secundary-font">Charts</span>
          </a>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span className="secundary-font">Tables</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;