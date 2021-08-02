import {
  Flex, HStack, Img, Text,
  ListItem as ChakraListItem,
  ListItemProps as ChakraListItemProps
} from "@chakra-ui/react";

interface ListItemProps extends ChakraListItemProps {
  src: string;
  titleOne: string;
  titleTwo?: string;
}

export function ListItem({
  src, titleOne, titleTwo = ""
}: ListItemProps) {
  return (
    <ChakraListItem>
      <HStack spacing={["1rem", "1rem", ".5rem"]}>
        <Img src={src} w={["30px", "30px", "16px"]} />
        {!!titleTwo ? (
          <Flex flex="1" pr={["1rem","1rem","0"]} justify="space-between">
            <Text>{titleOne}</Text>
            <Text>{titleTwo}</Text>
          </Flex>
        ) : (
          <Text>{titleOne}</Text>
        )}
      </HStack>
    </ChakraListItem>
  )
}