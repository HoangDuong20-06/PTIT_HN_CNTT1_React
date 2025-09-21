import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../store/store";
import type { RootState } from "../store/store";

export default function Notification() {
  const notification = useSelector((state: RootState) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification.type) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  const getStyle = () => {
    switch (notification.type) {
      case "add":
        return "bg-green-500";
      case "update":
        return "bg-blue-500";
      case "delete":
        return "bg-red-500";
      case "error":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {notification.type && notification.message && (
          <motion.div
            key="notification"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`${getStyle()} text-white px-4 py-2 rounded-lg shadow-lg`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
