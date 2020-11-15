import React, { useState } from "react";

import { OutTable } from "react-excel-renderer";
import MyDropzone from "./MyDropzone";

import "./styles.css";

export default function App() {
  const [data, setData] = useState({ rows: [], cols: [] });

  console.log(new Date(44138));
  return (
    <div className="App">
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} />
      {data ? (
        <OutTable
          data={data.rows}
          columns={data.cols}
          tableClassName="ExcelTable2007"
          tableHeaderRowClass="heading"
        />
      ) : (
        ""
      )}
    </div>
  );
}
