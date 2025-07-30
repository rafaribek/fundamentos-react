import { Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import loginImage from "../../public/assets/login-image.gif";

export default function Login() {
    return(
    <Flex w="100vw" h="100vh">
        <Flex w="50%" bg="#2C73EB" align="center" justify="center">

          <Image w={500} h={500} src={loginImage.src}/>


        </Flex>
        <HStack w="50%" bg="green.400">
          <Heading as="h1">Account Login</Heading>
          <Text>If you are already a member you can login with your email address and password.</Text>
        </HStack>
    </Flex>)
}
