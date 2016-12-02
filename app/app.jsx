var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route,
      Router,
      IndexRoute,
      hashHistory,
      browserHistory } = require('react-router'),

    Main = require('Main'),
    StopWatch = require('StopWatch'),
    Timer = require('Timer');


require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  // <Router history={browserHistory}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer} />
      <IndexRoute component={StopWatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);
