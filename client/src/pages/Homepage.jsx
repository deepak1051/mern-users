import React from 'react';
import { useDeleteUserMutation, useGetUsersQuery } from '../store';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { data } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  return (
    <div className="container">
      <Link to="/create-user" className="btn btn-primary">
        Add User
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>
                <Link className="btn btn-outline-primary" to={`/${item._id}`}>
                  View
                </Link>

                <Link
                  to={`/edit-user/${item._id}`}
                  className="btn btn-outline-success"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
