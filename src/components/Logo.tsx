import { Box, Heading, Stack, Text, BoxProps, Img, Center } from "@chakra-ui/react";
type LogoProps = BoxProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <Box
      bg="white"
      py={["2.31rem", "2.31rem", "7.25rem"]}
      borderRadius="8px"
      m={["1rem", "1rem", "0 .75rem 0 0"]}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      flex="2"
      {...rest}
    >
      <Center mb="1rem">
        <Img src="assets/orkut_logo.png" />
      </Center>
      <Stack
        fontSize=".75rem"
        lineHeight=".88rem"
        spacing={[".75rem", ".75rem", ".31rem"]}
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