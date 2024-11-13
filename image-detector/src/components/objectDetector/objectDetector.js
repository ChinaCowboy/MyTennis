
import styled from "styled-components";
import React, { useRef, useState } from "react";


const ObjectDetectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetectorContainer = styled.div`
  min-width: 200px;
  height: 700px;
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SelectButton = styled.button`
  padding: 7px 10px;
  border: 2px solid transparent;
  background-color: #fff;
  color: #ce5813;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 2em;
  cursor: pointer;
  transition: all 260ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;



const onSelectImage = async (e) => {
  
};

export function ObjectDetector(props) 
{
  const fileInputRef = useRef();
  const imageRef = useRef();
  const [isLoading, setLoading] = useState(false);

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

return (
  <ObjectDetectorContainer>
      <DetectorContainer>
      </DetectorContainer>
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={onSelectImage}
      />
      <SelectButton onClick={openFilePicker}>
        {isLoading ? "Recognizing..." : "Select Image"}
      </SelectButton>
  </ObjectDetectorContainer>
);
}