import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users", { username, email, password });
      if (res.data) {
        //Handle successfull signup
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome to Prism</h2>
      <div>
        <label>Username : </label>
        <input
          type="text"
          value={username}
          placeholder="Please enter your Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          placeholder="Please enter your emailID"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          placeholder="Please set a Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
