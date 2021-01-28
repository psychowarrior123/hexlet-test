import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      showResult: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { target } = e;
    const {
      name,
      type,
      value,
      checked,
    } = target;
    const eValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: eValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { showResult } = this.state;
    this.setState({ showResult: !showResult })
  };

  renderTable() {
    const keys = Object.keys(this.state);
    keys.splice(keys.indexOf('showResult'), 1)
    const sortKeys = keys.sort();
    const tags = sortKeys.map((key) => (
      <React.Fragment>
        <tr>
          <td>{key}</td>
          <td>{typeof this.state[key] === 'boolean' ? this.state[key].toString() : this.state[key]}</td>
        </tr>
      </React.Fragment>
    ))
    return (
      <div>
        <button type="button" onClick={this.handleSubmit}>Back</button>
        <table className="table">
          <tbody>
            {tags}
          </tbody>
        </table>
      </div>
    );
  }

  renderComponent() {
    const {
      email,
      password,
      address,
      city,
      country,
      acceptRules,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea
            type="text"
            className="form-control"
            name="address"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="inputCity"
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select
              id="inputCountry"
              name="country"
              className="form-control"
              value={country}
              onChange={this.handleChange}
            >
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={acceptRules}
                onChange={this.handleChange}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }

  render() {
    const { showResult } = this.state;
    return showResult ? this.renderTable() : this.renderComponent();
  }
}
