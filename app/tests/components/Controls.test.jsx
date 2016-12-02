var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render \'Stop\' when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus={'started'}/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var $stopButton = $el.find('button:contains(Stop)');

      expect($stopButton.length).toBe(1);
    });

    it('should render \'Start\' when stopped', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus={'paused'}/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

  // describe('formatSeconds', () => {
  //
  //   it('should format minutes and seconds', () => {
  //     var clock = TestUtils.renderIntoDocument(<Controls/>);
  //     var seconds = 615;
  //     var expected = '10:15';
  //     var actual = clock.formatSeconds(seconds);
  //
  //     expect(actual).toBe(expected);
  //   });
  //
  //   it('should format minutes and seconds less than 10', () => {
  //     var clock = TestUtils.renderIntoDocument(<Controls/>);
  //     var seconds = 61;
  //     var expected = '01:01';
  //     var actual = clock.formatSeconds(seconds);
  //
  //     expect(actual).toBe(expected);
  //   });
  // });
});
