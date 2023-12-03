import styled from "styled-components";

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
  width: 500px;
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

export const Form = styled.form`
  font-size: 16px;
  color: #939393;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  display: inline-flex;
  justify-content: space-between;
  width: 400px;
  margin: 0 0 15px 0;
`;

export const Label = styled.label`
  display: inline-block;
  width: 90px;
  white-space: nowrap;
  line-height: 30px;
`;

export const Input = styled.input`
  width: 280px;
  height: 30px;
  border: 1px solid #e5e4e4;
  font-size: 15px;
  border-radius: 3px;
  padding: 0 0 0 15px;
`;

export const Submit = styled.button`
  width: 150px;
  height: 40px;
  background-color: #ec2f56;
  color: white;
  border: none;
  font-size: 16px;
  margin: 30px auto;
  display: block;

  &:hover {
    background-color: #d12b4d;
  }
`;
