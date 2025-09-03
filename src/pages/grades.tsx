import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Grades() {
    return(
         <DefaultLayout

          title="Notas do acadêmico"
          description="Verifique aqui as notas das avaliações"
          >
          <Heading color="blue">Notas</Heading>
        </DefaultLayout>
      )
}
