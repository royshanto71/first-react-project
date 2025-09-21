import { use } from "react";

const UserCard = ({ fetchUserDetails }) => {
  const users = use(fetchUserDetails);
  console.log(users);
  return <div className="container">user: {users.length}</div>;
};
export default UserCard;
