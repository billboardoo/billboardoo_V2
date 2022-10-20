import React, { useState } from "react";
import Option from "../../assets/svgs/Option.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styled";

const ListBox = ({ item, userInfo }) => {
  const [deleteBool, setDeleteBool] = useState(false);
  let navigate = useNavigate();

  //ver1
  // const getPlaylistdetail = () => {
  //   axios.get(`/api/playlist/detail/${item.key}`).then((res) => {
  //     setPlaylistInfo(res.data);
  //     localStorage.setItem("playlistKey", res.data.key);
  //     navigate("/playlist");
  //   });

  //ver2
  const movePlaylistdetail = () => {
    localStorage.setItem("playlistKey", item.key);
    navigate("/playlist");
  };

  const deletePlayList = () => {
    axios
      .post(`/api/playlist/delete/${item.key}`, { clientId: userInfo.id })
      .then((res) => {
        alert("삭제에 성공했습니다");
        window.location.reload();
      });
  };

  const changeDeleteBool = () => {
    setDeleteBool(!deleteBool);
  };

  return <></>;
};

export default ListBox;
