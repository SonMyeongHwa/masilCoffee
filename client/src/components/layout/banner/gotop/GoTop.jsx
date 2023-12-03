import React from "react";
import IncludeRedPage from "../../../../util/IncludeRedPage";

const img_data = {
  red: "/assets/images/top.png",
  white: "/assets/images/topWhite.png",
};

function GoTop(props) {
  const src = IncludeRedPage(props.location) ? img_data.white : img_data.red;
  

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  return (
    <div>
      <img
        src={src}
        onClick={handleClick}
      />
    </div>
  );
}

export default GoTop;
