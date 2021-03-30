import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";

function ImageFallback() {
  return (
    <Flex justify="center" alignItems="center">
      <Skeleton w="full" h="40%">
        <div>...</div>
        <div>...</div>
        <div>...</div>
        <div>...</div>
      </Skeleton>
    </Flex>
  );
}

export default ImageFallback;
