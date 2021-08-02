import {
  Box, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerOverlay, Flex, Heading, HStack, Img, List, ListItem, Text
} from "@chakra-ui/react";

interface LoginDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDrawer({
  isOpen, onClose
}: LoginDrawerProps) {
  return (

    <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent bg="blue.200">
          <DrawerCloseButton />
          <DrawerBody
            fontSize="1.3rem"
            lineHeight="1.6rem"
            color="blue.500"
          >
            <Center mb="1.43rem">
              <Img src="assets/avatar.svg" w="14.43rem" />
            </Center>
            <Box
              color="gray.300"
              fontSize="1.2rem"
            >
              <Heading
                fontSize="1.62rem"
                lineHeight="1.93rem"
                color="blue.500"
                mb=".62rem"
              >
                Welton Lima
              </Heading>
              <Text>
                masculino,<br />
                solteiro(a)<br />
                Brasil
              </Text>
            </Box>
            <Divider border="1px" borderColor="gray.300" my="1rem" />
            <List spacing=".5rem">
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/user.svg" />
                  <Flex flex="1" pr="1rem" justify="space-between">
                    <Text>Perfil</Text>
                    <Text>editar</Text>
                  </Flex>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/recado.svg" />
                  <Text>Recados</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/camera.svg" />
                  <Text>Fotos</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/video.svg" />
                  <Text>Videos</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/sunny.svg" />
                  <Text>Depoimentos</Text>
                </HStack>
              </ListItem>
            </List>
            <Divider border="1px" borderColor="gray.300" my="1rem" />
            <HStack spacing="1rem">
              <Text></Text>
            </HStack>
            <Heading
              fontSize="1.5rem"
              lineHeight="1.77rem"
              color="gray.300"
              mb="1.62rem"
            >
              Apps
            </Heading>
            <HStack spacing="1rem">
              <Img src="assets/plus.svg" />
              <Text>Adicionar apps</Text>
            </HStack>
            <Divider border="1px" borderColor="gray.300" my="1rem" />
            <List spacing=".5rem">
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/list.svg" />
                  <Text>Listas</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/atualizar.svg" />
                  <Text>Atualizações</Text>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing="1rem">
                  <Img src="assets/wrench.svg" />
                  <Text>Configurações</Text>
                </HStack>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}