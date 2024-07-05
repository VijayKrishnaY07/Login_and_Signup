import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <button className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
export default Logout;
