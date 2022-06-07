import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: window.innerWidth,
    hight: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.onPesize);

    this.setDimensions(
      this.state.width,
      this.state.hight
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onPesize);
  }

  onPesize = (event) => {
    this.setDimensions(
      event.target.innerWidth,
      event.target.innerHeight
    )
  }

  setDimensions = (width, height) => {
    this.setState({
      width,
      height
    });

    document.title = `${width} x ${height}`;
  }

  render() {
    return (
      <div>
        {`${this.state.width}px - ${this.state.hight}px`}
      </div>
    );
  }
};

export default Dimensions;