import { Button, Center, Flex } from "@chakra-ui/react";
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
    <Center>

    <Flex border="2px solid black">
      <h1>SingleMusicRecord</h1>

      <br /> <br /><br /><br />

      
      <Flex direction="column">
        <h4> {currentMusicAlbum.id} </h4>
        <h4> {currentMusicAlbum.name} </h4>
        <h4> {currentMusicAlbum.genre} </h4>
        <img src={currentMusicAlbum.img} alt="pic" />
        <h4> {currentMusicAlbum.artist} </h4>
      </Flex>

      <Link to={`/music/${id}/edit`}> <Button colorScheme="teal">Edit</Button>  </Link>
    </Flex>
    </Center>
  );
};

export default SingleMusicRecord;
