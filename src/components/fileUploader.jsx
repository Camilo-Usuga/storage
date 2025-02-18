// Componente FileUploader.jsx
import { useState } from "react";
import { uploadFile } from "../functions/uploadFile"; // Servicio que usa el código anterior
import { useAuth } from "../context/AuthContext"; // Suponiendo un contexto de autenticación

export const FileUploader = () => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;

    setIsUploading(true);
    try {
      await uploadFile(file, user.$id);
      alert("Archivo subido exitosamente");
    } catch (error) {
      alert("Error al subir el archivo");
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} disabled={isUploading} />
      {isUploading && <p>Subiendo archivo...</p>}
    </div>
  );
};
