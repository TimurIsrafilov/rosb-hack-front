import { useEffect } from "react";

import styles from "./modal-overlay.module.css";

type TypeModalOverlayProps = {
  handleOnClose?: () => void;
};

function ModalOverlay({
  handleOnClose,
}: TypeModalOverlayProps): React.JSX.Element {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (handleOnClose) handleOnClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className={styles.modal_overlay} onClick={handleOnClose}></section>
  );
}

export default ModalOverlay;
