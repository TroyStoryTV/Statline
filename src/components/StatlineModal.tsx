import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useBuildsContext } from '../contexts/BuildsContext';

interface StatlineModalProps {
  show: boolean;
  handleClose: () => void;
}

const StatlineModal: React.FC<StatlineModalProps> = ({ show, handleClose }) => {
  const { builds } = useBuildsContext();
  const [selectedBuild, setSelectedBuild] = useState<number | null>(null);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Build</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {builds.map((build) => (
            <Form.Check
              key={build.id}
              type="radio"
              name="build"
              label={build.name}
              onChange={() => setSelectedBuild(build.id)}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (selectedBuild !== null) {
              const build = builds.find((b) => b.id === selectedBuild);
              if (build) {
                console.log(build.stats); // Here you can set the stats to display
              }
            }
            handleClose();
          }}
        >
          Show Stats
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StatlineModal;

