var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  // describe('render', () => {
  //   it('should render clock to DOM', () => {
  //     var clock = TestUtils.renderIntoDocument(<Timer totalSeconds={64}/>);
  //     var $el = $(ReactDOM.findDOMNode(clock));
  //     var actualText = $el.find('.clock-text').text();
  //
  //     expect(actualText).toBe('01:04');
  //   });
  // });
  //

  describe('handleSetTimer', () => {
    it('should setState to \'started\' and countdown', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var seconds = 12;

      timer.handleSetTimer(seconds);

      expect(timer.state.count).toBe(seconds);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(seconds - 1)
        done();
      }, 1001);
    });

    it('should not report negative times', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var seconds = 1;

      timer.handleSetTimer(seconds);

      expect(timer.state.count).toBe(seconds);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(0)
        done();
      }, 3001);
    });
  });
});
