import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import {
  useDisclosure,
  Image as CImage,
  Text,
  Heading,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Preview from "./atoms/Product/Preview";
import ImageFallback from "./atoms/Product/ImageFallback";
import Selector from "./atoms/Product/Selector";
import { addToPrint, removeFromPrint } from "../lib/redux/productsSlice";

function Product({ meta }) {
  const {
    Image,
    Name,
    Price,
    MinimumOrder,
    ProductCode,
    ProductVariant,
    Size,
    Material,
    bigImage,
    ct,
    ProductId,
  } = meta;

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.products.selected);
  const allProducts = useSelector((state) => state.products.allList);

  // Mencari index product saat ini untuk mengetahui status terselect
  const index = allProducts.findIndex((item) => {
    return item.ProductId === ProductId;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [added, setAdded] = useState(allProducts[index].selected);

  // UseEffect untuk mengontrol status seleksi dan clear all
  useEffect(() => {
    if (selected === 0) {
      setAdded(false);
    }

    setAdded(allProducts[index].selected);
  }, [selected, added, allProducts, index]);

  const selectHandler = () => {
    if (!added) {
      dispatch(addToPrint(meta));
    }
    if (added) {
      dispatch(removeFromPrint(meta));
    }
    setAdded(!added);
  };

  return (
    <>
      <Flex
        flexDir="column"
        border="1px"
        borderColor="gray.300"
        borderRadius="lg"
        h="full"
      >
        <LazyLoad placeholder={<ImageFallback />}>
          <Selector
            added={added}
            selectHandler={selectHandler}
            ProductId={ProductId}
          />
          <CImage
            src={Image}
            alt={ProductCode + ProductVariant}
            borderTopRadius="lg"
            cursor="pointer"
            fallback={<ImageFallback />}
            onClick={onOpen}
          />
        </LazyLoad>

        <Preview isOpen={isOpen} onClose={onClose} imgUrl={bigImage} />

        <Flex flexDir="column" align="start" spacing="8" m="4">
          <Box>
            <Heading fontSize="lg" fontWeight="bold">
              {ProductCode + ProductVariant}
            </Heading>
            <Heading fontSize="md" color="gray.600" fontWeight="semibold">
              {Name}
            </Heading>
          </Box>

          <VStack alignItems="start" fontSize="sm" spacing="0" mt="4">
            <Text>Price_ ¥{Price}</Text>
            <Text>
              CT_ {ct} ({MinimumOrder})
            </Text>
            <Text>Size_ {Size}</Text>
            <Text>Size Adjustment - 2cm Available</Text>
            <Text>Material_ {Material}</Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export default Product;
