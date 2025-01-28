import { Link } from "react-router-dom";
import "./index.css";
// UserCard component can be used to display the all users from the list
const UserCard = (props) => {
  const { eachUser } = props;
  const { id, firstName, lastName, email, department } = eachUser;

  return (
    <div className="each-user-card-container">
      <h1 className="user-name">{`Name: ${firstName} ${lastName}`}</h1>
      <p className="user-email">{`Email: ${email}`}</p>
      <p className="user-department">{`Department: ${department}`}</p>
      <ul className="nav-menu">
        <Link to={`/delete/${id}`} className="nav-link">
          <button type="button" className="button-delete">
            Delete
          </button>
        </Link>
        <Link to={`/edit/${id}`} className="nav-link">
          <button type="button" className="button-delete">
            Edit
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default UserCard;
