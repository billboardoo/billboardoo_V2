import React from "react";
import Option from "../../assets/svgs/Option.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styled";

const ListBox = ({ item, setPlaylistInfo }) => {
  let navigate = useNavigate();

  const getPlaylistPage = () => {
    axios.get(`/api/playlist/detail/${item.key}`).then((res) => {
      setPlaylistInfo(res.data);
      navigate("/playlist");
    });
  };

  return (
    <S.ListBox onClick={getPlaylistPage}>
      <S.ListTextLayout>
        <S.ListImg src={item.image || DefaultPlaylist} />
        <S.ListTitle>{item.title}</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>{item.count}곡</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default ListBox;
