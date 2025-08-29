import { IconCake, IconCalendarBolt, IconCookie, IconGauge, IconHourglassEmpty, IconUser, IconUsersGroup } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Features.module.css';

const mockdata = [
  {
    number: '56',
    title: 'Membres actifs',
    description:
      'Rejoignez une communauté de 56 coureurs passionnés ! Que vous cherchiez à partager des kilomètres, à trouver la motivation dans le groupe ou simplement à profiter de sorties conviviales, vous êtes au bon endroit. Ensemble, chaque foulée est plus légère.',
    icon: IconUsersGroup,
  },
  {
    number: '14',
    title: 'Evenements season 2024-2025',
    description:
      'Préparez vos baskets ! Cette saison, 14 rendez-vous incontournables vous attendent. Des courses officielles dans les rues du Mans aux entraînements thématiques en groupe, en passant par des moments conviviaux, il y en a pour tous les goûts et tous les niveaux. Consultez le calendrier et ne manquez rien !',
    icon: IconCalendarBolt,
  },
  {
    number: '10',
    title: 'Années de existence',
    description:
      '10 bougies pour notre club, ça se fête ! Merci à chaque coureur, d’hier et d’aujourd’hui, d’avoir contribué à cette formidable aventure. Célébrons ensemble le chemin parcouru et laissons notre passion nous guider pour les 10 prochaines années. Le meilleur reste à venir !',
    icon: IconCake,
  },
];

export function Features() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
    <Group>
      <feature.icon size={50} stroke={1.5} color='#a333c8' />
      <Title order={1} className={classes.title} ta="center">
        {feature.number}
      </Title>
    </Group>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Nos Chiffres:
      </Title>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}