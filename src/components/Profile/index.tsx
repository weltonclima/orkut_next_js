import {
  Box, Center, Divider, Flex, Heading,
  HStack, Img, List, Text, FlexProps
} from "@chakra-ui/react";
import { ListItem } from "./ListItem";
type ProfileProps = FlexProps;

export function Profile({ ...rest }: ProfileProps) {
  return (
    <Flex
      bg="white"
      flexDir="column"
      fontSize={["1.3rem", "1.3rem", "1.3rem", ".75rem"]}
      lineHeight={["1.6rem", "1.6rem", "1.6rem", ".88rem"]}
      color="blue.500"
      {...rest}
    >
      <Center mb={["1.43rem", "1.43rem", "1.43rem", "1.25rem"]}>
        <Img src="assets/avatar.svg" w={["14.43rem", "14.43rem", "14.43rem", "7.56rem"]} />
      </Center>
      <Box
        color="gray.300"

      >
        <Heading
          fontSize={["1.62rem", "1.62rem", "1.62rem", ".87rem"]}
          lineHeight={["1.93rem", "1.93rem", "1.93rem", "1.03rem"]}
          color="blue.500"
          mb={[".62rem", ".62rem", ".62rem", ".31rem"]}
        >
          Welton Lima
        </Heading>
        <Text  >
          masculino,<br />
          solteiro(a)<br />
          Brasil
        </Text>
      </Box>
      <Divider border="1px" borderColor="gray.300" my={["1rem", "1rem", "1rem", ".87rem"]} />
      <List spacing=".5rem">
        <ListItem
          src="assets/user.svg"
          titleOne="Perfil"
          titleTwo="editar"
        />
        <ListItem
          src="assets/recado.svg"
          titleOne="Recados"
        />
        <ListItem
          src="assets/camera.svg"
          titleOne="Fotos"
        />
        <ListItem
          src="assets/video.svg"
          titleOne="Videos"
        />
        <ListItem
          src="assets/sunny.svg"
          titleOne="Depoimentos"
        />
      </List>
      <Divider border="1px" borderColor="gray.300" my={["1rem", "1rem", "1rem", ".87rem"]} />
      <Heading
        fontSize={["1.5rem", "1.5rem", "1.5rem", ".81rem"]}
        lineHeight={["1.77rem", "1.77rem", "1.77rem", ".96rem"]}
        color="gray.300"
        mb={["1.62rem", "1.62rem", "1.62rem", ".87rem"]}
      >
        Apps
      </Heading>
      <HStack spacing={["1rem", "1rem", "1rem", ".5rem"]}>
        <Img src="assets/plus.svg" w={["30px", "30px", "30px", "16px"]} />
        <Text>Adicionar apps</Text>
      </HStack>
      <Divider border="1px" borderColor="gray.300" my={["1rem", "1rem", "1rem", ".87rem"]} />
      <List spacing=".5rem">
        <ListItem
          src="assets/list.svg"
          titleOne="Listas"
        />
        <ListItem
          src="assets/atualizar.svg"
          titleOne="Atualizações"
        />
        <ListItem
          src="assets/wrench.svg"
          titleOne="Configurações"
        />
      </List>
    </Flex>
  )
}