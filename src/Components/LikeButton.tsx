import React from "react";

type LikeItem = {
  likes: number;
};

const LikeButton = ({ likes }: LikeItem) => {
  const [isLiked, setIsLiked] = React.useState(false);
  console.log(likes);
  return (
    <div>
      <button>Like</button>
    </div>
  );
};

export default LikeButton;
