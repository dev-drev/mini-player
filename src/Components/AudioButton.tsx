import { Box } from "@chakra-ui/react";
import React from "react";

type AudioInterface = {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
};

export const AudioItem = ({ audioRef }: AudioInterface) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <Box w="full">
      {" "}
      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
        }}
      >
        'p'
      </button>
    </Box>
  );
};
