import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Packet extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="orders-preview datalist-preview">
            <div className="orders-preview__cont">
              <div title="Id" className="orders-preview__name">{this.props.id}</div>
              <div className="orders-preview__edit">

              </div>
              <div className="orders-preview__props">
                <div title="sender" className="orders-preview__prop"><i className="fa fa-user"></i><span className="orders-preview__sum">Sender</span> {this.props.sender}</div>
                <div className="orders-preview__prop"><i className="fa fa-clock-o"></i><span className="orders-preview__date">Time</span> {this.props.time}</div>
                <div title="User" className="orders-preview__prop"><i className="fa fa-archive"></i><span className="orders-preview__user">Type</span> {this.props.type}</div>
              </div>
              <div className="orders-preview__note">
                <code class="javascript">{JSON.stringify(this.props.packet)}</code></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
