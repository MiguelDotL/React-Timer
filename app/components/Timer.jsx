var React = require('react'),
    Clock = require('Clock'),
    TimerForm = require('TimerForm'),

    Timer = React.createClass({

      getInitialState: function() {
        return {
          count: 0,
          timerStatus: 'stopped'
        };
      },

      componentDidUpdate: function(prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus) {
          switch (this.state.timerStatus) {
            case 'started':
              this.startTimer();
              break;
            default:
          }
        }

      },

      startTimer: function() {
        this.timer = setInterval(() => {
          let newCount = this.state.count - 1;
          this.setState({
            count: newCount >= 0 ? newCount : 0
          });
        }, 1000);
      },

      handleSetTimer: function(seconds) {
        this.setState({
          count: seconds,
          timerStatus: 'started'
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
