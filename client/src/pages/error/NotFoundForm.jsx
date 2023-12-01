import React from "react";
import Contents from "../../components/ui/contents/Contents";

function NotFoundForm(props) {
  const data = props.errorDescription;
  const msg = data.msg;
  const desc1 = data.description1;
  const desc2 = data.description2;
  const desc3 = data.description3;

  


  return (
    <div>
      <Contents>
        <h1>{msg}</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
      </Contents>
    </div>
  );
}

export default NotFoundForm;
