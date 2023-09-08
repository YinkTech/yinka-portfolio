import React, { useRef, useState } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { IoMusicalNote, IoMusicalNotesOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const icon = isPlaying ? <IoMusicalNote /> : <IoMusicalNotesOutline />; // Change the pause icon as needed

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <audio ref={audioRef} src="/me.mp3"></audio>

        <IconButton
          aria-label="Toggle theme"
          mx={3}
          color={useColorModeValue("purple", "orange")}
          icon={icon}
          onClick={togglePlayPause}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default MusicPlayer;
