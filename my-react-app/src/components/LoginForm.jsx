import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoginForm() {
  // State for input values
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState(''); // State for submission message

  const {currentUser, handleUpdateUser} = useUserContext();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validation logic
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long.');
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address.');
    } else {
      setSubmitResult('Successful login.');
      handleUpdateUser({ name: userName, email: userEmail });
    }
  };


if (currentUser.email) {
    <>
        <p>Welcome {currentUser.name | "Guest"}!</p>
        <p>Your email: {currentUser.email}</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
    
    </>




}
  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
      <div className="formRow">
          <label>
            Name:
            <input
              type="text"
              value={userName}
              name="userName"
              onChange={(e) => setUserName(e.target.value)} // Controlled input
              required
            />
          </label>
        </div>
        <div className="formRow">
          <label>Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} // Controlled input
            />
          </label>
        </div>
        <div className="formRow">
          <label>Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)} // Controlled input
            />
          </label>
        </div>
        <button type="submit">Log In</button>
        {/* Submission result */}
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
