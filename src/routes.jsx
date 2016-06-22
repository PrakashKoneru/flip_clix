var React=require('react');
var ReactRouter= require('react-router');
var Router= ReactRouter.Router;
var Route=ReactRouter.Route;


var Main=require('./components/main');
var Topic= require('./components/topic');
var ImageDetail=require('./components/image-details');


module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic} />
            <Route path="images/:id" component={ImageDetail} />


        </Route>
    </Router>
);