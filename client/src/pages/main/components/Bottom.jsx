import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import * as S from "../components/style/Bottom.style";
import { BsChat } from "react-icons/bs";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { getAllBoards } from "../../../api/board";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllBoards } from "../../../redux/action/boardAction";
import RandomColor from "../../../util/RandomColor/RandomColor";
import { HiHashtag } from "react-icons/hi2";

const Bottom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Redux 스토어에서 게시글 데이터 가져오기
  const token = useSelector((state) => state.login.token);
  const allBoards = useSelector((state) => state.board);

  useEffect(() => {
    // dispatch(actionGetAllBoards(boards)); // 데이터 로드
    // console.log("올보더스", allBoards);
    const fn = async () => {
      try {
        const board = await getAllBoards("", 1, 10, "", token);

        //console.log("보드", board);
        dispatch(actionGetAllBoards(board.data));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, [dispatch]);

  // const handleBoardClick = (boardId) => {
  //   navigate(`/RecipeView/${boardId}`); // 게시글 상세 페이지로 이동
  // };

  const handleBoardClick = (boardId) => {
    // event.preventDefault();

    const fn = async () => {
      try {
        navigate(`/RecipeView/${boardId}`);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  };

  const settings = {
    infinite: true,
    speed: 15000, // 슬라이드 전환 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 0, // 자동 슬라이드 간격
    cssEase: "linear", // 일정한 속도로 움직이도록 설정
  };

  const fixedBackgroundColor = "#6d3535 ";
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 100%, 80%)`;
    setBackgroundColor(pastel);
  }, []);

  return (
    <S.BottomSlide>
      <Slider {...settings}>
        {Array.isArray(allBoards.boards) &&
          allBoards.boards.map((board, index) => {
            // console.log("Board ID:", board._id);
            const isOdd = index % 2 === 0;
            const boxBgColor = isOdd ? "#9f9f9f" : fixedBackgroundColor; // 홀수이면 그레이, 아니면 기존 색상

            return (
              <S.Bottom key={board._id} onClick={() => handleBoardClick(board._id)}>
                <S.BottomBox $bgColor={boxBgColor} isEven={isOdd}>
                  <div>
                    <b>{board.nickname}</b>
                    <S.Post>{board.post}</S.Post>
                  </div>
                  <S.TagWrap>
                    <S.TagBox>{board.category}</S.TagBox>
                    {board.tags.length > 0 ? (
                      (() => {
                        let iterations = Math.min(board.tags.length, 2); // 최대 2개의 태그만 처리

                        let buttons = [];
                        for (let i = 0; i < iterations; i++) {
                          buttons.push(
                            <S.TagBox
                              key={i}
                              style={{
                                background: RandomColor(),
                                color: "black",
                              }}
                            >
                              <HiHashtag />
                              {board.tags[i]}
                            </S.TagBox>
                          );
                        }

                        return buttons;
                      })()
                    ) : (
                      <></> // 태그가 없는 경우 아무것도 표시하지 않음
                    )}
                  </S.TagWrap>
                  <S.CommentWrap>
                    <S.LikedWrap>
                      {board.isLiked ? <GoHeartFill style={{ fontSize: "1.4rem" }} /> : <GoHeart style={{ fontSize: "1.4rem" }} />}
                      <S.CommentNum>{board.likeCount}</S.CommentNum>
                    </S.LikedWrap>
                    <BsChat
                      style={{
                        fontSize: "1.2rem",
                        transform: "scaleX(-1)",
                        marginRight: "1px",
                      }}
                    />
                    <S.CommentNum>{board.commentCount}</S.CommentNum>
                  </S.CommentWrap>
                </S.BottomBox>
              </S.Bottom>
            );
          })}
      </Slider>
    </S.BottomSlide>
  );
};

export default Bottom;
