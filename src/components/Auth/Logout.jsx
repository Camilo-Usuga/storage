import { useNavigate } from "react-router-dom";
import { account } from "../../services/appwrite";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      alert("Logout successful");
      navigate("/login");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
