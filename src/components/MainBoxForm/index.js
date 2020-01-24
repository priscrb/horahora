import React from 'react';

const MainBoxForm = () => {
  return (
    <div>
      <form className="mt-5 mb-7 ml-10 mr-10">
        <div className="mb-4 ">
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00 : 00"
          />

          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00 : 00"
          />

          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00 : 00"
          />
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="00 : 00"
          />
        </div>
      </form>
    </div>
  );
};

export default MainBoxForm;
