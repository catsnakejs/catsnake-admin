import React, { Component } from 'react';
import { Link } from 'react-router';
import PubSub from 'pubsub';

/* component styles */
import { styles } from './styles.scss';
import { Packets } from '../Packets';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.cs.on(() => {
      this.props.cs.channels('aad80295-7ada-4846-8b0e-fa07078fe15f').then(msg => {
        this.props.populateChannels(msg.channels);
      });
    });
  }

  render() {
    return (
      <div>
        <Packets {...this.props} />
      </div>
    );
  }
}
