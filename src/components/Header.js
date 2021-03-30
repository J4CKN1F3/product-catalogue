import { Heading, Container } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading
          my="4"
          style={{ color: "#605BA6" }}
          fontFamily="serif"
          fontWeight="normal"
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          2021 spring& summer SHISEI STOCK BOOK
        </Heading>
      </Container>
    </>
  );
}

export default Header;
