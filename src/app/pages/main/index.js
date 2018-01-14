import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mainActions from '../../redux/main/actions';
import { Spinner, ImageCard } from '../../components';

const Container = styled.div`
  background-color: #e8e8e8;
  height: 100%;
  overflow-y: auto;
  padding: 1rem 0;
`;

class MainPage extends React.Component {
  componentDidMount() {
    this.refContainer.addEventListener('scroll', this.load);
    window.addEventListener('resize', this.load);
    this.load();
  }

  componentDidUpdate() {
    this.load();
  }

  componentWillUnmount() {
    this.refContainer.removeEventListener('scroll', this.load);
    window.removeEventListener('resize', this.load);
  }

  load = () => {
    const { fetching, fetchShots, page, shots, loadThreshold } = this.props;

    if (fetching) return;
    if (!(shots && shots.length)) {
      fetchShots(page + 1);
    } else {
      const container = this.refContainer.getBoundingClientRect();
      const bottom = this.refBottom.getBoundingClientRect();
      if (bottom.bottom - container.bottom < loadThreshold) {
        fetchShots(page + 1);
      }
    }
  };

  renderImageList() {
    const { shots } = this.props;
    const images = shots.map(item => <ImageCard {...item} key={item.id} />);

    return <div>{images}</div>;
  }

  render() {
    const { shots, fetching } = this.props;
    return (
      <Container
        innerRef={ref => {
          this.refContainer = ref;
        }}
      >
        {shots.length > 0 && this.renderImageList()}
        <div
          ref={ref => {
            this.refBottom = ref;
          }}
        />
        {fetching && <Spinner />}
      </Container>
    );
  }
}

MainPage.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.shape({})),
  loadThreshold: PropTypes.number,
  fetching: PropTypes.bool.isRequired,
  fetchShots: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

MainPage.defaultProps = {
  shots: [],
  loadThreshold: 600,
};

function mapStateToProps({ main }) {
  const { errorMessage, shots, fetching, page } = main;
  return { errorMessage, shots, fetching, page };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShots: bindActionCreators(mainActions.fetchShots, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
