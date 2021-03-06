var React = require('react'),

    Clock = React.createClass({


      propTypes: {
        timerStatus:    React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
      },

      onStatusChange: function(newStatus) {
        return () => {
          this.props.onStatusChange(newStatus);
        }
      },


      render: function() {
        var {timerStatus} = this.props,
            renderStartStopButton = () => {
              if(timerStatus == 'started') {
                return(
                  <button className="button alert hollow" onClick={this.onStatusChange('paused')}>
                    Stop
                  </button>
                )
              } else {
                return(
                  <button className="button primary" onClick={this.onStatusChange('started')}>
                    Start
                  </button>
                )
              }
            }

        return(
          <div className="controls">
              {renderStartStopButton()}
              <button className="button primary hollow" onClick={this.onStatusChange('stopped')}>
                Reset
              </button>
          </div>
        )
      }
    });

module.exports = Clock;
