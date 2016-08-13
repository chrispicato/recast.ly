class App extends React.Component { 
  constructor (props) {
    super(props);

    this.state = {
      videoId: undefined
    };
  }

  onClick (video) {
    console.log(video);
    // this.setState({
    //   videoId: 
    // });
  }

  render (video, videos) {
    this.video = video;
    video = video || exampleVideoData[0];

    this.videos = videos;
    videos = videos || exampleVideoData;

    // if (this.state.video === 'hello') {
    // }
    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={video}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onClick.bind(this, video)} videos={exampleVideoData}/>
        </div>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;