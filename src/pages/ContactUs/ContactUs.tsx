import { IconBrandAdobe, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconBrandYoutube, IconSend } from '@tabler/icons-react';
import {
    ActionIcon,
    Button,
    Group,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
    Title,
} from '@mantine/core';
import { ContactIconsList } from './components/ContactUsIcons';
import classes from './ContacUs.module.css';

const social = [IconBrandFacebook, IconBrandWhatsapp];

export function ContactUs() {
    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
            <Icon size={100} stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Nous contacter</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        Pour plus d'informations, remplissez le formulaire de contact et nous vous recontacterons.
                    </Text>

                    <ContactIconsList />

                    <Group mt="xl">{icons}</Group>
                </div>

                <div className={classes.form}>
                    <TextInput
                        label="Courrier"
                        placeholder="votre@email.com"
                        required
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Nom ou raison social"
                        placeholder="Votre nom"
                        mt="md"
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Votre Message"
                        placeholder="Message"
                        maxRows={10}
                        minRows={5}
                        autosize
                        mt="md"
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={classes.control} rightSection={<IconSend size={14} />} radius="md" color="#a333c8">
                            Envoyer
                        </Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
}