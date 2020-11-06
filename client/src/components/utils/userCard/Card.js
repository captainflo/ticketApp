import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ user }) => {
  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img className="card-image-img" src={user.avatar} alt="backgroung" />
      </div>
      <div className="card-wrapper-body">
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <Link to={`/user/edit/${user._id}`}>
          <button className="btn btn-website float-right">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
