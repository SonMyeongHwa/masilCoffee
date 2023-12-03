import React, { Fragment, useEffect, useState } from "react";
import Container from "../../../components/ui/container/Container";
import WriteListForm from "./WriteListForm";
import Card from "../../../components/ui/card/Card";
import { getMyBoards } from "../../../api/board";
import { useSelector } from "react-redux";

function WriteList() {
  const token = useSelector((state) => state.login.token);
  const pageSize = 10;

  const [data, setData] = useState({
    data: [],
    totalpage: 0,
    trData: ["번호", "글 내용", "작성날짜"],
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    axiosFn(page, pageSize, token);
  }, [page, pageSize, token]);

  const axiosFn = async (currentPage, pageSize, token) => {
    const writeListRes = await getMyBoards(currentPage, pageSize);
    const totalPageSize = writeListRes.totalPages;
    const data = writeListRes.data;

    setData((current) => {
      return {
        ...current,
        data: data,
        totalpage: totalPageSize,
      };
    });
  };

  const getNumber = async (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Fragment>
      <Container>
        <Card NonFlex>
          <WriteListForm onInsert={getNumber} data={data} />
        </Card>
      </Container>
    </Fragment>
  );
}

export default WriteList;
