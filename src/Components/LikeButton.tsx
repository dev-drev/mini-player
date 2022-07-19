import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
type LikeItem = {
  id: string;
  likes: number;
};

const LikeButton = ({ likes, id }: LikeItem) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(likes);

  console.log(likes);
  console.log(id);
  const pressLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(likesCount + 1);
    const like = async () => {
      const response = await fetch(
        `https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `id=${id}`,
        }
      );
      const data = await response.json();
      console.log(data);
    };
    like();
  };
  return (
    <div>
      <button onClick={pressLike}>Like</button>

      <BsFillHeartFill className={isLiked ? "liked" : ""} />
    </div>
  );
};

export default LikeButton;
