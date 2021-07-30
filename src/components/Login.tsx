import { Button, Center, Input, Text, FlexProps, Flex } from "@chakra-ui/react";
type LoginProps = FlexProps;

export function Login({ ...rest }: LoginProps) {
  return (
    <Flex flex="0.5" textAlign="center" flexDir="column" {...rest}>
      <Center
        bg="blue.100"
        borderRadius="8px"
        flexDirection="column"
        flex="1"
        m={["0 1rem 1rem 1rem","0 1rem 1rem 1rem","0 0 .75rem 0"]}
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
          mb="1rem"
        />
        <Button
          w="100%"
          bg="blue.500"
          color="white"
          _hover={{
            bg: "white",
            color: "blue.500"
          }}
        >
          Login
        </Button>
      </Center>
      <Center
        bg="blue.100"
        flexDirection="column"
        borderRadius="8px"
        flex="0.5"
        py="1.25rem"
        mx={["1rem","1rem","0"]}
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
          ENTRAR JÁ
        </Text>
      </Center>
    </Flex>
  )
}