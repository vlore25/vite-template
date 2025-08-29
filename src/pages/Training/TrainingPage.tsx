import { IconClock, IconMapPin, IconInfoCircle, IconDirectionsFilled, IconDirections, IconExclamationMark } from '@tabler/icons-react';
import { Container, Flex, Paper, SimpleGrid, Text, ThemeIcon, Title, Stack, Divider, Table, Group, Space, Image, BackgroundImage, Box } from '@mantine/core';

import classes from './TrainingPage.module.css';
import TrainingHeroImg from '../../assets/img/trainingheroimg.jpg';
//Schedule day data

const trainingInfo = [
  {
    day: 'Lundi',
    hours: '18h30 - 20h00',
    adress: 'Parking du Stade Delaune',
    nota: 'Deux groupes selon le nombre de coureurs',
  },
  {
    day: 'Mercredi',
    hours: '08h45',
    adress: 'Parking de Neto',
    nota: ''
  },
  {
    day: 'Jeudi',
    hours: '18h30 - 20h00',
    adress: 'Parking du Stade Delaune',
    nota: ''
  },
  {
    day: 'Samedi',
    hours: '08h45 - 10h30',
    adress: 'Mairie d’Avrillé',
    nota: ''
  }
];



export function TrainingPage() {

  //Table row for each training day
  const trainingInfoTbody = trainingInfo.map((day) =>
    <Table.Tr key={day.day}>
      <Table.Td><Title className={classes.title}>{day.day}</Title></Table.Td>
      <Table.Td >
        <Group gap='md'>
          <IconClock></IconClock>
          <Text>
            {day.hours}
          </Text>
        </Group>
        <Space h="xs" />
        <Group gap='md'>
          <IconDirections></IconDirections>
          <Text>
            {day.adress}
          </Text>
        </Group>
        <Space h="xs" />
        {day.nota && (
          <Group>
            <IconExclamationMark></IconExclamationMark>
            <Text>{day.nota}</Text>
          </Group>
        )}
      </Table.Td>
    </Table.Tr>
  );

  return (

    <Flex
      direction="row"
      gap="md"
      my={40}
    >
      <Container>
        <BackgroundImage src={TrainingHeroImg} radius="sm"
          h={400}>
          <Title className={classes.title} order={1} ta="center" mb={50}>
            Nos séances d'entraînements
          </Title>
        </BackgroundImage>
      </Container>

      <Container size="lg">
        <Paper>
          <Table horizontalSpacing="xl" verticalSpacing='xs'>
            <Table.Tbody>
              {trainingInfoTbody}
            </Table.Tbody>
          </Table>
        </Paper>
      </Container>
    </Flex>
  );
}