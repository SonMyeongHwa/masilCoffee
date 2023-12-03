import React, { Fragment, useState, useEffect } from "react";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";
import Contents from "../../../components/ui/contents/Contents";
import { getMyComment } from "../../../api/comment";
import { useSelector } from "react-redux";
import DateFormat from "../../../util/DateFormat/DateFormat";

function CommentListPage() {
  const token = useSelector((state) => state.login.token);
  const [data, setData] = useState({ data: [] });
  const dateType = "dateTime"
  const trData = ["번호", "댓글", "작성날짜"]
  const tdData = data.data.map((item, index) => {
    const date = DateFormat(dateType, item.createdAt)
    return [...[item.board, index + 1, item.comment, date]]
  })

  useEffect(() => {
    axiosFn();
  }, []);

  const axiosFn = async () => {
    const commentRes = await getMyComment();

    if(commentRes.status === 200) {
      setData(current => {
        return {
          ...current,
          data: commentRes.data.data
        }
      })
    }

 
  };

  return (
    <Fragment>
      <Container>
        <Contents>
          <Card NonFlex>
            <CommentList trData={trData} tdData={tdData} />
          </Card>
        </Contents>
      </Container>
    </Fragment>
  );
}

export default CommentListPage;
