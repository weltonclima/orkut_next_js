import { Box, Flex, Img, Text, BoxProps } from "@chakra-ui/react";
interface StatusBarProps extends BoxProps {
  children: string;
  src: string;
  count: number;
  bar?: boolean;
}

export function StatusBar({
  children, src, count, bar = false, ...rest
}: StatusBarProps) {
  return (
    <Box
      {...rest}
    >
      <Text
        lineHeight=".88rem"
        fontSize=".75rem"
        fontStyle="italic"
        mb=".18rem"
      >
        {children}
      </Text>
      <Flex>
        {bar ?
          <>
            <Img src={src} w="16px" mr=".25rem" />
            <Img src={src} w="16px" mr=".25rem" />
            <Img src={src} w="16px" />
          </>
          :
          <>
            <Img src={src} w="16px" mr=".25rem" />
            <Text
              lineHeight="1.06rem"
              fontSize=".87rem"
              fontStyle="italic"
              color="blue.500"
            >
              {count}
            </Text>
          </>
        }
      </Flex>
    </Box>
  )
}