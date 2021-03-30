import { useRef, useState } from "react";
import {
  Image,
  Flex,
  VStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import loadImage from "image-promise";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { IoTrash } from "react-icons/io5";
import { removeFromPrint } from "../../../lib/redux/productsSlice";

function PrintDrawer({ printItems, isOpen, onClose, btnRef, dispatch }) {
  const [isLoading, setIsLoading] = useState(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const printNow = async () => {
    const image1 = printItems.map((item) => {
      return item.Image;
    });
    console.log(image1);

    return loadImage(image1)
      .then(function (allImgs) {
        console.log(allImgs.length, "images loaded!", allImgs);
      })
      .catch(function (err) {
        console.error("One or more images have failed to load :(");
        console.error(err.errored);
        console.info("But these loaded fine:");
        console.info(err.loaded);
      });
  };

  return (
    <Drawer
      isFullHeight={false}
      size="sm"
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Print Preview</DrawerHeader>

          <DrawerBody maxH="70%">
            <SimpleGrid
              mx="2"
              my="4"
              w="full"
              columns={4}
              spacing={4}
              ref={componentRef}
            >
              {printItems.map((item) => (
                <Flex
                  border="2px"
                  borderRadius="md"
                  flexDir="column"
                  gridGap="2"
                  key={item.ProductId}
                >
                  <Image
                    boxSize="min"
                    w="full"
                    borderTopRadius="md"
                    src={item.Image}
                  />
                  <HStack px="2">
                    <VStack w="full" align="start">
                      <Text fontSize="lg" fontWeight="semibold">
                        {item.ProductId}
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        {item.Name}
                      </Text>
                    </VStack>
                    <Button
                      hidden={isLoading}
                      colorScheme="red"
                      variant="outline"
                      bg="white"
                      onClick={() => dispatch(removeFromPrint(item))}
                    >
                      <IoTrash />
                    </Button>
                  </HStack>
                  <VStack
                    p="2"
                    alignItems="start"
                    fontSize="sm"
                    spacing="0"
                    mt="2"
                  >
                    <Text>Price_ ¥{item.Price}</Text>
                    <Text>
                      CT_ {item.ct} ({item.MinimumOrder})
                    </Text>
                    <Text>Size_ {item.Size}</Text>
                    <Text>Size Adjustment - 2cm Available</Text>
                    <Text>Material_ {item.Material}</Text>
                  </VStack>
                </Flex>
              ))}
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <ReactToPrint
              onBeforeGetContent={() => {
                setIsLoading(true);
              }}
              onBeforePrint={printNow}
              trigger={() => (
                <Button
                  isLoading={isLoading}
                  onClick={handlePrint}
                  colorScheme="blue"
                >
                  Print Now
                </Button>
              )}
              content={() => componentRef.current}
              onAfterPrint={() => {
                setIsLoading(false);
              }}
            />
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default PrintDrawer;
