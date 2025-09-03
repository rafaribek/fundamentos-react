import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Courses() {
    return(
         <DefaultLayout

          title="Cursos acadêmicos"
          description="descubra qual o curso ideal pra você"
          >
          <Heading color="blue">Cursos</Heading>
        </DefaultLayout>
      )
}
