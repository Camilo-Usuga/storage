import { storage } from "../services/appwrite";

const FileDownload = ({ bucketId, fileId }) => {
  const downloadFile = async () => {
    try {
      const response = storage.getFileDownload(bucketId, fileId);
      window.open(response, "_blank");
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <button onClick={downloadFile}>Download</button>
    </div>
  );
};

export default FileDownload;
