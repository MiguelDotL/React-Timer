var React = require('react'),

    TimerForm = React.createClass({

      onSubmit: function(e) {
        e.preventDefault();

        // get minutes and seconds input values
        var strMinutes = this.refs.minutes.value || '0';
        var strSeconds = this.refs.seconds.value || '0';

        if (parseInt(strMinutes) || parseInt(strSeconds)) {

          if(strMinutes.match(/^[0-9]*$/)) {
            this.refs.minutes.value = '';
            var minutes = parseInt(strMinutes, 10);
            var minInSeconds = minutes * 60;
          }

          if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            // parse strSeconds to base 10 ints
            var seconds = parseInt(strSeconds, 10) || 0;
            var totalSeconds = minInSeconds + seconds

            this.props.onSetTimer(totalSeconds);
          }
        }
      },

      render: function() {
        return(
          <div>
            <form ref="form" onSubmit={this.onSubmit} className="timer-form">


              <div className="row">
                <div className="columns centered">
                  <input type="text" ref="minutes" placeholder="Minutes"/>
                  <input type="text" ref="seconds" placeholder="Seconds"/>
                </div>
              </div>

              <button className="button expanded">Start</button>
            </form>
          </div>
        );
      }
    });

module.exports = TimerForm;
