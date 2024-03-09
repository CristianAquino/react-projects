import { toast } from "react-hot-toast";

const notifySuccess = (msg: string) =>
  toast.success(msg, {
    id: "success",
    position: "bottom-right",
    style: {
      background: "green",
      color: "#fff",
    },
  });
const notifyError = (msg: string) =>
  toast.error(msg, {
    id: "error",
    position: "bottom-right",
    style: {
      background: "red",
      color: "#fff",
    },
  });

export { notifyError, notifySuccess };
