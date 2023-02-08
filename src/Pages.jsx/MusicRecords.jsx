import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFunc, getMusicRecords } from "../Redux/AppReducer/action";
import { useSearchParams, useLocation ,Link } from "react-router-dom";
import { Box, Button, Center, Text } from "@chakra-ui/react";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const { musicRecords , isLoading , isError } = useSelector((store) => store.AppReducer);
  // console.log(1, musicRecords);
  const [searchParams] = useSearchParams();
  
  const location = useLocation();
  console.log("location",location)

  // console.log("location", location);

  const handleDelete = (id) =>{

   dispatch(deleteFunc(id)).then(()=>{
    console.log("deletefunction called ")
      dispatch(getMusicRecords())
   })

  }

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      // console.log("called");
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "4",
          margin: "10",
        }}
      >
        {musicRecords?.map((album) => (            //optional chaining
          <MusicRecordssWrapper key={album.id}>
              <div>  <h1 fontWeight="bold"> {album.name}</h1> </div>
            <Link className="linkbaaz" to={`/music/${album.id}`}>
              <Center>
                <img src={album.img}  alt ="img not found" />
              </Center>
            </Link>
              <div>
                <Button colorScheme="red" m="1"  onClick={()=>{handleDelete(album.id)}} >Delete</Button>
              </div>
             <h2>{album.genre} </h2>
            <h2> {album.year} </h2>
          </MusicRecordssWrapper>
        ))}
      </div>
    </>
  );
};

export default MusicRecords;

const MusicRecordssWrapper = styled.div`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
   height: 330px;
  border: 5px solid whitesmoke;
  border-radius: 15px;
  margin-top: 7px;
  margin-right : 10px;
`;
