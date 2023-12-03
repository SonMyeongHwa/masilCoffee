import React from "react";
import * as TableLayout from "./Style_Table";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

const Table = ({ trData, tdData, onTdClick = null, isMenuTable = false }) => {
  return (
    <TableLayout.Table>
      <thead>
        <tr>
          {trData.map((data, i) => {
            return <th key={data + i}>{data}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {isMenuTable
          ? // isMenuTable이 true인 경우
            tdData.map((rowData, rowI) => (
              <tr key={rowI}>
                <td>
                  <TableLayout.Image src={rowData[0]} alt="coffee" />
                </td>
                {rowData.slice(1).map((data, colI) => (
                  <td key={data + colI}>{data}</td>
                ))}
                <TableLayout.ButtonsBox>
                  <TableLayout.Button className="edit" onClick={() => onTdClick(rowData)}>
                    <FiEdit />
                  </TableLayout.Button>
                  <TableLayout.Button className="deletion" onClick={() => onTdClick("삭제")}>
                    <FiTrash />
                  </TableLayout.Button>
                </TableLayout.ButtonsBox>
              </tr>
            ))
          : // isMenuTable이 false인 경우
            tdData.map((rowData, rowI) => (
              <tr key={rowI}>
                {rowData.map((data, colI) => (
                  <td key={data + colI}>{data}</td>
                ))}
              </tr>
            ))}
      </tbody>
    </TableLayout.Table>
  );
};

export default Table;
