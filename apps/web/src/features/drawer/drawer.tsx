import { useContext } from "react";
import DrawerContext from "./drawer-context";
import { motion, AnimatePresence } from "framer-motion";

type DrawerProps = {
  isActive: boolean;
};

function Drawer({ isActive }: DrawerProps) {
  const { toggle } = useContext(DrawerContext);
  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.aside
            className={`fixed w-80 top-0 bottom-0 bg-zinc-100 dark:bg-zinc-800 rounded-r-2xl z-30`}
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'tween', duration: .1 }}
          ></motion.aside>
          <motion.div
            className={`fixed top-0 left-0 w-full h-full bg-black/30 z-20`}
            onClick={() => toggle()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: .1 }}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
