import { IconButton } from "@chakra-ui/react";
import { BiSolidNotification } from "react-icons/bi";

export function Notifications() {
  return(
    <IconButton variant="ghost" rounded="full">
      <BiSolidNotification />
    </IconButton >
  )
}
