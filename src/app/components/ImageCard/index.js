import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

const LAZYLOAD_THRESHOLD = 1.75;

export const dimensions = {
  width: 200,
  height: 150,
};

const Container = styled.div`
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  cursor: pointer;
  margin: 0.5rem;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

    &:before {
      content: '';
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(153, 153, 153, 0.7);
  color: #fff;
  font-weight: 700;
  padding: 10px;

  hr {
    width: 75%;
    height: 0.2rem;
    background: #fff;
  }
`;

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseHover = () => {
    const { isHovered } = this.state;
    this.setState({ isHovered: !isHovered });
  };

  render() {
    const { title, url, img, author } = this.props;
    const { isHovered } = this.state;

    return (
      <Container
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <a href={url} target="_blank">
          <LazyLoad threshold={dimensions.height * LAZYLOAD_THRESHOLD}>
            <img src={img} alt={title} />
          </LazyLoad>
          {isHovered && (
            <TitleContainer>
              <h3>{title}</h3>
              <hr />
              <h3>{author}</h3>
            </TitleContainer>
          )}
        </a>
      </Container>
    );
  }
}

ImageCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ImageCard;
