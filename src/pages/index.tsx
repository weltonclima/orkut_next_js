import { Box, Button, Center, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Login } from '../components/Login'
import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Orkut</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          flexDir="column"
          w="100%"
          maxW="1110px"
        >
          <Flex mb="1.43rem" flexDir={["column","column","row"]}>
            <Logo/>
            <Login/>
          </Flex>
          <Center
            bg="#BBCDE8"
            borderRadius="8px"
            p={[".87rem 1.12rem",".87rem 1.12rem",".37rem 0"]}
            fontSize=".75rem"
            lineHeight=".88rem"
            mx={["1rem","1rem","0"]}
            textAlign="center"
          >
            <Text>
              © 2020 Orkut.br -
              <Text
                as="span"
                color="blue.500"
              > Sobre o Orkut.br - Centro de segurança - Privacidade - Termos - Contato
              </Text>
            </Text>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}
