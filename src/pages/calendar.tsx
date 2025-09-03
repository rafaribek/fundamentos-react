import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Heading } from "@chakra-ui/react";

export default function Calendar() {
    return(
         <DefaultLayout

          title="Calendário acadêmico"
          description="verifique as datas do calendário"
          >
          <Heading color="blue">Calendário</Heading>
        </DefaultLayout>
      )
}
