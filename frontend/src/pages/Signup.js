import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(email, password),
      headers: {
        'Content-Type': 'Application/json',
      },
    });

    const json = await response.json();
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />

      <button>Sign up</button>
    </form>
  );
};

export default Signup;
