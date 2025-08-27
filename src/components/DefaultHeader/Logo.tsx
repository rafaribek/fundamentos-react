import { useColorMode } from "../ui/color-mode"
import logoBranca from "../../../public/assets/logo-cesul-branca.png"
import logo from "../../../public/assets/logo-cesul.png";
import { Image } from "@chakra-ui/react";

export function Logo() {
  const {colorMode} = useColorMode();
  return (
    <>
      {
        colorMode === 'dark' ?
        <Image w="130px" height="60px" src={logoBranca.src} />:
        <Image w="115px" height="60px" src={logo.src} />
      }
    </>
  )
}
