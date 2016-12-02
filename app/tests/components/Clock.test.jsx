var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {

    it('should format minutes and seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      let expected = '10:15';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format minutes and seconds less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });

});