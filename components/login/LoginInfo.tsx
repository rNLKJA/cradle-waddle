// import required components / apis for LoginInfo() component
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
  Select,
} from "@chakra-ui/react";

import { MdConfirmationNumber } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { Box as Mbox, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

// import required stylesheet
import styles from "../../styles/Login.module.scss";

// define framer-motion box container
export const MotionBox = motion<BoxProps>(Mbox);

// define the login info function
export default function LoginInfo(): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <ChakraProvider>
      <MotionBox
        maxW="xl"
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={"#ffffff"}
        p={8}
        drag={"x"}
        dragConstraints={{ left: -10, right: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h1 className={styles.loginH1}>女娲之肠</h1>
        <h3 className={styles.loginH3}>Looking into your future profile!</h3>
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
          <b>Email</b>
        </h3>

        <InputGroup size="sm">
          <Input
            pr="4.5rem"
            type={"email"}
            placeholder="Enter email"
            isRequired={true}
            variant="flushed"
            maxLength={30}
          />
        </InputGroup>

        <br />

        <h3 className={styles.loginH3}>
          <b>Password</b>
        </h3>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            isRequired={true}
            variant="flushed"
            maxLength={20}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <br />
        {/* <hr /> */}

        <Button
          leftIcon={<MdConfirmationNumber />}
          colorScheme="pink"
          variant="solid"
          width={"100%"}
        >
          Sign in
        </Button>
      </MotionBox>
    </ChakraProvider>
  );
}
