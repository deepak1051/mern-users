import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleUserQuery } from '../store';

const SingleUser = () => {
  const { id } = useParams();
  const { data } = useGetSingleUserQuery(id);

  console.log(data);
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?._id}</td>
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleUser;
