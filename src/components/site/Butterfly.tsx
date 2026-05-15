import { motion } from "framer-motion";

export function Butterfly({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -18, 0, -10, 0],
        x: [0, 12, -8, 6, 0],
        rotate: [-4, 4, -2, 3, -4],
      }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full drop-shadow-[0_6px_20px_rgba(60,120,220,0.35)]">
        <defs>
          <linearGradient id="bf-wing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7CC4FF" />
            <stop offset="60%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
        <g>
          {/* Body */}
          <ellipse cx="32" cy="32" rx="1.4" ry="14" fill="#0B1B3F" />
          <circle cx="32" cy="18" r="2.2" fill="#0B1B3F" />
          <path d="M30.5 16 Q28 10 25 11" stroke="#0B1B3F" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M33.5 16 Q36 10 39 11" stroke="#0B1B3F" strokeWidth="1" strokeLinecap="round" fill="none" />
          {/* Left upper wing */}
          <motion.path
            d="M31 22 C 18 14, 6 18, 6 30 C 6 36, 14 38, 22 36 C 28 35, 31 30, 31 26 Z"
            fill="url(#bf-wing)"
            animate={{ scaleX: [1, 0.85, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "31px 32px" }}
          />
          {/* Right upper wing */}
          <motion.path
            d="M33 22 C 46 14, 58 18, 58 30 C 58 36, 50 38, 42 36 C 36 35, 33 30, 33 26 Z"
            fill="url(#bf-wing)"
            animate={{ scaleX: [1, 0.85, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "33px 32px" }}
          />
          {/* Left lower wing */}
          <motion.path
            d="M31 34 C 22 38, 12 42, 14 50 C 16 56, 26 52, 30 46 C 32 42, 32 38, 31 34 Z"
            fill="url(#bf-wing)"
            opacity="0.95"
            animate={{ scaleX: [1, 0.9, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "31px 36px" }}
          />
          {/* Right lower wing */}
          <motion.path
            d="M33 34 C 42 38, 52 42, 50 50 C 48 56, 38 52, 34 46 C 32 42, 32 38, 33 34 Z"
            fill="url(#bf-wing)"
            opacity="0.95"
            animate={{ scaleX: [1, 0.9, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "33px 36px" }}
          />
          {/* Wing dots */}
          <circle cx="14" cy="28" r="1.6" fill="#E0F2FF" opacity="0.85" />
          <circle cx="50" cy="28" r="1.6" fill="#E0F2FF" opacity="0.85" />
          <circle cx="20" cy="46" r="1.2" fill="#E0F2FF" opacity="0.7" />
          <circle cx="44" cy="46" r="1.2" fill="#E0F2FF" opacity="0.7" />
        </g>
      </svg>
    </motion.div>
  );
}
