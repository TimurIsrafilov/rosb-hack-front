import ReactDOM from "react-dom";

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
      <div className={styles.modal_container}>{children}</div>
    </section>,
    portal
  );
}

export default Modal;
