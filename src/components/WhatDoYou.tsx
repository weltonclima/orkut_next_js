import { Button, Flex, FlexProps, HStack, Text } from "@chakra-ui/react";
type WhatDoYouProps = FlexProps;

export function WhatDoYou({ ...rest }: WhatDoYouProps) {
  return (
    <Flex
      {...rest}
      bg="white"
      p="1.5rem"
      flexDir="column"
    >
      <Text
        fontSize="1.12rem"
        lineHeight="1.33rem"
        mb="1.18rem"
      >
        O que você deseja fazer?
      </Text>
      <HStack spacing="1rem" my="1rem">
        <Button
          bg="blue.300"
          color="white"
          fontSize=".75rem"
          lineHeight=".87rem"
          fontWeight="normal"
          _hover={{ color: "blue.300", bg: "white" }}
        >
          Criar comunidade
        </Button>
        <Button
          bg="blue.200"
          color="blue.500"
          fontSize=".75rem"
          lineHeight=".87rem"
          fontWeight="normal"
          _hover={{ color: "blue.500", bg: "white" }}
        >
          Escrever depoimento
        </Button>
        <Button
          bg="blue.200"
          color="blue.500"
          fontSize=".75rem"
          lineHeight=".87rem"
          fontWeight="normal"
          _hover={{ color: "blue.500", bg: "white" }}
        >
          Deixar um scrap
        </Button>
      </HStack>
      <Button
        bg="#F4F4F4"
        borderRadius="32px"
        fontSize=".75rem"
        lineHeight=".88rem"
        fontWeight="normal"
        _hover={{ bg: "white" }}
      >
        Qual vai ser o nome da sua comunidade?
      </Button>
    </Flex>
  )
}