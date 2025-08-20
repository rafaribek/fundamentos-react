import { Button, Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";

import logo from "../../public/assets/logo-cesul.png";

type DefaultLayoutProps = {
  children: ReactNode;
}

export function DefaultLayout({children}: DefaultLayoutProps) {
  return(
    <Flex flexDir="column" bg="red">
      <Flex w="full" justify="space-between" bg="blue">
        <Flex bg="yellow">
          <Button >
            <BiSolidFoodMenu color="blue" />
          </Button>

          <Image>
            src={logo.src}
          </Image>

        </Flex>

        <Flex bg="green">
          Notificacao
          Ajuda
          Configurações
          Avatar
        </Flex>
      </Flex>

      {children}
    </Flex>
  );
}
