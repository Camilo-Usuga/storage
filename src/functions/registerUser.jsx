import { ID } from "appwrite";
import { databases } from "../config/conectAppwrite";

async function registerUser(email, password, name, setError) {
  try {
    // Registra al usuario
    const user = await databases.createDocument(
      "67aa834b0028c389bbf5",
      "67aa8383003933ab90d5",
      ID.unique(),
      { email, password, name }
    );
    console.log("Usuario registrado:", user);
  } catch (error) {
    setError(error.message);
    console.error("Error:", error);
  }
}

export { registerUser };
