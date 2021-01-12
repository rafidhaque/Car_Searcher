import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    this.height = this.imageRef.current.clientHeight;

    this.spans = Math.ceil(this.height / 10 + 1);

    this.setState({ spans: this.spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={this.props.desc} src={this.props.urls} />
      </div>
    );
  }
}

export default ImageCard;
