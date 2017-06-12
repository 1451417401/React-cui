import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, Link, IndexRoute } from 'react-router';
import './assets/css/index.scss';
import * as components from './components';
console.dir(components);
import { App, Home, DatepickerTab, DialogTab, ModalTab, AccordionTab, CarouselTab, TreeTab } from './components';

render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="datepickerTab" component={DatepickerTab}/>
      <Route path="dialogTab" component={DialogTab}/>
      <Route path="modalTab" component={ModalTab}/>
      <Route path="accordionTab" component={AccordionTab}/>
      <Route path="treeTab" component={TreeTab}/>
      {/*<Route path="carouselTab" component={CarouselTab}/>*/}
      <Route path="*" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
