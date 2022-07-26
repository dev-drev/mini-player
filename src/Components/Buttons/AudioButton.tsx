import React from "react";
import { Box } from "@chakra-ui/react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { AudioInterface } from "../../types/Globals";

export const AudioItem = ({ audioRef }: AudioInterface) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  console.log(audioRef);
  return (
    <Box
      cursor={"pointer"}
      color="#27ffccf5"
      display={"flex"}
      onClick={() => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }}
    >
      {isPlaying ? (
        <Box>
          {" "}
          <BsFillPauseCircleFill fontSize={"60px"} />
        </Box>
      ) : (
        <Box>
          {" "}
          <BsFillPlayCircleFill fontSize={"60px"} />
        </Box>
      )}
    </Box>
  );
};
