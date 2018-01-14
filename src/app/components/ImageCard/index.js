import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';

export const dimensions = {
  width: 200,
  height: 150,
};

const LAZYLOAD_ROWS_THRESHOLD = 1.75;

const Container = styled.div`
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  margin: 0.5rem;
  position: relative;

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

  .LazyLoad {
    border-radius: inherit;
  }

  img {
    border-radius: inherit;
  }
`;

const ImageCard = ({ title, url, img }) => (
  <Container>
    <LazyLoad threshold={dimensions.height * LAZYLOAD_ROWS_THRESHOLD}>
      <a href={url} target="_blank">
        <img src={img} alt={title} />
      </a>
    </LazyLoad>
  </Container>
);

ImageCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ImageCard;
