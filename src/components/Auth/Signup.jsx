import { useState } from "react";
import { databases, account } from "../../services/appwrite";
import { ID } from "appwrite";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      /*
      await databases.createDocument(
        "67aa834b0028c389bbf5",
        "67aa8383003933ab90d5",
        "unique()",
        { email, password, name }
      );
      */
      const response = await account.create(ID.unique(), email, password, name);
      console.log(response);
      alert("Signup successful");
    } catch (error) {
      alert("Signup failed");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
