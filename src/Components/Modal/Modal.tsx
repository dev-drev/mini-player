import {
  Badge,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Song } from "../../types/Globals";

const ModalApp = ({
  cover_image_path,
  likes,
  plays,
  artist_name,
  song_release,
  name,
}: Song) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w={"150px"} justifyContent="center">
      <Image
        onClick={onOpen}
        rounded="md"
        boxSize="80px"
        objectFit="cover"
        src={cover_image_path}
        alt="Image"
        className="artwork"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor="blackAlpha.400" />
        <ModalContent w="80%" h="60% , 100%">
          <ModalHeader>
            <b>{artist_name}</b>- {name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Image
              rounded="md"
              objectFit="cover"
              src={cover_image_path}
              alt="Image"
              className="artwork"
            />
            <Center></Center>
            <Badge>{song_release ? song_release.slice(0, 10) : ""}</Badge>
            <StatGroup>
              <Stat>
                <StatLabel>Likes</StatLabel>
                <StatNumber>{likes}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Plays</StatLabel>
                <StatNumber>{plays}</StatNumber>
              </Stat>
            </StatGroup>
          </ModalBody>

          <ModalFooter w="full" display={"flex"}>
            <Button w="full" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button color="white" w="full" bg="#177f67f5">
              Buy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ModalApp;
