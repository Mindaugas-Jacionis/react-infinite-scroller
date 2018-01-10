import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  color: grey;
`;

const Spinner = () => (
  <Container>
    <Icon className="fa-spinner fa-spin" />
  </Container>
);

export default Spinner;
