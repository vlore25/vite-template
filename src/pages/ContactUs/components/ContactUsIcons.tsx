import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactUsIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactUsIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'contact@lesfouleesavrillaises.fr', icon: IconAt },
  { title: 'Telephone', description: '+49 (800) 335 35 35', icon: IconPhone },
  { title: 'Adresse', description: 'Espace Delaune - Rond point du Général de Gaulle 49240 Avrillé PAYS DE LA LOIRE FRANCE', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactUsIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}