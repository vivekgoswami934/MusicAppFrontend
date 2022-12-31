import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMusicRecords, updateMusicRecords } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";

const EditMusicRecord = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams();
  const { musicRecords } = useSelector((store) => store.AppReducer);
  console.log(musicRecords);
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (musicName && artistName) {
      const payload = {
        name: musicName,
        artist: artistName,
      };

      dispatch(updateMusicRecords(id, payload)).then((r) =>
        dispatch(getMusicRecords())
      ).then(()=> navigate(`/music/${id}`))
    }
   };

    useEffect(()=>{
      console.log("vivek")
      if(musicRecords.length === 0){
        dispatch(getMusicRecords())
      }
    },[dispatch,musicRecords.length])

  
  // console.log(musicName);
  useEffect(() => {
    if (id) {
      const currentMusic = musicRecords.find((album) => album.id === id);

      if (currentMusic) {
        setMusicName(currentMusic.name);
        setArtistName(currentMusic.artist);
      }
    }
  }, [id, musicRecords]);

  return (
    <div>
      <h1>EditMusicRecord : {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Edit Music Name</label>
          <input
            value={musicName}
            type="text"
            onChange={(e) => {
              setMusicName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Edit Artist Name</label>
          <input
            value={artistName}
            type="text"
            onChange={(e) => {
              setArtistName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditMusicRecord;
