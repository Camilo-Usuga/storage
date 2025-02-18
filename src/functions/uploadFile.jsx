import { databases, storage } from "../config/conectAppwrite";
import { ID, Permission, Role } from "appwrite";

// Función para subir archivo y crear documento en 'files'
export const uploadFile = async (file, userId) => {
  try {
    // 1. Sube el archivo al Storage con permisos
    const fileResponse = await storage.createFile(
      "67ab92b800235cc5f979", // Reemplaza con tu bucket ID
      ID.unique(),
      file,
      [
        Permission.read(Role.user(userId)), // Solo el dueño puede leer
        Permission.write(Role.user(userId)), // Solo el dueño puede editar
      ]
    );

    // 2. Crea el documento en la colección 'files'
    const docResponse = await databases.createDocument(
      "67aa834b0028c389bbf5", // Reemplaza con tu database ID
      "67ae192700316314112c", // Reemplaza con tu collection ID
      ID.unique(),
      {
        fileId: fileResponse.$id,
        name: file.name,
        ownerId: userId,
        sharedWith: [],
        type: file.type,
        size: file.size,
      }
    );

    console.log("Archivo y metadatos guardados:", docResponse);
    return docResponse;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
