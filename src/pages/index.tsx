import { HStack} from "@chakra-ui/react";
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="Dashboard acadêmica"
      description="visão geral do sistema universitário"
    >
      <HStack>
        <IndicatorCard
          icon={IoMdPeople }
          label={"Total de estudantes"}
          value={2847}
          indicator="-12% este mês"
          colorPallete="blue"
        />

        <IndicatorCard
          icon={FaUserGraduate }
          label={"Total de professores"}
          value={25}
          indicator="+15% este mês"
          colorPallete="red"
        />

        <IndicatorCard
          icon={MdLibraryBooks}
          label={"Cursos oferecidos"}
          value={34}
          indicator="+20% este mês"
          colorPallete="yellow"
        />

        <IndicatorCard
          icon={FaArrowTrendUp }
          label={"Taxa de aprovação"}
          value={265}
          indicator="+18% este mês"
          colorPallete="green"
        />
      </HStack>
    </DefaultLayout>
  );
}
