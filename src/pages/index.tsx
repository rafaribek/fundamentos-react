import {
  Card,
  ColorPalette,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";
import { IoMdCalendar, IoMdPeople } from "react-icons/io";
import { IoAlertCircle } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { CustomCard } from "@/components/CustomCard";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

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
      title: "Novo curso criado: Análise de Dados",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás",
    },
  ];

  const customCards = [
    {
      id: 1,
      type: "exam",
      title: "Inicio das provas finais",
      color: "red",
      time: "14 Dez 2025 ás 08:00",
    },
    {
      id: 2,
      type: "meeting",
      title: "Reunião de coordenadores",
      color: "blue",
      time: "18 Dez 2025 ás 14:00",
    },
    {
      id: 3,
      type: "deadline",
      title: "Fim do Semestre",
      color: "orange",
      time: "20 Dez 2025 ás 17:00",
    },
  ];

  const iconMapActivities: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: MdLibraryBooks,
    calendar: ImCalendar,
  };

  const iconMapEvents: Record<string, IconType> = {
    exam: IoAlertCircle,
    meeting: IoMdPeople,
    deadline: IoMdCalendar,
  };
  return (
    <DefaultLayout
      title="Dashboard acadêmica"
      description="visão geral do sistema universitário"
    >
      <SimpleGrid row={2}>
        <HStack gap={8}>
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

        <HStack mt={8} gap={8} align="start">
          <Card.Root>
            <Card.Header>
              <Card.Title>Atividades recentes</Card.Title>
            </Card.Header>
            <Card.Body gap={10}>
              {recentActivities.map((activity) => {
                const ActivityIcon =
                  iconMapActivities[activity.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
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

          <Card.Root>
            <Card.Header>
              <Card.Title>Próximos eventos</Card.Title>
            </Card.Header>
            <Card.Body gap={10}>
              {customCards.map((events) => {
                const EventsIcon =
                  iconMapEvents[events.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
                    key={events.id}
                    color={events.color as ColorPalette}
                    icon={EventsIcon}
                    title={events.title}
                    dateTime={events.time}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>
        </HStack>
      </SimpleGrid>
    </DefaultLayout>
  );
}
