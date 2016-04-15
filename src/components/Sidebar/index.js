import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  fetchChannels() {
    return Object.keys(this.props.channels).map((channel, i) => {
      return (
        <li key={`channel-${i}`}>
          <a href="#" onClick={(e) => {
              e.preventDefault();
              this.props.setActiveChannel(channel);
            }}>
            <div className="nav-menu__ico">
              <i className="fa fa-fw fa-folder"></i>
            </div>
            <div className="nav-menu__text">
              <span>{channel}</span>
            </div>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="quickmenu">
          <div className="quickmenu__cont">
            <div className="quickmenu__list">
              <div className="quickmenu__item active">
                <div className="fa fa-fw fa-folder"></div>
              </div>
              <div className="quickmenu__item">
                <div className="fa fa-fw fa-user"></div>
              </div>
              <div className="quickmenu__item">
                <div className="fa fa-fw fa-cog"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollable scrollbar-macosx">
          <div className="sidebar__cont">
            <div className="sidebar__menu">
              <div className="sidebar__title">Channels</div>
              <ul className="nav nav-menu">
                {this.fetchChannels()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
