import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class AddUser extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    status: false,
    error: null, // Error state to store error message
  };

  // Generic change handler
  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  // Generic render field function
  renderField = (label, id, value) => (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="username-input-filed"
        value={value}
        onChange={this.handleInputChange}
      />
    </>
  );

  // Form submission handler with error handling
  submitForm = async (event) => {
    event.preventDefault();
    const { id, firstName, lastName, email, department } = this.state;
    const userDetails = { id, firstName, lastName, email, department };
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Failed to create user. Please try again.");
      }

      // If the response is OK, set the status state to true
      this.setState({ status: true, error: null });
    } catch (error) {
      // Catch any error and set the error message in the state
      this.setState({ error: error.message, status: false });
    }
  };

  render() {
    const {
      id,
      firstName,
      lastName,
      email,
      department,
      status,
      error,
    } = this.state;

    return (
      <div className="login-form-container">
        <h1 className="add-title">Fill the form and submit to add user</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">
            {this.renderField("User ID", "id", id)}
          </div>
          <div className="input-container">
            {this.renderField("First Name", "firstName", firstName)}
          </div>
          <div className="input-container">
            {this.renderField("Last Name", "lastName", lastName)}
          </div>
          <div className="input-container">
            {this.renderField("Email", "email", email)}
          </div>
          <div className="input-container">
            {this.renderField("Department", "department", department)}
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
          {status && <p className="success">User Created Successfully</p>}
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message */}
          <Link className="nav-link" to="../users">
            <button type="button" className="button">
              Back
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddUser;
