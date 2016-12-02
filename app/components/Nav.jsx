var React = require('react'),
    { Link, IndexLink } = require('react-router');

var Nav = React.createClass({

      render: function() {
        return(
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  {/* <img src="./images/components/nav/blue-clock-icon.png"></img> */}
                  <img src="./images/components/nav/stopwatch.png" className="logo"></img>
                  React Timer
                </li>
                <li>
                  <IndexLink to="/"
                    activeClassName="active-link"
                    activeStyle={{fontWeight: 'bold'}}>Stop Watch</IndexLink>
                </li>
                <li>
                  <Link to="/timer"
                    activeClassName="active-link"
                    activeStyle={{fontWeight: 'bold'}}>Timer</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Created by &nbsp; <a href="https://github.com/MiguelDotL" target="_blank">Miguel Lozano</a>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });

module.exports = Nav;
