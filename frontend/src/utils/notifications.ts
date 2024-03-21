/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

interface NotifyOpts {
  msg: string;
  style?: any;
  type?: "success" | "error" | "loading";
}

const defaultStyles = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

export const notify = ({ msg, style, type }: NotifyOpts) => {
  const styles = style || defaultStyles;
  if (type === "success") return toast.success(msg, styles);
  if (type === "error") return toast.error(msg, styles);
  return toast(msg, styles);
};
