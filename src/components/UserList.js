import React from "react";

function UserList(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.user_id}</td>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td>
      </tr>
    </React.Fragment>
  );
}
export default UserList;
