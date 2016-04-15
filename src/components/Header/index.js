import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top header-navbar">
        <div className="header-navbar-mobile">
          <div className="header-navbar-mobile__menu">
            <button type="button" className="btn"><i className="fa fa-bars"></i></button>
          </div>
          <div className="header-navbar-mobile__title"><span>Blank</span></div>
          <div className="header-navbar-mobile__settings dropdown"><a href="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="btn dropdown-toggle"><i className="fa fa-power-off"></i></a>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-header">
          <a href="index.html" className="navbar-brand">
            <div className="logo text-nowrap">
              <div className="logo__img">
                <i className="fa fa-chevron-right"></i>
              </div>
              <span className="logo__text">Catsnake Admin</span>
            </div>
          </a>
        </div>
        <div className="topnavbar">
          <ul className="userbar nav navbar-nav">
            <li className="dropdown"><a href="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="userbar__settings dropdown-toggle"><i className="fa fa-power-off"></i></a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="#">Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
