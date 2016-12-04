var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var StopWatch = require('StopWatch');

describe('StopWatch', () => {
  it('should exist', () => {
    expect(StopWatch).toExist();
  });

  var count = 10;

  it('should start timer on \'started\' status', (done) => {
    var stopWatch = TestUtils.renderIntoDocument(<StopWatch/>);

    stopWatch.handleStatusChange('started');

    expect(stopWatch.state.count).toBe(0);

    setTimeout(() => {
      expect(stopWatch.state.stopWatchStatus).toBe('started');
      expect(stopWatch.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on \'paused\' status', (done) => {
    var stopWatch = TestUtils.renderIntoDocument(<StopWatch/>);

    stopWatch.setState({count: count});
    stopWatch.handleStatusChange('started');
    stopWatch.handleStatusChange('paused');

    setTimeout(() => {
      expect(stopWatch.state.stopWatchStatus).toBe('paused');
      expect(stopWatch.state.count).toBe(count);
      done();
    }, 1001);
  });

  it('should reset timer on \'stopped\' status', (done) => {
    var stopWatch = TestUtils.renderIntoDocument(<StopWatch/>);

    stopWatch.setState({count: count});
    stopWatch.handleStatusChange('started');
    stopWatch.handleStatusChange('stopped');

    setTimeout(() => {
      expect(stopWatch.state.stopWatchStatus).toBe('stopped');
      expect(stopWatch.state.count).toBe(0);
      done();
    }, 1001);
  });
});
