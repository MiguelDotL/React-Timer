var React = require('react'),

    TimerForm = React.createClass({

      onSubmit: function(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        var strMinutes = this.refs.minutes.value;

        // debugger;
        if(strMinutes.match(/^[0-9]*$/)) {
          this.refs.minutes.value = '';
          // parse strSeconds to base 10 ints
          // var minutes = this.props.onSetTimer(parseInt(strMinutes, 10));
          var minutes = parseInt(strMinutes, 10);
          var minInSeconds = minutes * 60;
        }

        if(strSeconds.match(/^[0-9]*$/)) {
          this.refs.seconds.value = '';
          // parse strSeconds to base 10 ints
          var seconds = parseInt(strSeconds, 10);
          var totalSeconds = minInSeconds + seconds

          this.props.onSetTimer(totalSeconds);
        }
      },

      render: function() {
        return(
          <div>
            <form ref="form" onSubmit={this.onSubmit} className="timer-form">
              <input type="text" ref="minutes" placeholder="Minutes"/>
              <input type="text" ref="seconds" placeholder="Seconds"/>
              <button className="button expanded">Start</button>
            </form>
          </div>
        );
      }
    });

module.exports = TimerForm;
