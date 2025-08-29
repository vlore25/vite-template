import { IconChevronDown, IconLogin2 } from '@tabler/icons-react';
import { Burger, Button, Center, Container, Group, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';
import logoURL from '../../assets/logo/logo.png';

const links = [
  { link: '/accueil', label: 'Accueil' },
  {
    link: '#1',
    label: 'Galerie',
    links: [
      { link: '/evenements', label: 'Evenements' },
      { link: '/presse', label: 'Presse' },
    ],
  },
  { link: '/entrainements', label: 'Entraînements' },
  { link: '/about', label: 'Nous connaître' },
  { link: '/contact', label: 'Contact' },
];

export function NavigationBar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item component={Link} to={item.link} key={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Container size="md" p={10}>
      <div className={classes.inner}>
        <Link to="/">
          <Image src={logoURL} w={200} />
        </Link>
        <Group gap={5} visibleFrom="sm">
          {items}
          <Button leftSection={<IconLogin2 size={14} />} variant="filled" color="#a333c8">
            Espace adherant
          </Button>
        </Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      </div>
    </Container>
  );
}