import React from 'react';
import MainBoxForm from '../MainBoxForm';

import Result from '../Result';

const MainBox = () => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 mb-10 text-gray-700">
        <div className="px-5 py-4">
          <div className="text-center font-bold text-xl mb-2">
            HORAHORA <i className="far fa-clock" />
          </div>
          <p className=" text-center text-gray-600 text-base">
            Calculate your work hours.
          </p>
          <MainBoxForm />

          <div className="text-center ">
            <Result />
          </div>
        </div>
      </div>

      <footer className="text-center text-sm font-light text-gray-500 mb-3">
        <p>
          Build with{' '}
          <span role="img" aria-label="little heart love">
            {' '}
            ♥️{' '}
          </span>
          by <a href="https://priucodes.com">priucodes</a>{' '}
        </p>
      </footer>
    </div>
  );
};

export default MainBox;
