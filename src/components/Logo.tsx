import { Box, Heading, Stack, Text, BoxProps } from "@chakra-ui/react";
type LogoProps = BoxProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <Box
      bg="white"
      py={["2.31rem","2.31rem","7.25rem"]}
      borderRadius="8px"
      m={["1rem","1rem","0 .75rem 0 0"]}
      textAlign="center"
      flex="1"
      {...rest}
    >
      <Heading color="#D81D99" fontSize="5xl" mb="1.87rem">
        Orkut
      </Heading>
      <Stack
        fontSize=".75rem"
        lineHeight=".88rem"
        spacing={[".75rem",".75rem",".31rem"]}
        mx="2.5rem"
      >
        <Text>
          <Text as="b" color="#D81D99">
            Conecte-se aos
          </Text> seus amigos e familiares usando recados e mensagens instantâneas
        </Text>
        <Text>
          <Text as="b" color="#D81D99">
            Conheça
          </Text> novas pessoas através de amigos de seus amigos e comunidades
        </Text>
        <Text>
          <Text as="b" color="#D81D99">
            Compartilhe
          </Text> seus vídeos, fotos e paixões em um só lugar
        </Text>
      </Stack>
    </Box>
  )
}