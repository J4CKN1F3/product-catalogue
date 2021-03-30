import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { IoPrint, IoTrash } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { clearPrint } from "../../../lib/redux/productsSlice";
import PrintDrawer from "../Print/Drawer";

function Print() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const printItems = useSelector((state) => state.products.printItems);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        ref={btnRef}
        bg="white"
        _hover={{ bg: "gray.50" }}
        onClick={onOpen}
        leftIcon={<IoPrint />}
      >
        {" " + printItems.length}
      </Button>

      <PrintDrawer
        dispatch={dispatch}
        printItems={printItems}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />

      {printItems.length !== 0 && (
        <Button
          colorScheme="red"
          variant="outline"
          bg="white"
          leftIcon={<IoTrash />}
          onClick={() => dispatch(clearPrint())}
        >
          Clear
        </Button>
      )}
    </>
  );
}

export default Print;
