import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 0 auto;
  max-width: 300px;
  height: 400px;
  cursor: pointer;
  border: 1px solid #878585;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $clickMenu }) =>
    $clickMenu ? "rgba(142,14,40,0.7)" : "initial"};
  color: #f5f5f5;
`;
export const StyledText = styled.div`
  max-width: 300px;
  margin: 0 auto;

  b {
    font-size: 20px;
    font-weight: 900;
  }
  p {
    font-size: 12px;
  }
`;
export const StyledButtonText = styled.div`
  margin: 0 auto;
  max-width: 250px;

  b {
    font-size: 16px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
  }
  button {
    margin: 0 auto;
    display: block;
  }
`;
