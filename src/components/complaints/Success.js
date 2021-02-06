import { withRouter } from 'react-router-dom';
import {
  Button,
  VStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { ReactComponent as Illustration } from '../../assets/images/success-illustration.svg';

const Success = ({ isOpen, onClose, history }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
    <ModalOverlay />
    <ModalContent>
      <VStack>
        <ModalHeader fontSize={{ base: 'xl', md: '2xl' }}>
          Laporan Berhasil Dikirim!
        </ModalHeader>
        <ModalBody>
          <VStack>
            <Illustration />
            <Text pt={8} textAlign="center" fontSize={{ base: 'md', md: 'lg' }}>
              Silahkan tunggu konfirmasi dari kami melalui email yang kamu
              daftarkan.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              onClose();
              history.push('/');
            }}
          >
            Tutup
          </Button>
        </ModalFooter>
      </VStack>
    </ModalContent>
  </Modal>
);

export default withRouter(Success);
