"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type EmailConfirmationAlertProps = {
  show: boolean;
  onClose: () => void;
  // email?: string;
  autoHideDuration?: number;
};

export function EmailConfirmationAlert({
  show,
  onClose,
  // email,
  autoHideDuration = 5000,
}: EmailConfirmationAlertProps) {
  useEffect(() => {
    if (show && autoHideDuration) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [show, autoHideDuration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden w-80">
            <div className="p-4 flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Sent Successfully
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Thank you for your message!{" "}
                    {/* {email && `A confirmation has been sent to ${email}.`} */}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{
                        duration: autoHideDuration / 1000,
                        ease: "linear",
                      }}
                      className="h-full bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
