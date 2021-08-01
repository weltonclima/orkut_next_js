
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';


export default function Home() {
  return (
    <>
      <Head>
        <title>Orkut | Início</title>
      </Head>
      <Flex
        justify="center"
        bg="#5C9ECF"
        w="100%"
        maxW="100vw"
      >
        <Header/>
      </Flex>
    </>
  )
}