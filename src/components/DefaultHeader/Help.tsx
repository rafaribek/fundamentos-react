import { IconButton } from "@chakra-ui/react";
import { BiSolidHelpCircle } from "react-icons/bi";

export function Help() {
  return(
    <IconButton  variant="ghost" rounded="full">
      <BiSolidHelpCircle />
    </IconButton >
  )
}
