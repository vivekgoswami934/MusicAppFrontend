import React, { useEffect, useState } from "react";
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getMusicRecords, updateMusicRecords } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

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

   return <Flex
   minH={"100vh"}
   align={"center"}
   justify={"center"}
   bg={useColorModeValue("gray.50", "gray.800")}
 >
   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
     <Stack align={"center"}>
       <Heading fontSize={"4xl"}>Edit your data....</Heading>
       
     </Stack>
     <Box
       rounded={"lg"}
       bg={useColorModeValue("white", "gray.700")}
       boxShadow={"lg"}
       p={8}
     >
       <Stack spacing={4}>
         <FormControl id="email">
           <FormLabel>Email address</FormLabel>
           <Input onChange={(e) =>   setMusicName(e.target.value)} value={musicName} />
         </FormControl>
         <FormControl id="password">
           <FormLabel>Password</FormLabel>
           <Input onChange={(e) => setArtistName(e.target.value)} value={artistName} />
         </FormControl>
         <Stack spacing={10}>
           <Stack
             direction={{ base: "column", sm: "row" }}
             align={"start"}
             justify={"space-between"}
           >
        
           </Stack>
           <Button
             bg={"blue.400"}
             color={"white"}
             _hover={{
               bg: "blue.500",
             }}

                onClick = {handleSubmit}

           >
             Submit
           </Button>
         </Stack>
       </Stack>
     </Box>
   </Stack>
 </Flex>

};

export default EditMusicRecord;

// return (
//   <div style={{display : "flex" , flexDirection : "column" , justifyContent : "space-around" , gap : "30px"}}>
//     <h1>EditMusicRecord : {id}</h1>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Edit Music Name : -</label>
//         <input 
//           value={musicName}
//           type="text"
//           onChange={(e) => {
//             setMusicName(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <label>Edit Artist Name :---</label>
//         <input
//           value={artistName}
//           type="text"
//           onChange={(e) => {
//             setArtistName(e.target.value);
//           }}
//         />
//       </div>
//       <Button type="submit">Update</Button>
//     </form>
//   </div>