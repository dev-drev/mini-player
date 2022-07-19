import { Box, Button, Progress, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AudioInterface } from "../types/Globals";

const TrackProgress = ({ audioRef }: AudioInterface) => {
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Box w="full">
      <Progress rounded="xl" value={trackProgress} colorScheme="green">
        {trackProgress}
      </Progress>
    </Box>
  );
};

export default TrackProgress;
