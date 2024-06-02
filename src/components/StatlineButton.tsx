import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import StatlineModal from './StatlineModal';

const StatlineButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Statline</Button>
      <StatlineModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default StatlineButton;

