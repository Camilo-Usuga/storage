import FileDownload from "./FileDownload";

const ViewFiles = ({ files, setFiles }) => {
  return (
    <div>
      <h2>Archivos subidos</h2>
      <ul>
        {files.map((file) => (
          <li key={file.$id}>
            <div>
              <img src={file.$id} alt={file.$id} width={50} height={50} />
              <FileDownload bucketId={file.bucketId} fileId={file.$id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFiles;
