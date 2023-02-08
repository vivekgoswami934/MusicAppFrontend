import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionType";
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

import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  console.log("loginLocation", location);

  const { isAuth } = useSelector((state) => state.AuthReducer);
  console.log("isAuth", isAuth);
  const pathComingFrom = location.state?.from?.pathname || "/";
  console.log(pathComingFrom);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email , password)
    if (email && password) {
      dispatch(login({ email, password }))
        .then((r) => {
          if (r.type === USER_LOGIN_SUCCESS) {
            navigate(pathComingFrom, { replace: true });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          
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
              <Input onChange={(e) => setEmail(e.target.value)} type="email" value="eve.holt@reqres.in" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}

                   onClick = {handleSubmit}

              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;

// <div>
//   <h1>LOGIN PAGE</h1>

//   <form onSubmit={handleSubmit}>
//     <div>
//       <label>User Email</label>
//       <Input
//         type="email"
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>User Password</label>
//       <input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>

//     <input type="submit" value="Submit" />
//   </form>
// </div>
