import React, { useState } from 'react';
import { useCreateUserMutation } from '../store';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [createUser, { error, isLoading }] = useCreateUserMutation();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user).unwrap();
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
        {isLoading ? 'Submiting...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreateUser;
