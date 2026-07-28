import { useState, useEffect } from "react";
import { useContext } from "react";
import { CampaignDetailsContext } from "../../../context/CampaignContext";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import styles from "./BtnReset.module.scss";
import { ToastContext } from "../../../context/ToastContext";

export default function BtnReset() {
  const { addToast } = useContext(ToastContext);
  const { handleReset } = useContext(CampaignDetailsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  useEffect(() => {
    if (!isModalOpen) return;

    // prevent body scroll when open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // ESC to close
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleConfirmAction = () => {
    handleReset();
    setIsModalOpen(false);
    addToast("Settings reset to default");
  };

  return (
    <>
      <button type="reset" onClick={handleOpenModal} className={styles.reset}>
        Reset to Default Colors
      </button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
      />
    </>
  );
}
