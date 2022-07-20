import { Box } from "@chakra-ui/react";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "../../App.css";

type LikeItem = {
  id: string;
};

const LikeButton = ({ id }: LikeItem) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const pressLike = () => {
    setIsLiked(!isLiked);
    const likeID = isLiked ? "unlike" : "like";
    const like = async () => {
      const response = await fetch(
        `https://api-stg.jam-community.com/interact/${likeID}?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8`,
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
    <Box cursor={"pointer"} _hover={{ boxShadow: "20px 20px 20px" }}>
      <BsFillHeartFill
        onClick={pressLike}
        color={isLiked ? "#0474ff" : "#ccc"}
      />
    </Box>
  );
};

export default LikeButton;
