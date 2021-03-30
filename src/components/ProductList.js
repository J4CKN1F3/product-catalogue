import React from "react";
import { useSelector } from "react-redux";
import { Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";
import Product from "./Product";

function ProductList() {
  const products = useSelector((state) => state.products.list);

  return (
    <>
      <Container maxW="container.xl" my="4">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
          {products.map((item) => (
            <LazyLoad key={item.ProductId} placeholder={<Spinner />}>
              <Product meta={item} />
            </LazyLoad>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default ProductList;
