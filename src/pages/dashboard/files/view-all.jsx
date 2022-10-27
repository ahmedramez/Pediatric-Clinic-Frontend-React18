import FileItem from "../../../components/dashboard/files/file-item";
const ViewAllFiles = () => {
  return (
    <div className="col-8">
      <FileItem fileData={{ id: "JGFDKU", firstName: "أنس عمرو المغربى" }} />
      <FileItem fileData={{ id: "SFFS", firstName: "ريهام عمرو" }} />
    </div>
  );
};
export default ViewAllFiles;
