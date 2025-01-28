import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class EditUser extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    status: false,
    error: null, // New state for storing error message
  };

  componentDidMount() {
    this.getPersonDetails();
  }

  // Fetch existing details based on ID with error handling
  getPersonDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user details.");
      }
      const data = await response.json();
      this.setState({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        department: data.department,
        error: null, // Clear error state if successful
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
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
    const updatedData = { id, firstName, lastName, email, department };
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to update user details.");
      }
      this.setState({ status: true, error: null }); // Clear error and set status to true
    } catch (error) {
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
        <h1 className="add-title">Edit the User's Details</h1>
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
            Update
          </button>
          {status && <p className="success">User Updated Successfully</p>}
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message if error state exists */}
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

export default EditUser;
