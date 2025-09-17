import { Card, HStack, Input, InputGroup, SimpleGrid } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matriculados"
    >
      <HStack>
        {/*
            Campo de pesquisa - SearchInput


            Select - Filtro de Status -
            Button - Filtros -
            Button - Exportar -
            Button - Action Button - Criar um novo estudante

            */}
        <Card.Root>
          <Card.Body>
            <SimpleGrid row={2} rowGap={4}>
            <InputGroup flex="1" startElement={<LuSearch />}>
              <Input placeholder="Buscar por Nome, Email ou curso..." />
            </InputGroup>

            <HStack>

            </HStack>
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
