import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionBar } from "./ActionsBar";
import { Finder } from "./Finder";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const sidebarMotion = {
    initial: { x: "-100%" },
    animate: { x: "10%" },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  return (
    <div className="h-full flex absolute left-0 top-0 z-40">
      <ActionBar toggle={toggle} />
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.div {...sidebarMotion} className="flex-grow w-full p-2">
            <Finder />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
