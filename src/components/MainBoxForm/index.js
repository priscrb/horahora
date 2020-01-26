import React, { Component } from 'react';
import moment from 'moment';

export default class MainBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour01: '',
      hour02: '',
      // outLunchBreak: '00:00',
      // returnLunchBreak: '00:00',
      totalHour: '',
      totalMinute: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

    // Clean the from after submitting
    this.setState({
      hour01: '',
      hour02: '',
      // outLunchBreak: '',
      // returnLunchBreak: '',
    });
  }

  // Calculate time
  handleTime() {
    const Intime = moment(this.state.hour01, 'HH:mm:ss');
    const Outtime = moment(this.state.hour02, 'HH:mm:ss');

    // const OutHourLunch = moment(this.state.outLunchBreak, 'HH:mm:ss');
    // const InHourLunch = moment(this.state.returnLunchBreak, 'HH:mm:ss');
    // const Break = InHourLunch.diff(OutHourLunch, 'minutes');

    const Result = Outtime.diff(Intime, 'minutes');
    const Total = Result - 30; // Total time  including the lunch break
    const some = Math.round(Result / 60);
    const Minute = Total % 60;
    const Hour = some - 1;

    this.setState({
      totalHour: Hour,
      totalMinute: Minute,
    });
  }

  handleClick() {
    this.handleTime();
  }

  render() {
    return (
      <div>
        <form className="mt-5 mb-7 ml-10 mr-10" onSubmit={this.handleSubmit}>
          <div className="mb-4 ">
            <input
              className="mb-3 shadow appearance-none border focus:border-teal-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
              name="hour01"
              onChange={this.handleChange}
              value={this.state.hour01}
              placeholder="00:00"
            />

            {/* <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-400"
              type="text"
              name="outLunchBreak"
              value={this.state.outLunchBreak}
              onChange={this.handleChange}
              placeholder="Saída para o almoço (00:00)"
            />

            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-400"
              type="text"
              name="returnLunchBreak"
              value={this.state.returnLunchBreak}
              onChange={this.handleChange}
              placeholder="Retorno do almoço (00:00)"
            /> */}

            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-400"
              type="text"
              name="hour02"
              onChange={this.handleChange}
              value={this.state.hour02}
              placeholder="00:00"
            />
          </div>
          <div className="text-center ">
            <button
              type="submit"
              onClick={this.handleClick}
              className=" border-transparent bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Calcular Horas
            </button>
          </div>

          <div className="text-center mt-10">
            <div className="text-xl font-light">
              <p>Worked Hours </p>
              <small>
                ( - 30 min lunch break <span role="img">☕️</span>)
              </small>{' '}
            </div>
            <div className="text-xl mt-3 font-bold">
              <h1>
                <span>⏱ </span> {this.state.totalHour} hours &amp;{' '}
                {this.state.totalMinute} minutes
              </h1>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
