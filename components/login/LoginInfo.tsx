// import required components
import {
  Box,
  Image,
  Badge,
  Button,
  Input,
  Stack,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { grey } from "@mui/material/colors";
import { MdBuild, MdCall, MdConfirmationNumber } from "react-icons/md";

import { FcGoogle } from "react-icons/fc";

import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";

// import required stylesheet
import styles from "../../styles/Login.module.scss";

// define the login info function
export default function LoginInfo() {
  const [show, setShow] = useState(false);

  return (
    <ChakraProvider>
      <Box
        maxW="xl"
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={8}
      >
        <h1 className={styles.loginH1}>Login</h1>
        <h3 className={styles.loginH3}>
          Look into your future profile display!
        </h3>
        <br />
        <Button leftIcon={<FcGoogle />} width={"100%"}>
          Sign in with Google
        </Button>
        <br />
        <br />
        {/* <h5 className={styles.breakLine}> or Sign in with Email </h5> */}
        <hr />
        <br />

        <h3 className={styles.loginH3}>
          <b>Email*:</b>
        </h3>
        <Input pr="4.5rem" type={"email"} placeholder="Enter email" />
        <br />
        <br />
        <h3 className={styles.loginH3}>
          <b>Password*:</b>
        </h3>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <br />
        {/* <hr /> */}
        <br />

        <Button
          leftIcon={<MdConfirmationNumber />}
          colorScheme="pink"
          variant="solid"
          width={"100%"}
        >
          Sign in
        </Button>
      </Box>
    </ChakraProvider>
  );
}