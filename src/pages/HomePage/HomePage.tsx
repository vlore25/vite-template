import { Button, Container, List, Overlay, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './HomePage.module.css';
import { IconCheck, IconLogin2, IconTrendingUp3 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Features } from './components/Features';

export function HomePage() {
  return (
    <>
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Le plaisir de courir ensemble !</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Notre association est née d'une amitié entre coureurs à Avrillé. Aujourd'hui, nous cultivons cet esprit de convivialité lors de nos entraînements locaux et nous partageons l'adrénaline des compétitions où que nos foulées nous portent.
          </Text>
        <Button
          component={Link}
          to="/contact"
          className={classes.control}
          rightSection={<IconTrendingUp3 size={14} />}
          variant="filled"
          color="#a333c8"
          radius="xl"
          size="lg"
        >
          Nous contacter
        </Button>
      </Container>
    </div>
    <Features/>
    </>
  );
}