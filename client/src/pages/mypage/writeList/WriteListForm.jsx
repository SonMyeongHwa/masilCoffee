import React, { Fragment, useEffect, useState } from "react";
import { Paginamtion, PaginationItem } from "../style/CommentList.style";
import { StyledTable } from "../style/StyledTable";
import { CommentTitle } from "../style/MyPage.style";
import DateFormat from "../../../util/DateFormat/DateFormat";




function WriteListForm({onInsert, data}) {
  const [page, setPage] = useState(1);
  const dateType = "dateTime"
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(data.data.length === 0) {
      setVisible(false)
    } else {setVisible(true)}
  }, [data])

  console.log(data.data.length)
  
  const numbers = Array.from({length: data.totalpage || 0}, (_, index) => index + 1);
  
  const dataSet = data.data.map((data, index)=> {
    const date = DateFormat(dateType, data.createdAt)
    console.log(typeof data.createdAt)
    return [...[data._id, index + 1, data.post, date]]
  })


  const handleClick = (e, arrow) => {
    if (arrow) {
      setPage(parseInt(e, 10));
    } else {
      setPage(parseInt(e.target.name, 10));
    }
  };



  useEffect(() => {
    onInsert(page)
  }, [page]);

  
  return (
    <Fragment>
      <CommentTitle>내가 작성한 글</CommentTitle>
      {!visible ? <div>작성된 글이 없습니다</div> : <></>}
      {!visible ? <></> : <StyledTable trData={data.trData} tdData={dataSet} />}
      {!visible ? <></> : <Paginamtion>
        <PaginationItem href="#" onClick={() => handleClick(1, "arrow")}>&laquo;</PaginationItem>
        <div>
          {numbers.map(number => {
            return (
              <PaginationItem name={number} href="#" onClick={handleClick}>
                {number}
              </PaginationItem>
            )
          })}
            
        </div>
        <PaginationItem href="#" onClick={() => handleClick(numbers[numbers.length - 1], "arrow")}>&raquo;</PaginationItem>
      </Paginamtion>}
    </Fragment>
  );
}

export default WriteListForm;
