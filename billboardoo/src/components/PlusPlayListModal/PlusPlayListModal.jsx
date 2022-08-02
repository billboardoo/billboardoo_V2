import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

const PlusPlayListModal = ({ playList, setPlayList, changeModalBool }) => {
  const [playListName, setPlayListName] = useState("");

  const onChangePlayListName = (e) => {
    setPlayListName(e.target.value);
  };

  const postAppendPlayList = () => {
    if (playListName) {
      axios({});
      let copyPlayList = [...playList];
      copyPlayList.push({
        name: playListName,
        count: 0,
      });
      setPlayList(copyPlayList);
      setPlayListName("");
      changeModalBool();
    } else {
      alert("이름을 입력해주세요.");
    }
  };

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.ModalTitle>재생목록 추가</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>새로운 재생목록의 이름을 입력해주세요</S.IntroduceText>
        <S.NameInput
          onChange={onChangePlayListName}
          value={playListName}
          placeholder="이름을 입력해주세요"
        />
        <S.PlusBox>
          <S.PlusButton onClick={postAppendPlayList}>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default PlusPlayListModal;
