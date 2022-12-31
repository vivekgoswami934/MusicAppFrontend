import React from "react";
import { Route, Routes } from "react-router-dom";
import EditMusicRecord from "./EditMusicRecord";
import Homepage from "./Homepage";
import Login from "./Login";
import CheckAuth from "../Components/CheckAuth";
import SingleMusicRecord from "./SingleMusicRecord";
import { ChakraProvider } from "@chakra-ui/react";
// protected route ==> checkauth
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/music/:id"
          element={
            <CheckAuth>
              <SingleMusicRecord />
            </CheckAuth>
          }
        />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        />
        <Route path="*" element={<h3>Page Not Found...</h3>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
