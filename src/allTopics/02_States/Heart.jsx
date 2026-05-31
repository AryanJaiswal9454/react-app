import { useState } from "react";

const Heart = () => {
  const [likes, setLikes] = useState(0);

  const updateLikes = () => {
    //! NOT Efficient
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    //! Efficient update
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
    setLikes((prev) => prev + 1);
  };
  return (
    <>
      <h1>Insta Like Button</h1>
      <span onClick={updateLikes}>
        🤍 <sup>{likes}</sup>
      </span>
    </>
  );
};

export default Heart;
