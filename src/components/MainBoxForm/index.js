import React from 'react';

const MainBoxForm = () => {
  return (
    <div>
      <form className="mt-5 mb-10 ml-10 mr-10">
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Clock In
          </label>
          <input
            className=" mb-3  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Hour"
          ></input>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Minute"
          ></input>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lunch Break In
          </label>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Hour"
          ></input>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Minute"
          ></input>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lunch Break Out
          </label>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Hour"
          ></input>
          <input
            className=" mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Minute"
          ></input>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Clock Out
          </label>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Hour"
          ></input>
          <input
            className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Minute"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default MainBoxForm;
