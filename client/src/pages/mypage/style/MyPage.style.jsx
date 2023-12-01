import styled from "styled-components";
import { media } from "../../../util/mediaQ/media";
import { back_ground_color } from "../../../type/color_type";

export const UserTitle = styled.h1`
  text-align: center;
  font-size: 30px;

  padding-top: 80px;

  & > p {
    font-size: 10px;
  }
`;

export const CommentTitle = styled.h1`
  text-align: left;
  font-size: 30px;

  padding-top: 80px;

  border-bottom: 1px solid #650818;

  width: 100%;
`;

export const UserLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 335px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin: 13px;

  border: solid 5px ${back_ground_color.main_color};
  border-radius: 63px 0px 0px 0px;

  transition: all 200ms ease-in-out 0ms;

  &:hover {
    border-radius: 63px 63px 63px 63px;
  }

  ${media.medium`
  border-radius: 63px 0px 0px 63px;
  width: 100%;
  height: 90%;
  
  `}
  ${media.mini`
  border-radius: 63px 0px 0px 63px;
  width: 100%;
  height: 90%;
  font-size: 16px;
  text-align: center;
  `}
`;

export const OrderLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 345px;
  align-items: center;
  justify-content: center;

  margin: 13px;

  background: ${back_ground_color.main_color};

  color: #f5f5f5;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: all 200ms ease-in-out 0ms;
  cursor: pointer;

  &:hover {
    color: #191414;
    border-radius: 63px 63px 63px 63px;
  }

  ${media.medium`
  border-radius: 0px 0px 0px 0px;
  width: 90%;
  height: 45%;
  margin-bottom : 6.5px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;

  `}
  ${media.mini`
  border-radius: 0px 0px 0px 0px;
  width: 90%;
  height: 45%;
  margin-bottom : 6.5px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  
  `}
`;

export const CommentLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 345px;
  align-items: center;
  justify-content: center;

  margin: 13px;

  background: ${back_ground_color.main_color};

  color: #f5f5f5;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  transition: all 200ms ease-in-out 0ms;
  cursor: pointer;

  &:hover {
    color: #191414;
    border-radius: 63px 63px 63px 63px;
  }

  ${media.medium`
  border-radius: 0px 0px 0px 0px;
  width: 90%;
  height: 45%;
  margin-top : 6.5px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  `}
  ${media.mini`
  border-radius: 0px 0px 0px 0px;
  width: 90%;
  height: 45%;
  margin-top : 6.5px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  
  `}
`;

export const WriteLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 345px;
  align-items: center;
  justify-content: center;

  margin: 13px;

  border-radius: 0px 0px 63px 0px;
  background: #878585;

  color: #f5f5f5;
  cursor: pointer;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: all 200ms ease-in-out 0ms;

  &:hover {
    border-radius: 63px 63px 63px 63px;
    color: #191414;
  }

  ${media.medium`
  border-radius: 0px 40px 40px 0px;
  width: 90%;
  height: 92%;
  font-size: 25px;
  `}
  ${media.mini`
  border-radius: 0px 40px 40px 0px;
  width: 90%;
  height: 92%;
  font-size: 20px;
  
  `}
`;

export const LinkUserInfo = styled.button`
  width: 120px;
  height: 42px;
  flex-shrink: 0;

  border-radius: 25px;
  border: 1px solid #878585;

  background: #f5f5f5;

  color: #878585;

  cursor: pointer;

  transition: all 200ms ease-in-out 0ms;

  &:hover {
    color: #d9d9d9;
    border-color: #d9d9d9;
  }

  ${media.medium`
  border-radius: 63px 63px 63px 63px;
  
  `}
  ${media.mini`
  border-radius: 63px 63px 63px 63px;
  
  `}
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding-top: 74px;
`;

export const MyPageFirstContents = styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
  width: auto;
  margin: 12px;
  flex: 1 1 auto;
flex-direction: row;
justify-content: center;

  `}
  ${media.mini`
  width: auto;
  margin: 12px;
  flex: 1 1 auto;
flex-direction: row;
justify-content: center;
  `}
`;

export const MyPageMiddleContents = styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
  margin: 12px;

`}
  ${media.mini`
  margin: 12px;
`}
`;

export const ContentsByWrite = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.medium`
  margin: 12px;
  flex-direction: column;

  
  `}
  ${media.mini`
  margin: 12px;
  flex-direction: column;
  `}
`;
