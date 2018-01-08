import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from '../../redux/main/actions';

const MainPage = () => (
  <div className="App">
    <p>Here will be some shots</p>
  </div>
);

function mapStateToProps({ main }) {
  const { errorMessage, shots, isFetching } = main;
  return { errorMessage, shots, isFetching };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(mainActions.fetchShots, dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
