import React from "react";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import backgroundColor from "../../../../util/BackgoundColor";
import { ControllUp } from "../Banner.style";

function GoTop(props) {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{
      opacity: scrollPosition === 0 ? "0" : "1",
      transition: "opacity 0.3s",
    }}>
      <ControllUp onClick={handleClick} location={props.location}/>
    </div>
  );
}

export default GoTop;
