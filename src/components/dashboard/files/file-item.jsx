import ShowModalButton from "../buttons/show-modal-button";
import LinkButton from "../buttons/link-button";
import EditFileModal from "./edit-file-modal";
import styles from "./file-item.module.css";
import ViewFileModal from "./view-file-modal";
import DeleteFileModal from "./delete-file-modal";

const FileItem = ({ fileData }) => {
  const editModalId = "editModal" + fileData.id;
  const viewModalId = "viewModal" + fileData.id;
  const deleteModalId = "deleteModal" + fileData.id;

  return (
    <div className={styles.fileCard}>
      <div className={styles.fileCardTitle}>
        <h3>{fileData.firstName}</h3>
      </div>
      <svg
        width="32"
        height="32"
        className={styles.cardIcon}
        viewBox="0 0 16 16"
      >
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
      </svg>
      <div className={`d-flex flex-row justify-content-stretch ${styles.fileCardAction}`}>
        <ShowModalButton title="تعديل" modalId={"#" + editModalId} />
        <ShowModalButton title="عرض" color="green" modalId={"#" + viewModalId}/>
        <LinkButton to={`/Dashboard/Prescriptions/${fileData.id}`} title="جميع الروشتات" color="yellow" />
        <LinkButton to={`/Dashboard/New-Prescription/${fileData.id}`} title="روشتة جديدة" color="blue"/>
        <ShowModalButton title="حذف" color="red"  modalId={"#" + deleteModalId}/>
      </div>
        <EditFileModal fileData={fileData} modalId={editModalId} />
        <ViewFileModal fileData={fileData} modalId={viewModalId} />
        <DeleteFileModal  fileData={fileData}  modalId={deleteModalId}/>
    </div>
  );
};
export default FileItem;
