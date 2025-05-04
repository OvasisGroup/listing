'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/cleaning.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-10 z-10" /> */}

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 flex items-center justify-center h-full px-4"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Our Platform
        </h1>
      </motion.div>

      {/* Bottom Right Tabs */}
      <div className="absolute bottom-6 right-6 z-30 flex flex-col items-end space-y-3">
        <motion.a
          href="tel:+1234567890"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="bg-white/90 hover:bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
        >
          <Phone size={18} /> Call Us
        </motion.a>

        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="bg-white/90 hover:bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
        >
          <Mail size={18} /> Email Us
        </motion.a>
      </div>
    </div>
  );
};

export default VideoBackground;
