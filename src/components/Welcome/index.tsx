import { Flex, Stack, Text, FlexProps, HStack } from "@chakra-ui/react";
import { StatusBar } from "./StatusBar";
type WelcomeProps = FlexProps;

export function Welcome({ ...rest }: WelcomeProps) {
  return (
    <Flex
      bg="white"
      p="1.5rem"
      flexDir="column"
      {...rest}
    >
      <Stack mb="2rem">
        <Text
          fontSize="1.75rem"
          lineHeight="2.07rem"
        >
          Bem Vindo(a), Welton Lima
        </Text>
        <Text
          fontSize=".75rem"
          lineHeight=".91rem"
          color="gray.300"
        >
          <b>Sorte de hoje:</b> O melhor profeta do futuro é o passado
        </Text>
      </Stack>
      <HStack spacing="1.5rem">
        <StatusBar src="assets/recado.svg" count={0} >
          Recados
        </StatusBar>
        <StatusBar src="assets/camera.svg" count={0} >
          Fotos
        </StatusBar>
        <StatusBar src="assets/video.svg" count={0} >
          Vídeos
        </StatusBar>
        <StatusBar src="assets/star.svg" count={0} >
          Fãs
        </StatusBar>
        <StatusBar src="assets/email.svg" count={0} >
          Mensagens
        </StatusBar>
        <StatusBar src="assets/smile.svg" count={0} bar={true}>
          Confiável
        </StatusBar>
        <StatusBar src="assets/cube.svg" count={0} bar={true}>
          Legal
        </StatusBar>
        <StatusBar src="assets/heart.svg" count={0} bar={true}>
          Sexy
        </StatusBar>
      </HStack>
    </Flex>
  )
}