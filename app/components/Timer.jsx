var React = require('react'),

    About = (props) => {
      return(
        <div className="text-center">
          <h1 className="page-title">About</h1>
          <p>Built with <a href="https://github.com/MiguelDotL" target="_blank">&hearts;</a> by <a href="https://github.com/MiguelDotL" target="_blank">MiguelDotL</a></p>
          <p>This application was build using the OpenWeather API, NodeJS, ReactJS, Webpack, Foundation </p>
        </div>
      );
    };

module.exports = About;
