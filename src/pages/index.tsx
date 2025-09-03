import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
    return(
         <DefaultLayout

          title="Dashboard acadêmica"
          description="visão geral do sistema universitário"
          >
          <Heading color="blue">dashboard</Heading>
        </DefaultLayout>
      )
}
