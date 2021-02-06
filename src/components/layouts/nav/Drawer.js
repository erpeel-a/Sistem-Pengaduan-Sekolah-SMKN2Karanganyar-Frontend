import { useRef } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Navlinks from './Navlinks';
import Navbutton from './Navbutton';

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon w={7} h={7} />}
        bgColor="white"
        onClick={onOpen}
      />
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent py={10}>
            <DrawerCloseButton />
            <DrawerBody>
              <Navlinks />
              <Navbutton />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </Box>
  );
};

export default Drawer;
