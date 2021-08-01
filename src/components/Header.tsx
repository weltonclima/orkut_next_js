import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex, Heading,
  Input, InputGroup, InputLeftElement, Text, FlexProps, Img, useBreakpoint, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, IconButton, Icon, Divider, List, ListItem, HStack
} from "@chakra-ui/react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
type HeaderProps = FlexProps;

export function Header({ ...rest }: HeaderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })


  return (
    <Flex
      w="100%"
      maxW="1110px"
      justify="space-between"
      align="center"
      as="header"
      py=".43rem"
      mx={["1rem", "1rem", "1rem", "0"]}
      {...rest}
    >
      {!isDrawerSidebar ?
        <>
          <Center>
            <Box p=".50rem .80rem" >
              <Img src="assets/orkut_logo.png" w="3.5rem" />
            </Box>
            <Breadcrumb
              separator="|"
              color="#5292C1"
              mx="1.5rem"
              fontSize=".75rem"
              lineHeight=".88rem"
            >
              <BreadcrumbItem isCurrentPage>
                <Link href="#" passHref>
                  <BreadcrumbLink color="white"  >Home</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="#">Perfil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="#">Página de recados</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="#">Amigos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="#">Comunidades</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb >
          </Center>
          <Center flexDir="row">
            <Breadcrumb
              separator="|"
              color="#5292C1"
              mx="1.5rem"
              fontSize=".75rem"
              lineHeight=".88rem"
            >
              <BreadcrumbItem >
                <Text
                  color="blue.700"
                  fontSize=".87rem"
                  fontWeight="700"
                  lineHeight="1.03rem"
                >
                  welton.c.lima@gmail.com
                </Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="#">Sair</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box>
              <InputGroup >
                <InputLeftElement children={<IoSearchSharp size="20" color="white" />} />
                <Input
                  borderRadius="34px"
                  border="0"
                  color="white"
                  _placeholder={{ color: "white" }}
                  placeholder="Pesquisar no Orkut"
                  type="text"
                  bg="blue.600"
                />
              </InputGroup>
            </Box>
          </Center>
        </>
        :
        <>
          <Box p=".50rem .80rem" >
            <Img src="assets/orkut_logo.png" w="3.5rem" />
          </Box>
          <IconButton
            aria-label="Open navigation"
            color="white"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
            <DrawerOverlay>
              <DrawerContent bg="blue.200">
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

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
                  //lineHeight="134.53%"
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
                  <List spacing="1.67rem">
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
                  <List spacing="1.67rem">
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
        </>

      }

    </Flex>
  )
}