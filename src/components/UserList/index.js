import { Component } from "react";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import UserCard from "../UserCard";
import "./index.css";

class UserList extends Component {
  state = {
    userList: [],
    isLoading: true,
    error: null, // Add error state
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users" // This url will fetch an array of users
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data"); // Handle network error
      }
      const data = await response.json();
      const updatedData = data.map((each) => ({
        id: each.id,
        firstName: each.first_name,
        lastName: each.last_name,
        email: each.email,
        department: each.department,
      }));
      this.setState({
        userList: updatedData,
        isLoading: false,
        error: null, // Reset error state on successful fetch
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error: "Something went wrong. Please try again later.", // Display error message
      });
    }
  };

  render() {
    const { userList, isLoading, error } = this.state;
    return (
      <div className="user-list-container">
        <div className="container-top">
          <h1 className="user-list">Users List</h1>
          <Link to="/addUser" className="nav-link">
            <button type="button" className="button">
              Add User
            </button>
          </Link>
        </div>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message if there's an error */}
        <ul className="users-container">
          {isLoading ? (
            <Oval
              height={80}
              width={80}
              color="blue"
              ariaLabel="oval-loading"
              visible={true}
            />
          ) : (
            userList.map((eachUser) => (
              <UserCard eachUser={eachUser} key={eachUser.id} />
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default UserList;
