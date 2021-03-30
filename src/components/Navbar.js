import { useState } from "react";
import { Container, Flex, Spacer, Box, Stack } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import SearchBar from "./atoms/Navbar/SearchBar";
import CategorySelect from "./atoms/Navbar/CategorySelect";
import PriceFilter from "./atoms/Navbar/PriceFilter";
import Print from "./atoms/Navbar/Print";
import useWindowScroll from "../lib/hooks/useWindowScroll";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const scrolled = useWindowScroll();

  return (
    <>
      <Box
        w="full"
        zIndex="19"
        position={scrolled ? "fixed" : "sticky"}
        top={scrolled ? "0" : "auto"}
      >
        <Container maxW="container.xl" my={scrolled ? "0" : "6"}>
          <Box
            p="4"
            bg="gray.200"
            borderRadius="lg"
            shadow={scrolled ? "lg" : "sm"}
          >
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justify="space-between"
              alignItems="center"
            >
              {/* MOBILE ONLY */}
              <Box
                fontSize="4xl"
                color="gray.700"
                display={{ md: "none" }}
                alignSelf="flex-end"
                onClick={() => setIsShow(!isShow)}
              >
                <IoMenu />
              </Box>

              <Flex
                flexDir={{ base: "column", lg: "row" }}
                gridGap={{ md: "0", lg: "2" }}
                display={{ base: isShow ? "flex" : "none", md: "flex" }}
              >
                <Stack
                  direction={{ base: "column", md: "row" }}
                  w={{ base: "full", md: "80%", lg: "60%" }}
                  alignItems="center"
                  mb={{ base: "2", lg: "0" }}
                >
                  <SearchBar />
                  <CategorySelect />
                </Stack>
                <PriceFilter />
              </Flex>

              <Spacer />

              <Stack
                mt={{ base: "4", md: "0" }}
                direction="row"
                display={{ base: isShow ? "flex" : "none", md: "flex" }}
              >
                <Print />
              </Stack>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
