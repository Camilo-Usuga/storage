import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases, account } from "../../services/appwrite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      console.log(response);
      /*
      const response = await databases.listDocuments(
        "67aa834b0028c389bbf5", // Reemplaza con tu ID de base de datos
        "67aa8383003933ab90d5", // Reemplaza con tu ID de colección
        [`email=${email}`]
      );
      
      if (response.documents.length === 0) {
        throw new Error("User not found");
      }
      
      const user = response.documents[0];
      if (user.password !== password) {
        throw new Error("Invalid credentials");
      }
      */

      alert("Login successful");
      navigate("/data");
      // Aquí puedes manejar la redirección o el almacenamiento de la sesión
    } catch (error) {
      alert("Login failed: " + error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
