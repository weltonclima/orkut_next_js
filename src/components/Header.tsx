import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex,
  Input, InputGroup, InputLeftElement, Text, FlexProps, Img,
  useBreakpointValue, useDisclosure, IconButton, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { Profile } from "./Profile";
type HeaderProps = FlexProps;

export function Header({ ...rest }: HeaderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isDrawerSidebar = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100vw"
      justify="center"
      bg="#5C9ECF"
    >
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
        <Box p=".50rem .80rem" >
          <Img src="assets/orkut_logo.png" w="3.5rem" />
        </Box>
        {isDrawerSidebar ?
          <>
            <Center>
              <Breadcrumb
                separator="|"
                color="#5292C1"
                mx="1.5rem"
                fontSize=".85rem"
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
                fontSize=".85rem"
                lineHeight=".88rem"
              >
                <BreadcrumbItem >
                  <Text
                    color="blue.700"
                    fontSize=".97rem"
                    fontWeight="700"
                    lineHeight="1.03rem"
                  >
                    welton.c.lima@gmail.com
                  </Text>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink color="white" href="/">Sair</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box>
                <InputGroup >
                  <InputLeftElement>
                    <IoSearchSharp size="20" color="white" />
                  </InputLeftElement>
                  <Input
                    w="13rem"
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
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody>
                    <Profile />
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        }
      </Flex>
    </Flex>
  )
}