import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./style/Post.style";
import { Container, StyledLink } from "../Recipe.style";
import { BsChat } from "react-icons/bs";
import { GoHeart, GoHeartFill } from "react-icons/go";
import ImageSlider from "./ImageSlider";
import DateFormat from "../../../util/DateFormat/DateFormat";
import RandomColor from "../../../util/RandomColor/RandomColor";
import { deleteBoard } from "../../../api/board";
import { actionRemoveBoard } from "../../../redux/action/boardAction";
import { likedBoard } from "../../../api/board";
import { HiHashtag } from "react-icons/hi2";

const PostList = ({ post, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user_id); //로그인 한 유저 아이디
  const token = useSelector((state) => state.login.token);
  const [liked, setLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const createDate = DateFormat("dateTime", post.createdAt);

  const handleLikedClick = async (event) => {
    event.stopPropagation();

    if (token) { //좋아요는 회원만 누를 수 있도록
      try {
        const likedCheck = await likedBoard(post._id);
        if (likedCheck === "create" || likedCheck === "delete") {
          setLiked((prevLiked) => !prevLiked);
          setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
        }
      } catch (error) {
        console.error("RecipeWrite.jsx - update", error);
      }
    };
  };

  //게시글 삭제
  const handleDelete = (event, boardId) => {
    event.preventDefault();
    
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      const fn = async () => {
        try {
          await deleteBoard(boardId);
          dispatch(actionRemoveBoard(boardId));
        } catch (error) {
          console.error("PostList.jsx-", error);
        }
      }
      fn();

      navigate("/Recipe")
    }
  }

  return (
    <>
      {post && (
        <Container>
          <div>
            <S.PostNickname>{post.nickname}</S.PostNickname>
            <S.PostDate>{createDate}</S.PostDate>
            {type === "view" && post.user === userId && (
              <S.EditDeleteWrap>
                <StyledLink to={"/RecipeWrite"} state={{ post: post._id }}>
                  <S.EditDelete>수정</S.EditDelete>
                </StyledLink>
                <span>│</span>
                <S.EditDelete onClick={(e) => handleDelete(e, post._id)}>
                  삭제
                </S.EditDelete>
              </S.EditDeleteWrap>
            )}
          </div>
          <S.PostPre>{post.post}</S.PostPre>
          {post.image.length > 0 && <ImageSlider images={post.image} />}
          <S.TagWrap>
            <S.TagBox>{post.category}</S.TagBox>
            {post.tags.map((tag, index) => (
              <S.TagBox
                key={index}
                style={{ background: RandomColor(), color: "black" }}
              >
                <HiHashtag />
                {tag}
              </S.TagBox>
            ))}
          </S.TagWrap>
          <S.CommentWrap>
            <S.LikedWrap onClick={handleLikedClick} liked={liked}>
              {liked ? (
                <GoHeartFill style={{ fontSize: "1.4rem" }} />
              ) : (
                <GoHeart style={{ fontSize: "1.4rem" }} />
              )}
              <S.CommentNum>{likeCount}</S.CommentNum>
            </S.LikedWrap>
            <BsChat
              style={{
                fontSize: "1.2rem",
                transform: "scaleX(-1)",
                marginRight: "1px",
              }}
            />
            <S.CommentNum>{post.commentCount}</S.CommentNum>
          </S.CommentWrap>
        </Container>
      )}
    </>
  );
};

export default PostList;
