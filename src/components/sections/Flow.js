import { Flex, Grid, Heading } from '@chakra-ui/react';
import { FiLogIn, FiEdit2, FiSend } from 'react-icons/fi';

import Card from '../layouts/Card';

const Flow = () => {
  const cards = [
    {
      icon: <FiLogIn />,
      title: 'Masuk / Login',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
    {
      icon: <FiEdit2 />,
      title: 'Tulis Pengaduan',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
    {
      icon: <FiSend />,
      title: 'Kirim Pengaduan',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
    {
      icon: <FiLogIn />,
      title: 'Masuk / Login',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
    {
      icon: <FiEdit2 />,
      title: 'Tulis Pengaduan',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
    {
      icon: <FiSend />,
      title: 'Kirim Pengaduan',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam asperiores iure obcaecati officiis harum corporis.`,
    },
  ];

  return (
    <Flex
      id="alur"
      px={{ base: 5, md: 20, lg: 40 }}
      py={10}
      flexDir="column"
      alignItems="center"
      bgColor="gray.100"
    >
      <Heading color="blue.600" mb={8} textAlign="center">
        Bagaimana Alur Pengaduan ?
      </Heading>
      <Grid
        templateColumns={{
          sm: '1fr',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        gap={8}
      >
        {cards.map((card, i) => (
          <Card
            key={i}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Flow;
