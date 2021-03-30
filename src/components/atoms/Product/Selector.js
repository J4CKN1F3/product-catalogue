import React from "react";
import { Button } from "@chakra-ui/react";
import { IoAdd, IoCheckmark } from "react-icons/io5";

function Selector({ added, selectHandler, ProductId }) {
  return (
    <>
      <Button
        pos="absolute"
        rounded="full"
        ml="2"
        mt="2"
        colorScheme="facebook"
        bg={added ? "facebook.500" : "white"}
        opacity={added ? "100%" : "40%"}
        p="0"
        size="sm"
        fontSize="md"
        variant={added ? "solid" : "outline"}
        onClick={() => selectHandler()}
        _hover={{ opacity: !added && "100%" }}
      >
        {added ? <IoCheckmark /> : <IoAdd />}
      </Button>
    </>
  );
}

export default Selector;
