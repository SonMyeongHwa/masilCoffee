import styled, { css } from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import GetAllOption from "../GetAllOption";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const ModalBox = styled.div`
  width: 700px;
  background-color: white;
  z-index: 100;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: #8e0e28;
  margin-bottom: 40px;

  & > p {
    font-size: 26px;
    color: white;
    margin: 0;
  }

  & > .cancelIcon {
    font-size: 50px;
    color: white;
    opacity: 0.8;
  }

  @media all and (max-width: 768px) {
    & > p {
      font-size: 20px;
    }
  }
`;

// ----------------------Option Modal -------------------

export const OptionFormBox = styled.div`
  background-color: #fafafa;
  margin: 0 50px;
  > Form {
    margin: 0;
    padding: 20px 20px;
    box-sizing: border-box;
    font-size: 14px;
  }
`;

export const DetailInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;
  // padding-bottom: 10px;
  // border-bottom: 2px solid #cbcbcb;
`;

export const OptionP = styled.div`
  display: flex;
  margin-right: 20px;

  > Input {
    width: 110px;
  }
`;

export const AddInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;

  > Input {
    width: 200px;
  }
`;

export const PlusIcon = styled(CiCirclePlus)`
  font-size: 32px;
`;

export const MinusIcon = styled(CiCircleMinus)`
  font-size: 32px;
`;

export const OptionSubmit = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  color: white;
  text-align: center;
  font-size: 14px;
  margin: 20px auto 0;
  display: block;
  background-color: #fc5b5b;
  border-radius: 3px;
  border: none;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: #e24242;
  }
`;

// ----------------------Option Modal -------------------

export const Form = styled.form`
  font-size: 16px;
  color: #939393;
  margin: 0 50px;
`;

export const P = styled.p`
  display: inline-flex;
  justify-content: space-between;
  width: 280px;
  margin: 0 0 15px 0;

  &:first-child {
    width: 100%;

    :nth-child(2) {
      width: 510px;
    }
  }

  &:nth-child(2n) {
    margin-right: 40px;
  }
`;

export const TextareaBox = styled.p`
  display: flex;
  width: 600px;
  margin: 0 0 15px 0;

  :nth-child(2) {
    width: 510px;
    font-size: 15px;
    border: 1px solid #e5e4e4;
    border-radius: 3px;
    padding: 10px 15px;
    box-sizing: border-box;
  }

  ${(props) =>
    props.large &&
    css`
      flex-direction: column;
      margin: 15px 0 30px;

      :nth-child(2) {
        width: 600px;
      }
    `}
`;

export const Label = styled.label`
  display: inline-block;
  width: 90px;
  white-space: nowrap;
  line-height: 30px;
`;

export const Input = styled.input`
  width: 190px;
  height: 30px;
  border: 1px solid #e5e4e4;
  font-size: 15px;
  border-radius: 3px;
  padding: 0 0 0 15px;

  ${P}:nth-child(3) > & {
    box-sizing: border-box;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 190px;

  & > Input {
    width: calc(100% - 55px);
    padding: 0 40px 0 15px;
  }
`;

export const CurrencyText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 15px;
  display: flex;
  height: 30px;
  align-items: center;
  color: #b9b9b9;
  pointer-events: none;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 70px;
  border: dashed 1px #c6c6c6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > input {
    display: none;
  }
`;

export const ImgLabel = styled.label`
  width: 120px;
  height: 30px;
  color: white;
  line-height: 30px;
  background-color: #ff7070;
  border-radius: 3px;
  padding: 0;
  margin-right: 20px;

  &:hover {
    background-color: #e35f5f;
  }
`;

export const Submit = styled.button`
  width: 150px;
  height: 40px;
  background-color: #ec2f56;
  color: white;
  border: none;
  font-size: 16px;
  margin: 0 auto 30px;
  display: block;

  &:hover {
    background-color: #d12b4d;
  }
`;

export const AllOption = styled(GetAllOption)`
  margin: 20px;
`;
