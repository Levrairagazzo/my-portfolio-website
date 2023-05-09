import React, { useContext } from 'react';
import { UserContext } from '../App';

const TestComponent = () => {
  const { french, setFrench } = useContext(UserContext);

  const handleToggle = () => {
    setFrench(!french);
  };

  return (
    <div>
      <h1>{french ? 'Bonjour' : 'Hello'}</h1>
      <button onClick={handleToggle}>
        {french ? 'Switch to English' : 'Switch to French'}
      </button>
    </div>
  );
};

export default TestComponent;
