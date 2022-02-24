// import required components / apis for LoginInfo() component
import {
  Box,
  Badge,
  Button,
  Input,
  FormLabel,
  Stack,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

import { MdConfirmationNumber } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, Dispatch, SetStateAction } from "react";
import { Box as Mbox, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

// import required stylesheet
import styles from "../../styles/login/Login.module.scss";
import { isJSDocUnknownType } from "typescript";
import Cookies from "js-cookie";
import Link from "next/link";
const jwt = require("jsonwebtoken");

// define the login info function

/**
 * This component display the login information container where the user should put every piece
 * of login information in order to validate and obtain an access token.
 * @param isLogin<boolean>
 * @param setIslogin<Dispatch<boolean>>
 * @returns an object contains access token
 */

interface LoginStatusProps {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export default function LoginInfo({
  isLogin,
  setIsLogin,
}: LoginStatusProps): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      // .email("Please enter a valid email")
      // .required("Username is required!"),
      password: Yup.string()
        .required("Password is required!")
        .min(6, "Minimum length of password is 6")
        .max(20, "Maximum length of password is 20"),
    }),
    onSubmit: (values, actions) => {
      setSubmitting(true);

      const loginData = { ...values };
      setTimeout(async () => {
        console.log(`Verify user ${values.username}'s information...`);

        await axios
          .post("http://localhost:9550/user/validateUser", loginData)
          .then((res) => {
            if (res.data.csc === 101) {
              alert(res.data.message);
            } else if (res.data.csc === 102) {
              alert(res.data.message);
            } else if (res.data.csc === 100) {
              // console.log(res.data.message);

              Cookies.set("token", res.data.token, { expires: (1 / 24) * 3 });

              const user = jwt.decode(res.data.token);
              // localStorage.setItem("jwt", res.data.accessToken);
              router.push(`/${user.user}`);
            }
          });

        setSubmitting(false);

        // router.push("/");
      }, 1000);
    },
  });

  return (
    <ChakraProvider>
      <Box
        maxW="xl"
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={"#ffffff"}
        p={8}
      >
        <h1 className={styles.loginH1}>Project Cradle</h1>
        <h3 className={styles.loginH3}>Looking into your future profile!</h3>

        <br />

        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={
              Boolean(formik.errors.username) && formik.touched.password
            }
          >
            <FormLabel className={styles.loginH3}>Username</FormLabel>
            <InputGroup size="sm">
              <Input
                pr="4.5rem"
                type={"text"}
                placeholder="Please enter your username"
                isRequired={true}
                variant="flushed"
                maxLength={30}
                color={"#2b1216"}
                fontSize={"1xl"}
                fontWeight={"400"}
                {...formik.getFieldProps("email")}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>

          <br />

          <FormControl
            isInvalid={
              Boolean(formik.errors.password) && formik.touched.password
            }
          >
            <FormLabel className={styles.loginH3}>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="And enter your password here"
                isRequired={true}
                variant="flushed"
                maxLength={20}
                minLength={8}
                color={"#2b1216"}
                {...formik.getFieldProps("password")}
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <br />
          {/* <hr /> */}

          <Button
            leftIcon={<MdConfirmationNumber />}
            colorScheme="red"
            backgroundColor={"#ed556a"}
            variant="solid"
            width={"100%"}
            type="submit"
            isLoading={isSubmitting}
          >
            Sign in
          </Button>
        </form>

        <br />
        {/* <hr /> */}
        {/* <br /> */}

        <Button
          onClick={() => setIsLogin(!isLogin)}
          colorScheme="blue"
          variant="ghost"
          width={"100%"}
        >
          Don't have an account?
        </Button>
      </Box>
    </ChakraProvider>
  );
}
