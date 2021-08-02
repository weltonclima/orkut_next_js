
import { Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Profile } from '../components/Profile';
import { Welcome } from '../components/Welcome';
import { WhatDoYou } from '../components/WhatDoYou';

export default function Home() {
  return (
    <>
      <Head>
        <title>Orkut | Início</title>
      </Head>
      <Flex
        justify="center"
        align="center"
        flexDir="column"
        w="100%"
        maxW="100vw"
      >
        <Header />
        <Flex
          w="100%" maxW="1110px" my="1.5rem"
        >
          <Grid
            templateColumns="repeat(3,1fr)" gap=".62rem"
          >
            <GridItem colSpan={1}>
              <Profile
                p="1rem"
                w="160px"
                borderRadius="8px"
              />
            </GridItem>
            <GridItem colSpan={1} >
              <Stack spacing=".62rem" >
                <Welcome
                  borderRadius="8px"
                  w="618px"
                />
                <WhatDoYou
                  borderRadius="8px"
                  w="618px"
                />
              </Stack>
            </GridItem>
            <GridItem colSpan={1} bg="papayawhip" >1</GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}