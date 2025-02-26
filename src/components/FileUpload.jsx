import { ID } from "appwrite";
import { storage } from "../services/appwrite";

const FileUpload = ({ file, setFile, setFiles }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const fileId = ID.unique();
      const response = await storage.createFile(
        "67ab92b800235cc5f979",
        fileId,
        file
      );
      console.log(response);
      alert("File uploaded successfully");
      setFile(null);
      const updatedFiles = await storage.listFiles();
      setFiles(updatedFiles.files);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Archivo</button>
    </div>
  );
};

export default FileUpload;
