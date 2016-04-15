import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';
import { Packet } from '../Packet';

export class Packets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChannel: 'Website',
      limit: 15,
    };
  }

  updateChannel(ch) {
    this.setState({
      activeChannel: ch
    });

    this.props.cs.history(ch, this.state.limit);

    this.props.cs.subscribe(ch, msg => {
      if (msg.channel === ch) {
        if (msg.metadata.type === 'history') {
          this.props.setPackets(msg.history);
        } else {
          let newPackets = this.props.packets.slice(0);
          newPackets.shift();
          newPackets.push(msg);
          this.props.setPackets(newPackets);
        }
      }
    });
  }

  componentDidMount() {
    this.props.cs.on(() => {
      this.updateChannel(this.props.activeChannel);
    });
  }

  componentDidUpdate() {
    if (this.state.activeChannel != this.props.activeChannel) {
      console.log('difference channel');
      this.updateChannel(this.props.activeChannel);
    }
  }

  /* eslint-disable */
  onChange = (state) => {
  /* eslint-enable */
    this.setState({
      limit: this.refs.limitSelect.value
    });
  }

  render() {
    const packets = this.props.packets.map((packet, i) => {
      return (
        <Packet
          id={packet.metadata.id}
          time={packet.metadata.time}
          type={packet.metadata.type}
          sender={(packet.metadata.commonName) ? packet.metadata.commonName : 'system'}
          packet={packet}
          key={`packet-${packet.metadata.id}-${i}`}
        />
      );
    });
    return (
      <div>
        <div className="col-xs-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Tweak</h3>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label">Limit</label>
                <div>
                  <select ref="limitSelect" onChange={this.onChange} placeholder="Select" className="selectpicker form-control bs-select-hidden">
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={40}>40</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {packets}
      </div>
    );
  }
}
