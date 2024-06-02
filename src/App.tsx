import React from 'react';
import BuildDropdown from './components/BuildDropdown';
import StatlineButton from './components/StatlineButton';
import { BuildsProvider } from './contexts/BuildsContext';
import { Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <BuildsProvider>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>NBA2K24 Twitch Overlay</h1>
            <BuildDropdown />
            <StatlineButton />
          </Col>
        </Row>
      </Container>
    </BuildsProvider>
  );
};

export default App;

