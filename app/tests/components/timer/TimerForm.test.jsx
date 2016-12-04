// app/tests/components/timer/timer.test.jsx
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TimerForm = require('TimerForm');

describe('TimerForm', () => {
  it('should exist', () => {
    expect(TimerForm).toExist();
  });
  it('should call onSetTimer if valid seconds entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetTimer if invalid seconds entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.seconds.value = 'abc';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should call onSetTimer if NO seconds are entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.minutes.value = '1';
    timerForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(60);
  });

  it('should call onSetTimer if NO minutes are entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.minutes.value = '';
    timerForm.refs.seconds.value = '60';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(60);
  });


});
