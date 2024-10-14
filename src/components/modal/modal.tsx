import ReactDOM from "react-dom";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from "./modal.module.css";

const portal = document.getElementById("portal") as HTMLElement;

type TypeModalProps = {
  children: React.ReactNode;
  handleOnClose?: () => void;
  isLoading?: boolean;
};

function Modal({
  children,
  handleOnClose,
  isLoading,
}: TypeModalProps): React.JSX.Element {
  return ReactDOM.createPortal(
    <section className={styles.modal}>
      <ModalOverlay handleOnClose={handleOnClose} />
      <div className={styles.modal_container}>
        {!isLoading && (
          <div
            className={`${styles.modal_close_icon} mt-15 mr-10`}
            data-testid="close_button"
          >
            <CloseIcon type="primary" onClick={handleOnClose} />
          </div>
        )}
        {children}
      </div>
    </section>,
    portal
  );
}

export default Modal;
