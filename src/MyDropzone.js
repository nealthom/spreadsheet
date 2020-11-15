import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ExcelRenderer } from "react-excel-renderer";
import { useDropzone } from "react-dropzone";

const StyledDropBox = styled.div`
  padding: 2rem;
  cursor: pointer;
  border: black 2px dotted;
  &:hover {
    border: black 2px solid;
  }
`;

function MyDropzone({ set }) {
  const [name, setName] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        ExcelRenderer(file, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            let charNum = 64;
            let i = 0;
            while (i < resp.cols.length) {
              resp.cols[i].name = String.fromCharCode(i + charNum);
              i++;
            }
            resp.cols.push({ name: String.fromCharCode(i + charNum), key: i });
            set(resp);
            setName(file.name);
          }
        });
      });
    },
    [set]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <StyledDropBox {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      {name && <h2>{name}</h2>}
    </StyledDropBox>
  );
}

export default MyDropzone;
