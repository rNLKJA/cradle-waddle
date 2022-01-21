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

import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { Box as Mbox, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

// import required stylesheet
import styles from "../../styles/login/Login.module.scss";
import { isJSDocUnknownType } from "typescript";

// define the login info function
export default function LoginInfo(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  interface loginData {
    email: string;
    password: string;
  }

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required!"),
      password: Yup.string()
        .required("Password is required!")
        .min(6, "Minimum length of password is 6")
        .max(20, "Maximum length of password is 20"),
    }),
    onSubmit: (values, actions) => {
      setSubmitting(true);

      const loginData = { ...values };
      setTimeout(async () => {
        console.log(`Verify user ${values.email}'s information...`);

        await axios
          .post("http://localhost:9550/user/validateUser", loginData)
          .then((res) => {
            if (res.data.status) {
              console.log(res.data.message);

              localStorage.setItem("jwt", res.data.accessToken);
              router.push("/");
            } else {
              console.log(res.data.message);
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
          <FormLabel className={styles.loginH3}>Email</FormLabel>
          <FormControl
            isInvalid={Boolean(formik.errors.email) && formik.touched.password}
          >
            <InputGroup size="sm">
              <Input
                pr="4.5rem"
                type={"email"}
                placeholder="Enter email"
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
            <FormLabel className={styles.loginH3}>Email</FormLabel>
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
                <Button
                  h="1.75rem"
                  size="sm"
                  type="submit"
                  onClick={() => setShow(!show)}
                >
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
      </Box>
    </ChakraProvider>
  );
}
