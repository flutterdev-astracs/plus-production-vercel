// App.js or your main component file
"use client";

import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

interface OffCanvasMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { id: 1, name: "Studio", path: "/studio" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Events", path: "/events" },
];
export default function OffCanvasMenu({
  isOpen,
  setIsOpen,
}: OffCanvasMenuProps) {

 
  // Framer Motion variants for the menu animation
  const menuVariants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  // Variants for list items to animate one by one with a blur effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {/* Full-Screen Off-Canvas Menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black/55 backdrop-blur-xl text-white flex flex-col items-center justify-center z-50 overflow-hidden"
        initial={{ y: "-100%" }}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <MdOutlineClose
          className="text-5xl absolute top-4 right-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <motion.ul
          className="space-y-16 font-bold text-4xl md:text-6xl"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="hover:underline text-center hover:text-[#DBA691]"
            >
              <Link href={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
