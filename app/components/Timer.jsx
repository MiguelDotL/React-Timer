var React = require('react'),
    Clock = require('Clock'),
    TimerForm = require('TimerForm'),

    Timer = React.createClass({

      getInitialState: function() {
        return {count: 0};
      },

      handleSetTimer: function(seconds) {
        this.setState({
          count: seconds
        });
      },

      render: function() {

        let {count} = this.state
        
        return(
          <div>
            <Clock totalSeconds={count}/>
            <TimerForm onSetTimer={this.handleSetTimer}/>
          </div>
        );
      }
    });

module.exports = Timer;
