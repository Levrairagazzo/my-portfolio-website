import React, { useContext } from 'react';
import { UserContext } from '../App';

const ToggleLanguage = () => {
  const { french, setFrench } = useContext(UserContext);

  const handleToggle = () => {
    setFrench(!french);
  };

  return (
    <div className="flex items-center">
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={french}
          onChange={handleToggle}
        />
        <div className="block bg-teal-600 w-12 h-6 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-5 h-4 rounded-full transition ${
            french ? 'transform translate-x-full bg-teal-500' : ''
          }`}
        ></div>
      </div>
      <div className="ml-3 text-teal-600 font-medium">{french && <>Français</>}{!french && <>English</>}</div>
    </label>
  </div>
  );
};

export default ToggleLanguage;
