/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PubSub from 'pubsub';

import DocumentMeta from 'react-document-meta';


const cs = new PubSub('ws://catsnake.io:3081', {
  commonName: 'A Random Catsnake'
});

/* components */
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Dashboard } from 'components/Dashboard';
/* eslint-enable no-unused-vars */

/* actions */
import * as actionCreators from 'actions/global';

const metaData = {
  title: 'GoMeep.com',
  description: 'Dynamic server hosting & managment.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'dynamic,server,hosting,minecraft,games'
    }
  }
};

@connect(
  state => state.global,
  dispatch => bindActionCreators(actionCreators, dispatch)
)


export class Dash extends Component {
  componentDidMount() {

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });


    /* ---- stats.js config ---- */

    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  render() {
    return (
      <div>
        <DocumentMeta {...metaData} />
          <div>
            <div className="wrapper">
              <Header />
                <div id="particles-js"><canvas className="particles-js-canvas-el" width="2880" height="646"></canvas></div>

              <div className="dashboard">
                <Sidebar {...this.props} cs={cs}/>
                <div className="main">
                  <div className="main__scroll scrollbar-macosx">
                    <div className="main__cont">
                      <div className="container-fluid half-padding">
                        <Dashboard {...this.props} cs={cs}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
