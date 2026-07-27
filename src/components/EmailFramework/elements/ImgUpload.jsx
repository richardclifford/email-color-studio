import { useRef, useState } from "react";
import styles from "../EmailFramework.module.scss";

export default function ImgUpload() {
  const [imgUpload, setImgUpload] = useState(null);
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setImgUpload(previewUrl);
    }
  };

  const handleImageRemove = () => {
    setImgUpload(null);
  };

  return (
    <>
      {imgUpload ? (
        <div className={styles.imgContainer}>
          <img src={imgUpload} alt="Preview" />
          <div className={styles.imgOverlay}>
            <button
              onClick={handleImageRemove}
              aria-label="Remove image"
              className={styles.btnClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className={styles.iconRemove}
              >
                <path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleBoxClick} aria-label="Upload image">
          <div
            className={`${styles.imgPlaceholder} flex align-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              className={styles.iconUpload}
            >
              <path d="M13 46C12.2 46 11.5 45.7 10.9 45.1C10.3 44.5 10 43.8 10 43V13C10 12.2 10.3 11.5 10.9 10.9C11.5 10.3 12.2 10 13 10H31.25V13H13V43H43V24.75H46V43C46 43.8 45.7 44.5 45.1 45.1C44.5 45.7 43.8 46 43 46H13ZM16 37.9H40L32.8 28.3L26.45 36.65L21.75 30.45L16 37.9ZM38.65 21.75V17.4H34.25V14.4H38.65V10H41.65V14.4H46V17.4H41.65V21.75H38.65Z" />
            </svg>
          </div>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: "none" }}
      />
    </>
  );
}
