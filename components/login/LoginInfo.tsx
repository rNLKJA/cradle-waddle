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
import { MdBuild, MdCall } from "react-icons/md";

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
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <h1>Login</h1>
        <h3>Look into your future profile display!</h3>
        <Button>
          <span>Sign in with Google</span>
        </Button>
        <h5 className={styles.breakLine}>
          {" "}
          ------ or Sign in with Email ------{" "}
        </h5>
        <h3>
          <b>Email*:</b>
        </h3>
        <Input
          placeholder="Please Enter your Email"
          size="lg"
          variant="outline"
        />

        <h3>
          <b>Password*:</b>
        </h3>

        <Input
          placeholder="Please Enter your Password"
          size="lg"
          variant="outline"
        />
        <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
          Sign in
        </Button>
      </Box>
    </ChakraProvider>
  );
}
