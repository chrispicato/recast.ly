class App extends React.Component { 
  constructor (props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onClick () {
    this.setState({
      done: true
    });
    console.log('hello');
  }

  render (video) {
    this.video = video;
    video = video || exampleVideoData[0];

    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={video}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onClick.bind(this)} videos={exampleVideoData}/>
        </div>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;