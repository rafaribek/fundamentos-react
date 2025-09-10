import { Card, HStack } from "@chakra-ui/react";
import { BiAward } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ImCalendar } from "react-icons/im";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás",
    },
  ];

  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: MdLibraryBooks,
    calendar: ImCalendar,
  };
  return (
    <DefaultLayout
      title="Dashboard acadêmica"
      description="visão geral do sistema universitário"
    >
      <HStack >
        <IndicatorCard
          icon={IoMdPeople}
          label={"Total de estudantes"}
          value={2847}
          indicator="-12% este mês"
          colorPallete="blue"
        />

        <IndicatorCard
          icon={FaUserGraduate}
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
          icon={FaArrowTrendUp}
          label={"Taxa de aprovação"}
          value={0.892}
          style="percent"
          minimumFractionDigits={2}
          maximumFractionDigits={2}
          indicator="+18% este mês"
          colorPallete="green"
        />
      </HStack>

      <HStack mt={8}>
        <Card.Root >
          <Card.Header>
            <Card.Title>Atividades recentes</Card.Title>
          </Card.Header>
          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon =
                iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <RecentActivity
                  key={activity.id}
                  color="blue"
                  icon={ActivityIcon}
                  title={activity.title}
                  dateTime={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
