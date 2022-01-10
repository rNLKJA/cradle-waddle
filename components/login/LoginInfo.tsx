// import required components
import {
  Box,
  Image,
  Badge,
  Button,
  Input,
  Stack,
  InputLeftElement,
} from "@chakra-ui/react";
import { grey } from "@mui/material/colors";
import { MdBuild, MdCall, MdConfirmationNumber } from "react-icons/md";

import { FcGoogle } from "react-icons/fc";

import { ChakraProvider } from "@chakra-ui/react";

// import required stylesheet
import styles from "../../styles/Login.module.scss";

// define the login info function
export default function LoginInfo() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

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
        <Input
          placeholder="Please Enter your Email"
          size="lg"
          variant="outline"
        />
        <br />
        <br />
        <h3 className={styles.loginH3}>
          <b>Password*:</b>
        </h3>

        <Input
          placeholder="Please Enter your Password"
          size="lg"
          variant="outline"
        />

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
