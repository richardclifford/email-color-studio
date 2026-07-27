import styles from "./ConfirmationModal.module.scss";

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={styles.confirmationModal}
      className={`${styles.modal} flex justify-center align-center`}
    >
      <dialog
        aria-modal="true"
        className={`${styles.modalInner} ${isOpen ? styles.open : styles.closed} flex flex-col gap-1`}
      >
        <h3>Confirm</h3>
        <p>Are you sure you want to reset all styles?</p>
        <hr />
        <div className={`${styles.modalActions} flex gap-2`}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm} className={styles.btnYes}>
            Yes
          </button>
        </div>
      </dialog>
    </div>
  );
}
