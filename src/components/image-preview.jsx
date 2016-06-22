var React= require('react');
var Router= require('react-router');
var Link=Router.Link;

module.exports= React.createClass({
    getInitialState : function(){
      return {
          hovering: false
      }
    },
    render: function () {
        return <Link to ={"images/" + this.props.id}
            className="Image-Preview"
             onMouseEnter={this.handleMouseEnter}
             onMouseLeave={this.handleMouseLeave}>
            {this.props.animated && this.state.hovering ? this.video() : this.image()}
            {this.props.animated && !this.state.hovering ? this.icon() : null}
            {this.state.hovering ? this.inset() : null}
        </Link>

    },
    image: function () {
        var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
        return <img src={link} className="image"/>
    },
    video : function(){
      return <div>
          <video preload="auto" loop="loop" autoPlay="autoplay" webkit-playsinline>
              <source src={this.props.mp4} type="video/mp4"/>
          </video>
      </div>
    },
    handleMouseEnter : function(){
        this.setState({
           hovering : true
        });
    },
    handleMouseLeave : function(){
        this.setState({
            hovering : false
        });
    },
    icon : function(){
        return <span className="glyphicon glyphicon-play"></span>
    },
    inset : function (){
        return <div className="inset">
            views : {this.props.views}
            <br />
            upvotes : {this.props.ups}
        </div>
    }
});

