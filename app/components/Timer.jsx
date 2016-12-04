var React = require('react'),

    Clock = require('Clock'),
    TimerForm = require('TimerForm'),
    Controls = require('Controls'),

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
            case 'stopped':
              this.setState({count: 0});
            case 'paused':
              clearInterval(this.timer);
              this.timer = undefined;
              break;
            default:
          }
        }
      },

      componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
      },

      startTimer: function() {
        this.timer = setInterval(() => {
          let newCount = this.state.count - 1;
          this.setState({
            count: newCount >= 0 ? newCount : 0
          });

          if(newCount === 0) {
              this.setState({timerStatus: 'stopped'});
          }
        }, 1000);
      },

      handleSetTimer: function(seconds) {
        this.setState({
          count: seconds,
          timerStatus: 'started'
        });
      },

      handleStatusChange: function(newStatus) {
        this.setState({timerStatus: newStatus})
      },

      render: function() {
        let { count,
              timerStatus } = this.state
        let renderControlArea = () => {
          if(timerStatus != 'stopped') {
            return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />
          } else {
            return <TimerForm onSetTimer={this.handleSetTimer} />
          }
        };

        return(
          <div>
            <h1 className="page-title">Set A Time</h1>
            <Clock totalSeconds={count}/>
            {renderControlArea()}
          </div>
        );
      }
    });

module.exports = Timer;
