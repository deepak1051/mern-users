import React, { useEffect, useState } from 'react';
import { useGetSingleUserQuery, useUpdateUserMutation } from '../store';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleUserQuery(id);
  const [editUser, { error, isLoading }] = useUpdateUserMutation();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (data) {
      setUser({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
      });
    }
  }, [data?.name, data?.email, data?.phone, data]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUser({ ...user, _id: data._id }).unwrap();
      navigate('/');
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="John Doe..."
          value={user.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="john@gmail.com"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="1234567890"
          value={user.phone}
          onChange={handleChange}
          name="phone"
        />
      </div>

      {error && (
        <p style={{ color: 'crimson' }}>
          {error?.data?.message || error?.message}
        </p>
      )}
      <button className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};

export default UpdateUser;
