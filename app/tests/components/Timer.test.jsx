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

    it('should pause Timer countdown on \'paused\' status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var seconds = 3;

      timer.handleSetTimer(seconds);
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(seconds);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset Timer countdown on \'stopped\' status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var seconds = 3;

      timer.handleSetTimer(seconds);
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });


  });
});
