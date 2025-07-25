import { useState } from "react";

export function useEmailConfirmationAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertEmail, setAlertEmail] = useState<string | undefined>(undefined);

  const showConfirmation = (email?: string) => {
    setAlertEmail(email);
    setShowAlert(true);
  };

  const hideConfirmation = () => {
    setShowAlert(false);
  };

  return {
    showAlert,
    alertEmail,
    showConfirmation,
    hideConfirmation,
  };
}
