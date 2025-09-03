import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Enrollment() {
    return(
         <DefaultLayout

          title="Matricula acadêmica"
          description="Faça aqui a sua matricula"
          >
          <Heading color="blue">Matricula</Heading>
        </DefaultLayout>
      )
}

