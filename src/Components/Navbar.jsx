import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


  const shadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";

export default function Navbar() {
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode();


  const handleClick = () =>{
      navigate("/")
  }
                                       
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'white.900')} px={4} shadow={shadow} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <Box onClick = {handleClick}><h1 style={{fontSize:"50px"}}>MusicApp</h1></Box>
        
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.githubusercontent.com/u/101577915?s=400&u=828c50d7eff240fe6eb7b551a9262c4b74d5a26c&v=4'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.githubusercontent.com/u/101577915?s=400&u=828c50d7eff240fe6eb7b551a9262c4b74d5a26c&v=4'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <h1>Vivek Goswmai</h1>
                  </Center>
                  <br />
                 
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}