import { VStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { StudentsHeader } from "@/components/HeaderTable/StudentsHeader";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { useEffect } from "react";
import { api } from "@/services/apiClient";

type Student = {
  fullname: string;
  email: string;
  status: string;
  enrollment: string;
  course: string;
  semester: string;
};
export default function Students() {
  const data: Student[] = [
    {
      fullname: "Ana Paula Silva",
      email: "ana.silva@example.com",
      status: "Ativo",
      enrollment: "202301234",
      course: "Engenharia de Software",
      semester: "3º",
    },
    {
      fullname: "Carlos Eduardo Mendes",
      email: "carlos.mendes@example.com",
      status: "Trancado",
      enrollment: "202202345",
      course: "Administração",
      semester: "4º",
    },
    {
      fullname: "Juliana Rocha",
      email: "juliana.rocha@example.com",
      status: "Ativo",
      enrollment: "202303456",
      course: "Direito",
      semester: "1º",
    },
    {
      fullname: "Felipe Andrade",
      email: "felipe.andrade@example.com",
      status: "Formado",
      enrollment: "201900123",
      course: "Arquitetura",
      semester: "8º",
    },
    {
      fullname: "Rafael Torres",
      email: "rafael.torres@example.com",
      status: "Ativo",
      enrollment: "202200567",
      course: "Ciência da Computaria",
      semester: "5º",
    },
    {
      fullname: "Bianca Oliveira",
      email: "bianca.oliveira@example.com",
      status: "Trancado",
      enrollment: "202105678",
      course: "Design Gráfico",
      semester: "6º",
    },
    {
      fullname: "Lucas Martins",
      email: "lucas.martins@example.com",
      status: "Ativo",
      enrollment: "202301111",
      course: "Engenharia Civil",
      semester: "3º",
    },
    {
      fullname: "Gabriela Lima",
      email: "gabriela.lima@example.com",
      status: "Formado",
      enrollment: "201800432",
      course: "Medicina",
      semester: "12º",
    },
  ];
  const columnHelper = createColumnHelper<Student>();

  const columns = [
    columnHelper.accessor("fullname", {
      header: "Estudante",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("enrollment", {
      header: "Matrícula",
      cell: (info) => info.getValue(),
    }),
  ];

  // useEffect(() => {
  //   async function load() {
  //     const data = await api.get('/students');

  //     console.log(data);
  //   }

  //   load();
  // }, [])

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="start">
        <StudentsHeader />

        <Table data={data} columns={columns} />
      </VStack>
    </DefaultLayout>
  );
}
