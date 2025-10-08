import { Button, Card, createListCollection, HStack, Input, InputGroup, Portal, Select, SimpleGrid } from "@chakra-ui/react";
import { BiFilterAlt, BiPlus } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { StudentsHeader } from "@/components/HeaderTable/StudentsHeader";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <HStack>
        <StudentsHeader/>

      </HStack>
    </DefaultLayout>
  )
}
