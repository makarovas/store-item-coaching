import React, { Component } from "react";
import States from "./States";

export default class CheckoutPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    isResidential: false,
    password: ""
  };

  handleChange = e => {
    // e.preventDefault();
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      isResidential,
      password
    } = this.state;
    const { items } = this.props;
    return (
      <div style={{ width: "60%" }}>
        <p>You are buying {items.count}</p>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Alex"
              value={firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Mak"
              value={lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                name="city"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                value={street}
                name="street"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="state">State</label>

              <select
                type="text"
                className="form-control"
                id="state"
                value={state}
                name="state"
                onChange={this.handleChange}
              >
                <States />
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
