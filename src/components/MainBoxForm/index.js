import React, { Component } from 'react';
import CalculateButton from '../CalculateButton';

export default class MainBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour01: '',
      hour02: '',
      hour03: '',
      hour04: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function handlers
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    // Don't forget to prevent default when we submit
    evt.preventDefault();
    alert(
      `Hello my name is ${this.state.hour01} and my username is ${this.state.hour02}`
    );

    // Clean the from after submitting
    this.setState({
      hour01: '',
      hour02: '',
      hour03: '',
      hour04: '',
    });
  }

  render() {
    return (
      <div>
        <form className="mt-5 mb-7 ml-10 mr-10" onSubmit={this.handleSubmit}>
          <div className="mb-4 ">
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="hour01"
              onChange={this.handleChange}
              value={this.state.hour01}
              placeholder="00 : 00"
            />

            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="hour02"
              onChange={this.handleChange}
              value={this.state.hour02}
              placeholder="00 : 00"
            />

            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="hour03"
              onChange={this.handleChange}
              value={this.state.hour03}
              placeholder="00 : 00"
            />
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="hour04"
              onChange={this.handleChange}
              value={this.state.hour04}
              placeholder="00 : 00"
            />
          </div>
          <div className="text-center ">
            <CalculateButton />
          </div>
        </form>
      </div>
    );
  }
}
