import React from "react";

type AudioInterface = {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
};

export const AudioItem = ({ audioRef }: AudioInterface) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div>
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
        Play
      </button>
    </div>
  );
};
