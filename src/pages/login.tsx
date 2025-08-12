import { Button, Flex, Heading, Image, Input, Stack, Text, VStack, Link as ChakraLink, HStack, Field, FieldErrorText } from "@chakra-ui/react";
import NextLink from "next/link"
import loginImage from "../../public/assets/login-image.gif";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/contexts/SessionContext";
import { useEffect } from "react";

const signInFormSchema = z.object({
  email: z.email("digite um email válido").nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const {user, updateUser} = useSession();


  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(signInFormSchema)
  });

  function handleSignIn(data: SignInFormData) {
    console.log(data);
    updateUser({
      id: "teste",
      email: data.email,
      cpf: "07138476995",
      fullName: "Rafael Ribeiro",
      avatarUrl: "https://avatars.githubusercontent.com/u/128654897?s=400&v=4"})
  }

  useEffect(() => {
    console.log(user);
  }, [user])

  return(
    <Flex w="100vw" h="100vh">
        <Flex w="50%" bg="#2C73EB" align="center" justify="center">
          <Image w={500} h={500} src={loginImage.src}/>
        </Flex>
        <VStack w="50%"  justify="center">
          <Stack>
            <Heading as="h1" color="black" fontSize="3xl" fontWeight="bold">Login</Heading>

            <Text color="gray.400" fontSize="lg" fontWeight="normal">Se você ja é membro, você pode fazer login com seu endereço de e-mail e senha.</Text>

            <VStack as="form" onSubmit={handleSubmit(handleSignIn)} align="flex-start" gap={6} mt={10}>
              <Field.Root invalid={!!errors.email} >
                <Field.Label color="gray.500" fontSize="md">
                  Email
                </Field.Label>
                <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black" {...register("email")} />
                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root colorPalette="blue" invalid={!!errors.password}>
                <Field.Label color="gray.500" fontSize="md">
                  Senha
                </Field.Label>
                <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black" {...register("password")}  />
                <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
              </Field.Root>


              <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium" >
                Lembre-me
              </Checkbox>

              <Button w="full"  type="submit" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
                Entrar
              </Button>
            </VStack>

            <HStack justify="center" gap={1} mt={10}>
              <Text color="gray.500" fontSize="md" fontWeight="medium">Não possui uma conta?</Text>
              <ChakraLink color="blue.500" asChild>
                <NextLink  href="/sign-up" >Clique aqui!</NextLink>
              </ChakraLink>
            </HStack>

          </Stack>

        </VStack>
    </Flex>)
}
