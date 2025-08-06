import { Button, Flex, Heading, Image, Input, Stack, Text, VStack, Link as ChakraLink, HStack, Field } from "@chakra-ui/react";
import NextLink from "next/link"
import loginImage from "../../public/assets/login-image.gif";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z.email("digite um email válido").nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const {register, handleSubmit} = useForm({
    resolver: zodResolver(signInFormSchema)
  });

  return(
    <Flex w="100vw" h="100vh">
        <Flex w="50%" bg="#2C73EB" align="center" justify="center">
          <Image w={500} h={500} src={loginImage.src}/>
        </Flex>
        <VStack w="50%"  justify="center">
          <Stack>
            <Heading as="h1" color="black" fontSize="3xl" fontWeight="bold">Login</Heading>

            <Text color="gray.400" fontSize="lg" fontWeight="normal">Se você ja é membro, você pode fazer login com seu endereço de e-mail e senha.</Text>

            <VStack align="flex-start" gap={6} mt={10}>
              <Field.Root >
                <Field.Label color="gray.500" fontSize="md">
                  Email
                </Field.Label>
                <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black" {...register("email")} />
              </Field.Root>

              <Field.Root colorPalette="blue">
                <Field.Label color="gray.500" fontSize="md">
                  Senha
                </Field.Label>
                <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black" {...register("password")}  />
              </Field.Root>


              <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium" >
                Lembre-me
              </Checkbox>

              <Button w="full" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
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
