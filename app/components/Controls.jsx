var React = require('react'),

    Clock = React.createClass({

      // getDefualtProps: function() {
      //   return {
      //     timerStatus: 'stopped'
      //   }
      // },

      propTypes: {
        timerStatus: React.PropTypes.string.isRequired
      },

      // formatSeconds: function(totalSeconds) {
      //   let seconds = totalSeconds % 60;
      //   let minutes = Math.floor(totalSeconds / 60);
      //
      //   if(seconds < 10) {
      //     seconds = '0' + seconds;
      //   }
      //   if(minutes < 10) {
      //     minutes = '0' + minutes;
      //   }
      //   return `${minutes}:${seconds}`;
      // },

      render: function() {
        var {timerStatus} = this.props,
            renderStartStopButton = () => {
              if(timerStatus == 'started') {
                return(
                  <button className="button alert">
                    Stop
                  </button>
                )
              } else if( timerStatus == 'paused') {
                return(
                  <button className="button success">
                    Start
                  </button>
                )
              }
            }

        return(
          <div className="controls">
              {renderStartStopButton()}
              <button className="button primary hollow">
                Reset
              </button>
          </div>
        )
      }
    });

module.exports = Clock;
