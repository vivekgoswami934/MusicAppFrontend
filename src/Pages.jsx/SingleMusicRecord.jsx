import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMusicRecords } from "../Redux/AppReducer/action";

const SingleMusicRecord = () => {
  //some data in the params
  // get the id from the params
  //filter the music albums based on the id
  // get the album pertaining to that particular id

  const dispatch = useDispatch();
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const { id } = useParams();
  const { musicRecords } = useSelector((state) => state.AppReducer);

  //  console.log(musicRecords)
  // console.log(id)

  useEffect(() => {
    if (!musicRecords.length) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);
  useEffect(() => {
    if (id) {
      // console.log(musicRecords)
      //filter the album based on the id
      const currentMusic = musicRecords.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecords]);

  // console.log(currentMusicAlbum)

  return (
    <>
      <h1>SingleMusicRecord</h1>

      <br />
      <br />
      <br />
      <br />
      <div style={{ border: "4px solid black", width: "30%", margin: "auto" }}>
        <h4> {currentMusicAlbum.id} </h4>
        <h4> {currentMusicAlbum.name} </h4>
        <h4> {currentMusicAlbum.genre} </h4>
        <img src={currentMusicAlbum.img} alt="pic" />
        <h4> {currentMusicAlbum.artist} </h4>
      </div>

      <Link to={`/music/${id}/edit`}>Edit</Link>
    </>
  );
};

export default SingleMusicRecord;
