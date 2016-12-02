var React = require('react'),
    Clock = require('Clock'),

    Timer = React.createClass({
      render: function() {
        return(
          <div>
            <Clock totalSeconds={129}/>
          </div>
        );
      }
    });

module.exports = Timer;
