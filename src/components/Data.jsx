import { useEffect, useState } from "react";
import FileUpload from "./FileUpload";
import ViewFiles from "./ViewFiles";
import { storage } from "../services/appwrite";

const Data = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const response = await storage.listFiles("67ab92b800235cc5f979");
        setFiles(response.files);
        console.log(file);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    loadFiles();
  }, []);

  return (
    <div>
      <h1>Archivos</h1>
      <div>
        <FileUpload file={file} setFile={setFile} setFiles={setFiles} />
      </div>
      <div>
        <ViewFiles files={files} setFiles={setFiles} />
      </div>
    </div>
  );
};

export default Data;
