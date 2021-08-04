import { Box, Flex, Grid, GridItem, HStack, SimpleGrid, Stack, useBreakpointValue, Wrap, WrapItem } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { PhotoGrid } from '../components/PhotoGrid';
import { Profile } from '../components/Profile';
import { Welcome } from '../components/Welcome';
import { WhatDoYou } from '../components/WhatDoYou';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
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
          w="100%" maxW="1110px" my="1.5rem" justify="center" align="center" >
          {isWideVersion ? (
            <Flex>
              <Profile
                p="1rem"
                w="160px"
                borderRadius="8px"
              />
              <Stack mx=".62rem" spacing=".62rem">
                <Welcome
                  borderRadius="8px"
                  w={["344px", "344px", "344px", "344px", "618px"]}
                />
                <WhatDoYou
                  borderRadius="8px"
                  w={["344px", "344px", "344px", "344px", "618px"]}
                />
              </Stack>
              <Stack spacing=".62rem">
                <PhotoGrid
                  title="Meus Amigos"
                  count={6}
                  borderRadius="8px"
                  w="312px"
                />
                <PhotoGrid
                  title="Minhas Comunidades"
                  count={12}
                  borderRadius="8px"
                  w="312px"
                />
              </Stack>
            </Flex>
          ) : (
            <Flex flexDir="column">
              <Stack m="0 .62rem .62rem .62rem" spacing=".62rem">
                <Welcome
                  borderRadius="8px"
                  //w={["344px", "344px", "344px", "344px", "618px"]}
                />
                <WhatDoYou
                  borderRadius="8px"
                  //w={["344px", "344px", "344px", "344px", "618px"]}
                />
              </Stack>
              <Stack mx=".62rem" spacing=".62rem">
                <PhotoGrid
                  title="Meus Amigos"
                  count={6}
                  borderRadius="8px"
                  //w="312px"
                />
                <PhotoGrid
                  title="Minhas Comunidades"
                  count={12}
                  borderRadius="8px"
                  //w="312px"
                />
              </Stack>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  )
}