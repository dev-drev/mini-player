import { Box, Button, Flex, Progress, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import "../App.css";
import { AudioInterface } from "../types/Globals";

const TrackProgress = ({ audioRef }: AudioInterface) => {
  const [trackProgress, setTrackProgress] = useState(0);

  const onScrub = (value: string) => {
    audioRef.current.currentTime = parseFloat(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Flex w="full" alignItems="center" justify-content={"start"}>
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        className="progress"
        onChange={(e) => onScrub(e.target.value)}
      />
    </Flex>
  );
};

export default TrackProgress;
