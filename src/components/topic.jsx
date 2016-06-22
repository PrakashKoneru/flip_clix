var React=require('react');
var Reflux= require('reflux');
var ImageStores=require('../stores/image-stores');
var Actions=require('../actions');
var ImagePreview=require('./image-preview');


module.exports= React.createClass({
    mixins : [
        Reflux.listenTo(ImageStores,'onChange')
    ],
    getInitialState: function(){
        return {
            images:[]
        }
    },
    componentWillMount : function(){
        Actions.getImages(this.props.params.id);

    },
    componentWillReceiveProps : function(nextProps){
        Actions.getImages(nextProps.params.id);


    },
    render : function(){
        return <div className="image">
            {this.renderImages()}

        </div>
    },
    renderImages : function(){
      return this.state.images.slice(0,20).map(function(image){
         return <ImagePreview key={image.id} {...image} />
      });
    },
    onChange : function(event,images){
        this.setState({
            images: images
        });
    }


});