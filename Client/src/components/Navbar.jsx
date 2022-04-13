import { useNavigate } from "react-router-dom";

export const Navbar = ({ user }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div >
      <div>Hi </div>
      <button
      onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
