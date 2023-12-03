import React, { useState, useEffect } from "react";
import { usePagination } from "../../../hooks/usePagination";
import * as Page from "./pagination.style";
import sliceTen from "../../../util/forPagenation/sliceTen";

const Pagination = ({ totalPage, pageSize, tdData, setSlicedData }) => {
  const [page, setPage] = useState(1);

  console.log("props", totalPage, pageSize, tdData, setSlicedData);
  const pageConst = {
    totalCount: totalPage,
    pageSize: Number(pageSize),
    siblingCount: 1,
    currentPage: page,
  };

  console.log("page111", pageConst);
  const pageArr = usePagination(pageConst);

  console.log("page", pageConst);

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
    const updatedSlicedData = sliceTen({
      currentPage: pageConst.currentPage,
      pageSize: pageConst.pageSize,
      initDataSet: tdData,
    });
    setSlicedData(updatedSlicedData);
  };

  return (
    <Pagination>
      <Page.PaginationItem href="#">&laquo;</Page.PaginationItem>
      <div>
        {pageArr.map((arr, i) => {
          return (
            <Page.PaginationItem name={arr} key={i} href="#" onClick={handleClick}>
              {arr}
            </Page.PaginationItem>
          );
        })}
      </div>
      <Page.PaginationItem href="#">&raquo;</Page.PaginationItem>
    </Pagination>
  );
};

export default Pagination;
