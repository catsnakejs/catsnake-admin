import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Packets extends Component {
  render() {
    return (
      <div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div class="orders-preview datalist-preview">
            <div class="orders-preview__cont">
              <div title="Id" class="orders-preview__name">ID</div>
              <div class="orders-preview__edit">
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-danger">Edit</button>
                  <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-danger dropdown-toggle"><span class="caret"></span></button>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Finish</a></li>
                    <li><a href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
              <div class="orders-preview__props">
                <div title="sum" class="orders-preview__prop"><i class="fa fa-money"></i><span class="orders-preview__sum">Sum</span></div>
                <div class="orders-preview__prop"><i class="fa fa-calendar"></i><span class="orders-preview__date">Date</span></div>
                <div title="User" class="orders-preview__prop"><i class="fa fa-user"></i><span class="orders-preview__user">User</span></div>
                <div title="Product" class="orders-preview__prop"><i class="fa fa-cube"></i><span class="orders-preview__product">Product</span></div>
              </div>
              <div class="orders-preview__note">Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
