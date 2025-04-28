import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setIsVisible(true);
      
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseDown = () => setIsActive(true);
      const handleMouseUp = () => setIsActive(false);

      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', updatePosition);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        x: position.x,
        y: position.y,
        scale: isActive ? 0.8 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 200,
        mass: 0.2,
      }}
    />
  );
};

export default CustomCursor;