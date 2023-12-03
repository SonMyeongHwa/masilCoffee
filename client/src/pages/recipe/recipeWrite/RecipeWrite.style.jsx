import styled from "styled-components";

export const FileButtonWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;

  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const FileNameWrap = styled.span`
  margin-left: 10px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 0.7;
  resize: none;

  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 1rem;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.imagesCount < 4 ? "flex-start" : "space-between"};
  margin: 15px 0;
`;

export const Image = styled.img`
  max-width: 20%;
  height: auto;
  aspect-ratio: 1 / 1;
  margin-right: ${(props) => (props.imagesCount < 4 ? "5%" : "0")};
`;

export const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
