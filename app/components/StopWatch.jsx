
var React = require('react'),

    Clock = require('Clock'),
    Controls = require('Controls'),

    StopWatch = React.createClass({

      getInitialState: function() {
        return {
          count: 0,
          stopWatchStatus: 'stopped'
        };
      },

      componentDidUpdate: function(prevProps, prevState) {
        if(this.state.stopWatchStatus !== prevState.stopWatchStatus) {
          switch (this.state.stopWatchStatus) {
            case 'started':
              this.handleStart();
              break;
            case 'stopped':
              this.setState({count: 0});
            case 'paused':
              clearInterval(this.stopWatch);
              this.stopWatch = undefined;
              break;
            default:
          }
        }
      },

      componentWillUnmount: function() {
        clearInterval(this.stopWatch);
        this.stopWatch = undefined;
      },

      handleStart: function() {
        this.stopWatch = setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000);
      },

      handleStatusChange: function(newStatus) {
        this.setState({stopWatchStatus: newStatus})
      },

      render: function() {

        var {count, stopWatchStatus} = this.state;
        return (
          <div>
            <h1 className="page-title">Stopwatch</h1>
            <Clock totalSeconds={count}/>
          <Controls timerStatus={stopWatchStatus} onStatusChange={this.handleStatusChange}/>
          </div>
        );
      }
    });

module.exports = StopWatch;
