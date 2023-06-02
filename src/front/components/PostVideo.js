import React from "react";

class PostVideo extends React.Component {
  render() {
    return (
      <div className="post-single-video">
        <iframe
          src="https://www.youtube.com/embed/Ir2AM0bUsQY"
          allowFullScreen
        />
      </div>
    );
  }
}

export default PostVideo;
