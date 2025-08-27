import { IconButton } from "@chakra-ui/react";
import { IoIosSettings } from "react-icons/io";

export function Settings() {
  return(
    <IconButton  variant="ghost" rounded="full">
      <IoIosSettings />
    </IconButton >
  )
}
