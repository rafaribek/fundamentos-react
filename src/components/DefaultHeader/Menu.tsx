import { IconButton } from "@chakra-ui/react";
import { BiSolidFoodMenu } from "react-icons/bi";

export function Menu() {
  return(
    <IconButton variant="ghost" rounded="full">
      <BiSolidFoodMenu />
    </IconButton >
  )
}
