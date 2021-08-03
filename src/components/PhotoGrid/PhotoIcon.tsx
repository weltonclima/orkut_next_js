import { Box, Flex, Img, Text, BoxProps, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
interface PhotoIconProps extends BoxProps {
  children: ReactNode;
  src: string;
}

export function PhotoIcon({
  children, src, ...rest
}: PhotoIconProps) {
  return (
    <Box position="relative" {...rest}>
      <Img src={src} w="84px" h="102px" fallbackSrc="/assets/avatar.svg" borderRadius="8px" />
      <Flex
        position="absolute"
        align="flex-end"
        borderRadius="8px"
        p="0 0 .62rem .43rem"
        bottom="0"
        w="84px"
        h="51px"
        bgGradient="linear(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))"
      >
        <Text
          fontWeight="500"
          fontSize=".62rem"
          lineHeight=".74rem"
          color="white"
        >
          {children}
        </Text>
      </Flex>
    </Box>
  )
}