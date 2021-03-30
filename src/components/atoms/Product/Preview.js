import React from "react";
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import ImageFallback from "./ImageFallback";

function Preview({ isOpen, onClose, imgUrl }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              mx="auto"
              src={imgUrl}
              boxSize="lg"
              alt="107523BR"
              borderRadius="lg"
              fallback={<ImageFallback />}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Preview;
