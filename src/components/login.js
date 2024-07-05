import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(
        "https://login-and-signup-server-qtg2.onrender.com/api/login",
        { email, password }
      );
      if (res.data) {
        //Save token to localstorage
        localStorage.setItem("token", res.data.token);
        //Handle successfull Login
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-center"></div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login to Prism</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Email : </label>
                <input
                  type="email"
                  className="form-control"
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
