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
import React, { useState } from "react";
// import { Box as Mbox, BoxProps } from "@chakra-ui/layout";
// import { motion } from "framer-motion";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

// import required stylesheet
import styles from "../../styles/login/Login.module.scss";
import { isJSDocUnknownType } from "typescript";
import Cookies from "js-cookie";
import Link from "next/link";

// define the login info function
export default function RegistrationInfo({
  isLogin,
  setLogin,
}: any): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      re_password: "",
      invitation: "",
      isDeveloper: false,
      isAdmin: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("You must enter a username!")
        .min(4, "Minimum length of username is 4"),

      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required!"),

      password: Yup.string()
        .required("Password is required!")
        .min(6, "Minimum length of password is 6")
        .max(20, "Maximum length of password is 20"),

      invitation: Yup.string()
        .required("No Invitation Code, No further ACCESS")
        .min(8, "Please enter the CORRECT invitation code.")
        .max(8, "Please enter the CORRECT invitation code."),
    }),
    onSubmit: (values, actions) => {
      setSubmitting(true);

      const createNewUserData = { ...values };
      setTimeout(async () => {
        console.log(`Verify user ${values.email}'s information...`);

        await axios
          .post("http://localhost:9550/user/createNewUser", createNewUserData) //TODO: change localhost to fixed server address
          .then((res) => {
            if (
              res.data.csc === 101 ||
              res.data.csc === 102 ||
              res.data.csc === 103 ||
              res.data.csc === 104
            ) {
              alert(res.data.message);
            } else if (res.data.csc === 105) {
              alert("Welcome to join Cradle family!");

              router.push("/login");
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
        <h3 className={styles.loginH3}>Do best to all my friends!</h3>

        <br />

        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={
              Boolean(formik.errors.password) && formik.touched.password
            }
          >
            <FormLabel className={styles.loginH3}>Username</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"text"}
                placeholder="Enter your username"
                isRequired={true}
                variant="flushed"
                maxLength={20}
                minLength={8}
                color={"#2b1216"}
                {...formik.getFieldProps("username")}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>

          <br />

          <FormControl
            isInvalid={Boolean(formik.errors.email) && formik.touched.password}
          >
            <FormLabel className={styles.loginH3}>Email</FormLabel>
            <InputGroup size="sm">
              <Input
                pr="4.5rem"
                type={"email"}
                placeholder="Enter email address e.g. cradle@gmail.com"
                isRequired={true}
                variant="flushed"
                maxLength={30}
                color={"#2b1216"}
                fontSize={"1xl"}
                fontWeight={"400"}
                {...formik.getFieldProps("email")}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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
                placeholder="Enter password"
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

          <FormControl
            isInvalid={
              Boolean(formik.errors.password) && formik.touched.password
            }
          >
            <FormLabel className={styles.loginH3}>Re-Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                isRequired={true}
                variant="flushed"
                maxLength={20}
                minLength={8}
                color={"#2b1216"}
                {...formik.getFieldProps("re_password")}
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

          <FormControl
            isInvalid={
              Boolean(formik.errors.password) && formik.touched.password
            }
          >
            <FormLabel className={styles.loginH3}>Invitation Code</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"text"}
                placeholder="Enter your unique invitation code"
                isRequired={true}
                variant="flushed"
                maxLength={8}
                minLength={8}
                color={"#2b1216"}
                {...formik.getFieldProps("invitation")}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.invitation}</FormErrorMessage>
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
            Create A New Account
          </Button>
        </form>

        <br />

        <Button
          onClick={() => setLogin(!isLogin)}
          colorScheme="blue"
          variant="ghost"
          width={"100%"}
        >
          Already Have an account?
        </Button>
      </Box>
    </ChakraProvider>
  );
}
