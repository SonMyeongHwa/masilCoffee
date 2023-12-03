import React, { useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";

const pagenation = ({ tdData, size, fc }) => {
  const [page, setPage] = useState(1);

  const pageConst = {
    totalCount: tdData.length,
    pageSize: { size },
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

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };

  return (
    <Pagination>
      <PaginationItem href="#">&laquo;</PaginationItem>
      <div>
        {pageArr.map((arr) => {
          return (
            <PaginationItem name={arr} href="#" onClick={handleClick}>
              {arr}
            </PaginationItem>
          );
        })}
      </div>
      <PaginationItem href="#">&raquo;</PaginationItem>
    </Pagination>
  );
};

export default pagenation;
