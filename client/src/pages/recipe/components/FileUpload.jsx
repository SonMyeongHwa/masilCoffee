import React, { useState, useRef } from "react";
import { Button } from "../Recipe.style";
import { FileButtonWrap, FileNameWrap, ImageWrap, Image } from "../recipeWrite/RecipeWrite.style";
import SquareButton from "../../../components/ui/button/SquareButton";

const PostFile = () => {
  const [fileImages, setFileImages] = useState([]);
  const fileInput = useRef(null); //파일 입력 요소에 대한 ref 생성

  //파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  //파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    const fileArr = e.target.files; //선택한 파일들
    let filesLength = Math.min(fileArr.length, 4); //최대 4개의 파일만 처리
    let newFileImages = []; //미리보기 이미지들을 저장할 배열

    for (let i = 0; i < filesLength; i++) {
      let file = fileArr[i]; //현재 순서의 파일을 file 변수에 할당
      let reader = new FileReader();

      reader.onload = () => {
        newFileImages.push({ dataURL: reader.result, fileName: file.name }); //파일의 데이터 URL을 배열에 추가

        if (newFileImages.length === filesLength) {
          setFileImages(newFileImages);
          console.log(fileImages);
        }
      };
      //현재 순서의 파일을 읽어서 데이터 URL로 변환
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <FileButtonWrap>
        <SquareButton
          text={"파일 업로드"}
          type={"red"}
          onClick={handleButtonClick}
        />
        {fileImages.length > 0 && (
          <FileNameWrap>
            {fileImages.map((image, index) => (
              <span key={index}>
                {image.fileName}
                {index !== fileImages.length - 1 && ", "}
              </span>
            ))}
          </FileNameWrap>
        )}
      </FileButtonWrap>
      <input
        type="file"
        multiple={true}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleChange}
        ref={fileInput}
      />
      <ImageWrap imagesCount={fileImages.length}>
        {fileImages.map((image, index) => (
          <Image
            key={index}
            alt={image.fileName}
            src={image.dataURL}
            imagesCount={fileImages.length}
          />
        ))}
      </ImageWrap>
    </>
  );
};

export default PostFile;
