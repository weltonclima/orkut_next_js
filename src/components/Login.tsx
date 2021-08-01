import { Button, Center, Input, Text, FlexProps, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/next-server/server/router";
import Link from "next/link";

type LoginProps = FlexProps;

export function Login({ ...rest }: LoginProps) {
  const router = useRouter()
  return (
    <Flex flex="1" textAlign="center" flexDir="column" {...rest}>
      <Center
        bg="blue.100"
        borderRadius="8px"
        flexDirection="column"
        flex="2"
        m={["0 1rem 1rem 1rem", "0 1rem 1rem 1rem", "0 0 .75rem 0"]}
        p="4.37rem"
      >
        <Text
          color="gray.400"
          fontSize=".87rem"
          lineHeight="1.03rem"
          mb="1.5rem"
        >Acesse o <b>orkut.br</b>
          <br />com sua conta
        </Text>
        <Input
          type="text"
          border="1px"
          borderColor="#C5C6CA"
          bg="white"
          placeholder="Usuário"
          mb=".5rem"
          size="sm"
        />
        <Input
          type="password"
          border="1px"
          borderColor="#C5C6CA"
          bg="white"
          placeholder="Senha"
          mb="1rem"
          size="sm"
        />
        <Button
          w="100%"
          bg="blue.500"
          color="white"
          size="sm"
          _hover={{
            bg: "white",
            color: "blue.500"
          }}
          onClick={()=> router.push("/home")}
        >
          Login
        </Button>
      </Center>
      <Center
        bg="blue.100"
        flexDirection="column"
        borderRadius="8px"
        flex="1"
        py="1.25rem"
        mx={["1rem", "1rem", "0"]}
      >
        <Text
          fontSize=".87rem"
          lineHeight=".88rem"
        >
          Ainda não é membro?
        </Text>
        <Text as="b"
          fontSize=".75rem"
          lineHeight="1.03rem"
          color="blue.500"
        >
          <Link href="/home">ENTRAR JÁ</Link>
        </Text>
      </Center>
    </Flex>
  )
}