import React from 'react';
import MainBoxForm from '../MainBoxForm';
import CalculateButton from '../CalculateButton';
import Result from '../Result';

const MainBox = () => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-5 py-4">
          <div className="text-center font-bold text-xl mb-2">
            HORAHORA <i class="far fa-clock"></i>
          </div>
          <p className=" text-center text-gray-700 text-base">
            Calculate your work hours.
          </p>
          <MainBoxForm />

          <div className="text-center ">
            <CalculateButton />
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
