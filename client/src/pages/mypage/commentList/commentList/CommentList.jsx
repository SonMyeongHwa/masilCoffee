import React, { useEffect, useState } from "react";
import { Paginamtion, PaginationItem } from "../../style/CommentList.style";
import { StyledTable } from "../../style/StyledTable";
import { CommentTitle } from "../../style/MyPage.style";

import { usePagination } from "../../../../hooks/usePagination";

import sliceTen from "../../../../util/forPagenation/sliceTen";

function CommentList({ trData, tdData }) {
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(tdData.length === 0) {
      setVisible(false)
    } else {setVisible(true)}
  }, [])

  const pageConst = {
    totalCount: tdData.length,
    pageSize: 10,
    siblingCount: 1,
    currentPage: page,
  };

  const pageSize = pageConst.pageSize;
  const currentPage = pageConst.currentPage;

  const pageArr = usePagination(pageConst);

  const slicedData = sliceTen({
    currentPage: currentPage,
    pageSize: pageSize,
    initDataSet: tdData,
  });

  const handleClick = (e, arrow) => {
    if (arrow) {
      setPage(parseInt(e, 10));
    } else {
      setPage(parseInt(e.target.name, 10));
    }
  };

  return (
    <div>
      <CommentTitle>내가 작성한 댓글</CommentTitle>
      {!visible ? <div>작성된 댓글이 없습니다</div> : <></>}
      {!visible ? <></> : <StyledTable trData={trData} tdData={slicedData} />}
      {!visible ? <></> : <Paginamtion>
        <PaginationItem href="#"  onClick={() => handleClick(1, "arrow")}>&laquo;</PaginationItem>
        <div>
          {pageArr.map((arr) => {
            return (
              <PaginationItem name={arr} href="#" onClick={handleClick}>
                {arr}
              </PaginationItem>
            );
          })}
        </div>
        <PaginationItem href="#" onClick={() => handleClick(pageArr[pageArr.length - 1], "arrow")}>&raquo;</PaginationItem>
      </Paginamtion>}
    </div>
  );
}

export default CommentList;