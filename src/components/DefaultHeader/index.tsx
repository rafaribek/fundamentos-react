import { Flex, Group, IconButton, Separator } from "@chakra-ui/react";
import { BiSolidFoodMenu, BiSolidHelpCircle, BiSolidNotification } from "react-icons/bi";
import { IoIosSettings, IoMdMoon, IoMdSunny } from "react-icons/io";
import { Avatar } from "../ui/avatar";

import { useColorMode } from "../ui/color-mode";
import { Logo } from "./Logo";

export function DefaultHeader() {
  const {toggleColorMode, colorMode} = useColorMode();
  return(
    <Flex w="full" justify="space-between" borderBottomWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <IconButton variant="ghost" rounded="full">
            <BiSolidFoodMenu />
          </IconButton >

          <Logo/>

        </Flex>

        <Group >
          <IconButton variant="ghost" rounded="full">
            <BiSolidNotification />
          </IconButton >

          <IconButton  variant="ghost" rounded="full">
            <BiSolidHelpCircle />
          </IconButton >

          <IconButton  variant="ghost" rounded="full">
            <IoIosSettings />
          </IconButton >

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === 'dark' ? <IoMdMoon/> : <IoMdSunny/>}
          </IconButton>

          <Separator h={6} orientation="vertical" mx={2}/>


          <Avatar src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/473393253_587189724120618_6679079980464976720_n.jpg?ccb=11-4&oh=01_Q5Aa2QEuKFBEovIwz80sZ6kCti5BMKELny8lMzWcW8ouFlbV8Q&oe=68B229E9&_nc_sid=5e03e0&_nc_cat=105"/>
        </Group>
      </Flex>
  )
}
