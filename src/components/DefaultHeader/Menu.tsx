import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUserGraduate, FaUserPlus } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { ImCalendar } from "react-icons/im";
import { IoMdPeople } from "react-icons/io";
import { MdLibraryBooks, MdLogout } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { signOut } from "@/contexts/SessionContext";
import { NavigationItem } from "./NavigationItem";

export function Menu() {
  const router = useRouter();
  return (
    <Drawer.Root placement="start" size="md">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <BiSolidFoodMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cesul - Sistema Acadêmico</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                  defaultChecked={router.asPath === '/'}
                />

                <NavigationItem
                  icon={<IoMdPeople />}
                  label="Estudantes"
                  onClick={() => router.push("/students")}
                  defaultChecked={router.asPath === '/students'}
                />

                <NavigationItem
                  icon={<FaUserGraduate />}
                  label="Professores"
                  onClick={() => router.push("/teachers")}
                  defaultChecked={router.asPath === '/teachers'}
                />

                <NavigationItem
                  icon={<MdLibraryBooks />}
                  label="Cursos"
                  onClick={() => router.push("/courses")}
                  defaultChecked={router.asPath === '/courses'}
                />

                <NavigationItem
                  icon={<GrNotes />}
                  label="Notas"
                  onClick={() => router.push("/grades")}
                  defaultChecked={router.asPath === '/grades'}
                />

                <NavigationItem
                  icon={<FaUserPlus />}
                  label="Matriculas"
                  onClick={() => router.push("/enrollment")}
                  defaultChecked={router.asPath === '/enrollment'}
                />

                <NavigationItem
                  icon={<ImCalendar />}
                  label="Calendário"
                  onClick={() => router.push("/calendar")}
                  defaultChecked={router.asPath === '/calendar'}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem
                icon={<MdLogout />}
                label="Sair"
                onClick={signOut}
              />
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
