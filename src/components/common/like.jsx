import React from "react";

const Like = ({ liked, onLike }) => {
  return (
    <i
      onClick={onLike}
      className={liked ? "clickable fa fa-heart" : "clickable fa fa-heart-o"}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
