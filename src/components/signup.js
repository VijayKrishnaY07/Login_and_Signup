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
      const res = await axios.post(
        "https://login-and-signup-server-1.onrender.com/api/users",
        { username, email, password }
      );
      if (res.data) {
        //Handle successfull signup
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Signup for Prism</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Username : </label>
                  <input
                    type="text"
                    value={username}
                    placeholder=""
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email : </label>
                  <input
                    type="email"
                    value={email}
                    placeholder=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password : </label>
                  <input
                    type="password"
                    value={password}
                    placeholder=""
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
