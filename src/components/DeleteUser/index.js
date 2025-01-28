import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class DeleteUserClass extends Component {
  state = {
    deleteStatus: false,
    error: null, // New state for error message
  };

  componentDidMount() {
    this.eraseUser();
  }

  eraseUser = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params; // Access id from props
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const options = {
      method: "DELETE",
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Failed to delete user. Please try again.");
      }

      // If the response is OK, update deleteStatus
      this.setState({ deleteStatus: true, error: null });
    } catch (error) {
      // If any error occurs, update the error state
      this.setState({ error: error.message, deleteStatus: false });
    }
  };

  render() {
    const { deleteStatus, error } = this.state;
    return (
      <div className="delete-container">
        {deleteStatus ? (
          <h1 className="success">User Deleted Successfully</h1>
        ) : error ? (
          <p className="error">{error}</p> // Display error message if there is an error
        ) : (
          <p className="error">...Deleting</p>
        )}
        <Link to="/users" className="nav-link">
          <button type="button" className="button">
            Back
          </button>
        </Link>
      </div>
    );
  }
}

export default DeleteUserClass;
