import React from "react";
import { Flex, Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ResultCount from "./atoms/Result/ResultCount";
import Sort from "./atoms/Result/Sort";

function Result() {
  const products = useSelector((state) => state.products.list);

  return (
    <>
      <Container maxW="container.xl">
        <Flex alignItems="center" justify="space-between">
          <ResultCount count={products.length} />
          <Sort />
        </Flex>
      </Container>
    </>
  );
}

export default Result;
