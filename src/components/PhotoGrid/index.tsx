import { Box, Flex, FlexProps, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { PhotoIcon } from "./PhotoIcon";
interface MyFriendsProps extends FlexProps {
  title: string;
  count: number;
}

export function PhotoGrid({
  title, count, ...rest
}: MyFriendsProps) {
  return (
    <Flex
      bg="white"
      p="1rem 1.25rem 1.5rem 1.25rem"
      flexDir="column"
      {...rest}
    >
      <Text
        lineHeight="1.18rem"
        fontWeight="700"
      >
        {title}
        <Text
          as="span"
          color="blue.500"
        > ({count})</Text>
      </Text>
      <SimpleGrid spacing=".62rem" columns={3} m="1.25rem 0 2.06rem 0">
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
        <PhotoIcon src="assets/avatar.svg">
          Welton <br /> Lima
        </PhotoIcon>
      </SimpleGrid>
      <Text
        fontWeight="700"
        fontSize=".87rem"
        lineHeight="1.06rem"
        color="blue.500"
      >
        Ver todos
      </Text>
    </Flex>
  )
}