import { createContext, useState } from "react";
import Toast from "../components/Toast/Toast";
export const ToastContext = createContext();
import { v4 as uuidv4 } from "uuid";
import styles from "../components/Toast/Toast.module.scss";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type = "success") => {
    const id = uuidv4();
    setToasts((prevState) => [{ id, msg, type }, ...prevState]);
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  };

  const toastValue = {
    addToast,
  };

  return (
    <ToastContext.Provider value={toastValue}>
      <div className={`${styles.toastContainer} flex flex-col gap-1`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
}
