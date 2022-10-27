import { Fragment } from "react";
import DeveloperModal from "./developer-modal";
import { createPortal } from "react-dom";

const Footer = () => {
  return createPortal(
    <Fragment>
      <footer>
        <p className="text-center m-0">
          جميع الحقوق محفوظه &copy;عيادة الدكتوره ريهام
        </p>
        <p className="text-muted text-center m-0">
          Developed by SE:
          <span
            className="text-success"
            data-bs-toggle="modal"
            data-bs-target="#developerModal"
            style={{ cursor: "pointer" }}
          >
            Amr Amin
          </span>
        </p>
        <DeveloperModal />
      </footer>
    </Fragment>,
    document.getElementById("footer-portal")
  );
};
export default Footer;
