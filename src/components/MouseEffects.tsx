'use client'

import React, { useEffect, useState } from "react"
import {useMousePosition} from "../hooks/use-mouse-position"
import {motion} from "framer-motion"

function BasicMouse() {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useMousePosition();

  // Only render on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server
  if (!mounted) return null;

  return (
    <motion.div
      className="w-4 h-4 bg-blue-500 rounded-full fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    />
  )
}

export {
  BasicMouse
}
