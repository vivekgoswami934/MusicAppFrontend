import { Box, ChakraBaseProvider, Text } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages.jsx/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <ChakraBaseProvider>
        <Box className="navbar">
          <Text className="" style={{ backgroundColor: "black", color: "white" }}>
            MusicApp Project
          </Text>
        </Box>
      </ChakraBaseProvider> */}

      <Navbar />

      <MainRoutes />
    </div>
  );
}

export default App;
