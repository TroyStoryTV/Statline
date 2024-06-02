import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useBuildsContext } from '../contexts/BuildsContext';

const BuildDropdown: React.FC = () => {
  const { builds, currentBuild, setCurrentBuild } = useBuildsContext();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {currentBuild ? currentBuild.name : 'Select Build'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {builds.map((build) => (
          <Dropdown.Item key={build.id} onClick={() => setCurrentBuild(build)}>
            {build.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BuildDropdown;


