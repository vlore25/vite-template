import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconBrandYoutube, IconMail } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import logoURL from '../../assets/logo/logo.png';
import classes from './Footer.module.css';
import avrillelogo from '../../assets/logo/avrillelogo.png';
const data = [
  {
    title: 'Liens utils',
    links: [
      { label: 'Nous rejoindre', link: '/contact' },
      { label: 'Nous connaître', link: '/about' },
      { label: 'Horaires des entraînements', link: '/entrainements' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text component={Link} to={link.link} key={index} className={classes.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={logoURL} />
          <Text>Espace Delaune - Rond point du Général de Gaulle
                49240 Avrillé
                Pays de la Loire, France</Text>
        </div>
        <div className={classes.logo}>
            <Text>Avec le soutien de</Text>
          <Image src={avrillelogo} />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 lesfouleesavrillaises.fr All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandWhatsapp size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconMail size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}