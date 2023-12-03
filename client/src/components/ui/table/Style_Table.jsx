import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    color: #848a95;
    font-weight: normal;
    padding: 12px 40px;
  }

  td {
    border-bottom: 2px solid #f1f1f1;
    border-top: 2px solid #f1f1f1;
    padding: 12px 40px;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export const ButtonsBox = styled.td`
  text-align: center;
`;

export const Button = styled.button`
  color: #626262;
  font-size: 15px;
  border: 1px solid #f3f3f5;
  padding: 10px 12.5px;
  line-height: 15px;
  border-radius: 10px;
  transition: background-color 0.3s, opacity 0.3s;
  transition: color 0.3s, opacity 0.3s;

  &:hover {
    color: white;
    background-color: #fc5b5b;
  }

  &.deletion {
    margin-left: 15px;
  }
`;
