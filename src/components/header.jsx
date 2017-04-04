var React=require('react');
var Router= require('react-router');
var Link=Router.Link;
var Reflux= require('reflux');
var Actions=require('../actions');
var TopicStores=require('../stores/topic-stores');

module.exports= React.createClass({
    mixins :[
        Reflux.listenTo(TopicStores,'onChange')
    ],
    getInitialState : function(){
      return {
          topics : []
      }
    },
    componentWillMount : function(){
      Actions.getTopics()
    },
   render : function(){
       return <nav className="navbar navbar-default header">
           <div className="container-fluid">
               <Link to="/"  className="navbar-brand">
                   Flip Clix
               </Link>
               <ul className="nav navbar-nav navbar-right">
                   {this.renderTopics()}
               </ul>

           </div>
       </nav>
   },
    renderTopics : function(){
        return this.state.topics.slice(8,12).map(function(topic){
            return <li key={topic.id}>
                <Link activeClassName="active" to={"topics/" + topic.id} key={topic.id}>
                    <h5>{topic.name}</h5>
                </Link>
            </li>

        });


    },

    onChange : function(event,topics){
        this.setState({topics:topics});
    }

});