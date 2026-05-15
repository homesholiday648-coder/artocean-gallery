import { motion } from "framer-motion";

export function Bow({ className = "", size = 72 }: { className?: string; size?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: [-4, 4, -4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-[0_8px_18px_rgba(20,40,90,0.45)]">
        <defs>
          <linearGradient id="bow-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3D5A99" />
            <stop offset="55%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0B1B3F" />
          </linearGradient>
          <linearGradient id="bow-hi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7CC4FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Tails */}
        <path d="M44 40 C 38 56, 30 66, 22 76 L 30 78 C 38 68, 44 58, 48 46 Z" fill="url(#bow-grad)" />
        <path d="M52 40 C 58 56, 66 66, 74 76 L 66 78 C 58 68, 52 58, 48 46 Z" fill="url(#bow-grad)" />
        {/* Left loop */}
        <path d="M48 40 C 30 18, 6 22, 8 38 C 10 52, 30 54, 48 42 Z" fill="url(#bow-grad)" />
        <path d="M48 40 C 32 22, 14 26, 14 36" stroke="url(#bow-hi)" strokeWidth="2" fill="none" />
        {/* Right loop */}
        <path d="M48 40 C 66 18, 90 22, 88 38 C 86 52, 66 54, 48 42 Z" fill="url(#bow-grad)" />
        <path d="M48 40 C 64 22, 82 26, 82 36" stroke="url(#bow-hi)" strokeWidth="2" fill="none" />
        {/* Knot */}
        <rect x="42" y="32" width="12" height="16" rx="3" fill="#0B1B3F" />
        <rect x="42" y="32" width="12" height="4" fill="#3D5A99" opacity="0.7" />
      </svg>
    </motion.div>
  );
}
